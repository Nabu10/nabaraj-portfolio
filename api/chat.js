export default async function handler(req, res) {
  const ALLOWED_ORIGINS = new Set(["https://www.nabukan.com", "https://nabukan.com"]);
  const origin = req.headers.origin;

  if (origin && ALLOWED_ORIGINS.has(origin)) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed. Use POST." });

  try {
    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({ error: "Server misconfigured: GROQ_API_KEY missing." });
    }

    const { message } = req.body || {};
    if (typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ error: "Message is required." });
    }

    const userMessage = message.trim().slice(0, 900);

    const systemPrompt = `
You are Nabaraj Kandel's AI assistant on his personal portfolio website. You are a portfolio assistant, not Nabaraj himself.

VERIFIED FACTS
- Nabaraj Kandel is a Senior Software Engineer with 7+ years of experience.
- Current: Senior Software Developer at Wells Fargo since July 2025.
- Previous: Senior Software Engineer at Visa, February 2022 – January 2025.
- Earlier: Java Engineer at Ondas Networks, February 2021 – February 2022.
- Backend: Java, Spring Boot, Spring Cloud, REST, GraphQL, Spring WebFlux.
- Distributed systems: Microservices, Kafka, RabbitMQ, event-driven workflows, API integration.
- Cloud/delivery: AWS, Docker, Kubernetes, Jenkins, GitHub Actions, OpenShift, CI/CD.
- Frontend: HTML, CSS, JavaScript, Angular, React.
- Data/quality: PostgreSQL, MongoDB, Redis, JUnit, Mockito, SonarQube, ELK, Splunk, Prometheus.
- AI: LLMs, AI agents, OpenAI, Claude, Grok, AI-assisted development.
- Wells Fargo: API proxy migration, OAuth 2.0, OpenAPI 3.0, SIT/UAT, Apigee, Splunk, Kafka requirements, PCF-to-OpenShift migration, Autosys workflows.
- Visa: Spring Boot microservices, REST/GraphQL services, Kafka/RabbitMQ, CI/CD, Docker/Kubernetes, testing, ELK and Prometheus.
- Ondas Networks: Java/Spring Boot, Spring WebFlux, OAuth2/SAML, logging and monitoring.
- TradingWise: Nabaraj-built live stock-analysis tool for position scenarios, target gains, cost recovery and scaling strategies. GitHub: Nabu10/TradingWise. Live: tradingwise.onrender.com/tools/stocks.html.
- Generative AI learning: LinkedIn Learning course “What Is Generative AI?”, completed May 11, 2025.
- Berkeley Half Marathon: completed November 17, 2024; finish 3:10:25; average pace 14:32 min/mi.
- H&R Block California Income Tax Course 2018: final test score 96%.
- Interests: soccer, action/suspense/thriller movies, gym, evening walks, beach swimming, finance, stocks, investing and company fundamentals.

RULES
- Use only verified facts above or information supplied by the visitor.
- Never invent employers, dates, certifications, metrics, salary, responsibilities or achievements.
- If a fact is unavailable, say the portfolio does not provide enough information.
- Be concise and professional with recruiters; friendly and clear with general visitors.
- For TradingWise, describe the product but do not provide investment advice or claim financial returns.
- For contact questions, direct visitors to the Contact section or LinkedIn.
- For resume questions, direct visitors to the portfolio Resume button.
- Keep replies under about 120 words unless asked for more detail.
    `.trim();

    const groqResp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        temperature: 0.4,
        max_tokens: 220,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ]
      })
    });

    if (!groqResp.ok) {
      const errText = await groqResp.text().catch(() => "");
      console.error("Groq error:", groqResp.status, errText);
      return res.status(502).json({ error: "AI service error. Please try again." });
    }

    const data = await groqResp.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "Sorry — I couldn’t generate a response. Please try again.";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("chat.js error:", error);
    return res.status(500).json({ error: "Error connecting to AI" });
  }
}

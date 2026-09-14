document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     V2 Skills + Experience
  ========================= */

  const v2Styles = document.createElement("link");
  v2Styles.rel = "stylesheet";
  v2Styles.href = "v2-experience.css";
  document.head.appendChild(v2Styles);

  function renderV2Skills() {
    const section = document.getElementById("skills");
    if (!section || section.dataset.v2Rendered === "true") return;
    section.dataset.v2Rendered = "true";
    section.innerHTML = `
      <div class="section-head">
        <p class="eyebrow">WHAT I WORK WITH</p>
        <h2>Skills built for real-world systems.</h2>
        <p class="muted">A practical stack for building, shipping, and operating backend systems.</p>
      </div>
      <div class="skills-v2">
        <div class="skill-group"><p class="skill-group-label">01 / Backend</p><h3 class="skill-group-title">Backend Engineering</h3><p>Java, Spring Boot, Spring Cloud, REST APIs, GraphQL, and WebFlux for reliable service development.</p></div>
        <div class="skill-group"><p class="skill-group-label">02 / Distributed Systems</p><h3 class="skill-group-title">Distributed Systems</h3><p>Microservices, Kafka, RabbitMQ, event-driven workflows, API integration, and service-to-service communication.</p></div>
        <div class="skill-group"><p class="skill-group-label">03 / Cloud & Delivery</p><h3 class="skill-group-title">Cloud & Delivery</h3><p>AWS, Docker, Kubernetes, Jenkins, GitHub Actions, OpenShift, CI/CD, and production deployment workflows.</p></div>
        <div class="skill-group"><p class="skill-group-label">04 / Frontend</p><h3 class="skill-group-title">Frontend Development</h3><p>HTML, CSS, JavaScript, Angular, and React for building responsive interfaces and connecting frontend experiences to backend services.</p></div>
        <div class="skill-group"><p class="skill-group-label">05 / Data & Quality</p><h3 class="skill-group-title">Data & Quality</h3><p>PostgreSQL, MongoDB, Redis, JUnit, Mockito, SonarQube, ELK, Splunk, and Prometheus.</p></div>
        <div class="skill-group"><p class="skill-group-label">06 / AI</p><h3 class="skill-group-title">AI & Emerging Technology</h3><p>LLMs, AI agents, OpenAI, Claude, Grok, and AI-assisted development for exploring new ways to build useful products.</p></div>
      </div>`;
  }

  function renderV2Experience() {
    const section = document.getElementById("experience");
    if (!section || section.dataset.v2Rendered === "true") return;
    section.dataset.v2Rendered = "true";
    section.innerHTML = `
      <div class="section-head"><p class="eyebrow">CAREER</p><h2>Where I've worked.</h2><p class="muted">Senior engineering roles across financial services, payments, and wireless technology.</p></div>
      <div class="experience-v2">
        <article class="experience-entry"><span class="experience-dot" aria-hidden="true"></span><div class="experience-top"><div><h3 class="experience-company">Wells Fargo</h3><p class="experience-role">Senior Software Developer</p></div><p class="experience-date">Jul 2025 – Present</p></div><ul><li>Worked on API proxy migration, including OAuth 2.0 scope validation and OpenAPI 3.0 specifications.</li><li>Supported SIT and UAT validation using Postman, Splunk, and Apigee Trace to troubleshoot API behavior.</li><li>Created functional solution documentation covering routing, OAuth, and Kafka integration requirements.</li><li>Contributed to PCF-to-OpenShift migration and Autosys batch-job workflows.</li></ul><p class="experience-stack"><strong>Stack:</strong> Java · Spring Boot · APIs · OAuth 2.0 · Kafka · OpenAPI · Apigee · OpenShift · Autosys</p></article>
        <article class="experience-entry"><span class="experience-dot" aria-hidden="true"></span><div class="experience-top"><div><h3 class="experience-company">Visa</h3><p class="experience-role">Senior Software Engineer</p></div><p class="experience-date">Feb 2022 – Jan 2025</p></div><ul><li>Built Spring Boot microservices consumed by React frontends, exposing REST and GraphQL APIs for enterprise payment workflows.</li><li>Developed event-driven integrations using Kafka and RabbitMQ across distributed services.</li><li>Worked with Jenkins, GitHub Actions, Docker, and Kubernetes to build and deliver production services.</li><li>Improved service reliability through testing, performance work, and observability with ELK and Prometheus.</li></ul><p class="experience-stack"><strong>Stack:</strong> Java · Spring Boot · Microservices · REST · GraphQL · Kafka · RabbitMQ · Docker · Kubernetes · ELK · Prometheus</p></article>
        <article class="experience-entry"><span class="experience-dot" aria-hidden="true"></span><div class="experience-top"><div><h3 class="experience-company">Ondas Networks</h3><p class="experience-role">Java Engineer</p></div><p class="experience-date">Feb 2021 – Feb 2022</p></div><ul><li>Developed Java and Spring Boot services for high-availability deployments.</li><li>Worked with Spring WebFlux and reactive service patterns for network-oriented applications.</li><li>Implemented and supported OAuth2/SAML security integrations plus logging and monitoring.</li></ul><p class="experience-stack"><strong>Stack:</strong> Java · Spring Boot · Spring WebFlux · OAuth2 · SAML · Logging · Monitoring</p></article>
      </div>`;
  }

  renderV2Skills();
  renderV2Experience();

  /* =========================
     Personal + Certificates
  ========================= */

  function renderPersonalSection() {
    const about = document.querySelector("#about .about-copy");
    if (about && !about.querySelector(".personal-interests")) {
      const interests = document.createElement("div");
      interests.className = "personal-interests";
      interests.innerHTML = `
        <p class="eyebrow">BEYOND ENGINEERING</p>
        <h3>When I'm away from the keyboard.</h3>
        <p>Outside of work, I enjoy watching soccer, movies—especially action, suspense, and thrillers—going to the gym, taking evening walks, and swimming at the beach. These simple things help me stay active, reset, and keep a good balance outside of work.</p>`;
      about.appendChild(interests);
    }
  }

  function renderCertificatesSection() {
    if (document.getElementById("certificates")) return;

    const section = document.createElement("section");
    section.id = "certificates";
    section.className = "section reveal";
    section.innerHTML = `
      <div class="section-head">
        <p class="eyebrow">CERTIFICATES & ACHIEVEMENTS</p>
        <h2>Things I've completed.</h2>
        <p class="muted">A few professional learning milestones and personal achievements that are meaningful to me.</p>
      </div>
      <div class="certificates-v2">
        <article class="certificate-card">
          <a href="certificates/berkeley-half-marathon.png" target="_blank" rel="noopener" aria-label="View Berkeley Half Marathon certificate">
            <img class="certificate-thumb" src="certificates/berkeley-half-marathon.png" alt="Berkeley Half Marathon finisher certificate for Nabaraj Kandel, November 17 2024" loading="lazy">
          </a>
          <div class="certificate-content">
            <div class="certificate-icon" aria-hidden="true">🏃</div>
            <p class="certificate-type">PERSONAL ACHIEVEMENT · 2024</p>
            <h3>Berkeley Half Marathon</h3>
            <p>Completed the Berkeley Half Marathon on November 17, 2024 with a finish time of 3:10:25 and an average pace of 14:32 min/mi.</p>
            <div class="certificate-actions">
              <a class="btn btn-small" href="certificates/berkeley-half-marathon.png" target="_blank" rel="noopener">View Certificate</a>
              <a class="btn btn-small" href="https://www.athlinks.com/event/95041/results/Event/1093947/Course/2528352/Bib/3713" target="_blank" rel="noopener">View Race Results</a>
            </div>
          </div>
        </article>

        <article class="certificate-card">
          <a href="certificates/linkedin-generative-ai.jpeg" target="_blank" rel="noopener" aria-label="View Generative AI certificate">
            <img class="certificate-thumb" src="certificates/linkedin-generative-ai.jpeg" alt="LinkedIn Learning certificate for What Is Generative AI, completed by Nabaraj Kandel on May 11 2025" loading="lazy">
          </a>
          <div class="certificate-content">
            <div class="certificate-icon" aria-hidden="true">AI</div>
            <p class="certificate-type">PROFESSIONAL LEARNING · 2025</p>
            <h3>What Is Generative AI?</h3>
            <p>Completed through LinkedIn Learning on May 11, 2025. The course covered Generative AI, Artificial Intelligence, and Generative AI tools.</p>
            <div class="certificate-actions">
              <a class="btn btn-small" href="certificates/linkedin-generative-ai.jpeg" target="_blank" rel="noopener">View Certificate</a>
              <a class="btn btn-small" href="https://lnkd.in/g58fKgtV" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </article>

        <article class="certificate-card">
          <a href="certificates/hr-block-tax-course.png" target="_blank" rel="noopener" aria-label="View H and R Block tax course certificate">
            <img class="certificate-thumb" src="certificates/hr-block-tax-course.png" alt="H and R Block California Income Tax Course 2018 certificate for Nabaraj Kandel" loading="lazy">
          </a>
          <div class="certificate-content">
            <div class="certificate-icon" aria-hidden="true">✓</div>
            <p class="certificate-type">PROFESSIONAL TRAINING · 2018</p>
            <h3>California Income Tax Course 2018</h3>
            <p>Completed the H&amp;R Block California Income Tax Course 2018 final test with a score of 96%, including federal and state tax coursework.</p>
            <div class="certificate-actions">
              <a class="btn btn-small" href="certificates/hr-block-tax-course.png" target="_blank" rel="noopener">View Certificate</a>
            </div>
          </div>
        </article>
      </div>`;

    const projects = document.getElementById("projects");
    if (projects) projects.parentNode.insertBefore(section, projects);
    else document.querySelector("main")?.appendChild(section);

    const navLinks = document.querySelector(".nav-links");
    if (navLinks && !navLinks.querySelector('a[href="#certificates"]')) {
      const link = document.createElement("a");
      link.href = "#certificates";
      link.textContent = "Certificates";
      navLinks.appendChild(link);
    }
  }

  renderPersonalSection();
  renderCertificatesSection();

  /* =========================
     Typing Effect
  ========================= */

  const text = [
    "Java • Spring Boot • Kafka",
    "Cloud • Microservices • AWS",
    "Frontend • JavaScript • Angular",
    "AI • LLMs • AI Agents",
    "Enterprise Backend Engineer"
  ];

  let i = 0, j = 0, currentText = "", isDeleting = false;
  function type() {
    const typingElement = document.querySelector(".typing");
    if (!typingElement) return;
    const full = text[i];
    if (!isDeleting) currentText = full.substring(0, j++); else currentText = full.substring(0, j--);
    typingElement.textContent = currentText;
    if (!isDeleting && j > full.length) { isDeleting = true; setTimeout(type, 700); return; }
    if (isDeleting && j < 0) { isDeleting = false; i = (i + 1) % text.length; j = 0; }
    setTimeout(type, isDeleting ? 35 : 55);
  }
  type();

  const showPhoneBtn = document.getElementById("showPhoneBtn");
  const phoneLink = document.getElementById("phoneLink");
  const PHONE_DISPLAY = "(510) 600-3498";
  const PHONE_TEL = "+15106003498";
  if (showPhoneBtn && phoneLink) {
    showPhoneBtn.addEventListener("click", () => {
      phoneLink.href = `tel:${PHONE_TEL}`;
      phoneLink.textContent = PHONE_DISPLAY;
      phoneLink.style.display = "inline-flex";
      showPhoneBtn.textContent = "Hide Phone";
      showPhoneBtn.onclick = () => { const isHidden = phoneLink.style.display === "none"; phoneLink.style.display = isHidden ? "inline-flex" : "none"; showPhoneBtn.textContent = isHidden ? "Hide Phone" : "Show Phone"; };
    });
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  function setNavOpen(open) { if (!navLinks || !navToggle) return; navLinks.classList.toggle("open", open); navToggle.setAttribute("aria-expanded", open ? "true" : "false"); }
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => setNavOpen(!navLinks.classList.contains("open")));
    navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setNavOpen(false)));
    document.addEventListener("click", (e) => { if (!navLinks.classList.contains("open")) return; if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) setNavOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setNavOpen(false); });
  }

  function revealOnScroll() { document.querySelectorAll(".reveal").forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 120) el.classList.add("active"); }); }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", { particles: { number: { value: 70 }, size: { value: 2 }, move: { speed: 1.2 }, line_linked: { enable: true } } });
  }

  const githubContainer = document.getElementById("github-projects");
  const GITHUB_USER = "nabarajkandel";
  if (githubContainer) {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`)
      .then(res => { if (!res.ok) throw new Error("GitHub API error"); return res.json(); })
      .then(repos => {
        githubContainer.innerHTML = "";
        repos.slice(0, 4).forEach(repo => {
          const div = document.createElement("div"); div.classList.add("card");
          div.innerHTML = `<h3>${repo.name}</h3><p class="muted">${repo.description || "No description available."}</p><p class="tiny muted">Updated: ${new Date(repo.updated_at).toLocaleDateString()}</p><a class="btn btn-small" href="${repo.html_url}" target="_blank" rel="noopener">View Repository</a>`;
          githubContainer.appendChild(div);
        });
      }).catch(() => { githubContainer.innerHTML = `<div class="card"><h3>GitHub Projects</h3><p class="muted">Couldn’t load projects (rate limit or username not set).</p></div>`; });
  }

  const copyBtn = document.getElementById("copyEmailBtn");
  const copyStatus = document.getElementById("copyStatus");
  const EMAIL = "nabarajkandel73@gmail.com";
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(EMAIL); if (copyStatus) copyStatus.textContent = "Email copied to clipboard ✅"; }
      catch (e) { const temp = document.createElement("input"); temp.value = EMAIL; document.body.appendChild(temp); temp.select(); document.execCommand("copy"); temp.remove(); if (copyStatus) copyStatus.textContent = "Email copied ✅"; }
      setTimeout(() => { if (copyStatus) copyStatus.textContent = ""; }, 2500);
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const chatToggle = document.getElementById("chat-toggle");
  const chatContainer = document.getElementById("chat-container");
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const chatClose = document.getElementById("chat-close");
  const chatSendBtn = document.getElementById("chat-send");
  const chatStatus = document.getElementById("chat-status");
  function addMessage(role, text) { if (!chatMessages) return null; const div = document.createElement("div"); div.className = role === "user" ? "msg user" : "msg ai"; div.innerHTML = `<strong>${role === "user" ? "You" : "AI"}:</strong> ${text}`; chatMessages.appendChild(div); chatMessages.scrollTop = chatMessages.scrollHeight; return div; }
  function typeInto(element, fullText, speed = 14) { let idx = 0; element.innerHTML = `<strong>AI:</strong> `; function step() { if (idx < fullText.length) { element.innerHTML += fullText.charAt(idx++); setTimeout(step, speed); } } step(); }
  function toggleChat(forceOpen = null) { if (!chatContainer) return; const isOpen = chatContainer.style.display === "flex"; const next = forceOpen === null ? !isOpen : forceOpen; chatContainer.style.display = next ? "flex" : "none"; if (next && userInput) userInput.focus(); }
  if (!localStorage.getItem("chat_auto_opened")) { setTimeout(() => toggleChat(true), 1200); localStorage.setItem("chat_auto_opened", "1"); }
  if (chatToggle) { chatToggle.onclick = () => toggleChat(); chatToggle.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") toggleChat(); }); }
  if (chatClose) chatClose.onclick = () => toggleChat(false);
  if (chatSendBtn) chatSendBtn.onclick = () => window.sendMessage();
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleChat(false); });
  setTimeout(() => { if (chatMessages) addMessage("ai", "Hi! I’m Nabaraj’s assistant. Ask me about his experience, tech stack, or projects."); }, 700);
  window.sendMessage = async function () {
    const message = userInput?.value.trim(); if (!message) return;
    addMessage("user", message); userInput.value = "";
    const aiDiv = document.createElement("div"); aiDiv.className = "msg ai"; aiDiv.innerHTML = `<strong>AI:</strong> ...`; chatMessages.appendChild(aiDiv); chatMessages.scrollTop = chatMessages.scrollHeight;
    if (chatStatus) chatStatus.textContent = "Typing…";
    try {
      const response = await fetch("https://nabaraj-portfolio-ruby.vercel.app/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message }) });
      if (!response.ok) throw new Error("Server error");
      const data = await response.json(); const reply = data?.reply || "I didn’t get a reply from the server.";
      if (chatStatus) chatStatus.textContent = "Online"; typeInto(aiDiv, reply, 14);
    } catch (error) { if (chatStatus) chatStatus.textContent = "Offline"; aiDiv.innerHTML = `<strong>AI:</strong> <span style="color:#ff6b6b;">Error connecting to AI.</span>`; }
  };
  if (userInput) userInput.addEventListener("keydown", (e) => { if (e.key === "Enter") window.sendMessage(); });

});

document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
    /* Portfolio enhancements: subtle editorial additions */
    .numbers-v2{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1)}
    .number-item{padding:28px 24px;position:relative}
    .number-item:not(:last-child){border-right:1px solid rgba(255,255,255,.1)}
    .number-value{font-size:clamp(34px,4vw,48px);font-weight:700;letter-spacing:-1.5px;color:#eef4ff;line-height:1;margin-bottom:9px}
    .number-label{font-size:12px;line-height:1.5;color:#8291ad;text-transform:uppercase;letter-spacing:1.5px}
    .number-note{margin-top:6px;font-size:12px;color:#aebbd2}

    .certificate-category{margin-top:34px}
    .certificate-category:first-child{margin-top:0}
    .certificate-category-head{display:flex;align-items:center;gap:12px;margin-bottom:16px}
    .certificate-category-title{margin:0;font-size:12px;letter-spacing:1.8px;text-transform:uppercase;color:#8fa9d4;font-weight:700}
    .certificate-category-line{height:1px;flex:1;background:rgba(255,255,255,.09)}
    .certificates-v2{display:block}
    .certificate-category-grid{display:grid;gap:16px}
    .certificate-category-grid .certificate-card{margin:0}

    .resume-links{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:10px}
    .resume-view-link{display:inline-flex;align-items:center;gap:6px;color:#9fc1ff;text-decoration:none;font-size:13px;font-weight:500}
    .resume-view-link:hover{text-decoration:underline}

    .ai-showcase{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(280px,.95fr);gap:44px;align-items:center}
    .ai-showcase-copy h2{margin-bottom:12px}
    .ai-showcase-copy p{max-width:680px;line-height:1.8;color:#aebbd2}
    .ai-label{margin:0 0 10px;color:#60a5fa;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase}
    .ai-questions{display:flex;flex-wrap:wrap;gap:9px}
    .ai-question{appearance:none;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.035);color:#cbd7ea;border-radius:999px;padding:9px 12px;font:inherit;font-size:12px;cursor:pointer;transition:border-color .2s ease,background .2s ease,transform .2s ease}
    .ai-question:hover{border-color:rgba(96,165,250,.4);background:rgba(37,99,235,.09);transform:translateY(-1px)}
    .ai-showcase-panel{border-left:1px solid rgba(255,255,255,.12);padding-left:30px}
    .ai-showcase-panel .ai-status{font-size:11px;color:#7f91b0;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px}
    .ai-showcase-panel blockquote{margin:0;padding:0;color:#e3ebf9;font-size:17px;line-height:1.7}
    .ai-open{margin-top:20px}

    @media(max-width:800px){
      .numbers-v2{grid-template-columns:1fr}
      .number-item:not(:last-child){border-right:0;border-bottom:1px solid rgba(255,255,255,.1)}
      .ai-showcase{grid-template-columns:1fr;gap:28px}
      .ai-showcase-panel{border-left:0;border-top:1px solid rgba(255,255,255,.12);padding:24px 0 0}
    }
  `;
  document.head.appendChild(style);

  function insertNumbersSection() {
    if (document.getElementById("numbers")) return;
    const about = document.getElementById("about");
    if (!about) return;

    const section = document.createElement("section");
    section.id = "numbers";
    section.className = "section reveal";
    section.innerHTML = `
      <div class="section-head">
        <p class="eyebrow">AT A GLANCE</p>
        <h2>A few numbers.</h2>
        <p class="muted">Simple numbers that give a little context without turning the portfolio into a dashboard.</p>
      </div>
      <div class="numbers-v2" aria-label="Portfolio highlights">
        <div class="number-item"><div class="number-value">7+</div><div class="number-label">Years Experience</div><div class="number-note">Software engineering</div></div>
        <div class="number-item"><div class="number-value">3</div><div class="number-label">Companies</div><div class="number-note">Wells Fargo · Visa · Ondas Networks</div></div>
        <div class="number-item"><div class="number-value">25+</div><div class="number-label">Technologies</div><div class="number-note">Across backend, cloud, data, frontend & AI</div></div>
      </div>`;
    about.parentNode.insertBefore(section, about.nextSibling);
  }

  function organizeCertificates() {
    const section = document.getElementById("certificates");
    if (!section || section.dataset.organized === "true") return;
    const grid = section.querySelector(".certificates-v2");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".certificate-card"));
    if (!cards.length) return;

    const professional = cards.filter(card => card.textContent.includes("PROFESSIONAL LEARNING"));
    const achievements = cards.filter(card => card.textContent.includes("PERSONAL ACHIEVEMENT"));
    const other = cards.filter(card => card.textContent.includes("PROFESSIONAL TRAINING"));

    grid.innerHTML = "";

    const addCategory = (title, items) => {
      if (!items.length) return;
      const wrapper = document.createElement("div");
      wrapper.className = "certificate-category";
      wrapper.innerHTML = `<div class="certificate-category-head"><h3 class="certificate-category-title">${title}</h3><span class="certificate-category-line"></span></div><div class="certificate-category-grid"></div>`;
      const categoryGrid = wrapper.querySelector(".certificate-category-grid");
      items.forEach(card => categoryGrid.appendChild(card));
      grid.appendChild(wrapper);
    };

    addCategory("Professional", professional);
    addCategory("Achievements", achievements);
    addCategory("Other Learning", other);
    section.dataset.organized = "true";
  }

  function addResumeViewLinks() {
    document.querySelectorAll('a[href="resume.pdf"]').forEach(link => {
      if (link.dataset.resumeEnhanced === "true") return;
      link.dataset.resumeEnhanced = "true";
      if (link.textContent.trim().toLowerCase() === "resume") link.textContent = "Resume ↗";
    });

    const contact = document.getElementById("contact");
    const contactBox = contact?.querySelector(".contact-box");
    if (contactBox && !contactBox.querySelector(".resume-view-link")) {
      const link = document.createElement("a");
      link.className = "resume-view-link";
      link.href = "resume.pdf";
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "View Resume ↗";
      contactBox.appendChild(link);
    }
  }

  function insertAIShowcase() {
    if (document.getElementById("ai")) return;
    const contact = document.getElementById("contact");
    if (!contact) return;

    const section = document.createElement("section");
    section.id = "ai";
    section.className = "section reveal";
    section.innerHTML = `
      <div class="ai-showcase">
        <div class="ai-showcase-copy">
          <p class="ai-label">ASK NABARAJ'S AI</p>
          <h2>A portfolio that can answer back.</h2>
          <p>Ask about my experience, technologies, projects, or the things I'm currently building. The assistant is designed to make exploring this portfolio feel more like a conversation.</p>
          <div class="ai-questions" aria-label="Suggested questions">
            <button class="ai-question" type="button" data-question="What technologies does Nabaraj specialize in?">What technologies does Nabaraj specialize in?</button>
            <button class="ai-question" type="button" data-question="Tell me about Nabaraj's Visa experience.">Tell me about the Visa experience.</button>
            <button class="ai-question" type="button" data-question="What has Nabaraj built recently?">What has Nabaraj built recently?</button>
            <button class="ai-question" type="button" data-question="Does Nabaraj have Kubernetes experience?">Does Nabaraj have Kubernetes experience?</button>
            <button class="ai-question" type="button" data-question="What's TradingWise?">What's TradingWise?</button>
            <button class="ai-question" type="button" data-question="How can I contact Nabaraj?">How can I contact Nabaraj?</button>
          </div>
        </div>
        <div class="ai-showcase-panel">
          <div class="ai-status">AI assistant · online</div>
          <blockquote>“Instead of searching through the page, just ask.”</blockquote>
          <button class="btn ai-open" type="button">Open Nabaraj's AI</button>
        </div>
      </div>`;
    contact.parentNode.insertBefore(section, contact);

    const openChat = () => {
      const chatToggle = document.getElementById("chat-toggle");
      if (chatToggle) chatToggle.click();
      const input = document.getElementById("user-input");
      if (input) input.focus();
    };

    section.querySelectorAll(".ai-question").forEach(button => {
      button.addEventListener("click", () => {
        const input = document.getElementById("user-input");
        if (input) input.value = button.dataset.question || "";
        openChat();
      });
    });
    section.querySelector(".ai-open")?.addEventListener("click", openChat);

    const navLinks = document.querySelector(".nav-links");
    if (navLinks && !navLinks.querySelector('a[href="#ai"]')) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#ai">AI</a>`;
      const contactLink = navLinks.querySelector('a[href="#contact"]')?.parentElement;
      if (contactLink) contactLink.before(li); else navLinks.appendChild(li);
    }
  }

  function runEnhancements() {
    insertNumbersSection();
    organizeCertificates();
    addResumeViewLinks();
    insertAIShowcase();
    if (typeof window.revealOnScroll === "function") window.revealOnScroll();
  }

  runEnhancements();
});

/**
 * renderer.js — Renders portfolio sections from JSON data
 */

export function renderHero(profile) {
  return `
    <section class="hero" id="home">
      <div class="hero-bg">
        <div class="hero-grid"></div>
        <div class="hero-gradient hero-gradient-1"></div>
        <div class="hero-gradient hero-gradient-2"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="dot"></span>
            Open to opportunities
          </div>
          <h1 class="hero-name">${profile.name}</h1>
          <p class="hero-title">${profile.tagline}</p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              View Projects
            </a>
            <a href="#contact" class="btn btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Get in Touch
            </a>
          </div>
          <div class="hero-stats">
            <div>
              <div class="hero-stat-number">4+</div>
              <div class="hero-stat-label">Internships</div>
            </div>
            <div>
              <div class="hero-stat-number">9+</div>
              <div class="hero-stat-label">Projects</div>
            </div>
            <div>
              <div class="hero-stat-number">160k+</div>
              <div class="hero-stat-label">YouTube Views</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-image-wrapper">
            <div class="hero-image-ring"></div>
            <div class="hero-image">
              <img src="${profile.photo}" alt="${profile.name}" onerror="this.parentElement.innerHTML='<div style=\\"width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--accent),#3b82f6);font-size:5rem;font-family:var(--font-heading);font-weight:800;color:white\\">TC</div>'">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderAbout(profile) {
  return `
    <section class="section" id="about">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">About Me</span>
          <h2 class="section-title">Driven by Engineering</h2>
          <p class="section-subtitle">From rally stages to F1 factories — my journey in motorsport engineering</p>
        </div>
        <div class="about-grid">
          <div class="about-text reveal-left">
            <p>${profile.bio}</p>
          </div>
          <div class="about-highlights reveal-right">
            <div class="highlight-card">
              <div class="highlight-icon">🏎️</div>
              <div class="highlight-title">Formula 1</div>
              <div class="highlight-desc">McLaren F1 Team — Mechanical Design</div>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">🏁</div>
              <div class="highlight-title">GT Racing</div>
              <div class="highlight-desc">Aston Martin Racing — Design Engineering</div>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">⚡</div>
              <div class="highlight-title">Electric Vehicles</div>
              <div class="highlight-desc">Hybrid powertrains & control systems</div>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">📹</div>
              <div class="highlight-title">Content Creator</div>
              <div class="highlight-desc">160k+ YouTube views, €30k+ in sales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderSkills(skillsData) {
  const categories = skillsData.categories.map((cat, i) => `
    <div class="skill-category reveal reveal-delay-${i + 1}">
      <div class="skill-category-icon">${cat.icon}</div>
      <h3 class="skill-category-name">${cat.name}</h3>
      <div class="skill-list">
        ${cat.skills.map(s => `<div class="skill-item">${s}</div>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Skills</span>
          <h2 class="section-title">Technical Expertise</h2>
          <p class="section-subtitle">A blend of hands-on engineering and digital design tools</p>
        </div>
        <div class="skills-grid">
          ${categories}
        </div>
      </div>
    </section>
  `;
}

export function renderExperience(experienceData) {
  const cards = experienceData.experiences.map((exp, i) => `
    <div class="experience-card reveal reveal-delay-${Math.min(i + 1, 4)}">
      <div class="experience-card-inner">
        <div class="experience-header">
          <div>
            <div class="experience-company">${exp.company}</div>
            <div class="experience-role">${exp.role}</div>
          </div>
          <div class="experience-meta">
            <div class="experience-period">${exp.period}</div>
            <div class="experience-location">${exp.location}</div>
          </div>
        </div>
        <div class="experience-dept">${exp.department}</div>
        <p class="experience-desc">${exp.description}</p>
        <div class="experience-tags">
          ${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Experience</span>
          <h2 class="section-title">Professional Journey</h2>
          <p class="section-subtitle">From workshop floors to the pinnacle of motorsport</p>
        </div>
        <div class="experience-timeline">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

export function renderProjects(projectsData) {
  const cards = projectsData.projects.map((proj, i) => {
    const linksHtml = Object.entries(proj.links || {}).map(([platform, url]) => `
      <a href="${url}" target="_blank" rel="noopener" class="project-link">
        ${platform === 'youtube' ? '▶ YouTube' : platform}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    `).join('');

    return `
      <div class="project-card reveal reveal-delay-${(i % 3) + 1}" data-category="${proj.category}">
        <div class="project-image">
          <img src="${proj.image}" alt="${proj.title}" onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg, var(--bg-secondary), var(--bg-card))'">
          <div class="project-image-overlay"></div>
        </div>
        <div class="project-body">
          <span class="project-category-badge ${proj.category}">${proj.category}</span>
          <h3 class="project-title">${proj.title}</h3>
          <div class="project-year">${proj.year}</div>
          <p class="project-desc">${proj.description}</p>
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${linksHtml ? `<div class="project-links">${linksHtml}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Projects</span>
          <h2 class="section-title">Featured Work</h2>
          <p class="section-subtitle">Academic research and personal passion projects</p>
        </div>
        <div class="projects-filter reveal">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="academic">Academic</button>
          <button class="filter-btn" data-filter="personal">Personal</button>
        </div>
        <div class="projects-grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

export function renderEducation(educationData) {
  const cards = educationData.education.map(edu => `
    <div class="education-card reveal">
      <div class="education-icon">🎓</div>
      <div>
        <div class="education-institution">${edu.institution}</div>
        <div class="education-degree">${edu.degree}</div>
        <div class="education-field">${edu.field}</div>
        <div class="education-meta">
          <span>📅 ${edu.period}</span>
          <span>📍 ${edu.location}</span>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="education">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Education</span>
          <h2 class="section-title">Academic Background</h2>
        </div>
        ${cards}
      </div>
    </section>
  `;
}

export function renderContact(profile) {
  return `
    <section class="section" id="contact">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Contact</span>
          <h2 class="section-title">Let's Connect</h2>
          <p class="section-subtitle">Interested in collaboration or have opportunities? Reach out!</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info reveal-left">
            <a href="mailto:${profile.email}" class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <div class="contact-label">Email</div>
                <div class="contact-value">${profile.email}</div>
              </div>
            </a>
            <a href="tel:${profile.phone}" class="contact-item">
              <div class="contact-icon">📱</div>
              <div>
                <div class="contact-label">Phone</div>
                <div class="contact-value">${profile.phone}</div>
              </div>
            </a>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <div class="contact-label">Location</div>
                <div class="contact-value">${profile.location}</div>
              </div>
            </div>
          </div>
          <div class="contact-social reveal-right">
            ${profile.social.linkedin ? `
              <a href="${profile.social.linkedin}" target="_blank" rel="noopener" class="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            ` : ''}
            ${profile.social.youtube ? `
              <a href="${profile.social.youtube}" target="_blank" rel="noopener" class="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
            ` : ''}
            ${profile.social.github ? `
              <a href="${profile.social.github}" target="_blank" rel="noopener" class="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderNav() {
  return `
    <nav class="nav" id="nav">
      <div class="nav-inner">
        <a href="#home" class="nav-logo">
          T<span class="logo-accent">C</span>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#education" class="nav-link">Education</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="container">
        <p>© ${year} Theo Couasnon — Built with <span class="footer-accent">♥</span> and engineering precision</p>
      </div>
    </footer>
  `;
}

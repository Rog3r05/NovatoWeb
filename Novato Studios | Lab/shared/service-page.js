// Service page renderer. Each service page calls NV.renderService(SERVICE_DATA).
// Data shape: { num, slug, title, tagline, blurb, features[4], process[N], plans[3], faq[N], examples[3] }

(function() {
  const NV = window.NV = window.NV || {};

  function getServiceData(slug) {
    const lang = (window.NVI18n && window.NVI18n.getLang) ? window.NVI18n.getLang() : 'en';
    const baseData = window.NV_SERVICES && window.NV_SERVICES[slug];
    if (!baseData) return null;
    if (lang === 'en') return baseData;
    const translated = window.NV_SERVICES && window.NV_SERVICES[lang] && window.NV_SERVICES[lang][slug];
    if (!translated) return baseData;
    return Object.assign({}, baseData, translated);
  }

  function svgIcon(name) {
    const ICONS = {
      websites: '<rect x="3" y="4" width="18" height="14" rx="0"/><path d="M3 9h18"/><path d="M7 14h4"/>',
      management: '<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/><path d="M3 17l9 4 9-4"/>',
      ecommerce: '<path d="M3 6h18l-2 12H5L3 6z"/><path d="M9 6V4a3 3 0 016 0v2"/>',
      mobile: '<rect x="6" y="2" width="12" height="20" rx="0"/><path d="M11 18h2"/>',
      automation: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 6h8"/><path d="M18 8v8"/>',
      seo: '<path d="M12 3v9l6 4"/><circle cx="12" cy="12" r="9"/>'
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${ICONS[name] || ICONS.websites}</svg>`;
  }

  function exampleGraphic(kind, idx) {
    // Render one of several abstract placeholder graphics keyed by service + idx
    const v = (kind + idx).length;
    const palettes = [
      { bg: 'var(--ink)', fg: '#fff', accent: 'var(--accent)' },
      { bg: 'var(--accent)', fg: '#fff', accent: 'var(--ink)' },
      { bg: 'var(--paper-dim)', fg: 'var(--ink)', accent: 'var(--accent)' }
    ];
    const p = palettes[idx % 3];

    if (kind === 'websites') {
      return `<div class="img" style="background:${p.bg}">
        <div class="ex-graphic" style="padding: 16px;">
          <svg viewBox="0 0 200 150">
            <rect x="10" y="10" width="180" height="20" fill="${p.fg}"/>
            <rect x="10" y="40" width="100" height="60" fill="${p.fg}" opacity="0.3"/>
            <rect x="120" y="40" width="70" height="60" fill="${p.accent}"/>
            <rect x="10" y="110" width="180" height="8" fill="${p.fg}" opacity="0.5"/>
            <rect x="10" y="124" width="120" height="8" fill="${p.fg}" opacity="0.3"/>
          </svg>
        </div></div>`;
    }
    if (kind === 'management') {
      return `<div class="img" style="background:${p.bg}">
        <div class="ex-graphic" style="padding: 24px;">
          <svg viewBox="0 0 200 150">
            <rect x="10" y="20" width="50" height="110" fill="${p.fg}" opacity="0.3"/>
            <rect x="70" y="50" width="50" height="80" fill="${p.fg}" opacity="0.5"/>
            <rect x="130" y="35" width="50" height="95" fill="${p.accent}"/>
            <line x1="10" y1="130" x2="190" y2="130" stroke="${p.fg}" stroke-width="2"/>
          </svg>
        </div></div>`;
    }
    if (kind === 'ecommerce') {
      return `<div class="img" style="background:${p.bg}">
        <div class="ex-graphic" style="padding: 24px;">
          <svg viewBox="0 0 200 150">
            <rect x="20" y="20" width="50" height="50" fill="${p.fg}"/>
            <rect x="80" y="20" width="50" height="50" fill="${p.accent}"/>
            <rect x="140" y="20" width="40" height="50" fill="${p.fg}" opacity="0.4"/>
            <rect x="20" y="80" width="160" height="14" fill="${p.fg}" opacity="0.3"/>
            <rect x="20" y="100" width="100" height="10" fill="${p.fg}" opacity="0.5"/>
            <rect x="20" y="115" width="80" height="20" fill="${p.accent}"/>
          </svg>
        </div></div>`;
    }
    if (kind === 'mobile') {
      return `<div class="img" style="background:${p.bg}">
        <div class="ex-graphic">
          <svg viewBox="0 0 200 150">
            <rect x="60" y="20" width="80" height="120" fill="${p.fg}" stroke="${p.accent}" stroke-width="3"/>
            <rect x="70" y="35" width="60" height="6" fill="${p.accent}"/>
            <rect x="70" y="50" width="60" height="40" fill="${p.accent}" opacity="0.3"/>
            <rect x="70" y="98" width="60" height="6" fill="${p.accent}" opacity="0.5"/>
            <rect x="70" y="110" width="40" height="6" fill="${p.accent}" opacity="0.5"/>
          </svg>
        </div></div>`;
    }
    if (kind === 'automation') {
      return `<div class="img" style="background:${p.bg}">
        <div class="ex-graphic" style="padding: 24px;">
          <svg viewBox="0 0 200 150">
            <circle cx="40" cy="40" r="14" fill="${p.fg}"/>
            <circle cx="160" cy="40" r="14" fill="${p.fg}"/>
            <circle cx="100" cy="110" r="14" fill="${p.accent}"/>
            <line x1="40" y1="40" x2="100" y2="110" stroke="${p.fg}" stroke-width="2"/>
            <line x1="160" y1="40" x2="100" y2="110" stroke="${p.fg}" stroke-width="2"/>
            <line x1="40" y1="40" x2="160" y2="40" stroke="${p.fg}" stroke-width="2" stroke-dasharray="4 4"/>
          </svg>
        </div></div>`;
    }
    // seo
    return `<div class="img" style="background:${p.bg}">
      <div class="ex-graphic" style="padding: 24px;">
        <svg viewBox="0 0 200 150">
          <polyline points="20,120 60,90 100,100 140,50 180,30" fill="none" stroke="${p.accent}" stroke-width="3"/>
          <line x1="20" y1="130" x2="180" y2="130" stroke="${p.fg}" stroke-width="2"/>
          <circle cx="180" cy="30" r="6" fill="${p.accent}"/>
          <text x="20" y="20" fill="${p.fg}" font-family="monospace" font-size="14" font-weight="700">+312%</text>
        </svg>
      </div></div>`;
  }

  let currentSlug = null;

  NV.renderService = function(slug) {
    currentSlug = slug;
    const s = getServiceData(slug);
    if (!s) return;
    const root = document.getElementById('service-root');
    if (!root) return;

    const planCards = s.plans.map((p, i) => `
      <div class="nv-plan ${i===1 ? 'featured' : ''}">
        ${i===1 ? '<div class="nv-plan-tag">Most popular</div>' : ''}
        <div class="nv-plan-name">${p.name}</div>
        <div class="nv-plan-price">
          ${p.priceCurrency ? `<span class="currency">${p.priceCurrency}</span>` : ''}
          ${p.price}
          ${p.per ? `<span class="per">${p.per}</span>` : ''}
        </div>
        <p class="nv-plan-blurb">${p.blurb}</p>
        <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <a href="mailto:hello@novato.dev?subject=${encodeURIComponent(s.title + ' — ' + p.name)}" class="nv-btn ${i===1 ? 'on-dark' : ''}">${p.cta || 'Get Started'} <span class="arr">→</span></a>
      </div>
    `).join('');

    const featureCards = s.features.map((f, i) => `
      <div>
        <div class="num">0${i+1}</div>
        <h3>${f.title}</h3>
        <p>${f.body}</p>
      </div>
    `).join('');

    const processSteps = s.process.map((step, i) => `
      <div class="nv-process-step">
        <div class="step-num">0${i+1}</div>
        <div>
          <h3>${step.title}</h3>
          <p>${step.body}</p>
        </div>
      </div>
    `).join('');

    const faqItems = s.faq.map(f => `
      <details>
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>
    `).join('');

    const exampleCards = s.examples.map((ex, i) => `
      <div>
        ${exampleGraphic(s.slug, i)}
        <div class="meta">
          <h3>${ex.title}</h3>
          <p>${ex.tag}</p>
        </div>
      </div>
    `).join('');

    root.innerHTML = `
      <div class="nv-crumbs">
        <a href="index.html">Novato</a>
        <span class="sep">/</span>
        <a href="index.html#services">Services</a>
        <span class="sep">/</span>
        <span>${s.title}</span>
      </div>

      <section class="nv-split-hero">
        <div class="left">
          <div class="nv-eyebrow">Service ${s.num}</div>
          <h1>${s.title.replace(/&/g, '<span class="accent">&</span>')}</h1>
          <p>${s.blurb}</p>
          <div class="flex gap-4" style="flex-wrap:wrap; margin-top: 8px;">
            <a href="#plans" class="nv-btn">View Plans <span class="arr">→</span></a>
            <a href="mailto:hello@novato.dev?subject=${encodeURIComponent(s.title + ' inquiry')}" class="nv-btn outline">Get a Quote <span class="arr">→</span></a>
          </div>
        </div>
        <div class="right red">
          <div style="display:flex; gap:16px; align-items:center; margin-bottom:8px;">
            <div style="width:48px; height:48px; background:#fff; color:var(--accent); display:flex; align-items:center; justify-content:center;">
              <span style="display:inline-flex; width:24px; height:24px;">${svgIcon(s.slug)}</span>
            </div>
            <span style="font-family:var(--font-mono); font-weight:700; letter-spacing:0.08em; text-transform:uppercase; font-size:12px;">${s.tagline}</span>
          </div>
          <div class="stats">
            ${s.stats.map(st => `<div><strong>${st.v}</strong>${st.l}</div>`).join('')}
          </div>
        </div>
      </section>

      <section class="nv-section">
        <div class="nv-eyebrow">What's included</div>
        <h2 style="font-family:var(--font-display); font-weight:700; font-size:clamp(40px,5vw,72px); line-height:1; letter-spacing:-0.01em; text-transform:uppercase; margin:0 0 56px; max-width:900px;">
          Everything you need.<br>Nothing you don't.
        </h2>
        <div class="nv-features">${featureCards}</div>
      </section>

      <section class="nv-section" style="background: var(--paper-dim);">
        <div class="nv-eyebrow">How we work</div>
        <h2 style="font-family:var(--font-display); font-weight:700; font-size:clamp(40px,5vw,72px); line-height:1; letter-spacing:-0.01em; text-transform:uppercase; margin:0 0 32px;">
          Process — ${s.process.length} steps.
        </h2>
        <div class="nv-process">${processSteps}</div>
      </section>

      <section class="nv-section" id="plans">
        <div class="nv-eyebrow">Plans &amp; Pricing</div>
        <h2 style="font-family:var(--font-display); font-weight:700; font-size:clamp(40px,5vw,72px); line-height:1; letter-spacing:-0.01em; text-transform:uppercase; margin:0 0 16px;">
          Pick a plan.
        </h2>
        <p class="muted" style="margin-bottom:48px; max-width:560px;">All plans are starting points. We'll write you a precise quote after a 30-minute call. No commitment.</p>
        <div class="nv-plans">${planCards}</div>
      </section>

      <section class="nv-section" style="background: var(--paper-dim);">
        <div class="nv-eyebrow">Selected work</div>
        <h2 style="font-family:var(--font-display); font-weight:700; font-size:clamp(40px,5vw,72px); line-height:1; letter-spacing:-0.01em; text-transform:uppercase; margin:0 0 56px;">
          We've shipped this before.
        </h2>
        <div class="nv-examples">${exampleCards}</div>
      </section>

      <section class="nv-section">
        <div class="nv-twocol">
          <div>
            <div class="nv-eyebrow">FAQ</div>
            <h2 style="font-family:var(--font-display); font-weight:700; font-size:clamp(40px,5vw,72px); line-height:1; letter-spacing:-0.01em; text-transform:uppercase; margin:0 0 32px;">
              Questions, answered.
            </h2>
            <div class="nv-faq">${faqItems}</div>
          </div>
          <div>
            <div class="meta">
              <dl>
                <dt>Service</dt><dd>${s.title}</dd>
                <dt>Typical timeline</dt><dd>${s.meta.timeline}</dd>
                <dt>Starting price</dt><dd>${s.meta.from}</dd>
                <dt>Stack</dt><dd>${s.meta.stack}</dd>
                <dt>Lead time</dt><dd>${s.meta.lead}</dd>
              </dl>
            </div>
            <a href="mailto:hello@novato.dev?subject=${encodeURIComponent(s.title + ' inquiry')}" class="nv-btn" style="margin-top:32px;">Email Us <span class="arr">→</span></a>
          </div>
        </div>
      </section>

      <section class="nv-cta-strip">
        <h2>Ready to build<br>your <span class="accent">${s.title.toLowerCase()}</span>?</h2>
        <a href="mailto:hello@novato.dev?subject=${encodeURIComponent(s.title + ' inquiry')}" class="nv-btn on-dark">Let's Talk <span class="arr">→</span></a>
      </section>
    `;
  };

  window.addEventListener('nv:lang-change', () => {
    if (currentSlug) NV.renderService(currentSlug);
  });
})();

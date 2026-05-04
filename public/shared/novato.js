// Novato shared site scripts: header, footer, tweaks panel.
// All pages call NV.init({page, site}). page is e.g. 'home','services-websites','labs'.
// site is 'studios' or 'labs'.

(function() {
  const NV = window.NV = window.NV || {};
  let revealObserver = null;

  // --- Persistence (in-memory + localStorage) ----------------------
  const STORAGE_KEY = 'nv-tweaks-v1';
  function loadTweaks() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveTweaks(t) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(t)); } catch {}
  }

  const defaults = {
    redHue: '#FF3B14',
    blueHue: '#0066FF',
    heroLight: false,
    headerStyle: 'red' // 'red' or 'minimal'
  };
  let tweaks = Object.assign({}, defaults, loadTweaks());

  // --- Apply tweaks to DOM -----------------------------------------
  function apply() {
    const r = document.documentElement;
    r.style.setProperty('--novato-red', tweaks.redHue);
    r.style.setProperty('--novato-blue', tweaks.blueHue);

    // recompute hover/press from base hue (slightly darker)
    r.style.setProperty('--novato-red-hover', shade(tweaks.redHue, -0.08));
    r.style.setProperty('--novato-red-press', shade(tweaks.redHue, -0.16));
    r.style.setProperty('--novato-blue-hover', shade(tweaks.blueHue, -0.08));
    r.style.setProperty('--novato-blue-press', shade(tweaks.blueHue, -0.16));

    // Per-site accent
    const isLabs = document.body.classList.contains('is-labs');
    r.style.setProperty('--accent', isLabs ? tweaks.blueHue : tweaks.redHue);
    r.style.setProperty('--accent-hover', isLabs ? shade(tweaks.blueHue, -0.08) : shade(tweaks.redHue, -0.08));
    r.style.setProperty('--accent-press', isLabs ? shade(tweaks.blueHue, -0.16) : shade(tweaks.redHue, -0.16));

    document.body.classList.toggle('hero-light', !!tweaks.heroLight);
    document.body.classList.toggle('hdr-minimal', tweaks.headerStyle === 'minimal');
  }

  function shade(hex, amt) {
    // amt in [-1, 1]. negative darkens.
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    const f = 1 + amt;
    r = Math.max(0, Math.min(255, Math.round(r * f)));
    g = Math.max(0, Math.min(255, Math.round(g * f)));
    b = Math.max(0, Math.min(255, Math.round(b * f)));
    return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
  }

  // --- Header injection --------------------------------------------
  function buildHeader(site, page) {
    const isLabs = site === 'labs';
    const home = isLabs ? 'labs.html' : 'index.html';
    const wordmark = isLabs ? 'NOVATO LABS' : 'NOVATO';

    // Studios nav
    const studiosNav = `
      <a href="index.html#services" class="${page==='services'?'is-active':''}" data-i18n="nav.services">Services</a>
      <a href="index.html#products" data-i18n="nav.products">Products</a>
      <a href="index.html#about" data-i18n="nav.studio">Studio</a>
      <a href="index.html#contact" data-i18n="nav.contact">Contact</a>
      <a href="labs.html" class="nv-labs-cta" data-i18n="nav.go_labs">Go to Labs →</a>
    `;
    // Labs nav
    const labsNav = `
      <a href="labs.html#products" class="${page==='labs-products'?'is-active':''}" data-i18n="nav.products">Products</a>
      <a href="labs.html#manifesto" data-i18n="nav.manifesto">Manifesto</a>
      <a href="labs.html#collab" data-i18n="nav.collab">Collaborate</a>
      <a href="index.html" class="nv-labs-cta" data-i18n="nav.back_studios">← Back to Studios</a>
    `;

    return `
      <header class="nv-header">
        <a class="nv-brand" href="${home}">
          <img class="nv-brand-mark" src="shared/assets/logo-inverted.png" alt="" aria-hidden="true">
          <span class="nv-brand-word">${wordmark}</span>
        </a>
        <nav class="nv-nav">${isLabs ? labsNav : studiosNav}</nav>
      </header>
    `;
  }

  // --- Footer injection --------------------------------------------
  function buildFooter(site) {
    return `
      <footer class="nv-footer">
        <div class="nv-footer-brand">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="shared/assets/logo-inverted.png" alt="" style="width:40px; height:40px;">
            <span style="font-family: var(--font-mono); font-weight:700; letter-spacing:0.08em; font-size:16px;">NOVATO</span>
          </div>
          <p data-i18n="footer.tag">Build Better Tools. Bespoke software for businesses, free tools for humans.</p>
        </div>
        <div>
          <h4 data-i18n="footer.studios">Studios</h4>
          <ul>
            <li><a href="services-websites.html" data-i18n="svc.websites">Websites</a></li>
            <li><a href="services-management.html" data-i18n="svc.management">Management</a></li>
            <li><a href="services-ecommerce.html" data-i18n="svc.ecommerce">E-commerce</a></li>
            <li><a href="services-mobile.html" data-i18n="svc.mobile">Mobile Apps</a></li>
            <li><a href="services-automation.html" data-i18n="svc.automation">Automation</a></li>
            <li><a href="services-seo.html" data-i18n="svc.seo">SEO</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer.labs">Labs</h4>
          <ul>
            <li><a href="labs.html">Overview</a></li>
            <li><a href="labs.html#products">Tomato Clock</a></li>
            <li><a href="labs.html#products">Screen Lab</a></li>
            <li><a href="toxic.html">Toxic</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer.contact">Contact</h4>
          <ul>
            <li><a href="mailto:hello@novato.dev">hello@novato.dev</a></li>
            <li><a href="mailto:work@novato.dev">work@novato.dev</a></li>
            <li><a href="index.html#contact" data-i18n="footer.send_msg">Send a message</a></li>
          </ul>
        </div>
        <div class="nv-footer-bottom">
          <span data-i18n="footer.legal">© 2026 Novato Studios — Build Better Tools.</span>
          <span data-i18n="footer.where">Made in Milan · novato.dev</span>
        </div>
      </footer>
    `;
  }

  // --- Tweaks panel -------------------------------------------------
  function buildTweaks() {
    return `
      <div id="nv-tweaks">
        <header>
          Tweaks
          <button id="nv-tweaks-close" aria-label="close">×</button>
        </header>
        <div class="body">
          <div class="row">
            <label>Studios red hue</label>
            <input type="color" data-key="redHue" value="${tweaks.redHue}">
          </div>
          <div class="row">
            <label>Labs blue hue</label>
            <input type="color" data-key="blueHue" value="${tweaks.blueHue}">
          </div>
          <div class="row">
            <label>Hero style</label>
            <div class="seg" data-group="heroLight">
              <button data-val="false" class="${!tweaks.heroLight?'active':''}">Wedge</button>
              <button data-val="true" class="${tweaks.heroLight?'active':''}">Light</button>
            </div>
          </div>
          <div class="row">
            <label>Header style</label>
            <div class="seg" data-group="headerStyle">
              <button data-val="red" class="${tweaks.headerStyle==='red'?'active':''}">Red block</button>
              <button data-val="minimal" class="${tweaks.headerStyle==='minimal'?'active':''}">Minimal</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function setupTweaks() {
    const panel = document.getElementById('nv-tweaks');
    if (!panel) return;

    panel.querySelectorAll('input[type="color"]').forEach(input => {
      input.addEventListener('input', () => {
        tweaks[input.dataset.key] = input.value;
        saveTweaks(tweaks); apply();
        try { window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[input.dataset.key]: input.value}}, '*'); } catch {}
      });
    });

    panel.querySelectorAll('.seg').forEach(seg => {
      const key = seg.dataset.group;
      seg.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          let v = btn.dataset.val;
          if (v === 'true') v = true; else if (v === 'false') v = false;
          tweaks[key] = v;
          saveTweaks(tweaks); apply();
          seg.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          try { window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[key]: v}}, '*'); } catch {}
        });
      });
    });

    document.getElementById('nv-tweaks-close').addEventListener('click', () => {
      panel.classList.remove('open');
      try { window.parent.postMessage({type:'__edit_mode_dismissed'}, '*'); } catch {}
    });
  }

  // --- Edit mode protocol ------------------------------------------
  function setupEditModeProtocol() {
    window.addEventListener('message', (e) => {
      const t = e.data && e.data.type;
      if (t === '__activate_edit_mode') {
        const p = document.getElementById('nv-tweaks');
        if (p) p.classList.add('open');
      } else if (t === '__deactivate_edit_mode') {
        const p = document.getElementById('nv-tweaks');
        if (p) p.classList.remove('open');
      }
    });
    try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch {}
  }

  // --- Scroll reveals -----------------------------------------------
  function setupReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => el.classList.add('is-in'));
      return;
    }
    try {
      // Disconnect existing observer if any to avoid duplicates
      if (revealObserver) {
        revealObserver.disconnect();
      }
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            revealObserver.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => revealObserver.observe(el));
    } catch (err) {
      // Fallback: if observer creation fails, show all content
      console.warn('IntersectionObserver failed, revealing all elements:', err);
      document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => el.classList.add('is-in'));
    }
  }

  // Auto-tag common reveal targets so we don't have to edit every HTML file
  function autoTagReveals() {
    // Sections beyond the hero
    document.querySelectorAll('.nv-section').forEach((s, i) => {
      if (!s.hasAttribute('data-reveal')) s.setAttribute('data-reveal', '');
    });
    // Manifesto blocks should animate strikethroughs
    document.querySelectorAll('.nv-manifesto').forEach(s => {
      if (!s.hasAttribute('data-reveal')) s.setAttribute('data-reveal', '');
    });
    // Stagger card grids
    document.querySelectorAll('.nv-grid, .nv-features, .nv-plans, .nv-stats, .nv-examples').forEach(g => {
      if (!g.hasAttribute('data-stagger')) g.setAttribute('data-stagger', '');
    });
  }

  // --- Public init -------------------------------------------------
  NV.init = function({ site = 'studios', page = '' } = {}) {
    if (site === 'labs') document.body.classList.add('is-labs');

    const headerSlot = document.getElementById('nv-header-slot');
    if (headerSlot) headerSlot.outerHTML = buildHeader(site, page);

    const footerSlot = document.getElementById('nv-footer-slot');
    if (footerSlot) footerSlot.outerHTML = buildFooter(site);

    // Append tweaks panel
    const tweaksWrap = document.createElement('div');
    tweaksWrap.innerHTML = buildTweaks();
    document.body.appendChild(tweaksWrap.firstElementChild);

    setupEditModeProtocol();
    setupTweaks();
    apply();
    autoTagReveals();
    setupReveals();

    // i18n: inject lang switcher into nav and translate everything
    if (window.NVI18n) {
      window.NVI18n.injectSwitcher();
      window.NVI18n.refresh();
    }
  };

  // Re-run reveal tagging + observers after dynamic content is injected
  NV.refreshReveals = function() {
    autoTagReveals();
    setupReveals();
  };
})();

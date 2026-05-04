// Novato i18n runtime — translation engine + language switcher
(function() {
  const STORAGE_KEY = 'novato.lang';
  const DEFAULT_LANG = 'en';
  const LANGS = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'it', label: 'IT', name: 'Italiano' },
    { code: 'es', label: 'ES', name: 'Español' },
  ];

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }
  function setLang(code) {
    localStorage.setItem(STORAGE_KEY, code);
    applyLang(code);
  }

  function t(key, lang) {
    const L = lang || getLang();
    const dict = window.NV_I18N || {};
    return (dict[L] && dict[L][key]) || (dict.en && dict.en[key]) || key;
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    // text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key, lang);
    });
    // attributes: data-i18n-attr="placeholder:hero.toxic.placeholder, aria-label:btn.send"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr') || '';
      spec.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s && s.trim());
        if (attr && key) el.setAttribute(attr, t(key, lang));
      });
    });
    // update switcher button label
    document.querySelectorAll('[data-i18n-current]').forEach(el => {
      const cur = LANGS.find(l => l.code === lang);
      if (cur) el.textContent = cur.label;
    });
    // update switcher option active state
    document.querySelectorAll('[data-i18n-set]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-i18n-set') === lang);
    });
    // notify listeners (e.g., dynamically rendered service pages)
    window.dispatchEvent(new CustomEvent('nv:lang-change', { detail: { lang } }));
  }

   function injectSwitcher() {
     // Inject into the mobile/secondary nav container
     const nav = document.querySelector('.nv-lang-mobile') || document.querySelector('.nv-nav');
     if (!nav || nav.querySelector('.nv-lang')) return;

    const cur = LANGS.find(l => l.code === getLang()) || LANGS[0];

    const wrap = document.createElement('div');
    wrap.className = 'nv-lang';
    wrap.innerHTML = `
      <button class="nv-lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false">
        <span data-i18n-current>${cur.label}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="square"/>
        </svg>
      </button>
      <ul class="nv-lang-menu" role="listbox">
        ${LANGS.map(l => `
          <li>
            <button type="button" role="option" data-i18n-set="${l.code}" class="${l.code === cur.code ? 'active' : ''}">
              <span class="code">${l.label}</span>
              <span class="name">${l.name}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    `;
    nav.appendChild(wrap);

    const btn = wrap.querySelector('.nv-lang-btn');
    const menu = wrap.querySelector('.nv-lang-menu');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    wrap.querySelectorAll('[data-i18n-set]').forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        const code = opt.getAttribute('data-i18n-set');
        setLang(code);
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Public API
  window.NVI18n = {
    t,
    getLang,
    setLang,
    applyLang,
    injectSwitcher,
    refresh: () => applyLang(getLang()),
  };

  // Auto-init
  function init() {
    injectSwitcher();
    applyLang(getLang());
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

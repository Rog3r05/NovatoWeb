// Service data for all 6 Novato Studios services.
window.NV_SERVICES = {
  websites: {
    num: '01', slug: 'websites', title: 'Websites',
    tagline: 'Custom websites, built fast',
    blurb: 'Custom websites built fast and optimized for every device. From a one-page launch site to a full corporate portal — handcoded, performant, and yours forever.',
    stats: [{v:'40+', l:'Sites shipped'}, {v:'<1s', l:'Median load'}, {v:'A+', l:'PageSpeed avg'}, {v:'100%', l:'Custom code'}],
    features: [
      {title:'Hand-coded, no builders', body:'No WordPress bloat, no Wix lock-in. Clean HTML/CSS/JS or a modern framework when it earns its keep.'},
      {title:'Mobile-first, always', body:'Designed and tested on real devices. Layouts that breathe at every breakpoint.'},
      {title:'CMS if you want one', body:'Edit your own copy via a lightweight headless CMS — Sanity, Strapi, or Markdown if you prefer.'},
      {title:'Fast forever', body:'Static-first hosting, image optimization, lazy loading. Your site stays fast as it grows.'}
    ],
    process: [
      {title:'Discovery call', body:'30 minutes. We understand your business, audience, and constraints. You leave with a written quote.'},
      {title:'Design sprint', body:'Two weeks. We sketch, prototype, and iterate on hi-fi mockups. You sign off before any code ships.'},
      {title:'Build', body:'Two to six weeks depending on scope. Daily progress builds, weekly demos, no surprises.'},
      {title:'Launch & handoff', body:'We deploy, configure DNS, set up analytics, and hand you the keys. Documentation included.'},
      {title:'Aftercare', body:'30 days of free fixes. Optional retainer for ongoing changes after that.'}
    ],
    plans: [
      {name:'Base', price:'25', priceCurrency:'€', per:'month', blurb:'Essential web presence. Perfect for freelancers, portfolios, and landing pages.', features:['Single page website (up to 3 sections)','Hosting & Domain included','Mobile-responsive design','SSL Certificate & Security','Basic contact form','Monthly technical maintenance'], cta:'Get Started'},
      {name:'Pro', price:'50', priceCurrency:'€', per:'month', blurb:'Full-featured website for businesses. Ideal for showcasing services and acquiring clients.', features:['Multi-page website (up to 10 pages)','Standard Hosting & Domain included','Blog or News section','Basic SEO optimization','Monthly backups','1 Hour/month of content updates','Priority support'], cta:'Get Started'},
      {name:'Custom', price:'Custom', priceCurrency:'€', per:'project', blurb:'Tailored to your needs. Complex platforms, e-commerce, or web apps requiring unique functionalities.', features:['Unlimited pages or Advanced E-commerce','High-performance dedicated hosting','Custom API & Third-party integrations','Advanced SEO & Analytics dashboards','Weekly backups & Security hardening','Dedicated SLA & Priority updates','1-on-1 strategic consulting calls'], cta:'Let\'s Talk'}
    ],
    faq: [
      {q:'Do you use WordPress?', a:"Only if you specifically ask. Our default stack is hand-coded HTML/CSS/JS or Astro/Next.js — faster, more secure, and more maintainable. WordPress is fine for blogs but slow and fragile for marketing sites."},
      {q:'How long does it take?', a:"Starter sites ship in 2–3 weeks. Pro sites in 4–6 weeks. Custom builds vary. We give you a fixed timeline before any code is written."},
      {q:'Who hosts it?', a:"You do — we set up Vercel, Netlify, or your existing host on your account. No vendor lock-in. You own everything."},
      {q:'Can I edit content myself?', a:"Yes. The Pro and Custom plans include a CMS so you can update copy, images, and blog posts without touching code."},
      {q:'What about ongoing updates?', a:"After the included support period, we offer optional retainers (€400–€1,200/mo) or one-off changes billed hourly."}
    ],
    examples: [
      {title:'Studio Roma', tag:'Architecture firm — corporate site'},
      {title:'Mela Café', tag:'Restaurant chain — landing + reservations'},
      {title:'Vento SRL', tag:'B2B manufacturer — multi-language'}
    ],
    meta: {timeline:'2–6 weeks', from:'€1,800', stack:'Astro / Next.js / Sanity', lead:'~2 weeks'}
  },

  management: {
    num: '02', slug: 'management', title: 'Management Software',
    tagline: 'Software shaped to your business',
    blurb: 'Tailor-made business software: CRM, ERP, inventory, invoicing, HR. All integrated, all yours. We build the back-office that off-the-shelf SaaS could never quite fit.',
    stats: [{v:'12', l:'Systems built'}, {v:'5x', l:'Avg time saved'}, {v:'100%', l:'Yours to own'}, {v:'∞', l:'Customizable'}],
    features: [
      {title:'CRM that fits', body:'Pipeline, contacts, tasks — modeled around your sales process, not Salesforce\'s.'},
      {title:'Inventory & ERP', body:'Stock, suppliers, purchase orders, multi-warehouse. With the views and reports you actually need.'},
      {title:'Invoicing & accounting', body:'Generate, send, track. Connect to your accountant\'s tools or export the formats they want.'},
      {title:'HR & internal tools', body:'Time-off, expenses, onboarding flows. Replace 5 spreadsheets with one system.'}
    ],
    process: [
      {title:'Audit your current mess', body:'We map every spreadsheet, tool, and process you use today. Output: a single document showing where time is leaking.'},
      {title:'Scope the MVP', body:'We pick the highest-leverage modules to build first. Everything else gets parked for phase 2.'},
      {title:'Design + build', body:'Iterative sprints. You see working software within 4 weeks, fully usable within 8–12.'},
      {title:'Migrate your data', body:'Import contacts, history, inventory from your existing tools. We handle the messy CSV.'},
      {title:'Train your team', body:'Live workshops, video walkthroughs, written docs. Adoption is the hardest part — we treat it that way.'}
    ],
    plans: [
      {name:'Base', price:'49', priceCurrency:'€', per:'month', blurb:'Core system with essential features. Perfect for small teams getting started with digital management.', features:['Single module of your choice (CRM, Inventory, or Invoicing)','Up to 5 user accounts','Cloud hosting & maintenance included','Basic dashboard & reporting','Data import/export (CSV)','Standard email support'], cta:'Get Started'},
      {name:'Pro', price:'149', priceCurrency:'€', per:'month', blurb:'Full-featured platform with all modules, ongoing support, and continuous improvements.', features:['All modules included (CRM, ERP, Inventory, Invoicing, HR)','Unlimited user accounts','Advanced analytics & custom reports','API access & third-party integrations','Priority support (24h response)','Automated daily backups & security','Up to 3h/month custom development'], cta:'Get Started'},
      {name:'Enterprise', price:'Custom', priceCurrency:'€', per:'project', blurb:'Multi-entity, multi-currency, role-based. Built for ambitious operations.', features:['Unlimited modules','Unlimited users','SSO & advanced roles','Audit logs & compliance','Dedicated environment','12 months support'], cta:'Get a Quote'}
    ],
    faq: [
      {q:'Why not just use Odoo / SAP / Salesforce?', a:"Off-the-shelf systems force your business to bend to their model. We build software shaped to your actual workflows. The result: less training, fewer workarounds, more leverage."},
      {q:'Where is my data hosted?', a:"Your choice — our EU cloud, your AWS/GCP account, or fully on-premise. You own the data and the code."},
      {q:'Can it integrate with my existing tools?', a:"Yes. We integrate with anything that has an API or a CSV export — accounting, banks, marketplaces, shipping carriers, you name it."},
      {q:'What if our needs change?', a:"That's the point of custom software. New module, new field, new workflow — we add it. No \"premium tier\" to upgrade to."},
      {q:'Do you offer maintenance?', a:"Yes. Most clients move to a monthly retainer (€800–€3,000/mo) for ongoing changes, monitoring, and on-call support."}
    ],
    examples: [
      {title:'Bonsai Logistics', tag:'Custom WMS — 4 warehouses'},
      {title:'Atelier Nord', tag:'CRM + invoicing — 30 designers'},
      {title:'Verde Retail', tag:'Inventory + POS sync'}
    ],
    meta: {timeline:'4–16 weeks', from:'€6,500', stack:'Node / Postgres / React', lead:'~3 weeks'}
  },

  ecommerce: {
    num: '03', slug: 'ecommerce', title: 'E-commerce',
    tagline: 'Stores ready to sell',
    blurb: 'Online stores ready to sell: product catalogue, cart, payments, shipping. We build your shop from scratch — fast, conversion-tuned, and free of the platform tax.',
    stats: [{v:'15', l:'Stores live'}, {v:'+38%', l:'Avg conversion lift'}, {v:'<1s', l:'Time to interactive'}, {v:'0%', l:'Platform fees'}],
    features: [
      {title:'Catalogue, done right', body:'Variants, options, bundles, custom attributes. Plus an admin your team can actually use.'},
      {title:'Cart & checkout', body:'One-page checkout, address autofill, guest mode. Reduces drop-off compared to Shopify defaults.'},
      {title:'Payments everywhere', body:'Stripe, PayPal, Klarna, SEPA, local methods. Multi-currency, tax-inclusive pricing supported.'},
      {title:'Shipping & fulfillment', body:'Live carrier rates, label printing, returns. Integrates with your warehouse or 3PL.'}
    ],
    process: [
      {title:'Audit your catalogue', body:'How many SKUs, variants, fulfillment regions? We map the complexity before we quote.'},
      {title:'Design the storefront', body:'Hi-fi mockups for home, PLP, PDP, cart, checkout. We prototype the entire purchase flow.'},
      {title:'Build & integrate', body:'Storefront + admin + payments + shipping + tax. Deployed to staging weekly for QA.'},
      {title:'Migrate products', body:'We import your existing catalogue, customers, and order history. No lost data.'},
      {title:'Launch & optimize', body:'Soft launch, analytics setup, conversion-rate audit at 30 and 90 days post-launch.'}
    ],
    plans: [
      {name:'Base', price:'49', priceCurrency:'€', per:'month', blurb:'Essential online store for small catalogs. Perfect for artisans, boutiques, and digital products.', features:['Up to 50 products','E-commerce Hosting & SSL included','Shopping cart & secure checkout','Stripe & PayPal integration','Basic inventory management','Mobile-responsive design','Monthly technical maintenance'], cta:'Get Started'},
      {name:'Pro', price:'149', priceCurrency:'€', per:'month', blurb:'Full-featured store with unlimited products, advanced features, and ongoing support.', features:['Unlimited products & categories','High-performance Dedicated Hosting','Advanced search & filtering','Customer accounts & wishlists','Automated shipping & tax calculators','Advanced analytics & reporting','Priority support & daily backups','Security & PCI compliance monitoring'], cta:'Get Started'},
      {name:'Enterprise', price:'Custom', priceCurrency:'€', per:'project', blurb:'B2B portals, ERP sync, custom checkout flows, headless commerce.', features:['Unlimited SKUs','Headless / custom storefront','ERP & PIM integration','B2B portals & quotes','Dedicated infrastructure','12-month support'], cta:'Get a Quote'}
    ],
    faq: [
      {q:'Should I just use Shopify?', a:"For small shops with simple needs — sure. Once you grow past Shopify's flexibility, app fees, or transaction fees, custom pays off fast. We can also build a custom Shopify theme/app if you want hybrid."},
      {q:'Can you migrate from Shopify / WooCommerce?', a:"Yes. We've migrated catalogues, customers, and order history from all the major platforms. Migrations are scoped separately from the build."},
      {q:'How does payment work?', a:"You set up your own Stripe / PayPal accounts. Money goes directly to you. We never touch funds."},
      {q:'What about international tax?', a:"VAT, OSS/IOSS for EU, US sales tax via TaxJar/Stripe Tax. We configure it for your jurisdictions during the build."},
      {q:'Can my team manage products?', a:"Yes. Every store comes with a custom admin so non-technical staff can add, edit, and publish products."}
    ],
    examples: [
      {title:'Ferro & Lana', tag:'Premium menswear — 600 SKUs'},
      {title:'Olio Toscano', tag:'D2C food — multi-region tax'},
      {title:'Studio Carta', tag:'Custom stationery configurator'}
    ],
    meta: {timeline:'3–10 weeks', from:'€4,200', stack:'Next.js / Stripe / Sanity', lead:'~2 weeks'}
  },

  mobile: {
    num: '04', slug: 'mobile', title: 'Mobile Apps',
    tagline: 'iOS + Android, native-feeling',
    blurb: 'Native or hybrid iOS and Android apps for your customers or internal teams. Intuitive interfaces, high performance, and a single codebase when it makes sense.',
    stats: [{v:'8', l:'Apps in stores'}, {v:'4.7★', l:'Avg App Store rating'}, {v:'2', l:'Platforms, 1 build'}, {v:'~60fps', l:'Always smooth'}],
    features: [
      {title:'React Native or native', body:'We default to React Native for speed and shared code. Swift / Kotlin when the use case demands it.'},
      {title:'Designed for thumbs', body:'Mobile-native interaction patterns, gesture support, haptics. Not just a website in a wrapper.'},
      {title:'Offline-first', body:'Local caching, optimistic UI, background sync. Works in the metro, in the warehouse, on the plane.'},
      {title:'Push, deep links, OTA', body:'Push notifications, universal links, over-the-air updates. Ship fixes without waiting on store review.'}
    ],
    process: [
      {title:'Define the core loop', body:'What is the one thing users should do every day? We design the rest of the app around that.'},
      {title:'Prototype on device', body:'Working prototype on real iOS + Android within 3 weeks. You hold it, tap it, break it.'},
      {title:'Build', body:'4–10 weeks. TestFlight + Google Play Internal Testing builds every week so stakeholders can play along.'},
      {title:'Store submission', body:'We handle App Store + Play Store submission, screenshots, descriptions, and the inevitable review back-and-forth.'},
      {title:'Post-launch tuning', body:'Crash monitoring, analytics, A/B tests on key flows. We fix what users actually struggle with.'}
    ],
    plans: [
      {name:'Base', price:'499', priceCurrency:'$', per:'one-time', blurb:'Essential mobile app with core functionality. Perfect for MVPs, internal tools, and simple customer apps.', features:['iOS or Android','Up to 10 screens','Auth + 1 backend','TestFlight / MDM dist.','60-day support'], cta:'Get Started'},
      {name:'Pro', price:'200', priceCurrency:'$', per:'month', blurb:'Full cross-platform app with advanced features, ongoing maintenance, and priority support.', features:['iOS + Android','Up to 25 screens','Push notifications','In-app payments','Analytics + crash reporting','90-day support'], cta:'Get Started'},
      {name:'Custom', price:'Custom', priceCurrency:'$', per:'project', blurb:'Complex apps with custom backends, real-time, native modules.', features:['Native modules','Real-time + offline sync','Custom backend','Multi-region infra','Dedicated team','12-month support'], cta:'Get a Quote'}
    ],
    faq: [
      {q:'Native or React Native?', a:"React Native by default — it shares ~85% of code across iOS and Android, ships faster, and matches native performance for almost all consumer apps. We go full native (Swift/Kotlin) when you need heavy graphics, ARKit, or platform-specific deep integrations."},
      {q:'Will it feel like a real app?', a:"Yes. We use platform-native components, follow Apple HIG and Material guidelines, and test on real devices. Users shouldn't be able to tell it's React Native."},
      {q:'What about backend?', a:"We can build it (Node/Postgres) or integrate with what you have. Auth, push, payments, file storage — all standard."},
      {q:'How long does store review take?', a:"1–3 days for Apple, 1–2 days for Google. Usually. We handle the back-and-forth."},
      {q:'Updates after launch?', a:"OTA updates for non-native changes (instant). Native changes go through store review like normal. Most clients move to a monthly retainer for ongoing work."}
    ],
    examples: [
      {title:'Foglia Tracker', tag:'Field workers — offline-first'},
      {title:'Locale', tag:'Neighborhood social app — iOS + Android'},
      {title:'Vetro POS', tag:'Hospitality POS — iPad'}
    ],
    meta: {timeline:'6–14 weeks', from:'€8,500', stack:'React Native / Swift / Kotlin', lead:'~3 weeks'}
  },

  automation: {
    num: '05', slug: 'automation', title: 'Automation & APIs',
    tagline: 'Less manual work. More leverage.',
    blurb: 'We connect your systems, automate repetitive tasks, and wire up different tools via API. Less manual work, more efficiency. Your team stops being a human integration layer.',
    stats: [{v:'120+', l:'Workflows live'}, {v:'~30h', l:'Avg saved/week'}, {v:'24/7', l:'Always-on'}, {v:'API-first', l:'No-lock-in'}],
    features: [
      {title:'System-to-system glue', body:'Connect your CRM, accounting, e-commerce, marketing tools, warehouse, anything with an API.'},
      {title:'Custom API endpoints', body:'When public APIs aren\'t enough, we build them. REST, GraphQL, or webhooks — your call.'},
      {title:'Scheduled jobs & ETL', body:'Nightly imports, weekly reports, monthly reconciliation. Set it once, runs forever.'},
      {title:'Monitoring + alerts', body:'Every workflow has logs and alerts. When something breaks at 3am, the right person knows.'}
    ],
    process: [
      {title:'Map your workflows', body:'Where are people doing the same task by hand twice? We list every candidate, ranked by hours saved.'},
      {title:'Pick the highest leverage', body:'We don\'t automate everything. We automate the 3–5 things that pay back fastest.'},
      {title:'Build & test', body:'Each workflow gets built, tested with real data, and reviewed with you. Most ship in days, not weeks.'},
      {title:'Deploy & monitor', body:'We host the automations on infrastructure you own (AWS, GCP, your servers). Logging and alerts wired in.'},
      {title:'Iterate', body:'Once your team sees what\'s possible, more candidates surface. We add to the queue and keep shipping.'}
    ],
    plans: [
      {name:'Base', price:'99', priceCurrency:'$', per:'one-time', blurb:'Single integration between two services. Perfect for connecting a couple of tools to start automating.', features:['1 workflow','Up to 3 systems','Logging + alerts','30-day support','Source code yours'], cta:'Get Started'},
      {name:'Pro', price:'75', priceCurrency:'$', per:'month', blurb:'Full automation platform with unlimited integrations, monitoring, and ongoing optimization.', features:['Up to 6 workflows','Workflow audit','Custom dashboards','Monitoring infrastructure','60-day support'], cta:'Get Started'},
      {name:'Custom', price:'Custom', priceCurrency:'$', per:'project', blurb:'Custom internal API, full event-driven backbone. Your business runs on it.', features:['Unlimited workflows','Custom API + webhooks','Event bus','Admin dashboard','Dedicated infra','12-month support'], cta:'Get a Quote'}
    ],
    faq: [
      {q:'Why not Zapier / Make?', a:"For 3–5 step workflows over standard apps — they're great. Once you hit data volume, complex logic, or per-task fees that exceed €200/mo, custom code pays back in 2–3 months."},
      {q:'Where do automations run?', a:"Your cloud — AWS Lambda, Google Cloud Functions, or your own servers. You own the code and the infrastructure. No vendor lock-in."},
      {q:'What if an integration breaks?', a:"We monitor every workflow. When an API changes or fails, we get alerted before you do. Retainer clients get same-day fixes."},
      {q:'Can you integrate with [my obscure tool]?', a:"If it has an API, a webhook, a CSV export, or an email gateway — yes. Tell us what you've got."},
      {q:'How is this priced?', a:"Per workflow for one-offs. Per sprint for batches. Retainer (€600–€2,500/mo) for ongoing work and monitoring."}
    ],
    examples: [
      {title:'Lago Logistics', tag:'WMS ↔ shipping carrier sync'},
      {title:'Gemma SRL', tag:'Stripe → Fattura24 reconciliation'},
      {title:'Pino Wholesale', tag:'B2B order intake API'}
    ],
    meta: {timeline:'1–6 weeks', from:'€1,200', stack:'Node / Python / AWS', lead:'~1 week'}
  },

  seo: {
    num: '06', slug: 'seo', title: 'SEO & Performance',
    tagline: 'Real visibility. Measurable results.',
    blurb: 'We optimize your site for search engines, load speed, and conversions. Real visibility. Measurable results. No black-hat tricks, no monthly retainer trap — just compounding wins.',
    stats: [{v:'+312%', l:'Avg organic lift'}, {v:'<1s', l:'TTI target'}, {v:'90+', l:'Lighthouse goal'}, {v:'0', l:'Dark patterns'}],
    features: [
      {title:'Technical SEO audit', body:'Crawl, index, schema, sitemap, robots, Core Web Vitals. We find the leaks and patch them.'},
      {title:'On-page optimization', body:'Title tags, meta, headings, internal linking, content gaps. Every page earns its rankings.'},
      {title:'Performance tuning', body:'Image optimization, code splitting, font loading, caching headers. Faster sites convert better.'},
      {title:'Reporting that\'s honest', body:'Monthly dashboard: rankings, traffic, conversions. No vanity metrics, no impressions theater.'}
    ],
    process: [
      {title:'Baseline audit', body:'2-week deep dive: technical, content, backlinks, competitors. You get a 40-page report with prioritized fixes.'},
      {title:'Quick wins (week 3–4)', body:'We ship the top-10 fastest fixes — meta, schema, broken links, page speed. Often moves the needle within weeks.'},
      {title:'Content & structure (month 2–3)', body:'Cluster strategy, pillar pages, internal links. We work with your team or write copy ourselves.'},
      {title:'Performance pass', body:'Lighthouse 90+, sub-second TTI, optimal CLS. Speed is a ranking factor and a conversion factor.'},
      {title:'Track, iterate, compound', body:'Monthly review of what\'s ranking, what\'s not, and what\'s next. SEO is a long game — we play it patiently.'}
    ],
    plans: [
      {name:'Base', price:'99', priceCurrency:'$', per:'one-time', blurb:'One-time optimization audit with actionable fixes. Perfect for sites needing a performance boost and SEO basics.', features:['Technical SEO audit','Content & keyword analysis','Competitor benchmark','Page speed audit','40-page report'], cta:'Get Started'},
      {name:'Pro', price:'50', priceCurrency:'$', per:'month', blurb:'Continuous monitoring and monthly improvements. Keep your site fast, ranked, and converting.', features:['Full audit','Top 20 fixes shipped','Schema + sitemap','Performance pass','60-day monitoring'], cta:'Get Started'},
      {name:'Custom', price:'Custom', priceCurrency:'$', per:'month', blurb:'Monthly retainer. Continuous content, link building, technical work, monthly reporting.', features:['Monthly content (4 pieces)','Link-building outreach','Continuous tech SEO','Monthly dashboard','Quarterly strategy review'], cta:'Get a Quote'}
    ],
    faq: [
      {q:'How long until I see results?', a:"Technical fixes show in 2–6 weeks. Content rankings take 3–6 months. Anyone promising you results in week 1 is selling vanity metrics."},
      {q:'Do you do link building?', a:"Yes — outreach, PR, guest posts, digital PR. White-hat only. We don\'t buy links, ever."},
      {q:'Can you write content?', a:"Yes. Or we work with your in-house team / freelancers and provide briefs, structure, and editing."},
      {q:'What about Google\'s algorithm changes?', a:"We focus on the fundamentals — fast sites, useful content, clear structure. Updates affect us less than they affect black-hat shops."},
      {q:'Will my traffic drop if I leave?', a:"No. The work we do is yours forever. Pages we built, schema we added, content we wrote — it stays. That\'s why we don\'t lock you in."}
    ],
    examples: [
      {title:'Casa Verde', tag:'Real estate — +412% organic in 9 mo'},
      {title:'Numero Uno', tag:'B2B SaaS — featured snippets x18'},
      {title:'Pasta Padova', tag:'Local SEO — top 3 in 4 cities'}
    ],
    meta: {timeline:'2 weeks audit, ongoing', from:'€1,500', stack:'Lighthouse / Ahrefs / GSC', lead:'~1 week'}
  },

  // Italian translations
  it: {
    websites: {
      title: 'Siti Web',
      tagline: 'Siti web custom, costruiti veloci',
      blurb: 'Siti web custom costruiti veloci e ottimizzati per ogni dispositivo. Da una landing page a portali aziendali completi — codificati a mano, performanti, tuoi per sempre.',
      stats: [{v:'40+', l:'Siti consegnati'}, {v:'<1s', l:'Caricamento medio'}, {v:'A+', l:'PageSpeed medio'}, {v:'100%', l:'Codice custom'}],
      features: [
        {title:'Codificati a mano, senza builder', body:'Niente bloat WordPress, niente lock-in Wix. HTML/CSS/JS pulito o framework moderni quando servono.'},
        {title:'Mobile-first, sempre', body:'Progettati e testati su dispositivi reali. Layout che respirano a ogni breakpoint.'},
        {title:'CMS se vuoi', body:'Modifica i tuoi contenuti tramite un CMS headless leggero — Sanity, Strapi, o Markdown se preferisci.'},
        {title:'Veloce per sempre', body:'Hosting static-first, ottimizzazione immagini, lazy loading. Il tuo sito resta veloce mentre cresce.'}
      ],
      process: [
        {title:'Chiamata di scoperta', body:'30 minuti. Capiamo il tuo business, pubblico e vincoli. Esci con un preventivo scritto.'},
        {title:'Design sprint', body:'Due settimane. Schizziamo, prototipiamo e iteriamo su mockup hi-fi. Approvi prima che parta il codice.'},
        {title:'Build', body:'Due-sei settimane a seconda dello scope. Build di progresso giornalieri, demo settimanali, niente sorprese.'},
        {title:'Lancio e consegna', body:'Distribuiamo, configuriamo DNS, impostiamo analytics e ti consegnamo le chiavi. Documentazione inclusa.'},
        {title:'Post-lancio', body:'30 giorni di fix gratuiti. Retainer opzionale per modifiche continue dopo.'}
      ],
      plans: [
        {name:'Base', price:'25', priceCurrency:'€', per:'month', blurb:'Presenza web essenziale. Perfetto per freelance, portfolio e landing page.', features:['Sito single page (fino a 3 sezioni)','Hosting & Dominio inclusi','Design mobile-responsive','Certificato SSL & Sicurezza','Form di contatto base','Manutenzione tecnica mensile'], cta:'Inizia'},
        {name:'Pro', price:'50', priceCurrency:'€', per:'month', blurb:'Sito completo per aziende. Ideale per mostrare servizi e acquisire clienti.', features:['Sito multi-pagina (fino a 10 pagine)','Hosting Standard & Dominio inclusi','Sezione Blog o News','Ottimizzazione SEO base','Backup mensili','1 Ora/mese di aggiornamenti contenuti','Supporto prioritario'], cta:'Inizia'},
        {name:'Custom', price:'Custom', priceCurrency:'€', per:'project', blurb:'Su misura per te. Piattaforme complesse, e-commerce o web app con funzionalità uniche.', features:['Pagine illimitate o E-commerce avanzato','Hosting dedicato ad alte prestazioni','API custom & Integrazioni terze parti','SEO avanzato & Dashboard analytics','Backup settimanali & Hardening sicurezza','SLA dedicato & Aggiornamenti prioritari','Consulenza strategica 1-a-1'], cta:'Parliamone'}
      ],
      faq: [
        {q:'Usi WordPress?', a:"Solo se lo chiedi specificamente. Il nostro stack di default è HTML/CSS/JS codificato a mano o Astro/Next.js — più veloce, sicuro e manutenibile. WordPress va bene per blog ma è lento e fragile per siti marketing."},
        {q:'Quanto tempo ci vuole?', a:"Siti Starter in 2–3 settimane. Siti Pro in 4–6 settimane. Build custom variano. Ti diamo una timeline fissa prima di scrivere codice."},
        {q:'Chi lo ospita?', a:"Tu — configuriamo Vercel, Netlify o il tuo host esistente sul tuo account. Niente lock-in. Possiedi tutto."},
        {q:'Posso modificare i contenuti da solo?', a:"Sì. I piani Pro e Custom includono un CMS così puoi aggiornare copy, immagini e post blog senza toccare codice."},
        {q:'Per gli aggiornamenti continui?', a:"Dopo il periodo di supporto incluso, offriamo retainers opzionali (€400–€1,200/mo) o modifiche una tantum fatturate orariamente."}
      ],
      examples: [
        {title:'Studio Roma', tag:'Studio architettura — sito corporate'},
        {title:'Mela Café', tag:'Catena ristoranti — landing + prenotazioni'},
        {title:'Vento SRL', tag:'Produttore B2B — multi-lingua'}
      ],
      meta: {timeline:'2–6 settimane', from:'€25/mese', stack:'Astro / Next.js / Sanity', lead:'~2 settimane'}
    },

    management: {
      title: 'Software Gestionale',
      tagline: 'Software modellato sul tuo business',
      blurb: 'Software gestionale su misura: CRM, ERP, magazzino, fatturazione, HR. Tutto integrato, tutto tuo. Costruiamo il back-office che il SaaS off-the-shelf non potrebbe mai adattarsi.',
      stats: [{v:'12', l:'Sistemi costruiti'}, {v:'5x', l:'Tempo risparmiato medio'}, {v:'100%', l:'Tuo per sempre'}, {v:'∞', l:'Personalizzabile'}],
      features: [
        {title:'CRM che si adatta', body:'Pipeline, contatti, task — modellati sul tuo processo di vendita, non su quello di Salesforce.'},
        {title:'Magazzino & ERP', body:'Stock, fornitori, ordini di acquisto, multi-magazzino. Con le viste e report di cui hai davvero bisogno.'},
        {title:'Fatturazione & contabilità', body:'Genera, invia, traccia. Connetti agli strumenti del tuo commercialista o esporta i formati che vuole.'},
        {title:'HR & strumenti interni', body:'Permessi, spese, flussi di onboarding. Sostituisci 5 fogli spreadsheet con un sistema.'}
      ],
      process: [
        {title:'Audita il tuo caos attuale', body:'Mappiamo ogni spreadsheet, strumento e processo che usi oggi. Output: un documento singolo che mostra dove perdi tempo.'},
        {title:'Definisci l\'MVP', body:'Scegliamo i moduli a più alto impatto da costruire per primi. Tutto il resto va in fase 2.'},
        {title:'Design + build', body:'Sprint iterativi. Vedi software funzionante entro 4 settimane, completamente usabile entro 8–12.'},
        {title:'Migra i tuoi dati', body:'Importa contatti, storia, magazzino dai tuoi strumenti esistenti. Gestiamo i CSV complicati.'},
        {title:'Addestra il tuo team', body:'Workshop live, walkthrough video, documenti scritti. L\'adozione è la parte più difficile — la trattiamo come tale.'}
      ],
      plans: [
        {name:'Base', price:'49', priceCurrency:'€', per:'month', blurb:'Sistema core con funzionalità essenziali. Perfetto per piccoli team che iniziano con la gestione digitale.', features:['Un modulo a tua scelta (CRM, Magazzino o Fatturazione)','Fino a 5 account utente','Hosting cloud & manutenzione inclusi','Dashboard & report base','Import/export dati (CSV)','Supporto email standard'], cta:'Inizia'},
        {name:'Pro', price:'149', priceCurrency:'€', per:'month', blurb:'Piattaforma completa con tutti i moduli, supporto continuo e miglioramenti continui.', features:['Tutti i moduli inclusi (CRM, ERP, Magazzino, Fatturazione, HR)','Account utente illimitati','Analytics avanzati & report custom','Accesso API & integrazioni terze parti','Supporto prioritario (risposta 24h)','Backup automatici giornalieri & sicurezza','Fino a 3h/mese sviluppo custom'], cta:'Inizia'},
        {name:'Enterprise', price:'Custom', priceCurrency:'€', per:'project', blurb:'Multi-entity, multi-valuta, role-based. Costruito per operazioni ambiziose.', features:['Moduli illimitati','Utenti illimitati','SSO & ruoli avanzati','Log di audit & compliance','Ambiente dedicato','12 mesi supporto'], cta:'Richiedi preventivo'}
      ],
      faq: [
        {q:'Perché non usare Odoo / SAP / Salesforce?', a:"I sistemi off-the-shelf costringono il tuo business ad adattarsi al loro modello. Noi costruiamo software modellato sui tuoi workflow reali. Risultato: meno formazione, meno workaround, più leva."},
        {q:'Dove sono ospitati i miei dati?', a:"A tua scelta — cloud EU, tuo account AWS/GCP, o completamente on-premise. Possiedi i dati e il codice."},
        {q:'Può integrarsi con i miei strumenti esistenti?', a:"Sì. Integriamo qualsiasi cosa abbia API o export CSV — contabilità, banche, marketplace, vettori spedizione, qualsiasi cosa."},
        {q:'Se le nostre esigenze cambiano?', a:"Questo è il punto del software custom. Nuovo modulo, nuovo campo, nuovo workflow — lo aggiungiamo. Niente \"tier premium\" a cui aggiornarsi."},
        {q:'Offrite manutenzione?', a:"Sì. La maggior parte dei clienti passa a un retainer mensile (€800–€3,000/mo) per modifiche continue, monitoraggio e supporto on-call."}
      ],
      examples: [
        {title:'Bonsai Logistics', tag:'WMS custom — 4 magazzini'},
        {title:'Atelier Nord', tag:'CRM + fatturazione — 30 designer'},
        {title:'Verde Retail', tag:'Magazzino + sync POS'}
      ],
      meta: {timeline:'4–16 settimane', from:'€49/mese', stack:'Node / Postgres / React', lead:'~3 settimane'}
    },

    ecommerce: {
      title: 'E-commerce',
      tagline: 'Negozi pronti a vendere',
      blurb: 'Negozi online pronti a vendere: catalogo prodotti, carrello, pagamenti, spedizioni. Costruiamo il tuo shop da zero — veloce, ottimizzato per conversioni, senza tassa piattaforma.',
      stats: [{v:'15', l:'Negozi live'}, {v:'+38%', l:'Aumento conversione medio'}, {v:'<1s', l:'Time to interactive'}, {v:'0%', l:'Commissioni piattaforma'}],
      features: [
        {title:'Catalogo, fatto bene', body:'Varianti, opzioni, bundle, attributi custom. Più un admin che il tuo team può davvero usare.'},
        {title:'Carrello & checkout', body:'Checkout one-page, autofill indirizzi, modalità guest. Riduce l\'abbandono rispetto ai default Shopify.'},
        {title:'Pagamenti ovunque', body:'Stripe, PayPal, Klarna, SEPA, metodi locali. Multi-valuta, prezzi tax-inclusive supportati.'},
        {title:'Spedizioni & fulfillment', body:'Tariffe vettore live, stampa etichette, resi. Integra con il tuo magazzino o 3PL.'}
      ],
      process: [
        {title:'Audita il tuo catalogo', body:'Quanti SKU, varianti, regioni fulfillment? Mappiamo la complessità prima di quotare.'},
        {title:'Progetta lo storefront', body:'Mockup hi-fi per home, PLP, PDP, carrello, checkout. Prototipiamo l\'intero flusso di acquisto.'},
        {title:'Build & integra', body:'Storefront + admin + pagamenti + spedizioni + tax. Distribuito su staging settimanalmente per QA.'},
        {title:'Migra prodotti', body:'Importiamo il tuo catalogo esistente, clienti e storia ordini. Niente dati persi.'},
        {title:'Lancia & ottimizza', body:'Soft launch, setup analytics, audit conversion-rate a 30 e 90 giorni post-lancio.'}
      ],
      plans: [
        {name:'Base', price:'49', priceCurrency:'€', per:'month', blurb:'Negozio online essenziale per cataloghi piccoli. Perfetto per artigiani, boutique e prodotti digitali.', features:['Fino a 50 prodotti','Hosting E-commerce & SSL inclusi','Carrello & checkout sicuro','Integrazione Stripe & PayPal','Gestione magazzino base','Design mobile-responsive','Manutenzione tecnica mensile'], cta:'Inizia'},
        {name:'Pro', price:'149', priceCurrency:'€', per:'month', blurb:'Negozio completo con prodotti illimitati, funzionalità avanzate e supporto continuo.', features:['Prodotti & categorie illimitati','Hosting dedicato ad alte prestazioni','Ricerca avanzata & filtering','Account clienti & wishlist','Calcolatori spedizioni & tax automatici','Analytics avanzati & reporting','Supporto prioritario & backup giornalieri','Monitoraggio sicurezza & compliance PCI'], cta:'Inizia'},
        {name:'Enterprise', price:'Custom', priceCurrency:'€', per:'project', blurb:'Portali B2B, sync ERP, flussi checkout custom, commerce headless.', features:['SKU illimitati','Storefront headless / custom','Integrazione ERP & PIM','Portali B2B & preventivi','Infrastruttura dedicata','12 mesi supporto'], cta:'Richiedi preventivo'}
      ],
      faq: [
        {q:'Perché non usare Shopify?', a:"Per piccoli shop con esigenze semplici — certo. Una volta superata la flessibilità di Shopify, le fee app o le fee transazione, il custom paga veloce. Possiamo anche costruire un tema/app Shopify custom se vuoi ibrido."},
        {q:'Puoi migrare da Shopify / WooCommerce?', a:"Sì. Abbiamo migrato cataloghi, clienti e storia ordini da tutte le piattaforme principali. Le migrazioni sono quotate separatamente dalla build."},
        {q:'Come funzionano i pagamenti?', a:"Configuri i tuoi account Stripe / PayPal. I soldi vanno direttamente a te. Non tocchiamo mai i fondi."},
        {q:'Per le tasse internazionali?', a:"VAT, OSS/IOSS per EU, sales tax US via TaxJar/Stripe Tax. Configuriamo per le tue giurisdizioni durante la build."},
        {q:'Il mio team può gestire prodotti?', a:"Sì. Ogni negozio include un admin custom così staff non-tecnico può aggiungere, modificare e pubblicare prodotti."}
      ],
      examples: [
        {title:'Ferro & Lana', tag:'Abbigliamento premium — 600 SKU'},
        {title:'Olio Toscano', tag:'Cibo D2C — tax multi-region'},
        {title:'Studio Carta', tag:'Configuratore cancelleria custom'}
      ],
      meta: {timeline:'3–10 settimane', from:'€49/mese', stack:'Next.js / Stripe / Sanity', lead:'~2 settimane'}
    },

    mobile: {
      title: 'App Mobile',
      tagline: 'iOS + Android, feeling nativo',
      blurb: 'App iOS e Android native o ibride per i tuoi clienti o team interni. Interfacce intuitive, alte performance, codebase singolo quando ha senso.',
      stats: [{v:'8', l:'App negli store'}, {v:'4.7★', l:'Rating medio App Store'}, {v:'2', l:'Piattaforme, 1 build'}, {v:'~60fps', l:'Sempre fluido'}],
      features: [
        {title:'React Native o nativo', body:'Default React Native per velocità e codice condiviso. Swift / Kotlin quando il caso d\'uso lo richiede.'},
        {title:'Progettato per pollici', body:'Pattern di interazione mobile-native, supporto gesture, haptics. Non solo un sito in un wrapper.'},
        {title:'Offline-first', body:'Caching locale, UI ottimistica, sync background. Funziona in metro, in magazzino, in aereo.'},
        {title:'Push, deep link, OTA', body:'Notifiche push, link universali, aggiornamenti over-the-air. Spedisci fix senza aspettare la review store.'}
      ],
      process: [
        {title:'Definisci il core loop', body:'Qual è la cosa che gli utenti dovrebbero fare ogni giorno? Progettiamo il resto dell\'app intorno a quello.'},
        {title:'Prototipa su dispositivo', body:'Prototipo funzionante su iOS + Android reali entro 3 settimane. Lo tieni in mano, lo tocchi, lo rompi.'},
        {title:'Build', body:'4–10 settimane. Build TestFlight + Google Play Internal Testing ogni settimana così gli stakeholder possono giocare.'},
        {title:'Sottomissione store', body:'Gestiamo sottomissione App Store + Play Store, screenshot, descrizioni e il inevitabile back-and-forth di review.'},
        {title:'Tuning post-lancio', body:'Monitoraggio crash, analytics, A/B test su flussi chiave. Correggiamo ciò con cui gli utenti lottano davvero.'}
      ],
      plans: [
        {name:'Base', price:'499', priceCurrency:'$', per:'one-time', blurb:'App mobile essenziale con funzionalità core. Perfetto per MVP, strumenti interni e app clienti semplici.', features:['iOS o Android','Fino a 10 schermate','Auth + 1 backend','Distribuzione TestFlight / MDM','Supporto 60 giorni'], cta:'Inizia'},
        {name:'Pro', price:'200', priceCurrency:'$', per:'month', blurb:'App cross-platform completa con funzionalità avanzate, manutenzione continua e supporto prioritario.', features:['iOS + Android','Fino a 25 schermate','Notifiche push','Pagamenti in-app','Analytics + crash reporting','Supporto 90 giorni'], cta:'Inizia'},
        {name:'Custom', price:'Custom', priceCurrency:'$', per:'project', blurb:'App complesse con backend custom, real-time, moduli nativi.', features:['Moduli nativi','Real-time + sync offline','Backend custom','Infra multi-region','Team dedicato','12 mesi supporto'], cta:'Richiedi preventivo'}
      ],
      faq: [
        {q:'Nativo o React Native?', a:"React Native di default — condivide ~85% di codice tra iOS e Android, spedisce più veloce e abbina performance native per quasi tutte le app consumer. Andiamo full native (Swift/Kotlin) quando hai bisogno di grafica pesante, ARKit o integrazioni profonde platform-specific."},
        {q:'Sembrerà un\'app vera?', a:"Sì. Usiamo componenti platform-native, seguiamo Apple HIG e Material guidelines, testiamo su dispositivi reali. Gli utenti non dovrebbero distinguere che è React Native."},
        {q:'Per il backend?', a:"Possiamo costruirlo (Node/Postgres) o integrare con ciò che hai. Auth, push, pagamenti, storage file — tutto standard."},
        {q:'Quanto tempo ci mette la review store?', a:"1–3 giorni per Apple, 1–2 giorni per Google. Di solito. Gestiamo il back-and-forth."},
        {q:'Aggiornamenti dopo il lancio?', a:"Aggiornamenti OTA per cambi non-nativi (istantanei). Cambi nativi passano per review store come normale. La maggior parte dei clienti passa a retainer mensile per lavoro continuo."}
      ],
      examples: [
        {title:'Foglia Tracker', tag:'Lavoratori campo — offline-first'},
        {title:'Locale', tag:'App social quartiere — iOS + Android'},
        {title:'Vetro POS', tag:'POS hospitality — iPad'}
      ],
      meta: {timeline:'6–14 settimane', from:'$499', stack:'React Native / Swift / Kotlin', lead:'~3 settimane'}
    },

    automation: {
      title: 'Automazione & API',
      tagline: 'Meno lavoro manuale. Più leva.',
      blurb: 'Colleghiamo i tuoi sistemi, automatizziamo task ripetitivi, integriamo strumenti diversi via API. Meno lavoro manuale, più efficienza. Il tuo team smette di essere un layer di integrazione umano.',
      stats: [{v:'120+', l:'Workflow live'}, {v:'~30h', l:'Risparmiato/settimana medio'}, {v:'24/7', l:'Sempre attivo'}, {v:'API-first', l:'Nessun lock-in'}],
      features: [
        {title:'Colla sistema-sistema', body:'Connetti CRM, contabilità, e-commerce, strumenti marketing, magazzino, qualsiasi cosa con API.'},
        {title:'Endpoint API custom', body:'Quando le API pubbliche non bastano, le costruiamo. REST, GraphQL o webhooks — tua scelta.'},
        {title:'Job programmati & ETL', body:'Import notturni, report settimanali, riconciliazione mensile. Imposta una volta, gira per sempre.'},
        {title:'Monitoraggio + alert', body:'Ogni workflow ha log e alert. Quando qualcosa si rompe alle 3am, la persona giusta lo sa.'}
      ],
      process: [
        {title:'Mappa i tuoi workflow', body:'Dove le persone fanno lo stesso task a mano due volte? Elenchiamo ogni candidato, classificato per ore risparmiate.'},
        {title:'Scegli la leva più alta', body:"Non automatizziamo tutto. Automatizziamo le 3–5 cose che pagano più velocemente."},
        {title:'Build & test', body:'Ogni workflow viene costruito, testato con dati reali e revisionato con te. La maggior parte spedisce in giorni, non settimane.'},
        {title:'Distribuisci & monitora', body:'Ospitiamo le automazioni su infrastruttura tua (AWS, GCP, tuoi server). Logging e alert cablati.'},
        {title:'Itera', body:'Una volta che il tuo team vede cosa è possibile, più candidati emergono. Aggiungiamo alla coda e continuiamo a spedire.'}
      ],
      plans: [
        {name:'Base', price:'99', priceCurrency:'$', per:'one-time', blurb:'Singola integrazione tra due servizi. Perfetto per collegare un paio di strumenti per iniziare ad automatizzare.', features:['1 workflow','Fino a 3 sistemi','Logging + alert','Supporto 30 giorni','Codice sorgente tuo'], cta:'Inizia'},
        {name:'Pro', price:'75', priceCurrency:'$', per:'month', blurb:'Piattaforma automazione completa con integrazioni illimitate, monitoraggio e ottimizzazione continua.', features:['Fino a 6 workflow','Audit workflow','Dashboard custom','Infrastruttura monitoraggio','Supporto 60 giorni'], cta:'Inizia'},
        {name:'Custom', price:'Custom', priceCurrency:'$', per:'project', blurb:'API interna custom, backbone event-driven completa. Il tuo business ci gira sopra.', features:['Workflow illimitati','API custom + webhooks','Event bus','Dashboard admin','Infra dedicata','12 mesi supporto'], cta:'Richiedi preventivo'}
      ],
      faq: [
        {q:'Perché non Zapier / Make?', a:"Per workflow 3–5 step su app standard — sono ottimi. Una volta che colpisci volume dati, logica complessa o fee per-task che superano €200/mo, il codice custom ripaga in 2–3 mesi."},
        {q:'Dove girano le automazioni?', a:"Il tuo cloud — AWS Lambda, Google Cloud Functions o i tuoi server. Possiedi il codice e l\'infrastruttura. Nessun lock-in fornitore."},
        {q:'Se un\'integrazione si rompe?', a:"Monitoriamo ogni workflow. Quando un API cambia o fallisce, veniamo avvisati prima di te. I clienti retainer ricevono fix stesso giorno."},
        {q:'Puoi integrare con [il mio strumento oscuro]?', a:"Se ha API, webhook, export CSV o gateway email — sì. Dicci cosa hai."},
        {q:'Come è prezzato?', a:"Per workflow per one-off. Per sprint per batch. Retainer (€600–€2,500/mo) per lavoro continuo e monitoraggio."}
      ],
      examples: [
        {title:'Lago Logistics', tag:'Sync WMS ↔ vettore spedizione'},
        {title:'Gemma SRL', tag:'Riconciliazione Stripe → Fattura24'},
        {title:'Pino Wholesale', tag:'API ordini B2B'}
      ],
      meta: {timeline:'1–6 settimane', from:'$99', stack:'Node / Python / AWS', lead:'~1 settimana'}
    },

    seo: {
      title: 'SEO & Performance',
      tagline: 'Visibilità reale. Risultati misurabili.',
      blurb: 'Ottimizziamo il tuo sito per motori di ricerca, velocità di caricamento e conversioni. Visibilità reale. Risultati misurabili. Niente trucchi black-hat, niente trappola retainer mensile — solo vinci composti.',
      stats: [{v:'+312%', l:'Aumento organico medio'}, {v:'<1s', l:'Target TTI'}, {v:'90+', l:'Obiettivo Lighthouse'}, {v:'0', l:'Dark patterns'}],
      features: [
        {title:'Audit SEO tecnico', body:'Crawl, index, schema, sitemap, robots, Core Web Vitals. Troviamo le perdite e le ripariamo.'},
        {title:'Ottimizzazione on-page', body:'Title tag, meta, headings, linking interno, gap contenuti. Ogni pagina guadagna i suoi ranking.'},
        {title:'Tuning performance', body:'Ottimizzazione immagini, code splitting, loading font, caching header. Siti più veloci convertono meglio.'},
        {title:'Reporting onesto', body:'Dashboard mensile: ranking, traffico, conversioni. Niente vanity metrics, niente teatro impressions.'}
      ],
      process: [
        {title:'Audit baseline', body:'Deep dive 2-settimane: tecnico, contenuti, backlink, competitor. Ricevi un report 40 pagine con fix prioritizzati.'},
        {title:'Quick wins (settimana 3–4)', body:'Spediamo i top-10 fix più veloci — meta, schema, link rotti, page speed. Spesso muove l\'ago entro settimane.'},
        {title:'Contenuti & struttura (mese 2–3)', body:'Strategia cluster, pillar pages, link interni. Lavoriamo con il tuo team o scriviamo copy noi.'},
        {title:'Pass performance', body:'Lighthouse 90+, TTI sub-second, CLS ottimale. La velocità è fattore ranking e fattore conversione.'},
        {title:'Track, itera, composta', body:'Revisione mensile di cosa rank, cosa no e cosa dopo. SEO è un gioco lungo — lo giochiamo pazientemente.'}
      ],
      plans: [
        {name:'Base', price:'99', priceCurrency:'$', per:'one-time', blurb:'Audit ottimizzazione one-time con fix azionabili. Perfetto per siti che necessitano boost performance e SEO base.', features:['Audit SEO tecnico','Analisi contenuti & keyword','Benchmark competitor','Audit page speed','Report 40 pagine'], cta:'Inizia'},
        {name:'Pro', price:'50', priceCurrency:'$', per:'month', blurb:'Monitoraggio continuo e miglioramenti mensili. Tieni il tuo sito veloce, rankato e convertente.', features:['Audit completo','Top 20 fix spediti','Schema + sitemap','Pass performance','Monitoraggio 60 giorni'], cta:'Inizia'},
        {name:'Custom', price:'Custom', priceCurrency:'$', per:'month', blurb:'Retainer mensile. Contenuti continui, link building, lavoro tecnico, reporting mensile.', features:['Contenuti mensili (4 pezzi)','Outreach link-building','SEO tecnico continuo','Dashboard mensile','Review strategia trimestrale'], cta:'Richiedi preventivo'}
      ],
      faq: [
        {q:'Quanto tempo per vedere risultati?', a:"Fix tecnici mostrano in 2–6 settimane. Ranking contenuti richiedono 3–6 mesi. Chiunque prometta risultati settimana 1 vende vanity metrics."},
        {q:'Fai link building?', a:"Sì — outreach, PR, guest post, digital PR. Solo white-hat. Non compriamo link, mai."},
        {q:'Puoi scrivere contenuti?', a:"Sì. Oppure lavoriamo con il tuo team in-house / freelancer e forniamo brief, struttura e editing."},
        {q:'Per i cambi algoritmo di Google?', a:"Ci concentriamo sui fondamentali — siti veloci, contenuti utili, struttura chiara. Gli aggiornamenti ci colpiscono meno dei shop black-hat."},
        {q:'Il mio traffico cala se me ne vado?', a:"No. Il lavoro che facciamo è tuo per sempre. Pagine che abbiamo costruito, schema che abbiamo aggiunto, contenuti che abbiamo scritto — resta. Ecco perché non ti blocchiamo."}
      ],
      examples: [
        {title:'Casa Verde', tag:'Real estate — +412% organico in 9 mesi'},
        {title:'Numero Uno', tag:'B2B SaaS — featured snippets x18'},
        {title:'Pasta Padova', tag:'SEO locale — top 3 in 4 città'}
      ],
      meta: {timeline:'2 settimane audit, ongoing', from:'$99', stack:'Lighthouse / Ahrefs / GSC', lead:'~1 settimana'}
    }
  },

  // Spanish translations
  es: {
    websites: {
      title: 'Webs',
      tagline: 'Webs a medida, construidas rápido',
      blurb: 'Webs a medida construidas rápido y optimizadas para todo dispositivo. Desde landing page a portales corporativos — codificadas a mano, performantes, tuyas para siempre.',
      stats: [{v:'40+', l:'Webs entregadas'}, {v:'<1s', l:'Carga media'}, {v:'A+', l:'PageSpeed medio'}, {v:'100%', l:'Código a medida'}],
      features: [
        {title:'Codificadas a mano, sin builders', body:'Sin bloat WordPress, sin lock-in Wix. HTML/CSS/JS limpio o framework modernos cuando merecen la pena.'},
        {title:'Mobile-first, siempre', body:'Diseñado y testeado en dispositivos reales. Layouts que respiran en cada breakpoint.'},
        {title:'CMS si quieres', body:'Edita tus contenidos vía CMS headless ligero — Sanity, Strapi o Markdown si prefieres.'},
        {title:'Rápido para siempre', body:'Hosting static-first, optimización imágenes, lazy loading. Tu web se mantiene rápida mientras crece.'}
      ],
      process: [
        {title:'Llamada de descubrimiento', body:'30 minutos. Entendemos tu negocio, audiencia y restricciones. Sales con presupuesto escrito.'},
        {title:'Design sprint', body:'Dos semanas. Esbozamos, prototipamos e iteramos en mockups hi-fi. Apruebas antes de que salga código.'},
        {title:'Build', body:'Dos-seis semanas según scope. Builds de progreso diario, demos semanales, sin sorpresas.'},
        {title:'Lanzamiento y entrega', body:'Desplegamos, configuramos DNS, configuramos analytics y te entregamos las llaves. Documentación incluida.'},
        {title:'Post-lanzamiento', body:'30 días de fixes gratis. Retainer opcional para cambios continuos después.'}
      ],
      plans: [
        {name:'Base', price:'25', priceCurrency:'€', per:'month', blurb:'Presencia web esencial. Perfecto para freelancers, portfolios y landing pages.', features:['Web single page (hasta 3 secciones)','Hosting & Dominio incluidos','Design mobile-responsive','Certificado SSL & Seguridad','Formulario contacto base','Mantenimiento técnico mensual'], cta:'Empezar'},
        {name:'Pro', price:'50', priceCurrency:'€', per:'month', blurb:'Web completa para empresas. Ideal para mostrar servicios y adquirir clientes.', features:['Web multi-página (hasta 10 páginas)','Hosting Estándar & Dominio incluidos','Sección Blog o News','Optimización SEO base','Backups mensuales','1 Hora/mes de actualizaciones contenido','Soporte prioritario'], cta:'Empezar'},
        {name:'Custom', price:'Custom', priceCurrency:'€', per:'project', blurb:'A tu medida. Plataformas complejas, e-commerce o web apps con funcionalidades únicas.', features:['Páginas ilimitadas o E-commerce avanzado','Hosting dedicado alto rendimiento','API custom & Integraciones terceros','SEO avanzado & Dashboard analytics','Backups semanales & Hardening seguridad','SLA dedicado & Actualizaciones prioritarias','Consultoría estratégica 1-a-1'], cta:'Hablemos'}
      ],
      faq: [
        {q:'¿Usas WordPress?', a:"Solo si lo pides específicamente. Nuestro stack por defecto es HTML/CSS/JS codificado a mano o Astro/Next.js — más rápido, seguro y mantenible. WordPress va bien para blogs pero es lento y frágil para webs marketing."},
        {q:'¿Cuánto tiempo tarda?', a:"Webs Starter en 2–3 semanas. Webs Pro en 4–6 semanas. Builds custom varían. Te damos timeline fija antes de escribir código."},
        {q:'¿Quién lo aloja?', a:"Tú — configuramos Vercel, Netlify o tu host existente en tu cuenta. Sin lock-in. Posees todo."},
        {q:'¿Puedo editar contenido yo solo?', a:"Sí. Los planes Pro y Custom incluyen CMS así puedes actualizar copy, imágenes y posts blog sin tocar código."},
        {q:'¿Para actualizaciones continuas?', a:"Después del periodo de soporte incluido, ofrecemos retainers opcionales (€400–€1,200/mo) o cambios one-off facturados por hora."}
      ],
      examples: [
        {title:'Studio Roma', tag:'Estudio arquitectura — web corporate'},
        {title:'Mela Café', tag:'Cadena restaurantes — landing + reservas'},
        {title:'Vento SRL', tag:'Fabricante B2B — multi-idioma'}
      ],
      meta: {timeline:'2–6 semanas', from:'€25/mes', stack:'Astro / Next.js / Sanity', lead:'~2 semanas'}
    },

    management: {
      title: 'Software de Gestión',
      tagline: 'Software moldeado a tu negocio',
      blurb: 'Software de gestión a medida: CRM, ERP, inventario, facturación, RRHH. Todo integrado, todo tuyo. Construimos el back-office que el SaaS off-the-shelf nunca podría encajar.',
      stats: [{v:'12', l:'Sistemas construidos'}, {v:'5x', l:'Tiempo ahorrado medio'}, {v:'100%', l:'Tuyo para siempre'}, {v:'∞', l:'Personalizable'}],
      features: [
        {title:'CRM que encaja', body:'Pipeline, contactos, tasks — modelados en tu proceso de ventas, no en el de Salesforce.'},
        {title:'Inventario & ERP', body:'Stock, proveedores, pedidos compra, multi-almacén. Con las vistas y reportes que realmente necesitas.'},
        {title:'Facturación & contabilidad', body:'Genera, envía, rastrea. Conecta con herramientas de tu contable o exporta los formatos que quiere.'},
        {title:'RRHH & herramientas internas', body:'Permisos, gastos, flujos onboarding. Reemplaza 5 spreadsheets con un sistema.'}
      ],
      process: [
        {title:'Audita tu caos actual', body:'Mapeamos cada spreadsheet, herramienta y proceso que usas hoy. Output: un documento único mostrando dónde pierdes tiempo.'},
        {title:'Define el MVP', body:'Elegimos los módulos de más alto impacto para construir primero. Todo lo demás se aparca para fase 2.'},
        {title:'Design + build', body:'Sprints iterativos. Ves software funcionante en 4 semanas, completamente usable en 8–12.'},
        {title:'Migra tus datos', body:'Importa contactos, historia, inventario de tus herramientas existentes. Gestionamos los CSV complicados.'},
        {title:'Entrena tu equipo', body:'Workshops live, walkthroughs video, docs escritos. La adopción es la parte más difícil — la tratamos como tal.'}
      ],
      plans: [
        {name:'Base', price:'49', priceCurrency:'€', per:'month', blurb:'Sistema core con funcionalidades esenciales. Perfecto para equipos pequeños empezando gestión digital.', features:['Un módulo a tu elección (CRM, Inventario o Facturación)','Hasta 5 cuentas usuario','Hosting cloud & mantenimiento incluido','Dashboard & reportes base','Import/export datos (CSV)','Soporte email estándar'], cta:'Empezar'},
        {name:'Pro', price:'149', priceCurrency:'€', per:'month', blurb:'Plataforma completa con todos los módulos, soporte continuo y mejoras continuas.', features:['Todos los módulos incluidos (CRM, ERP, Inventario, Facturación, RRHH)','Cuentas usuario ilimitadas','Analytics avanzados & reportes custom','Acceso API & integraciones terceros','Soporte prioritario (respuesta 24h)','Backups automáticos diarios & seguridad','Hasta 3h/mes desarrollo custom'], cta:'Empezar'},
        {name:'Enterprise', price:'Custom', priceCurrency:'€', per:'project', blurb:'Multi-entity, multi-divisa, role-based. Construido para operaciones ambiciosas.', features:['Módulos ilimitados','Usuarios ilimitados','SSO & roles avanzados','Logs de audit & compliance','Entorno dedicado','12 meses soporte'], cta:'Pedir presupuesto'}
      ],
      faq: [
        {q:'¿Por qué no usar Odoo / SAP / Salesforce?', a:"Los sistemas off-the-shelf fuerzan tu negocio a adaptarse a su modelo. Nosotros construimos software moldeado en tus workflows reales. Resultado: menos formación, menos workarounds, más apalancamiento."},
        {q:'¿Dónde están alojados mis datos?', a:"A tu elección — cloud EU, tu cuenta AWS/GCP, o completamente on-premise. Posees los datos y el código."},
        {q:'¿Puede integrar con mis herramientas existentes?', a:"Sí. Integramos cualquier cosa que tenga API o export CSV — contabilidad, bancos, marketplaces, transportistas, lo que sea."},
        {q:'¿Si nuestras necesidades cambian?', a:"Ese es el punto del software custom. Nuevo módulo, nuevo campo, nuevo workflow — lo añadimos. Sin \"tier premium\" al que actualizar."},
        {q:'¿Ofrecéis mantenimiento?', a:"Sí. La mayoría de clientes pasa a retainer mensual (€800–€3,000/mo) para cambios continuos, monitorización y soporte on-call."}
      ],
      examples: [
        {title:'Bonsai Logistics', tag:'WMS custom — 4 almacenes'},
        {title:'Atelier Nord', tag:'CRM + facturación — 30 diseñadores'},
        {title:'Verde Retail', tag:'Inventario + sync POS'}
      ],
      meta: {timeline:'4–16 semanas', from:'€49/mes', stack:'Node / Postgres / React', lead:'~3 semanas'}
    },

    ecommerce: {
      title: 'E-commerce',
      tagline: 'Tiendas listas para vender',
      blurb: 'Tiendas online listas para vender: catálogo productos, carrito, pagos, envíos. Construimos tu shop desde cero — rápido, optimizado para conversiones, sin tasa plataforma.',
      stats: [{v:'15', l:'Tiendas live'}, {v:'+38%', l:'Aumento conversión medio'}, {v:'<1s', l:'Time to interactive'}, {v:'0%', l:'Comisiones plataforma'}],
      features: [
        {title:'Catálogo, bien hecho', body:'Variantes, opciones, bundles, atributos custom. Plus un admin que tu equipo puede realmente usar.'},
        {title:'Carrito & checkout', body:'Checkout one-page, autofill direcciones, modo guest. Reduce abandono vs defaults Shopify.'},
        {title:'Pagamentos en todas partes', body:'Stripe, PayPal, Klarna, SEPA, métodos locales. Multi-divisa, precios tax-inclusive soportados.'},
        {title:'Envíos & fulfillment', body:'Tarifas transportista live, impresión etiquetas, devoluciones. Integra con tu almacén o 3PL.'}
      ],
      process: [
        {title:'Audita tu catálogo', body:'¿Cuántos SKU, variantes, regiones fulfillment? Mapeamos la complejidad antes de cotizar.'},
        {title:'Diseña el storefront', body:'Mockups hi-fi para home, PLP, PDP, carrito, checkout. Prototipamos el flujo compra completo.'},
        {title:'Build & integra', body:'Storefront + admin + pagos + envíos + tax. Desplegado a staging semanalmente para QA.'},
        {title:'Migra productos', body:'Importamos tu catálogo existente, clientes e historia pedidos. Sin datos perdidos.'},
        {title:'Lanza & optimiza', body:'Soft launch, setup analytics, audit conversion-rate a 30 y 90 días post-lanzamiento.'}
      ],
      plans: [
        {name:'Base', price:'49', priceCurrency:'€', per:'month', blurb:'Tienda online esencial para catálogos pequeños. Perfecto para artesanos, boutiques y productos digitales.', features:['Hasta 50 productos','Hosting E-commerce & SSL incluido','Carrito & checkout seguro','Integración Stripe & PayPal','Gestión inventario base','Design mobile-responsive','Mantenimiento técnico mensual'], cta:'Empezar'},
        {name:'Pro', price:'149', priceCurrency:'€', per:'month', blurb:'Tienda completa con productos ilimitados, funcionalidades avanzadas y soporte continuo.', features:['Productos & categorías ilimitados','Hosting dedicado alto rendimiento','Búsqueda avanzada & filtering','Cuentas clientes & wishlists','Calculadores envíos & tax automáticos','Analytics avanzados & reporting','Soporte prioritario & backups diarios','Monitorización seguridad & compliance PCI'], cta:'Empezar'},
        {name:'Enterprise', price:'Custom', priceCurrency:'€', per:'project', blurb:'Portales B2B, sync ERP, flujos checkout custom, commerce headless.', features:['SKU ilimitados','Storefront headless / custom','Integración ERP & PIM','Portales B2B & presupuestos','Infraestructura dedicada','12 meses soporte'], cta:'Pedir presupuesto'}
      ],
      faq: [
        {q:'¿Por qué no usar Shopify?', a:"Para shops pequeños con necesidades simples — seguro. Una vez superada la flexibilidad de Shopify, las fees app o las fees transacción, el custom paga rápido. También podemos construir tema/app Shopify custom si quieres híbrido."},
        {q:'¿Puedes migrar desde Shopify / WooCommerce?', a:"Sí. Hemos migrado catálogos, clientes e historia pedidos de todas las plataformas principales. Las migraciones se cotizan separadamente de la build."},
        {q:'¿Cómo funcionan los pagos?', a:"Configuras tus cuentas Stripe / PayPal. El dinero va directamente a ti. Nunca tocamos fondos."},
        {q:'¿Para impuestos internacionales?', a:"VAT, OSS/IOSS para EU, sales tax US via TaxJar/Stripe Tax. Configuramos para tus jurisdicciones durante la build."},
        {q:'¿Mi equipo puede gestionar productos?', a:"Sí. Cada tienda incluye admin custom así staff no-técnico puede añadir, editar y publicar productos."}
      ],
      examples: [
        {title:'Ferro & Lana', tag:'Moda premium — 600 SKU'},
        {title:'Olio Toscano', tag:'Comida D2C — tax multi-región'},
        {title:'Studio Carta', tag:'Configurador papelería custom'}
      ],
      meta: {timeline:'3–10 semanas', from:'€49/mes', stack:'Next.js / Stripe / Sanity', lead:'~2 semanas'}
    },

    mobile: {
      title: 'Apps Móviles',
      tagline: 'iOS + Android, feeling nativo',
      blurb: 'Apps iOS y Android nativas o híbridas para tus clientes o equipos internos. Interfaces intuitivas, alto rendimiento, codebase único cuando tiene sentido.',
      stats: [{v:'8', l:'Apps en stores'}, {v:'4.7★', l:'Rating medio App Store'}, {v:'2', l:'Plataformas, 1 build'}, {v:'~60fps', l:'Siempre fluido'}],
      features: [
        {title:'React Native o nativo', body:'Default React Native por velocidad y código compartido. Swift / Kotlin cuando el caso de uso lo requiere.'},
        {title:'Diseñado para pulgares', body:'Patterns interacción mobile-native, soporte gesture, haptics. No solo una web en wrapper.'},
        {title:'Offline-first', body:'Caching local, UI optimista, sync background. Funciona en metro, en almacén, en avión.'},
        {title:'Push, deep link, OTA', body:'Notificaciones push, links universales, actualizaciones over-the-air. Envía fixes sin esperar review store.'}
      ],
      process: [
        {title:'Define el core loop', body:'¿Cuál es la cosa que los usuarios deberían hacer cada día? Diseñamos el resto de la app alrededor de eso.'},
        {title:'Prototipa en dispositivo', body:'Prototipo funcionante en iOS + Android reales en 3 semanas. Lo tienes en mano, lo tocas, lo rompes.'},
        {title:'Build', body:'4–10 semanas. Builds TestFlight + Google Play Internal Testing cada semana así stakeholders pueden jugar.'},
        {title:'Somete store', body:'Gestionamos sometimiento App Store + Play Store, screenshots, descripciones y el inevitable back-and-forth de review.'},
        {title:'Tuning post-lanzamiento', body:'Monitorización crash, analytics, A/B test en flujos clave. Corregimos con lo que los usuarios realmente luchan.'}
      ],
      plans: [
        {name:'Base', price:'499', priceCurrency:'$', per:'one-time', blurb:'App móvil esencial con funcionalidades core. Perfecto para MVP, herramientas internas y apps clientes simples.', features:['iOS o Android','Hasta 10 pantallas','Auth + 1 backend','Distribución TestFlight / MDM','Soporte 60 días'], cta:'Empezar'},
        {name:'Pro', price:'200', priceCurrency:'$', per:'month', blurb:'App cross-platform completa con funcionalidades avanzadas, mantenimiento continuo y soporte prioritario.', features:['iOS + Android','Hasta 25 pantallas','Notificaciones push','Pagamientos in-app','Analytics + crash reporting','Soporte 90 días'], cta:'Empezar'},
        {name:'Custom', price:'Custom', priceCurrency:'$', per:'project', blurb:'Apps complejas con backend custom, real-time, módulos nativos.', features:['Módulos nativos','Real-time + sync offline','Backend custom','Infra multi-región','Team dedicado','12 meses soporte'], cta:'Pedir presupuesto'}
      ],
      faq: [
        {q:'¿Nativo o React Native?', a:"React Native por defecto — comparte ~85% de código entre iOS y Android, envía más rápido y iguala rendimiento nativo para casi todas las apps consumer. Vamos full native (Swift/Kotlin) cuando necesitas gráfica pesada, ARKit o integraciones profundas platform-specific."},
        {q:'¿Parecerá una app real?', a:"Sí. Usamos componentes platform-native, seguimos Apple HIG y Material guidelines, testeamos en dispositivos reales. Los usuarios no deberían distinguir que es React Native."},
        {q:'¿Para el backend?', a:"Podemos construirlo (Node/Postgres) o integrar con lo que tienes. Auth, push, pagos, storage file — todo estándar."},
        {q:'¿Cuánto tarda la review store?', a:"1–3 días para Apple, 1–2 días para Google. Usualmente. Gestionamos el back-and-forth."},
        {q:'¿Actualizaciones después del lanzamiento?', a:"Actualizaciones OTA para cambios no-nativos (instantáneo). Cambios nativos pasan por review store como normal. La mayoría de clientes pasa a retainer mensual para trabajo continuo."}
      ],
      examples: [
        {title:'Foglia Tracker', tag:'Trabajadores campo — offline-first'},
        {title:'Locale', tag:'App social barrio — iOS + Android'},
        {title:'Vetro POS', tag:'POS hospitality — iPad'}
      ],
      meta: {timeline:'6–14 semanas', from:'$499', stack:'React Native / Swift / Kotlin', lead:'~3 semanas'}
    },

    automation: {
      title: 'Automatización & APIs',
      tagline: 'Menos trabajo manual. Más apalancamiento.',
      blurb: 'Conectamos tus sistemas, automatizamos tasks repetitivos, integramos herramientas diferentes vía API. Menos trabajo manual, más eficiencia. Tu equipo deja de ser capa integración humana.',
      stats: [{v:'120+', l:'Workflows live'}, {v:'~30h', l:'Ahorrado/semana medio'}, {v:'24/7', l:'Siempre activo'}, {v:'API-first', l:'Sin lock-in'}],
      features: [
        {title:'Pegamento sistema-sistema', body:'Conecta CRM, contabilidad, e-commerce, herramientas marketing, almacén, cualquier cosa con API.'},
        {title:'Endpoints API custom', body:'Cuando las APIs públicas no bastan, las construimos. REST, GraphQL o webhooks — tu elección.'},
        {title:'Jobs programados & ETL', body:'Imports nocturnos, reports semanales, reconciliación mensual. Configura una vez, corre para siempre.'},
        {title:'Monitorización + alert', body:'Cada workflow tiene logs y alert. Cuando algo se rompe a las 3am, la persona correcta lo sabe.'}
      ],
      process: [
        {title:'Mapea tus workflows', body:'¿Dónde las personas hacen el mismo task a mano dos veces? Listamos cada candidato, clasificado por horas ahorradas.'},
        {title:'Elige el apalancamiento más alto', body:"No automatizamos todo. Automatizamos las 3–5 cosas que pagan más rápido."},
        {title:'Build & test', body:'Cada workflow se construye, testea con datos reales y revisa contigo. La mayoría envía en días, no semanas.'},
        {title:'Despliega & monitoriza', body:'Alojamos las automatizaciones en infra tuya (AWS, GCP, tus servidores). Logging y alert cableados.'},
        {title:'Itera', body:'Una vez que tu equipo ve lo posible, más candidatos emergen. Añadimos a la cola y seguimos enviando.'}
      ],
      plans: [
        {name:'Base', price:'99', priceCurrency:'$', per:'one-time', blurb:'Integración única entre dos servicios. Perfecto para conectar un par de herramientas para empezar a automatizar.', features:['1 workflow','Hasta 3 sistemas','Logging + alert','Soporte 30 días','Código fuente tuyo'], cta:'Empezar'},
        {name:'Pro', price:'75', priceCurrency:'$', per:'month', blurb:'Plataforma automatización completa con integraciones ilimitadas, monitorización y optimización continua.', features:['Hasta 6 workflows','Audit workflow','Dashboard custom','Infra monitorización','Soporte 60 días'], cta:'Empezar'},
        {name:'Custom', price:'Custom', priceCurrency:'$', per:'project', blurb:'API interna custom, backbone event-driven completa. Tu negocio corre sobre ella.', features:['Workflows ilimitados','API custom + webhooks','Event bus','Dashboard admin','Infra dedicada','12 meses soporte'], cta:'Pedir presupuesto'}
      ],
      faq: [
        {q:'¿Por qué no Zapier / Make?', a:"Para workflows 3–5 step sobre apps estándar — son geniales. Una vez que golpeas volumen datos, lógica compleja o fees per-task que superan €200/mo, el código custom repaga en 2–3 meses."},
        {q:'¿Dónde corren las automatizaciones?', a:"Tu cloud — AWS Lambda, Google Cloud Functions o tus servidores. Posees el código y la infra. Sin lock-in proveedor."},
        {q:'¿Si una integración se rompe?', a:"Monitorizamos cada workflow. Cuando un API cambia o falla, somos alertados antes que tú. Los clientes retainer reciben fix mismo día."},
        {q:'¿Puedes integrar con [mi herramienta oscura]?', a:"Si tiene API, webhook, export CSV o gateway email — sí. Dinos qué tienes."},
        {q:'¿Cómo está preziado?', a:"Por workflow para one-off. Por sprint para batches. Retainer (€600–€2,500/mo) para trabajo continuo y monitorización."}
      ],
      examples: [
        {title:'Lago Logistics', tag:'Sync WMS ↔ transportista'},
        {title:'Gemma SRL', tag:'Reconciliación Stripe → Fattura24'},
        {title:'Pino Wholesale', tag:'API pedidos B2B'}
      ],
      meta: {timeline:'1–6 semanas', from:'$99', stack:'Node / Python / AWS', lead:'~1 semana'}
    },

    seo: {
      title: 'SEO & Rendimiento',
      tagline: 'Visibilidad real. Resultados medibles.',
      blurb: 'Optimizamos tu sitio para buscadores, velocidad carga y conversiones. Visibilidad real. Resultados medibles. Sin trucos black-hat, sin trampa retainer mensil — solo victorias compuestas.',
      stats: [{v:'+312%', l:'Aumento orgánico medio'}, {v:'<1s', l:'Target TTI'}, {v:'90+', l:'Objetivo Lighthouse'}, {v:'0', l:'Dark patterns'}],
      features: [
        {title:'Audit SEO técnico', body:'Crawl, index, schema, sitemap, robots, Core Web Vitals. Encontramos las fugas y las parchamos.'},
        {title:'Optimización on-page', body:'Title tags, meta, headings, linking interno, gap contenidos. Cada página gana sus rankings.'},
        {title:'Tuning performance', body:'Optimización imágenes, code splitting, loading font, caching header. Webs más rápidas convierten mejor.'},
        {title:'Reporting honesto', body:'Dashboard mensual: rankings, tráfico, conversiones. Sin vanity metrics, sin teatro impressions.'}
      ],
      process: [
        {title:'Audit baseline', body:'Deep dive 2-semanas: técnico, contenidos, backlink, competitor. Recibes report 40 páginas con fixes priorizados.'},
        {title:'Quick wins (semana 3–4)', body:'Enviamos los top-10 fix más rápidos — meta, schema, links rotos, page speed. A menudo mueve la aguja en semanas.'},
        {title:'Contenidos & estructura (mes 2–3)', body:'Estrategia cluster, pillar pages, links internos. Trabajamos con tu equipo o escribimos copy nosotros.'},
        {title:'Pass performance', body:'Lighthouse 90+, TTI sub-second, CLS optimizado. La velocidad es factor ranking y factor conversión.'},
        {title:'Track, itera, compone', body:'Review mensual de qué rank, qué no y qué después. SEO es un juego largo — lo jugamos pacientemente.'}
      ],
      plans: [
        {name:'Base', price:'99', priceCurrency:'$', per:'one-time', blurb:'Audit optimización one-time con fixes accionables. Perfecto para sitios que necesitan boost performance y SEO base.', features:['Audit SEO técnico','Análisis contenidos & keyword','Benchmark competitor','Audit page speed','Report 40 páginas'], cta:'Empezar'},
        {name:'Pro', price:'50', priceCurrency:'$', per:'month', blurb:'Monitorización continuo y mejoras mensuales. Mantén tu web rápido, rankeado y convertidor.', features:['Audit completo','Top 20 fix enviados','Schema + sitemap','Pass performance','Monitorización 60 días'], cta:'Empezar'},
        {name:'Custom', price:'Custom', priceCurrency:'$', per:'month', blurb:'Retainer mensil. Contenidos continuos, link building, trabajo técnico, reporting mensual.', features:['Contenidos mensuales (4 piezas)','Outreach link-building','SEO técnico continuo','Dashboard mensual','Review estrategia trimestral'], cta:'Pedir presupuesto'}
      ],
      faq: [
        {q:'¿Cuánto tiempo para ver resultados?', a:"Fix técnicos muestran en 2–6 semanas. Rankings contenidos requieren 3–6 meses. Quien prometa resultados semana 1 vende vanity metrics."},
        {q:'¿Haces link building?', a:"Sí — outreach, PR, guest post, digital PR. Solo white-hat. No compramos links, nunca."},
        {q:'¿Puedes escribir contenidos?', a:"Sí. O trabajamos con tu team in-house / freelancers y proporcionamos brief, estructura y editing."},
        {q:'¿Para los cambios algoritmo de Google?', a:"Nos enfocamos en los fundamentales — webs rápidas, contenidos útiles, estructura clara. Los cambios nos afectan menos que a los shops black-hat."},
        {q:'¿Mi tráfico cae si me voy?', a:"No. El trabajo que hacemos es tuyo para siempre. Páginas que construimos, schema que añadimos, contenidos que escribimos — queda. Por eso no te bloqueamos."}
      ],
      examples: [
        {title:'Casa Verde', tag:'Real estate — +412% orgánico en 9 meses'},
        {title:'Numero Uno', tag:'B2B SaaS — featured snippets x18'},
        {title:'Pasta Padova', tag:'SEO local — top 3 en 4 ciudades'}
      ],
      meta: {timeline:'2 semanas audit, ongoing', from:'$99', stack:'Lighthouse / Ahrefs / GSC', lead:'~1 semana'}
    }
  }
};

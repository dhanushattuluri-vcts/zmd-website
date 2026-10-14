// =============================================================================
// QUAD DESK ULTRA PRODUCT PAGE
// =============================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import quadDeskHero from '../assets/images/quad-desk/quad-desk-hero.webp';
import quadDeskHeroMobile from '../assets/images/quad-desk/mobherosecquad.png';
import workspaceAnalytics from '../assets/images/quad-desk/Pasted image1.png';
import workspaceDevelopment from '../assets/images/quad-desk/Pasted image2.png';
import workspaceLearning from '../assets/images/quad-desk/Pasted image3.png';
import workspaceCommunications from '../assets/images/quad-desk/Pasted image4.png';
import quadDeskChassis from '../assets/images/quad-desk/quadtransparent.png';
import '../assets/css/QuadDesk.css';

function ArrowButton({ to, children, secondary = false, light = false, href }) {
  const variant = light ? 'button--light' : secondary ? 'button--secondary' : 'button--primary';
  if (href) {
    return (
      <a className={`button ${variant}`} href={href}>
        {children} <span aria-hidden="true">→</span>
      </a>
    );
  }
  return (
    <Link className={`button ${variant}`} to={to}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

function SectionIntro({ title, body, light = false, align = 'left' }) {
  return (
    <div className={`section-intro section-intro--plain section-intro--${align} ${light ? 'section-intro--light' : ''}`}>
      <div className="section-intro__content">
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>
    </div>
  );
}

function OEMEngagement({ title, body, action = 'Partner with ZMD' }) {
  return (
    <section className="section product-oem-engagement surface-band surface-band--ink">
      <div className="site-container product-oem-engagement__inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <ArrowButton to="/contact" light>{action}</ArrowButton>
      </div>
    </section>
  );
}


// =============================================================================
// HIGHLIGHTS BAND
// =============================================================================

const highlights = [
  ['Independent users', '4 simultaneous'],
  ['Memory', '128 GB DDR5-6400'],
  ['Storage', 'X2 PCIe NVMe SSD'],
  ['Warranty', '3-year ZMD'],
];

function QuadDeskHighlights() {
  return (
    <section className="product-highlight-band" aria-label="Quad Desk highlights">
      <div className="site-container product-highlight-band__grid">
        {highlights.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}


// =============================================================================
// FEATURES SECTION
// =============================================================================

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Individual displays',
    body: 'Support for four independent displays, from Full HD up to 4K output per workspace.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M7 10v4m4-4v4m4-4v4" />
      </svg>
    ),
    title: 'Dedicated peripherals',
    body: 'Each seat gets its own keyboard, mouse, audio and isolated USB peripherals.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
    title: 'Easy management',
    body: 'A shared host platform simplifies deployment and reduces the hardware footprint to maintain.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
    title: 'Modern connectivity',
    body: 'Wi-Fi 6E and 2.5 GbE connectivity for flexible wired and wireless environments.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 6v5c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
    title: 'Built for business',
    body: 'Windows and Linux support to fit a range of modern IT environments and organisational requirements.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Lower infrastructure',
    body: 'Reduce hardware footprint, power draw and UPS requirements versus individual desktop setups.',
  },
];

function QuadDeskFeatures() {
  return (
    <section className="section section--paper surface-band surface-band--neutral quad-desk-features" id="features">
      <div className="site-container">
        <SectionIntro
          title="Every user gets their own workspace."
          body="Quad Desk Ultra enables up to four users to work independently from a single host system, each with their own desktop environment and peripherals."
        />
        <div className="quad-desk-feature-grid">
          {features.map((f) => (
            <article className="quad-desk-feature-card" key={f.title}>
              <div className="quad-desk-feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


// =============================================================================
// HOW IT WORKS SECTION
// =============================================================================

const checklistItems = [
  'Independent user environments and logins',
  'Personal files and applications for each workspace',
  'Dedicated keyboard, mouse and audio per seat',
  'Less hardware to deploy and maintain',
  'Centralised software updates and IT management',
];

const workspaces = [
  { title: 'Analytics', detail: 'Reports · Data · Insights', image: workspaceAnalytics },
  { title: 'Development', detail: 'Code · Tools · Projects', image: workspaceDevelopment },
  { title: 'Learning', detail: 'Content · Research · Study', image: workspaceLearning },
  { title: 'Communications', detail: 'Calls · Teams · Support', image: workspaceCommunications },
];

function QuadDeskHowItWorks() {
  return (
    <section className="section quad-desk-how" id="how-it-works">
      <div className="site-container quad-desk-how__inner">
        <div className="quad-desk-how__copy">
          <SectionIntro
            title="One host. Four independent seats."
            body="Connect four user stations to one Quad Desk host. Each person works with an individual monitor, login, applications and accessories—without interfering with other users."
          />
          <ul className="quad-desk-checklist" aria-label="Key capabilities">
            {checklistItems.map((item) => (
              <li key={item}>
                <span className="quad-desk-checklist__check" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="quad-desk-how__visual" aria-label="Illustration of four user workspaces connected to one host">
          <div className="quad-desk-workspace-grid">
            {workspaces.map((workspace, index) => (
              <div className="quad-desk-seat" key={workspace.title}>
                <img
                  className="quad-desk-seat__image"
                  src={workspace.image}
                  alt={`${workspace.title} workspace with its own monitor and peripherals`}
                  loading="lazy"
                  decoding="async"
                />
                <strong>Workspace 0{index + 1} · {workspace.title}</strong>
                <small>{workspace.detail}</small>
              </div>
            ))}
          </div>
          <div className="quad-desk-host-bar">
            <span className="quad-desk-host-bar__brand">ZMD</span>
            Quad Desk Ultra — host system
          </div>
        </div>
      </div>
    </section>
  );
}


// =============================================================================
// SPECIFICATIONS SECTION
// =============================================================================

const specificationGroups = [
  {
    title: 'Processor & AI',
    rows: [
      ['Processor', 'Intel® Core™ Ultra 7'],
      ['Architecture', '20-core processor'],
      ['AI acceleration', 'Intel® AI Boost NPU (integrated)'],
      ['Graphics', 'Intel® Arc™ integrated graphics'],
    ],
  },
  {
    title: 'Memory & storage',
    rows: [
      ['System memory', '128 GB DDR5-6400'],
      ['Storage', 'X2 PCIe NVMe SSD'],
      ['Memory type', 'High-speed system memory'],
      ['Expansion', 'Available via ZMD configuration'],
    ],
  },
  {
    title: 'Connectivity & display',
    rows: [
      ['Wireless', 'Wi-Fi 6E'],
      ['Wired LAN', '2.5 GbE'],
      ['Display outputs', '4 independent display connections'],
      ['Display resolution', 'Full HD and up to 4K output per seat'],
    ],
  },
  {
    title: 'Platform & OS',
    rows: [
      ['Operating systems', 'Windows and Linux'],
      ['Multi-seat software', 'ZMD multi-seat software included'],
      ['Supported seats', 'Up to 4 simultaneous users'],
      ['Warranty', '3-year ZMD warranty'],
    ],
  },
];

function QuadDeskSpecificationTable() {
  const [activeTitle, setActiveTitle] = React.useState(specificationGroups[0].title);
  const activeGroup = specificationGroups.find((g) => g.title === activeTitle) || specificationGroups[0];

  return (
    <div className="camera-specification-layout product-specification-layout--full">
      <div className="camera-specification-main">
        <div className="camera-specification-tabs" aria-label="Quad Desk specification categories">
          {specificationGroups.map((g) => (
            <button
              key={g.title}
              type="button"
              className={g.title === activeGroup.title ? 'is-active' : ''}
              aria-pressed={g.title === activeGroup.title}
              onClick={() => setActiveTitle(g.title)}
            >
              {g.title}
            </button>
          ))}
        </div>
        <div
          className="camera-specification-table"
          role="region"
          aria-label={`${activeGroup.title}: Quad Desk specifications`}
          tabIndex="0"
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Specification</th>
                <th scope="col">Quad Desk Ultra</th>
              </tr>
            </thead>
            <tbody>
              {activeGroup.rows.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function QuadDeskSpecifications() {
  return (
    <section className="section camera-specifications quad-desk-specifications" id="technical-specifications">
      <div className="site-container">
        <SectionIntro
          title="Enterprise performance behind every seat."
          body="Designed to support demanding multi-user environments with capable compute, memory and storage."
          light
        />
        <QuadDeskSpecificationTable />
        <p className="content-qualifier">
          Final component selection, software integration, certification scope and availability are confirmed with ZMD.
        </p>
      </div>
    </section>
  );
}


// =============================================================================
// USE CASES SECTION
// =============================================================================

const useCases = [
  {
    title: 'Education',
    body: 'Schools, colleges, coaching centres and computer labs requiring efficient, manageable infrastructure.',
  },
  {
    title: 'BPO & contact centres',
    body: 'Lower hardware footprint and easier IT management across high-density agent deployments.',
  },
  {
    title: 'SMBs & offices',
    body: 'Multi-user productivity with lower infrastructure costs across open-plan work environments.',
  },
  {
    title: 'Government',
    body: 'Public-facing computing kiosks and citizen-service points where power efficiency matters.',
  },
];

function QuadDeskUseCases() {
  return (
    <section className="section quad-desk-use-cases surface-band surface-band--neutral" id="use-cases">
      <div className="site-container">
        <SectionIntro title="Where Quad Desk fits." body="Multi-seat computing for environments where efficient infrastructure and manageable deployments matter." />
        <div className="quad-desk-use-grid">
          {useCases.map((u) => (
            <article className="quad-desk-use-card" key={u.title}>
              <div className="quad-desk-use-card__bar" aria-hidden="true" />
              <div className="quad-desk-use-card__body">
                <h3>{u.title}</h3>
                <p>{u.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


// =============================================================================
// CONFIGURATIONS SECTION
// =============================================================================

const configurations = [
  {
    model: 'ZMD-QD4-BOX',
    name: 'Quad Desk Host System',
    description: 'For organisations upgrading existing infrastructure while retaining current monitors and peripherals.',
    image: quadDeskChassis,
    imageAlt: 'ZMD Quad Desk Host System Chassis',
    columns: [
      [
        '1 × ZMD Quad Desk host',
        'Intel® Core™ Ultra 7',
        '128 GB DDR5 memory',
        'X2 PCIe NVMe SSD',
        'ZMD multi-seat software',
        '3-year ZMD warranty',
      ],
      [
        '4 × Full HD IPS monitors',
        '4 × keyboard and mouse sets',
        '4 × multimedia headsets',
        'Display cables and USB hubs',
      ],
    ],
    items: [
      '1 × ZMD Quad Desk host',
      'Intel® Core™ Ultra 7',
      '128 GB DDR5 memory',
      'X2 PCIe NVMe SSD',
      'ZMD multi-seat software',
      '3-year ZMD warranty',
      '4 × Full HD IPS monitors',
      '4 × keyboard and mouse sets',
      '4 × multimedia headsets',
      'Display cables and USB hubs',
    ],
    note: 'Ideal for existing computer labs and offices.',
  },
];

function QuadDeskConfigurations() {
  return (
    <section className="section quad-desk-configurations" id="configurations">
      <div className="site-container">
        <SectionIntro
          title="Same performance. More possibilities."
          body="Choose a host system for existing infrastructure or a complete four-seat turnkey pod for new deployments."
        />
        <div className={`quad-desk-config-grid ${configurations.length === 1 ? 'quad-desk-config-grid--single' : ''}`}>
          {configurations.map((config) => (
            <article className="quad-desk-config-card" key={config.model}>
              <div className="quad-desk-config-card__top">
                <div className="quad-desk-config-card__header">
                  <div className="quad-desk-config-card__model">{config.model}</div>
                  <h3>{config.name}</h3>
                  <p>{config.description}</p>
                </div>
                {config.image && (
                  <div className="quad-desk-config-card__media">
                    <img src={config.image} alt={config.imageAlt || config.name} loading="lazy" />
                  </div>
                )}
              </div>
              {config.columns ? (
                <div className="quad-desk-config-card__columns">
                  {config.columns.map((col, idx) => (
                    <ul className="quad-desk-config-card__list" key={idx}>
                      {col.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ))}
                </div>
              ) : (
                <ul className="quad-desk-config-card__list">
                  {config.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="quad-desk-config-card__foot">
                {config.note}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


// =============================================================================
// PAGE ROOT
// =============================================================================

export default function QuadDeskPage() {
  const motionRoot = React.useRef(null);

  React.useLayoutEffect(() => {
    const root = motionRoot.current;
    if (!root) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const selectors = [
      '.quad-desk-product-hero .product-story-hero__copy h1',
      '.quad-desk-product-hero .product-story-hero__copy > p',
      '.quad-desk-product-hero .product-story-hero__actions .button',
      '.product-highlight-band__grid > div',
      '.quad-desk-features .section-intro h2',
      '.quad-desk-feature-card',
      '.quad-desk-how .section-intro h2',
      '.quad-desk-seat',
      '.quad-desk-host-bar',
      '.quad-desk-specifications .section-intro h2',
      '.quad-desk-specifications table',
      '.quad-desk-specifications tbody tr',
      '.quad-desk-specifications .content-qualifier',
      '.quad-desk-use-cases .section-intro h2',
      '.quad-desk-use-card',
      '.quad-desk-configurations .section-intro h2',
      '.quad-desk-config-card',
      '.product-oem-engagement h2',
      '.product-oem-engagement p',
      '.product-oem-engagement .button',
    ];

    const items = [...root.querySelectorAll(selectors.join(','))];
    const syncItem = (item) => {
      const bounds = item.getBoundingClientRect();
      const visible = item.classList.contains('is-quad-motion-visible')
        ? bounds.top <= window.innerHeight * 1.05 && bounds.bottom >= window.innerHeight * -0.05
        : bounds.top <= window.innerHeight * 0.92 && bounds.bottom >= window.innerHeight * 0.01;
      item.classList.toggle('is-quad-motion-visible', reducedMotion.matches || visible);
    };

    items.forEach((item, index) => {
      item.classList.add('quad-motion-item');
      item.style.setProperty('--quad-motion-order', index % 8);
    });
    root.classList.add('quad-motion-ready');
    items.forEach(syncItem);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(({ target }) => syncItem(target)),
      { threshold: 0.01, rootMargin: '0px 0px -7% 0px' },
    );
    items.forEach((item) => observer.observe(item));

    let frame = 0;
    const syncAll = () => {
      if (frame || reducedMotion.matches) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        items.forEach(syncItem);
      });
    };
    window.addEventListener('scroll', syncAll, { passive: true });
    window.addEventListener('resize', syncAll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', syncAll);
      window.removeEventListener('resize', syncAll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="site-page quad-desk-page" ref={motionRoot}>


      {/* ========================= QUAD DESK HERO SECTION ========================= */}


      <section
        className="product-story-hero product-story-hero--navy quad-desk-product-hero"
        aria-label="Quad Desk Ultra product hero"
      >
        <div className="quad-desk-hero-backdrop" aria-hidden="true">
          <img
            src={quadDeskHero}
            alt=""
            className="quad-desk-hero-backdrop__image quad-desk-hero-backdrop__image--desktop"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <img
            src={quadDeskHeroMobile}
            alt=""
            className="quad-desk-hero-backdrop__image quad-desk-hero-backdrop__image--mobile"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="site-container product-story-hero__inner">
          <div className="product-story-hero__copy">
            <span className="product-story-hero__eyebrow">Multi-seat computing · Quad Desk Ultra</span>
            <h1 tabIndex="-1">
              Four workspaces.<br />
              <span className="quad-desk-hero__accent">One smarter</span><br />
              platform.
            </h1>
            <p>
              Give four people their own complete desktop experience from one powerful host system.
              Each person works with a separate login, applications and peripherals, while IT teams manage
              one shared platform across modern offices, computer labs and enterprise deployments.
            </p>
            <div className="product-story-hero__actions">
              <a
                className="button button--primary"
                href="mailto:sales@zmd.tech?subject=Quad%20Desk%20Enquiry"
                id="quad-desk-enquire-btn"
              >
                Enquire about Quad Desk <span aria-hidden="true">→</span>
              </a>
              <Link className="button button--light" to="/products/quad-desk#configurations" id="quad-desk-compare-btn">
                Compare configurations <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="quad-desk-hero__meta">
              Windows &amp; Linux support · 3-year ZMD warranty
            </div>
            <div className="quad-desk-hero-chips" aria-label="Key platform specifications">
              <span className="quad-desk-chip">Intel® Core™ Ultra 7</span>
              <span className="quad-desk-chip">128 GB DDR5-6400</span>
              <span className="quad-desk-chip">X2 PCIe NVMe SSD</span>
              <span className="quad-desk-chip">Intel® AI Boost NPU</span>
            </div>
          </div>
        </div>
      </section>


      {/* ====================== QUAD DESK HIGHLIGHTS SECTION ====================== */}


      <QuadDeskHighlights />


      {/* ====================== QUAD DESK FEATURES SECTION ====================== */}


      <QuadDeskFeatures />


      {/* ====================== HOW IT WORKS SECTION ====================== */}


      <QuadDeskHowItWorks />


      {/* ====================== SPECIFICATIONS SECTION ====================== */}


      <QuadDeskSpecifications />


      {/* ====================== USE CASES SECTION ====================== */}


      <QuadDeskUseCases />


      {/* ====================== CONFIGURATIONS SECTION ====================== */}


      <QuadDeskConfigurations />


      {/* ======================== QUAD DESK ENQUIRY SECTION ======================== */}


      <OEMEngagement
        title="Ready to create four workspaces from one system?"
        body="Talk to ZMD about Quad Desk configurations, pricing and deployment requirements. Share your seat count, display needs and preferred operating system, and we can help identify the right host or turnkey setup for your organisation."
        action="Discuss Quad-Desk requirements"
      />
    </div>
  );
}

// ── Unified site footer (single source of truth) ─────────────────────────
// Edit the footer HERE. The worker replaces each page's <footer class="bg-[#001428]...">
// with this on every HTML response, so all pages stay in sync. The guide page's
// private <footer class="guide-foot"> is intentionally NOT matched and left alone.
const CANONICAL_FOOTER = `<footer id="sb-footer" class="bg-[#001428]"><style>html #sb-footer{background:linear-gradient(to bottom,#000000 0%,#0B1526 100%) !important;color:#F8FAFC;font-family:Inter,system-ui,sans-serif;padding:64px 24px 24px;border-top:0;}html #sb-footer .ftr-in{max-width:1280px;margin:0 auto;}html #sb-footer .ftr-cta{text-align:center;padding:24px 0 64px;border-bottom:1px solid rgba(148,163,184,.18);margin-bottom:64px;}html #sb-footer .ftr-big{font-family:Playfair Display,Georgia,serif;font-style:normal;font-weight:400;font-size:clamp(2.6rem,8vw,7rem);line-height:1;color:#F8FAFC;text-decoration:none;position:relative;display:inline-block;transition:color .4s ease;}html #sb-footer .ftr-big::after{content:"";position:absolute;bottom:6px;left:0;width:100%;height:2px;background:#C4952A;transform:scaleX(0);transform-origin:right;transition:transform .6s cubic-bezier(.25,1,.5,1);}html #sb-footer .ftr-big:hover{color:#C4952A;}html #sb-footer .ftr-big:hover::after{transform:scaleX(1);transform-origin:left;}html #sb-footer .ftr-grid{display:grid;grid-template-columns:1fr;gap:40px;margin-bottom:56px;align-items:start;}html #sb-footer .ftr-h{display:block;font-size:.65rem;line-height:1.2;letter-spacing:.25em;text-transform:uppercase;color:#94A3B8;margin:0 0 32px;font-weight:500;}html #sb-footer .ftr-lnk{display:block;font-size:.9rem;font-weight:300;color:#CBD5E1;margin-bottom:14px;text-decoration:none;transition:transform .3s ease,color .3s ease;}html #sb-footer .ftr-lnk:hover{transform:translateX(5px);color:#C4952A;}html #sb-footer .ftr-mkts{display:grid;grid-template-columns:max-content max-content;justify-content:start;gap:0 28px;}html #sb-footer .ftr-brandname{font-family:Playfair Display,Georgia,serif;font-style:normal;font-weight:400;font-size:1.9rem;line-height:1.1;color:#F8FAFC;margin:0 0 4px;}html #sb-footer .ftr-logo{height:84px;width:auto;display:block;margin:0 0 20px;opacity:.92;}html #sb-footer .ftr-brandsub{font-size:10px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:#94A3B8;margin:0 0 18px;}html #sb-footer .ftr-blurb{font-weight:300;font-size:.875rem;line-height:1.7;color:#94A3B8;margin:0 0 20px;}html #sb-footer .ftr-socs{display:flex;gap:16px;}html #sb-footer .ftr-soc{color:#94A3B8;transition:color .3s ease;display:inline-flex;}html #sb-footer .ftr-soc:hover{color:#C4952A;}html #sb-footer .ftr-office{font-size:.8rem;font-weight:300;color:#94A3B8;line-height:1.6;margin:0 0 16px;}html #sb-footer .ftr-bot{border-top:1px solid rgba(148,163,184,.18);padding:26px 0 12px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#94A3B8;font-weight:500;}html #sb-footer .ftr-bot p{margin:0;}html #sb-footer .ftr-marks{height:40px;width:auto;opacity:.7;filter:invert(1);}html #sb-footer .ftr-tog{position:absolute;opacity:0;pointer-events:none;}html #sb-footer .ftr-lab{display:block;pointer-events:none;margin:0;}html #sb-footer .ftr-ico{display:none;}html #sb-footer .ftr-body{display:block;}@media (max-width:767px){html #sb-footer{padding:44px 20px 20px;}html #sb-footer .ftr-logo{height:68px;}html #sb-footer .ftr-cta{padding:8px 0 40px;margin-bottom:40px;}html #sb-footer .ftr-lab{pointer-events:auto;display:flex;align-items:center;justify-content:space-between;cursor:pointer;}html #sb-footer .ftr-lab .ftr-h{margin-bottom:0;}html #sb-footer .ftr-ico{display:inline;color:#C4952A;font-weight:600;font-size:16px;line-height:1;}html #sb-footer .ftr-ico::before{content:"+";}html #sb-footer .ftr-tog:checked ~ .ftr-lab .ftr-ico::before{content:"-";}html #sb-footer .ftr-body{max-height:0;overflow:hidden;transition:max-height .5s ease;}html #sb-footer .ftr-tog:checked ~ .ftr-body{max-height:900px;}html #sb-footer .ftr-h{margin-top:18px;}}@media (min-width:768px){html #sb-footer .ftr-grid{grid-template-columns:1fr 1fr;}}@media (min-width:1024px){html #sb-footer{padding:80px 32px 24px;}html #sb-footer .ftr-grid{grid-template-columns:1.25fr 1.15fr .8fr 1.05fr;gap:48px;}html #sb-footer .ftr-bot{flex-direction:row;justify-content:space-between;text-align:left;}}@media (prefers-reduced-motion:reduce){html #sb-footer .ftr-big::after,html #sb-footer .ftr-lnk{transition:none !important;}}</style><div class="ftr-in"><div class="ftr-cta"><a id="sb-ftr-cta" class="ftr-big" href="tel:4073830707">Call Us</a></div><script>(function(){var el=document.getElementById("sb-ftr-cta");if(!el)return;var et=new Date(new Date().toLocaleString("en-US",{timeZone:"America/New_York"}));var h=et.getHours();if(h<9||h>=18){el.href="mailto:sean@seanandbarb.com";el.textContent="Email Us";}})();</script><div class="ftr-grid"><div class="ftr-col"><picture><source srcset="/images/sean-barb-logo-880w.avif" type="image/avif"><img class="ftr-logo" src="/images/sean-barb-logo-880w.webp" alt="Sean &amp; Barb | Premier Sotheby's International Realty" width="880" height="322" loading="lazy"></picture><p class="ftr-blurb">60+ years of hyperlocal Central Florida expertise.</p><div class="ftr-socs"><a href="https://www.instagram.com/seanandbarbrealtors/" target="_blank" rel="noopener" aria-label="Instagram" class="ftr-soc"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg></a><a href="https://www.facebook.com/SeanAndBarbRealtors" target="_blank" rel="noopener" aria-label="Facebook" class="ftr-soc"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a><a href="https://www.linkedin.com/in/seanandbarbrealtors/" target="_blank" rel="noopener" aria-label="LinkedIn" class="ftr-soc"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div></div><div class="ftr-col"><input type="checkbox" id="ftr-mkts-exp" class="ftr-tog"><label for="ftr-mkts-exp" class="ftr-lab"><span class="ftr-h">Markets We Serve</span><span class="ftr-ico"></span></label><div class="ftr-body"><div class="ftr-mkts"><a href="/cities/windermere-homes-for-sale/" class="ftr-lnk">Windermere</a><a href="/cities/dr-phillips-homes-for-sale/" class="ftr-lnk">Dr. Phillips</a><a href="/cities/winter-park-homes-for-sale/" class="ftr-lnk">Winter Park</a><a href="/cities/lake-nona-homes-for-sale/" class="ftr-lnk">Lake Nona</a><a href="/cities/orlando-homes-for-sale/" class="ftr-lnk">Orlando</a><a href="/cities/winter-garden-homes-for-sale/" class="ftr-lnk">Winter Garden</a><a href="/cities/maitland-homes-for-sale/" class="ftr-lnk">Maitland</a><a href="/cities/longwood-homes-for-sale/" class="ftr-lnk">Longwood</a><a href="/cities/lake-mary-homes-for-sale/" class="ftr-lnk">Lake Mary</a><a href="/cities/oviedo-homes-for-sale/" class="ftr-lnk">Oviedo</a></div></div></div><div class="ftr-col"><p class="ftr-h">Lifestyles</p><a href="/lifestyles/physician-relocation/" class="ftr-lnk">Physician Relocation</a><a href="/lifestyles/" class="ftr-lnk">Explore All Lifestyles</a><a href="/probate-real-estate/" class="ftr-lnk">Probate Real Estate</a></div><div class="ftr-col"><input type="checkbox" id="ftr-offc-exp" class="ftr-tog"><label for="ftr-offc-exp" class="ftr-lab"><span class="ftr-h">Office</span><span class="ftr-ico"></span></label><div class="ftr-body"><p class="ftr-office">1117 International Parkway<br>Suite 1711 &middot; Lake Mary, FL 32746</p><p class="ftr-office"><a href="tel:4073830707" data-sb-cta-skip style="color:inherit;text-decoration:none;">(407) 383-0707</a></p></div></div></div><div class="ftr-bot"><p>&copy; 2026 Sean Spencer &amp; Barbara Vance &middot; Premier Sotheby's International Realty &middot; All Rights Reserved</p><p>Florida Licensed &middot; Central Florida Luxury Specialists</p><img class="ftr-marks" src="/images/industry-logos.webp" alt="Realtor MLS Equal Housing Opportunity" width="200" height="57" loading="lazy"></div></div></footer>`;
function applyFooter(html){
  return html.replace(/<footer\b[^>]*bg-\[#001428\][^>]*>[\s\S]*?<\/footer>/, function(){ return CANONICAL_FOOTER; });
}
// ── Unified site header (single source of truth) ────────────────────────
// Edit the header HERE. The worker replaces each page's <header id="site-header">
// region (bar + mobile drawer + nav script) with this on every HTML response, so
// every page stays in sync. __BG__ = bg-transparent on the homepage (overlays the
// hero), bg-navy elsewhere; __Z__ adds z-index only on listing-detail pages.
const HEADER_TEMPLATE = `<header id="site-header" class="fixed top-0 left-0 right-0 z-50 __BG__" data-astro-cid-3ef6ksr2__Z__><div class="sbh-wrap" data-astro-cid-3ef6ksr2><a href="/" class="sbh-shield" aria-label="Sean and Barb, Premier Sotheby's International Realty"><span class="sb-logo-wrap"><picture><source srcset="/images/sean-barb-logo-440w.avif 440w, /images/sean-barb-logo-880w.avif 880w" sizes="(max-width:600px) 55vw, 300px" type="image/avif"><source srcset="/images/sean-barb-logo-440w.webp 440w, /images/sean-barb-logo-880w.webp 880w" sizes="(max-width:600px) 55vw, 300px" type="image/webp"><img src="/images/sean-barb-logo-440w.webp" alt="Sean &amp; Barb | Premier Sotheby's International Realty" class="sb-logo-img" width="218" height="80"></picture></span></a><nav class="sbh-pill sbh-right desktop-nav" aria-label="Primary"><div class="nav-buy sbh-item"><button type="button" class="nav-buy-toggle luxury-link">Buy<span class="nav-buy-caret chevron" aria-hidden="true">&#9662;</span></button><div class="nav-buy-menu dropdown-menu" role="menu"><a href="/buying-a-home/" role="menuitem">Buying a Home</a><a href="/buying-a-home/#buy-mortgage-calc" role="menuitem">Mortgage Calc</a><a href="/cities/" role="menuitem">Cities</a><a href="/lifestyles/" role="menuitem">Lifestyles</a><a href="/schools/" role="menuitem">Schools</a></div></div><div class="nav-buy sbh-item"><button type="button" class="nav-buy-toggle luxury-link">Sell<span class="nav-buy-caret chevron" aria-hidden="true">&#9662;</span></button><div class="nav-buy-menu dropdown-menu" role="menu"><a href="/selling-your-home/" role="menuitem">Sell Your Home</a><a href="/selling-your-home/#sv-valuation" role="menuitem">Request a Valuation</a><a href="/selling-your-home/#sv-net-calc" role="menuitem">Seller Net Calc</a></div></div><div class="nav-buy sbh-item"><button type="button" class="nav-buy-toggle luxury-link">Probate<span class="nav-buy-caret chevron" aria-hidden="true">&#9662;</span></button><div class="nav-buy-menu dropdown-menu" role="menu"><a href="/probate-real-estate/" role="menuitem">Probate Real Estate</a><a href="/probate-real-estate/orange-county/" role="menuitem">Orange County</a><a href="/probate-real-estate/seminole-county/" role="menuitem">Seminole County</a></div></div><div class="nav-buy sbh-item"><button type="button" class="nav-buy-toggle luxury-link">Relocation<span class="nav-buy-caret chevron" aria-hidden="true">&#9662;</span></button><div class="nav-buy-menu dropdown-menu" role="menu"><a href="/relocation/" role="menuitem">Relocation Hub</a><a href="/lifestyles/physician-relocation/" role="menuitem">Physician Relocation</a><a href="/relocation/#calc-section" role="menuitem">State Tax Savings</a></div></div><div class="nav-buy sbh-item"><button type="button" class="nav-buy-toggle luxury-link">Insights<span class="nav-buy-caret chevron" aria-hidden="true">&#9662;</span></button><div class="nav-buy-menu dropdown-menu" role="menu"><a href="/insights/" role="menuitem">Insights</a><a href="/market-report/" role="menuitem">Market Reports</a></div></div><a href="/about/" class="sbh-item luxury-link">About Sean &amp; Barb</a><a href="/contact/" class="sbh-item sbh-cta">Contact</a></nav><button id="hamburger" aria-label="Open menu" class="leading-none p-1 ml-2 flex-shrink-0" data-astro-cid-3ef6ksr2><span class="sb-ham-gold" aria-hidden="true" style="font-size:1.8rem;line-height:1;color:#C4952A;-webkit-text-fill-color:#C4952A;">&#9776;</span></button></div></header> <!-- Mobile nav drawer --> <div id="nav-drawer" class="fixed inset-0 z-[100] pointer-events-none" data-astro-cid-3ef6ksr2> <!-- Backdrop --> <div id="nav-backdrop" class="absolute inset-0 bg-navy/90 opacity-0 transition-opacity duration-300" data-astro-cid-3ef6ksr2></div> <!-- Drawer panel --> <nav id="nav-panel" class="absolute top-0 right-0 h-full w-72 bg-navy-dark flex flex-col pt-20 pb-10 px-8
           translate-x-full transition-transform duration-300 ease-out" data-astro-cid-3ef6ksr2> <button id="nav-close" aria-label="Close menu" class="absolute top-5 right-5 text-white text-2xl" data-astro-cid-3ef6ksr2>✕</button> <div class="flex flex-col gap-6" data-astro-cid-3ef6ksr2> <a href="/" class="nav-link" data-astro-cid-3ef6ksr2>Home</a> <div class="nav-acc" data-astro-cid-3ef6ksr2><button class="nav-link nav-acc-head" type="button" aria-expanded="false" data-astro-cid-3ef6ksr2>Buy<span class="nav-acc-chev" aria-hidden="true">&#8250;</span></button><div class="nav-acc-panel" data-astro-cid-3ef6ksr2><div class="nav-acc-inner" data-astro-cid-3ef6ksr2><a href="/buying-a-home/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Buying a Home</a><a href="/cities/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Cities</a><a href="/lifestyles/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Lifestyles</a><a href="/schools/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Schools</a></div></div></div> <div class="nav-acc" data-astro-cid-3ef6ksr2><button class="nav-link nav-acc-head" type="button" aria-expanded="false" data-astro-cid-3ef6ksr2>Sell<span class="nav-acc-chev" aria-hidden="true">&#8250;</span></button><div class="nav-acc-panel" data-astro-cid-3ef6ksr2><div class="nav-acc-inner" data-astro-cid-3ef6ksr2><a href="/selling-your-home/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Sell Your Home</a><a href="/selling-your-home/#sv-valuation" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Request a Valuation</a></div></div></div> <div class="nav-acc" data-astro-cid-3ef6ksr2><button class="nav-link nav-acc-head" type="button" aria-expanded="false" data-astro-cid-3ef6ksr2>Probate<span class="nav-acc-chev" aria-hidden="true">&#8250;</span></button><div class="nav-acc-panel" data-astro-cid-3ef6ksr2><div class="nav-acc-inner" data-astro-cid-3ef6ksr2><a href="/probate-real-estate/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Probate Real Estate</a><a href="/probate-real-estate/orange-county/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Orange County</a><a href="/probate-real-estate/seminole-county/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Seminole County</a></div></div></div> <div class="nav-acc" data-astro-cid-3ef6ksr2><button class="nav-link nav-acc-head" type="button" aria-expanded="false" data-astro-cid-3ef6ksr2>Relocation<span class="nav-acc-chev" aria-hidden="true">&#8250;</span></button><div class="nav-acc-panel" data-astro-cid-3ef6ksr2><div class="nav-acc-inner" data-astro-cid-3ef6ksr2><a href="/relocation/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Relocation Hub</a><a href="/lifestyles/physician-relocation/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Physician Relocation</a></div></div></div> <div class="nav-acc" data-astro-cid-3ef6ksr2><button class="nav-link nav-acc-head" type="button" aria-expanded="false" data-astro-cid-3ef6ksr2>Insights/Reports<span class="nav-acc-chev" aria-hidden="true">&#8250;</span></button><div class="nav-acc-panel" data-astro-cid-3ef6ksr2><div class="nav-acc-inner" data-astro-cid-3ef6ksr2><a href="/insights/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Insights</a><a href="/market-report/" class="nav-link nav-acc-item" data-astro-cid-3ef6ksr2>Market Reports</a></div></div></div> <a href="/about/" class="nav-link" data-astro-cid-3ef6ksr2 style="color:#C4952A;font-weight:600;">About Sean &amp; Barb</a> <a href="/contact/" class="nav-link" data-astro-cid-3ef6ksr2>Contact</a> </div> <div class="mt-auto border-t border-white/10 pt-6" data-astro-cid-3ef6ksr2> <a id="btn-nav-contact" href="tel:4073830707" class="btn-navy inline-block">Call Us</a><script>(function(){var el=document.getElementById("btn-nav-contact");if(!el)return;var h=new Date(new Date().toLocaleString("en-US",{timeZone:"America/New_York"})).getHours();if(h>=18||h<9){el.href="mailto:sean@seanandbarb.com";el.textContent="Email Us";}})()</script> </div> </nav> </div>  <script>/*nav-acc*/(function(){var hs=document.querySelectorAll("#nav-panel .nav-acc-head");for(var i=0;i<hs.length;i++){(function(h){h.addEventListener("click",function(){var a=h.parentNode;var o=a.classList.toggle("open");h.setAttribute("aria-expanded",o?"true":"false");});})(hs[i]);}})();</script><script type="module">const n=document.getElementById("site-header"),r=document.getElementById("hamburger"),d=document.getElementById("nav-close"),s=document.getElementById("nav-drawer"),e=document.getElementById("nav-backdrop"),a=document.getElementById("nav-panel"),i=n?.classList.contains("bg-transparent");if(i){const o=()=>{const t=document.querySelector(".hero-section");if(!t)return;const l=t.getBoundingClientRect().bottom<=0;n?.classList.toggle("scrolled",l)};window.addEventListener("scroll",o,{passive:!0})}r?.addEventListener("click",()=>{s.classList.add("pointer-events-auto"),e.classList.replace("opacity-0","opacity-100"),a.classList.replace("translate-x-full","translate-x-0")});const c=()=>{s.classList.remove("pointer-events-auto"),e.classList.replace("opacity-100","opacity-0"),a.classList.replace("translate-x-0","translate-x-full")};d?.addEventListener("click",c);e?.addEventListener("click",c);</script>`;
function applyHeader(html, pathname){
  const bg = 'bg-transparent';
  const z = (/\/listing\//.test(pathname) || /-homes-for-sale\/listing\/[A-Za-z0-9]+\/$/.test(pathname)) ? ' style="z-index:10000;"' : '';
  const header = HEADER_TEMPLATE.replace('__BG__', bg).replace('__Z__', z);
  const out = html.replace(/<header\b[^>]*\bid="site-header"[\s\S]*?<script type="module">[\s\S]*?<\/script>/, function(){ return header; });
  if (out !== html) return out;
  // Fallback: pages whose header is an empty self-closed element with no module
  // script after it (market-report pages) - primary regex cannot match, so inject here.
  return html.replace(/<header\b[^>]*\bid="site-header"[^>]*>\s*<\/header>/, function(){ return header; });
}

// Global CTA rule: every call button (tel:4073830707 or data-sb-cta="call")
// shows "Call Us" + dials during business hours (9a-6p ET) and flips to
// "Email Us" + mailto outside them. Applies to current and future pages.
// Opt a button out with data-sb-cta-skip. Text-only anchors get their label swapped.
const SB_CTA_TOGGLE_SCRIPT = `<script>/*sb-cta-toggle-global*/(function(){function t(){try{var h=new Date(new Date().toLocaleString("en-US",{timeZone:"America/New_York"})).getHours(),a=(h>=18||h<9),l=document.querySelectorAll('a[href^="tel:4073830707"],a[data-sb-cta="call"]');for(var i=0;i<l.length;i++){var el=l[i];if(el.hasAttribute("data-sb-cta-skip"))continue;var o=el.children.length===0;if(a){el.setAttribute("href","mailto:sean@seanandbarb.com");if(o)el.textContent="Email Us";}else{el.setAttribute("href","tel:4073830707");if(o)el.textContent="Call Us";}}}catch(e){}}if(document.readyState!=="loading")t();else document.addEventListener("DOMContentLoaded",t);})();<\/script>`;

const SB_VALUATION_SCROLL_SCRIPT = `<script>/*sb-valuation-scroll-global*/(function(){function tgt(){return document.getElementById("sv-valuation");}function goScroll(){var el=tgt();if(!el)return;var y=el.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||0)-96;window.scrollTo({top:y<0?0:y,behavior:"smooth"});}function closeDrawer(){var p=document.getElementById("nav-panel");if(p)p.classList.replace("translate-x-0","translate-x-full");var b=document.getElementById("nav-backdrop");if(b)b.classList.replace("opacity-100","opacity-0");var d=document.getElementById("nav-drawer");if(d)d.classList.remove("pointer-events-auto");}function burst(){goScroll();[100,300,600,1000,1500].forEach(function(t){setTimeout(goScroll,t);});}function onSelling(){var p=location.pathname;if(p.length>1&&p.charAt(p.length-1)==="/")p=p.slice(0,-1);return p==="/selling-your-home";}document.addEventListener("click",function(e){var a=(e.target&&e.target.closest)?e.target.closest('a[href*="#sv-valuation"]'):null;if(!a)return;if(onSelling()&&tgt()){e.preventDefault();closeDrawer();if(location.hash!=="#sv-valuation"){try{history.replaceState(null,"","#sv-valuation");}catch(_){}}burst();}},true);function onload(){if(location.hash==="#sv-valuation"&&tgt())burst();}if(document.readyState==="complete")onload();else window.addEventListener("load",onload);window.addEventListener("hashchange",function(){if(location.hash==="#sv-valuation")burst();});})();</script>`;

const SB_FAQ_ACCORDION = `<script>document.documentElement.className+=" sbqa-js";</script><style>/*sb-faq-accordion*/.sbqa-js .sb-qa-a{overflow:hidden;max-height:0;transition:max-height .5s cubic-bezier(.22,1,.36,1);}.sb-qa-q{cursor:pointer;position:relative;padding-right:26px;}.sb-qa-q::after{content:"";position:absolute;right:6px;top:.42em;width:7px;height:7px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg);transition:transform .4s cubic-bezier(.22,1,.36,1);opacity:.75;}.sb-qa-q[aria-expanded="true"]::after{transform:rotate(-135deg);}.sb-qa-q:focus-visible{outline:2px solid currentColor;outline-offset:3px;}</style><script>/*sb-faq-accordion*/(function(){function init(){var qs=document.querySelectorAll(".sb-qa-q");if(!qs.length)return;Array.prototype.forEach.call(qs,function(q){var a=q.nextElementSibling;if(!a||!a.classList||!a.classList.contains("sb-qa-a"))return;q.setAttribute("role","button");q.setAttribute("tabindex","0");q.setAttribute("aria-expanded","false");function set(open){if(open){a.style.maxHeight=a.scrollHeight+"px";q.setAttribute("aria-expanded","true");var te=function(ev){if(ev.propertyName==="max-height"){if(q.getAttribute("aria-expanded")==="true")a.style.maxHeight="none";a.removeEventListener("transitionend",te);}};a.addEventListener("transitionend",te);}else{a.style.maxHeight=a.scrollHeight+"px";requestAnimationFrame(function(){requestAnimationFrame(function(){a.style.maxHeight="0px";});});q.setAttribute("aria-expanded","false");}}q.addEventListener("click",function(){set(q.getAttribute("aria-expanded")!=="true");});q.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();set(q.getAttribute("aria-expanded")!=="true");}});});}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();})();</script>`;

// ── Google Analytics 4 (gtag.js) ─ single source of truth ───────────────
// Injected immediately after the opening <head> on every worker-served HTML
// page. async: does not block the critical path or kestrel.js sync loading.
// To rotate the property, change the ID in BOTH places below (it appears in
// the script src and the config call).
// r48: GA4 is withheld from bots and datacenter traffic so Analytics counts
// humans only. Page HTML is otherwise byte-identical (zero SEO/AEO impact --
// crawlers do not need the analytics script). Fail-open: on any doubt or
// error, the tag IS injected, so real visitors are never dropped.
// NOTE: Akamai/Fastly/Cloudflare ASNs are deliberately NOT listed -- iCloud
// Private Relay egresses through them, and those are real Safari users.
function sbIsLikelyBot(request){
  try {
    if (!request || !request.headers) return false;
    const ua = (request.headers.get('user-agent') || '').toLowerCase();
    if (!ua) return true;
    if (/bot|crawl|spider|slurp|headless|lighthouse|python|curl|wget|scrapy|httpx|okhttp|node-fetch|axios\/|go-http|java\/|libwww|phantomjs|selenium|playwright|puppeteer|facebookexternalhit|preview|monitor|uptime|pingdom|semrush|ahrefs|mj12|dotbot|petalbot|bytespider|dataforseo|serpapi|gptbot|claudebot|perplexitybot/.test(ua)) return true;
    const cf = request.cf || {};
    // r330: country and ASN gates (GA4 Jun-Sep 2026: Singapore 179 of 536 users, Chengdu/Shenzhen/Wuhan/Urumqi,
    // Ashburn/San Jose/Des Moines datacenter cities). Page HTML is unchanged for these requests; only gtag is withheld.
    const country = String(cf.country || '').toUpperCase();
    if (country === 'SG' || country === 'CN') return true;
    const asn = Number(cf.asn || 0);
    const DC_ASN = [15169, 396982, 16509, 14618, 8075, 45102, 132203, 14061, 16276, 24940, 63949, 31898];
    if (asn && DC_ASN.indexOf(asn) !== -1) return true;
    const org = String(cf.asOrganization || '').toLowerCase();
    // Cloudflare, Akamai, Fastly and Apple egress iCloud Private Relay (real Safari users); never gate on those orgs.
    if (org && !/cloudflare|akamai|fastly|\bapple\b/.test(org)) {
      if (/amazon|\baws\b|google llc|google cloud|\bgcp\b|microsoft|azure|digitalocean|digital ocean|alibaba|tencent|huawei|ovh|hetzner|linode|oracle|vultr|leaseweb|contabo|m247|colocross|choopa|datacamp|kamatera|scaleway|upcloud|ionos/.test(org)) return true;
      if (/hosting|cloud|datacenter|data center|server|colo/.test(org)) return true;
    }
  } catch (e) {}
  return false;
}

const GA4_TAG = `<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-BPSHREN4PQ"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-BPSHREN4PQ');</script>`;

// ── Unified bottom nav (single source of truth) ─────────────────────────
// Hardcoded on 46 legacy pages; injected here on every other HTML page that
// lacks it AND loads an Astro Layout CSS (which carries .bottom-tab/.slide-panel
// styles). Additive + idempotent: pages already containing #bottom-nav are left
// untouched. Canonical interior version (shows the Back tab).
const BOTTOM_NAV = `<nav id="bottom-nav" class="fixed bottom-0 left-0 right-0 z-50 h-[72px] flex items-center justify-around px-2" data-astro-cid-ltxpr5xc> <a href="/" class="bottom-tab" data-page="home" data-astro-cid-ltxpr5xc> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-ltxpr5xc><path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" data-astro-cid-ltxpr5xc></path></svg> <span data-astro-cid-ltxpr5xc>Home</span> </a> <a href="/cities/" class="bottom-tab" data-astro-cid-ltxpr5xc> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-ltxpr5xc><circle cx="11" cy="11" r="8" data-astro-cid-ltxpr5xc></circle><path d="M21 21l-4.35-4.35" data-astro-cid-ltxpr5xc></path></svg> <span data-astro-cid-ltxpr5xc>Search</span> </a> <button class="bottom-tab" id="btn-chat" data-astro-cid-ltxpr5xc> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-ltxpr5xc><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-ltxpr5xc></path></svg> <span data-astro-cid-ltxpr5xc>Ask 24/7</span> </button> <a href="mailto:sean@seanandbarb.com" class="bottom-tab" data-astro-cid-ltxpr5xc> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-ltxpr5xc><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-ltxpr5xc></path></svg> <span data-astro-cid-ltxpr5xc>Email Us</span> </a> <button class="bottom-tab" id="btn-mortgage" data-astro-cid-ltxpr5xc> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-ltxpr5xc><path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M13 3h8m0 0v8m0-8L11 13" data-astro-cid-ltxpr5xc></path></svg> <span data-astro-cid-ltxpr5xc>Mtg Calc</span> </button> <div aria-hidden="true" style="width:1px;height:32px;background:rgba(196,149,42,0.45);flex-shrink:0;margin:0 2px;"></div> <button class="bottom-tab" id="btn-back" data-astro-cid-ltxpr5xc onclick="if(window.history.length>1)window.history.back();else window.location.href='/';"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-ltxpr5xc><path d="M19 12H5M12 5l-7 7 7 7" data-astro-cid-ltxpr5xc></path></svg> <span data-astro-cid-ltxpr5xc>Back</span> </button> </nav>  <script type="module">const n=document.querySelectorAll(".bottom-tab");n.forEach(e=>{const t=e.href;t&&t===window.location.href&&e.classList.add("active")});document.getElementById("btn-mortgage")?.addEventListener("click",()=>{document.getElementById("mortgage-sheet")?.classList.add("open")});document.getElementById("btn-chat")?.addEventListener("click",()=>{document.getElementById("chat-sheet")?.classList.add("open")});</script> <div id="chat-sheet" class="slide-panel fixed inset-x-0 bottom-0 z-[90] bg-white flex flex-col" style="height: 85dvh; border-radius: 20px 20px 0 0;"> <!-- Header --> <div class="bg-navy px-5 py-4 flex items-center gap-3 flex-shrink-0" style="border-radius: 20px 20px 0 0;"> <div class="flex-shrink-0" style="position:relative;width:56px;height:56px;"><div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#b8860b 0%,#C4952A 30%,#E8B84B 45%,#fffde0 50%,#E8B84B 55%,#C4952A 70%,#b8860b 100%);background-size:200% auto;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-family:Cormorant Garamond,serif;font-style:italic;font-size:17px;color:#001428;font-weight:600;letter-spacing:.02em;">Seba</span></div></div> <div><p class="text-white/50 text-xs">Sean &amp; Barb AI · Available 24/7</p></div> <button id="chat-close" class="ml-auto text-white/60 text-xl leading-none p-1">✕</button> </div> <!-- Messages --> <div id="chat-messages" class="flex-1 overflow-y-auto px-5 py-4 space-y-3"> <div class="flex gap-2"> <div class="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-white text-xs flex-shrink-0">S</div> <div class="bg-cream rounded-2xl rounded-tl-none px-4 py-3 text-sm text-charcoal max-w-[80%]">
Hi! I'm Seba, the Sean &amp; Barb AI assistant. I can answer questions about Central Florida luxury neighborhoods, market stats, physician relocation, and more. What's on your mind?
</div> </div> </div> <!-- Input --> <div class="px-4 pb-4 pt-2 flex-shrink-0 border-t border-gray-100"> <div class="flex gap-2 items-center bg-cream rounded-full px-4 py-2"> <input id="chat-input" type="text" placeholder="Ask about neighborhoods, market stats…" class="flex-1 bg-transparent text-sm outline-none font-sans text-charcoal placeholder:text-taupe/60"> <button id="chat-send" aria-label="Send message" class="w-8 h-8 bg-navy rounded-full flex items-center justify-center flex-shrink-0"> <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"></path></svg> </button> </div> </div> </div> <script type="module">const c=document.getElementById("chat-close"),i=document.getElementById("chat-sheet"),s=document.getElementById("chat-input"),l=document.getElementById("chat-send"),e=document.getElementById("chat-messages");c?.addEventListener("click",()=>i?.classList.remove("open"));const d=async()=>{const t=s?.value.trim();if(!t)return;s.value="",window.__sebaHistory=window.__sebaHistory||[],window.__sebaSessionId=window.__sebaSessionId||(Math.random().toString(36).slice(2)),window.__sebaHistory.push({role:"user",content:t}),e.innerHTML+=\`
      <div class="flex justify-end">
        <div class="bg-navy text-white rounded-2xl rounded-tr-none px-4 py-3 text-sm max-w-[80%]">\${t}</div>
      </div>\`,e.scrollTop=e.scrollHeight;const n="typing-"+Date.now();e.innerHTML+=\`
      <div id="\${n}" class="flex gap-2">
        <div class="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-white text-xs flex-shrink-0">S</div>
        <div class="bg-cream rounded-2xl rounded-tl-none px-4 py-3 text-sm text-taupe">Thinking…</div>
      </div>\`,e.scrollTop=e.scrollHeight;try{const a=await(await fetch("https://seanandbarb-chat.sean-48c.workers.dev/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:window.__sebaHistory||(window.__sebaHistory=[]),sessionId:window.__sebaSessionId})})).json();document.getElementById(n)?.remove(),window.__sebaHistory&&a.content&&a.content[0]&&window.__sebaHistory.push({role:"assistant",content:a.content[0].text||""}),e.innerHTML+=\`
        <div class="flex gap-2">
          <div class="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-white text-xs flex-shrink-0">S</div>
          <div class="bg-cream rounded-2xl rounded-tl-none px-4 py-3 text-sm text-charcoal max-w-[80%]">\${(a.content&&a.content[0]&&a.content[0].text)||"Sorry, I had trouble with that. Please try again."}</div>
        </div>\`}catch{document.getElementById(n)?.remove(),e.innerHTML+=\`
        <div class="flex gap-2">
          <div class="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-white text-xs flex-shrink-0">S</div>
          <div class="bg-cream rounded-2xl rounded-tl-none px-4 py-3 text-sm text-charcoal max-w-[80%]">Connection issue -- please call us at (407) 383-0707.</div>
        </div>\`}e.scrollTop=e.scrollHeight};l?.addEventListener("click",d);s?.addEventListener("keydown",t=>{t.key==="Enter"&&d()});</script> `;
function applyBottomNav(html){
  if (/id="bottom-nav"/.test(html)) return html;
  if (!/_astro\/Layout\.BuFzuhH[ABC]\.css/.test(html)) return html;
  if (!html.includes('</body>')) return html;
  return html.replace('</body>', function(){ return BOTTOM_NAV + '</body>'; });
}

const MARKET_GRAPH = `<section id="market-data" class="bg-white py-14 px-5 sb-band" style="background:#111214">
<style>
.wgsb{margin:14px 8px 22px;font-family:Inter,system-ui,sans-serif;}
.wgsb *{box-sizing:border-box;}
.wgsb-card{background:#141b29;border:1px solid rgba(212,175,55,.55);border-radius:24px;overflow:hidden;box-shadow:0 26px 60px rgba(0,0,0,.5);position:relative;}
.wgsb-bd{padding:14px 16px 16px;}
.wgsb-mast{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1px solid rgba(51,65,85,0.5);padding-bottom:9px;margin-bottom:12px;}
.wgsb-mast .t{font-family:'Playfair Display',Georgia,serif;font-weight:400;font-size:23px;color:#D4AF37;line-height:1.1;}
.wgsb-mast .e{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:12.5px;color:#94a3b8;white-space:nowrap;padding-left:10px;}
.wgsb-cmp{border:1px solid rgba(212,175,55,0.30);border-radius:12px;background:#1a2335;padding:10px 10px 11px;margin:0 0 12px;}
.wgsb-cmplab{font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 8px;}
.wgsb-ledger{display:grid;grid-template-columns:1fr 1fr;gap:5px;}
.wgsb-ledger button{border:1px solid rgba(212,175,55,0.30);border-radius:10px;padding:9px 4px;background:#080b11;color:#94a3b8;font-family:Inter,system-ui,sans-serif;font-size:13px;font-weight:600;line-height:1.15;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color .25s ease,background .25s ease;}
.wgsb-ledger button.on{background:#080b11;border-color:#d4af37;color:#d4af37;box-shadow:0 0 0 1px rgba(212,175,55,.5) inset;}
.wgsb-sel{display:none;width:100%;-webkit-appearance:none;appearance:none;border:1px solid rgba(212,175,55,0.30);border-radius:10px;background-color:#080b11;color:#f1f5f9;font-family:Inter,system-ui,sans-serif;font-weight:600;font-size:15px;line-height:1;padding:12px 34px 12px 14px;background-image:linear-gradient(45deg,transparent 50%,#D4AF37 50%),linear-gradient(135deg,#D4AF37 50%,transparent 50%);background-position:calc(100% - 18px) 20px,calc(100% - 13px) 20px;background-size:5px 5px,5px 5px;background-repeat:no-repeat;}
.wgsb-sel option{color:#f1f5f9;background:#141b29;}
.wgsb-ptog{display:flex;gap:5px;margin:0 0 14px;}
.wgsb-ptog button{flex:1;border:1px solid rgba(212,175,55,0.30);border-radius:9px;padding:9px 4px;background:#080b11;color:#94a3b8;font-family:Inter,system-ui,sans-serif;font-size:12.5px;font-weight:600;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color .25s ease,background .25s ease;}
.wgsb-ptog button.on{background:#080b11;border-color:#d4af37;color:#d4af37;box-shadow:0 0 0 1px rgba(212,175,55,.5) inset;}
.wgsb-pt-trend{font-weight:700;}
.wgsb-pt-trend.up{color:#5FBF7A;}
.wgsb-pt-trend.down{color:#E0645A;}
.wgsb-pbox{border:1px solid rgba(212,175,55,0.30);border-radius:12px;background:#1a2335;padding:15px;}
.wgsb-grid{display:block;}
.wgsb-stats{display:grid;grid-template-columns:1fr 1fr;gap:9px;align-content:start;margin-bottom:16px;}
.wgsb-cell{background:#1a2335;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:11px 12px;}
.wgsb-cell.w{grid-column:1/-1;}
.wgsb-pl{font-size:10.5px;letter-spacing:0.14em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;}
.wgsb-cell .v{font-family:'Playfair Display',Georgia,serif;font-weight:400;font-size:26px;color:#f1f5f9;line-height:1;}
.wgsb-cell.hero .v{font-size:36px;}
.wgsb-dl{font-size:11px;font-weight:600;margin-top:5px;display:flex;gap:8px;align-items:baseline;}
.wgsb-dl .lb{font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;font-weight:700;min-width:58px;}
.wgsb-u{color:#4ade80;}#sb-wgs-mom{color:#f1f5f9;font-weight:600;}.wgsb-note{font-size:11px;line-height:1.5;color:#94a3b8;margin:5px 0 0;}
.wgsb-dn{color:#f87171;}
.wgsb-moic{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;}
.wgsb-moil{min-width:0;}
.wgsb-badge{display:inline-block;background:#080b11;border:1px solid #d4af37;color:#d4af37;border-radius:999px;padding:9px 17px;font-family:Inter,system-ui,sans-serif;font-weight:700;font-size:12px;letter-spacing:0.11em;text-transform:uppercase;line-height:1.25;white-space:nowrap;flex:0 0 auto;}
.wgsb-figcap{display:flex;justify-content:space-between;align-items:baseline;gap:10px;border-bottom:1px solid rgba(51,65,85,0.5);padding-bottom:6px;margin-bottom:9px;}
.wgsb-figcap .ft{font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#f1f5f9;font-weight:700;}
.wgsb-figcap .fr{font-size:10.5px;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;white-space:nowrap;}
.wgsb-viz{width:100%;height:190px;display:block;}
.wgsb-gbar{transform-box:fill-box;transform-origin:center bottom;transform:scaleY(0);transition:transform var(--bd,0.7s) cubic-bezier(.22,1,.36,1) var(--bdl,0s);}
.wgsb-gbar.in{transform:scaleY(1);}
.wgsb-gdot{opacity:0;transition:opacity .45s ease var(--ddl,1s);}
.wgsb-gdot.in{opacity:1;}
.wgsb-act{margin-top:16px;}
.wgsb-arow{display:grid;grid-template-columns:1fr;gap:9px;}
.wgsb-sq{background:#1a2335;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:11px 12px;}
.wgsb-sq .k{font-size:10.5px;letter-spacing:0.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;}
.wgsb-sq .n{font-family:'Playfair Display',Georgia,serif;font-weight:400;font-size:28px;color:#f1f5f9;line-height:1.05;margin-top:4px;}
.wgsb-sq .n.pend{font-size:17px;color:#94a3b8;}
.wgsb-sq .w{font-size:12px;color:#94a3b8;margin-top:6px;line-height:1.45;}
.wgsb-sq.hl{border-color:rgba(212,175,55,.5);background:#080b11;}
.wgsb-sq.hl .n{color:#D4AF37;}
.wgsb-sq.hl .n.pend{color:rgba(212,175,55,0.45);}
.wgsb-foot{font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;margin-top:10px;text-align:center;}
.sr-mkt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}
section#market-data{padding-top:20px !important;padding-bottom:22px !important;}
body.sb-rail section#market-data{padding-left:20px !important;padding-right:20px !important;}
body.sb-rail section#market-data > .max-w-screen-xl{max-width:1280px !important;margin-left:auto !important;margin-right:auto !important;}
section#market-data .wgsb{margin-left:auto !important;margin-right:auto !important;max-width:1280px !important;width:100% !important;}
section#market-data .section-eyebrow{margin-bottom:2px;}
section#market-data .section-heading{font-size:clamp(26px,2.6vw,34px) !important;margin-bottom:4px !important;color:#f1f5f9 !important;}
section#market-data > .max-w-screen-xl > p.text-sm{margin-top:6px !important;margin-bottom:10px !important;color:#94a3b8 !important;}
@media (min-width:1024px){
#sb-home-wgs .wgsb-mast .t{font-size:30px;}
#sb-home-wgs .wgsb-mast .e{font-size:14px;}
#sb-home-wgs .wgsb-cmplab{font-size:12px;}
#sb-home-wgs .wgsb-ledger{grid-template-columns:repeat(10,1fr);}
#sb-home-wgs .wgsb-ledger button{font-size:14px;padding:9px 4px;}
#sb-home-wgs .wgsb-grid{display:grid;grid-template-columns:minmax(250px,27%) 1fr;gap:0 28px;}
#sb-home-wgs .wgsb-stats{margin-bottom:0;}
#sb-home-wgs .wgsb-pl{font-size:11.5px;}#sb-home-wgs .wgsb-cell{display:flex;flex-direction:column;}#sb-home-wgs .wgsb-cell:not(.w) .wgsb-pl{min-height:2.6em;}#sb-home-wgs .wgsb-cell .v{margin-top:auto;}
#sb-home-wgs .wgsb-cell .v{font-size:28px;}
#sb-home-wgs .wgsb-cell.hero .v{font-size:40px;}
#sb-home-wgs .wgsb-dl{font-size:12px;}
#sb-home-wgs .wgsb-figcap .ft{font-size:12.5px;}
#sb-home-wgs .wgsb-figcap .fr{font-size:11.5px;}
#sb-home-wgs .wgsb-viz{height:230px;}
#sb-home-wgs .wgsb-arow{grid-template-columns:repeat(2,1fr);gap:10px;}
#sb-home-wgs .wgsb-sq .n{font-size:31px;}
#sb-home-wgs .wgsb-sq .k{font-size:11.5px;}
#sb-home-wgs .wgsb-foot{font-size:11.5px;}
}
@media (max-height:840px) and (min-width:1024px){
section#market-data > .max-w-screen-xl > p.text-sm{display:none !important;}
section#market-data{padding-top:14px !important;padding-bottom:16px !important;}
#sb-home-wgs .wgsb{margin:8px auto 12px;}
#sb-home-wgs .wgsb-bd{padding:10px 14px 12px;}
#sb-home-wgs .wgsb-mast{padding-bottom:7px;margin-bottom:9px;}
#sb-home-wgs .wgsb-viz{height:196px;}
#sb-home-wgs .wgsb-act{margin-top:12px;}
}
@media (max-width:1023px){
#sb-home-wgs .wgsb-cmp{border:0;background:none;padding:0;margin:0 0 12px;}
#sb-home-wgs .wgsb-ledger{display:none;}
#sb-home-wgs .wgsb-sel{display:block;}
section#market-data > .max-w-screen-xl{padding-left:10px;padding-right:10px;}
#sb-home-wgs .wgsb-bd{padding-left:13px;padding-right:13px;}
#sb-home-wgs .wgsb-stats{display:block;margin-bottom:12px;}
#sb-home-wgs .wgsb-cell{background:none;border:0;border-bottom:1px solid rgba(51,65,85,0.5);border-radius:0;padding:9px 0;display:flex;align-items:baseline;justify-content:space-between;gap:10px;}
#sb-home-wgs .wgsb-pl{margin:0;font-size:10.5px;letter-spacing:0.13em;}
#sb-home-wgs .wgsb-cell .v{font-size:19px;}
#sb-home-wgs .wgsb-cell.hero{display:grid;grid-template-columns:1fr auto;align-items:baseline;padding-top:0;}
#sb-home-wgs .wgsb-cell.hero .wgsb-pl{grid-column:1/-1;margin-bottom:4px;}
#sb-home-wgs .wgsb-cell.hero .v{grid-column:1;grid-row:2/4;font-size:33px;}
#sb-home-wgs .wgsb-dl{margin-top:0;justify-content:flex-end;gap:6px;}
#sb-home-wgs .wgsb-dl .lb{min-width:0;}
#sb-home-wgs .wgsb-cell.wgsb-moic{border-bottom:0;padding-bottom:2px;align-items:center;}
#sb-home-wgs .wgsb-moil{display:flex;align-items:baseline;gap:10px;}
#sb-home-wgs .wgsb-viz{height:165px;}
#sb-home-wgs .wgsb-act{margin-top:13px;}
#sb-home-wgs .wgsb-arow{grid-template-columns:1fr 1fr;gap:8px;}
#sb-home-wgs .wgsb-sq{padding:10px 11px;}
#sb-home-wgs .wgsb-sq .n{font-size:25px;}
#sb-home-wgs .wgsb-sq .w{font-size:11.5px;}
}
@media (prefers-reduced-motion: reduce){
.wgsb-gbar,.wgsb-gdot{transition:none !important;}
}
</style>
<div class="max-w-screen-xl mx-auto">
<h2 class="section-heading mb-2">Central Florida Housing Stats</h2>
<p class="text-sm text-taupe font-sans leading-relaxed mt-4 mb-4 max-w-2xl">Median sold price, price per square foot, market pace, and months of supply for the 10 Central Florida markets we serve, updated monthly from Stellar MLS closed sales. Data through August 2026.</p>
</div>
<style>section#market-data > .max-w-screen-xl{text-align:center;}section#market-data .section-heading{text-align:center;}section#market-data > .max-w-screen-xl > p{margin-left:auto;margin-right:auto;}@media (min-width:1024px){#sb-home-wgs .wgsb-grid{align-items:stretch;}#sb-home-wgs .wgsb-right{display:flex;flex-direction:column;}#sb-home-wgs .wgsb-right .wgsb-viz{flex:0 0 auto;height:300px;}#sb-home-wgs .wgsb-right .wgsb-act{flex:0 0 auto;}#sb-home-wgs .wgsb-right .sb-mrc{margin-top:auto;flex:0 0 auto;}#sb-home-wgs .wgsb-stats{height:100%;align-content:space-between;margin-bottom:0;}}</style><div class="wgsb" id="sb-home-wgs">
<div class="wgsb-card">
<div class="wgsb-bd">
<div class="wgsb-mast"><span class="t"><span id="sb-wgs-city">Orlando</span> <span id="sb-wgs-ptlabel">Single Family</span> Housing Stats</span><span class="e">August 2026 Stats</span></div>
<div class="wgsb-cmp"><p class="wgsb-cmplab">Choose a market</p><div class="wgsb-ledger" id="sb-wgs-led" role="tablist" aria-label="Choose a market"></div><select class="wgsb-sel" id="sb-wgs-sel" aria-label="Choose a market"></select></div>
<div class="wgsb-ptog" id="sb-wgs-ptog" role="tablist" aria-label="Property type"></div>
<div class="wgsb-pbox"><div class="wgsb-grid">
<div class="wgsb-stats">
<div class="wgsb-cell w hero"><p class="wgsb-pl">Median Sold Price, <span id="sb-wgs-medmonth">August 2026</span></p><div class="v" id="sb-wgs-med">$425,000</div>
<div class="wgsb-dl"><span class="lb" id="sb-wgs-momlab">Jun-Aug Avg</span><span id="sb-wgs-mom">-</span></div>
<div class="wgsb-dl"><span class="lb" id="sb-wgs-yoylab">vs Jun-Aug 2025</span><span id="sb-wgs-yoy">-</span></div></div>
<div class="wgsb-cell w"><p class="wgsb-pl">Median Price Per Sq Ft</p><div class="v" id="sb-wgs-ppsf">-</div></div>
<div class="wgsb-cell"><p class="wgsb-pl">Closed in <span id="sb-wgs-clsmonth">August</span></p><div class="v" id="sb-wgs-cls">-</div></div>
<div class="wgsb-cell"><p class="wgsb-pl">Median Days on Market</p><div class="v" id="sb-wgs-dom">-</div></div><div class="wgsb-cell w"><p class="wgsb-pl">List Price vs. Sold Price %</p><div class="v" id="sb-wgs-pct">-</div><p class="wgsb-note">Half of <span id="sb-wgs-pctmonth">August</span> sales closed at or above this share of the final asking price</p></div>
<div class="wgsb-cell w wgsb-moic"><div class="wgsb-moil"><p class="wgsb-pl">Months of Supply</p><div class="v" id="sb-wgs-moi">-</div></div><span class="wgsb-badge" id="sb-wgs-bal">-</span></div>
</div>
<div class="wgsb-right">
<div class="wgsb-figcap"><span class="ft">Active Listing Inventory vs Homes Closed</span><span class="fr" id="sb-wgs-chartrange">Nov 2025 to Aug 2026</span></div>
<svg class="wgsb-viz" id="sb-wgs-chart" preserveAspectRatio="none" role="img" aria-label="Active listing inventory and homes closed by month"></svg>
<div class="wgsb-act">
<div class="wgsb-figcap"><span class="ft">This Month's Listing Activity</span><span class="fr" id="sb-wgs-actmonth">August 2026</span></div>
<div class="wgsb-arow">
<div class="wgsb-sq"><div class="k">New Listings</div><div class="n" id="sb-wgs-new">-</div><div class="w">Competition that arrived this month</div></div>

<div class="wgsb-sq hl"><div class="k">Pending</div><div class="n" id="sb-wgs-pen">-</div><div class="w">Under contract now, closing in 30 to 45 days</div></div>
</div>
</div>
<div class="sb-mrc" id="sb-mrc-h"><p class="mrc-l">Get the Central Florida market report monthly</p><form action="https://script.google.com/macros/s/AKfycbzs-zsOdhVg8eqEYyrhujN_Wuh2va_zQieJWk7MXKWDbcPH9Gllt5jkr2nROf7k93OURw/exec" method="POST" target="sb-mrc-sink-h" novalidate><input type="hidden" name="source" value="Market Report - Central Florida"><input type="hidden" name="page" value="" class="mrc-page"><input type="hidden" name="message" value="Requested the Central Florida monthly market report."><input type="text" name="company" class="mrc-hp" tabindex="-1" autocomplete="off" aria-hidden="true"><input type="text" name="name" placeholder="First name" autocomplete="given-name"><input type="email" name="email" placeholder="Email address" autocomplete="email"><button type="submit">Send the Report</button></form><iframe name="sb-mrc-sink-h" style="display:none;width:0;height:0;border:0;" title="hidden"></iframe><p class="mrc-ok">You are on the Central Florida list. The next monthly report comes straight to your inbox.</p><p class="mrc-er"></p><script>(function(){var r=document.getElementById("sb-mrc-h");if(!r||r.getAttribute("data-i"))return;r.setAttribute("data-i","1");var f=r.querySelector("form"),ok=r.querySelector(".mrc-ok"),er=r.querySelector(".mrc-er"),b=r.querySelector("button"),s=false;r.querySelector(".mrc-page").value=location.href;f.addEventListener("submit",function(e){er.style.display="none";var nm=f.querySelector("[name=name]").value.trim(),em=f.querySelector("[name=email]").value.trim();if(!nm||!em){e.preventDefault();er.textContent="Please add your first name and email.";er.style.display="block";return;}if(!/^[^@s]+@[^@s]+.[^@s]+$/.test(em)){e.preventDefault();er.textContent="Please enter a valid email address.";er.style.display="block";return;}s=true;b.disabled=true;b.textContent="Sending...";});r.querySelector("iframe").addEventListener("load",function(){if(!s)return;f.style.display="none";ok.style.display="block";});})();</script></div>
</div>
</div></div>
<div class="wgsb-foot">Source: Stellar MLS InfoSparks, single-family homes, August 2026. Based on information from the Stellar Multiple Listing Service. This information may or may not include all listed expired, withdrawn, pending or sold properties of one or more members of the Stellar Multiple Listing Service.</div>
<style>.wgsb-na{color:#94a3b8;font-style:normal}/*sb-mrc*/.sb-mrc{margin-top:14px;padding:14px 14px 15px;border:1px solid rgba(212,175,55,.55);border-radius:12px;background:#080b11;}.sb-mrc .mrc-l{font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#d4af37;font-weight:700;margin:0 0 9px;font-family:Inter,system-ui,sans-serif;}.sb-mrc form{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;}.sb-mrc input{flex:1 1 120px;min-width:0;border:1px solid rgba(212,175,55,0.30);border-radius:10px;background:#141b29;padding:11px 13px;font-family:Inter,system-ui,sans-serif;font-size:14px;color:#f1f5f9;transition:border-color .2s ease,background .2s ease,box-shadow .2s ease;}.sb-mrc input::placeholder{color:rgba(148,163,184,.4);}.sb-mrc input:focus{outline:none;border-color:#d4af37;background:#141b29;box-shadow:0 0 0 3px rgba(212,175,55,0.15);}.sb-mrc input:hover{border-color:rgba(212,175,55,0.5);}.sb-mrc button{flex:0 0 auto;background:linear-gradient(to right,#d4af37,#aa8822);color:#080d0a;border:0;border-radius:10px;padding:11px 20px;font-family:Inter,system-ui,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;cursor:pointer;transition:opacity .3s ease,transform .3s ease;}.sb-mrc button:hover{opacity:.9;transform:translateY(-1px);}.sb-mrc .mrc-hp{position:absolute;left:-6000px;top:auto;}.sb-mrc .mrc-ok{display:none;font-family:Georgia,serif;font-size:13.5px;color:#d4af37;margin:2px 0 0;}.sb-mrc .mrc-er{display:none;font-family:Inter,system-ui,sans-serif;font-size:11.5px;color:#FCA5A5;margin:4px 0 0;}@media (min-width:768px){#sb-home-wgs .wgsb-foot{margin-top:30px;}#sb-home-wgs .wgsb-bd{padding-bottom:20px;}section#market-data{padding-bottom:72px !important;}}</style>
</div>
</div>
</div>
<p class="sr-mkt" id="sb-wgs-sr">August 2026 median sold prices across our ten Central Florida markets, single-family homes: Orlando $425,000 (574 closed, 26 days on market, 98.7% of last list price); Winter Garden $670,066 (131 closed, 22 days on market, 98.5% of last list price); Windermere $960,000 (43 closed, 75 days on market, 95.3% of last list price); Dr. Phillips $962,000 (13 closed, 56 days on market, 96.2% of last list price); Lake Nona $832,250 (26 closed, 69 days on market, 98.8% of last list price); Winter Park $624,900 (63 closed, 16 days on market, 98.2% of last list price); Maitland $620,000 (22 closed, 19 days on market, 98.4% of last list price); Longwood $569,250 (44 closed, 12 days on market, 99.1% of last list price); Lake Mary $650,000 (37 closed, 20 days on market, 97.8% of last list price); Oviedo $581,500 (64 closed, 21 days on market, 98.8% of last list price). Source: Stellar MLS InfoSparks.</p>
<script type="application/json" id="sb-home-wgs-data">{"orlando":{"label":"Orlando","nm":"Orlando","bal":"Balanced","ppsf":"$244","avg3":"$441,000","yoy":"-1.62%","pct":"98.7%","D":{"L":[2161,1982,2051,2139,2116,2093,2195,2329,2362,2321],"S":[518,560,429,444,585,631,566,708,666,574],"median":425000,"mom":-4.49,"dir":-1,"dom":26,"moi":4.0,"pinPos":44.4}},"winter-garden":{"label":"Winter Garden","nm":"Winter Garden","bal":"Balanced","ppsf":"$255","avg3":"$698,022","yoy":"+2.05%","pct":"98.5%","D":{"L":[428,400,414,423,430,439,465,522,519,479],"S":[116,136,81,82,132,125,111,161,137,131],"median":670066,"mom":-10.06,"dir":-1,"dom":22,"moi":3.7,"pinPos":41.1}},"windermere":{"label":"Windermere","nm":"Windermere","bal":"Balanced","ppsf":"$325","avg3":"$1,083,332","yoy":"+2.12%","pct":"95.3%","D":{"L":[202,174,186,197,210,202,210,221,212,199],"S":[31,35,36,38,34,51,61,60,50,43],"median":960000,"mom":-17.06,"dir":-1,"dom":75,"moi":4.5,"pinPos":50.0}},"dr-phillips":{"label":"Dr. Phillips","nm":"Dr. Phillips","bal":"Balanced","ppsf":"$312","avg3":"$740,667","yoy":"+23.96%","pct":"96.2%","D":{"L":[94,84,81,89,87,83,79,85,85,81],"S":[25,21,13,17,25,16,16,31,26,13],"median":962000,"mom":60.33,"dir":1,"dom":56,"moi":3.8,"pinPos":42.2}},"lake-nona":{"label":"Lake Nona","nm":"Lake Nona","bal":"Balanced","ppsf":"$287","avg3":"$811,337","yoy":"-10.96%","pct":"98.8%","D":{"L":[143,125,133,147,153,170,172,170,163,152],"S":[18,41,21,28,27,29,29,42,34,26],"median":832250,"mom":2.75,"dir":1,"dom":69,"moi":5.1,"pinPos":56.7}},"winter-park":{"label":"Winter Park","nm":"Winter Park","bal":"Balanced","ppsf":"$339","avg3":"$633,300","yoy":"+10.91%","pct":"98.2%","D":{"L":[200,171,184,172,207,214,238,242,239,235],"S":[50,63,41,41,67,44,45,87,79,63],"median":624900,"mom":-3.12,"dir":-1,"dom":16,"moi":3.9,"pinPos":43.3}},"maitland":{"label":"Maitland","nm":"Maitland","bal":"Sellers","ppsf":"$283","avg3":"$659,167","yoy":"+7.87%","pct":"98.4%","D":{"L":[53,41,43,47,62,64,73,72,74,57],"S":[16,20,13,15,20,13,22,27,22,22],"median":620000,"mom":-9.16,"dir":-1,"dom":19,"moi":2.7,"pinPos":30.0}},"longwood":{"label":"Longwood","nm":"Longwood","bal":"Sellers","ppsf":"$256","avg3":"$559,417","yoy":"+8.45%","pct":"99.1%","D":{"L":[134,118,121,116,131,132,130,124,121,126],"S":[46,52,33,44,58,38,64,45,79,44],"median":569250,"mom":9.47,"dir":1,"dom":12,"moi":2.5,"pinPos":27.8}},"lake-mary":{"label":"Lake Mary","nm":"Lake Mary","bal":"Balanced","ppsf":"$270","avg3":"$629,167","yoy":"+3.94%","pct":"97.8%","D":{"L":[96,99,94,88,85,91,102,101,101,104],"S":[31,35,14,29,30,38,37,43,40,37],"median":650000,"mom":2.77,"dir":1,"dom":20,"moi":3.0,"pinPos":33.3}},"oviedo":{"label":"Oviedo","nm":"Oviedo","bal":"Sellers","ppsf":"$262","avg3":"$593,500","yoy":"+4.74%","pct":"98.8%","D":{"L":[152,132,140,155,150,152,148,165,166,144],"S":[41,46,36,38,38,78,56,67,74,64],"median":581500,"mom":-3.08,"dir":-1,"dom":21,"moi":2.6,"pinPos":28.9}}}</script>
<script>(function(){
var root=document.getElementById('sb-home-wgs');if(!root||root.getAttribute('data-wgsb-init'))return;root.setAttribute('data-wgsb-init','1');
var CITIES={};try{CITIES=JSON.parse(document.getElementById('sb-home-wgs-data').textContent);}catch(e){return;}
var months=['Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'];
var GOLD='#d4af37',COL='rgba(148,163,184,0.45)';
var cur='orlando',firstPaint=true,fired=false,ptype='sf';
var ACT={"orlando":{"new":785,"pen":593},"winter-garden":{"new":152,"pen":127},"windermere":{"new":49,"pen":35},"dr-phillips":{"new":22,"pen":18},"lake-nona":{"new":31,"pen":29},"winter-park":{"new":88,"pen":71},"maitland":{"new":25,"pen":33},"longwood":{"new":54,"pen":36},"lake-mary":{"new":45,"pen":36},"oviedo":{"new":53,"pen":61}};
var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function niceCeil(v){var p=Math.pow(10,String(Math.round(v)).length-1);return Math.ceil(v/p)*p;}
function q(id){return document.getElementById(id);}
var cRun=0;
function countTo(el,target,dec,pre,dur,suf){
 suf=suf||'';
 if(!el)return;
 /* r369: count up from 94% of the value, not from zero. Animating from 0 displayed a materially wrong price for ~2.6s every time the widget scrolled into view, which is long enough to be screenshotted or crawled. */var CFLOOR=0.94;var fin=function(){el.textContent=pre+(dec?target.toFixed(dec):target.toLocaleString('en-US'))+suf;};
 if(reduce||!dur){fin();return;}
 var id=++cRun;el.setAttribute('data-run',id);
 var t0=null;
 function step(ts){if(+el.getAttribute('data-run')!==id)return;
  if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/dur);var e=1-Math.pow(1-p,3);var v=target*(CFLOOR+(1-CFLOOR)*e);
  el.textContent=pre+(dec?v.toFixed(dec):Math.round(v).toLocaleString('en-US'))+suf;
  if(p<1)requestAnimationFrame(step);else fin();}
 requestAnimationFrame(step);
 setTimeout(function(){if(+el.getAttribute('data-run')===id)fin();},dur+120);
}
function drawCombo(svg,D,dur){
 if(!svg)return;
 var W=800,H=svg.clientHeight||230,pl=46,pr=16,pt=26,pb=24;
 svg.setAttribute('viewBox','0 0 '+W+' '+H);
 var maxV=niceCeil(Math.max.apply(null,D.L)),n=D.L.length,iw=W-pl-pr,ih=H-pt-pb,bw=iw/n*0.46;
 function X(i){return pl+(i+0.5)*iw/n;}
 function Y(v){return pt+ih-(v/maxV)*ih;}
 var s='<rect x="'+pl+'" y="6" width="11" height="9" rx="1.5" fill="'+COL+'"/><text x="'+(pl+17)+'" y="14" font-family="Inter" font-size="11.5" fill="#f1f5f9">Active Listing Inventory</text>';
 s+='<rect x="'+(pl+165)+'" y="6" width="11" height="9" rx="1.5" fill="'+GOLD+'"/><text x="'+(pl+182)+'" y="14" font-family="Inter" font-size="11.5" fill="#f1f5f9">Homes Closed</text>';
 [maxV,0].forEach(function(v){var y=Y(v);
  s+='<line x1="'+pl+'" y1="'+y+'" x2="'+(W-pr)+'" y2="'+y+'" stroke="rgba(51,65,85,0.6)" stroke-dasharray="2 4"/>';
  s+='<text x="'+(pl-8)+'" y="'+(y+3)+'" text-anchor="end" font-family="Inter" font-size="11.5" fill="#94a3b8">'+v+'</text>';});
 var i;
 for(i=0;i<n;i++){var y=Y(D.L[i]);
  s+='<rect class="wgsb-gbar" style="--bd:'+(dur*0.5).toFixed(2)+'s;--bdl:'+(i*0.075).toFixed(3)+'s" x="'+(X(i)-bw/2).toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+bw.toFixed(1)+'" height="'+(pt+ih-y).toFixed(1)+'" rx="2" fill="'+COL+'"/>';}
 var d='';for(i=0;i<n;i++){d+=(i?'L':'M')+X(i).toFixed(1)+' '+Y(D.S[i]).toFixed(1)+' ';}
 s+='<path class="wgsb-gline" d="'+d+'" fill="none" stroke="'+GOLD+'" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>';
 s+='<circle class="wgsb-gdot" style="--ddl:'+(dur*0.72).toFixed(2)+'s" cx="'+X(n-1).toFixed(1)+'" cy="'+Y(D.S[n-1]).toFixed(1)+'" r="3.6" fill="'+GOLD+'"/>';
 for(var m=0;m<n;m+=2){s+='<text x="'+X(m).toFixed(1)+'" y="'+(H-5)+'" text-anchor="middle" font-family="Inter" font-size="11.5" fill="#94a3b8">'+((D.months&&D.months[m])||months[m])+'</text>';}
 svg.innerHTML=s;
 var line=svg.querySelector('.wgsb-gline');
 if(line&&line.getTotalLength&&!reduce){var L=line.getTotalLength();
  line.style.strokeDasharray=L;line.style.strokeDashoffset=L;line.style.transition='none';}
 requestAnimationFrame(function(){
  svg.querySelectorAll('.wgsb-gbar').forEach(function(r){r.classList.add('in');});
  var dot=svg.querySelector('.wgsb-gdot');
  if(reduce){if(line)line.style.strokeDashoffset=0;if(dot)dot.classList.add('in');return;}
  if(line&&line.getTotalLength){void line.getBoundingClientRect();
   line.style.transition='stroke-dashoffset '+dur+'s cubic-bezier(.22,1,.36,1) '+(dur*0.18).toFixed(2)+'s';
   line.style.strokeDashoffset=0;}
  if(dot)dot.classList.add('in');
 });
}
function citiesToD(k){
 var c=CITIES[k];if(!c)return null;
 return { label:c.label, D:c.D, avg3:c.avg3, yoy:c.yoy, ppsf:c.ppsf, pct:c.pct, bal:c.bal, act:ACT[k]||{},
  currentMonthLabel:'August 2026', currentMonthOnly:'August', avg3Label:'Jun-Aug Avg', yoyLabel:'vs Jun-Aug 2025', chartRangeLabel:'Nov 2025 to Aug 2026' };
}
var PTYPES=[['sf','Single Family'],['condo','Condo'],['th','Townhome']];
var fullCache={};
function switchCity(k){cur=k;renderLed();renderPtog();loadAndPaint();}
function renderLed(){
 var led=q('sb-wgs-led');if(!led)return;
 led.innerHTML=Object.keys(CITIES).map(function(k){
  return '<button type="button" data-k="'+k+'"'+(k===cur?' class="on"':'')+'>'+CITIES[k].nm+'</button>';}).join('');
 led.querySelectorAll('button').forEach(function(b){
  b.addEventListener('click',function(){switchCity(b.dataset.k);});});
 var sel=q('sb-wgs-sel');
 if(sel){
  if(!sel.options.length){
   sel.innerHTML=Object.keys(CITIES).map(function(k){
    return '<option value="'+k+'">'+CITIES[k].nm+'</option>';}).join('');
   sel.addEventListener('change',function(){switchCity(sel.value);});
  }
  sel.value=cur;
 }
}
function renderPtog(){
 var t=q('sb-wgs-ptog');if(!t)return;
 t.innerHTML=PTYPES.map(function(p){
  return '<button type="button" data-pt="'+p[0]+'"'+(p[0]===ptype?' class="on"':'')+'>'+p[1]+'</button>';}).join('');
 t.querySelectorAll('button').forEach(function(b){
  b.addEventListener('click',function(){ptype=b.dataset.pt;renderPtog();loadAndPaint();});});
 var lbl=q('sb-wgs-ptlabel');if(lbl){var m=PTYPES.filter(function(p){return p[0]===ptype;})[0];lbl.textContent=m?m[1]:'';}
}
function loadAndPaint(){
 var key=cur+':'+ptype;
 if(fullCache[key]){paint(fullCache[key]);return;}
 if(ptype==='sf'){var inst=citiesToD(cur);if(inst)paint(inst);}
 fetch('/api/ptype-full?market='+encodeURIComponent(cur)+'&ptype='+encodeURIComponent(ptype)).then(function(r){return r.json();}).then(function(d){
  if(!d||!d.ok)return;
  fullCache[key]=d;
  if(cur+':'+ptype===key)paint(d);
 }).catch(function(){});
}
function paint(d){
 if(!d||!d.D)return;
 var D=d.D;
 var dur=firstPaint?6.4:2.2,cdur=firstPaint?3200:1500;
 q('sb-wgs-city').textContent=d.label||(CITIES[cur]||{}).label||'';
 if(D.median!=null)countTo(q('sb-wgs-med'),D.median,0,'$',cdur);
 q('sb-wgs-mom').textContent=d.avg3||'-';
 var hasY=d.yoy!=null&&String(d.yoy).trim()!=='';
 var yv=hasY?String(d.yoy).replace('+','').replace('-','').trim():'',yup=hasY&&String(d.yoy).indexOf('-')!==0;
 q('sb-wgs-yoy').innerHTML=hasY?('<span class="'+(yup?'wgsb-u':'wgsb-dn')+'">'+(yup?'▲ +':'▼ -')+'<i id="sb-wgs-yoyn" style="font-style:normal"></i>%</span>'):'<span class="wgsb-na">n/a</span>';
 if(hasY){var yn=parseFloat(yv.replace(/[^0-9.]/g,''));if(isFinite(yn))countTo(q('sb-wgs-yoyn'),yn,2,'',cdur);else q('sb-wgs-yoyn').textContent=yv.replace('%','');}
 var pv=parseFloat(String(d.ppsf).replace(/[^0-9.]/g,''));
 if(isFinite(pv))countTo(q('sb-wgs-ppsf'),pv,0,'$',cdur);else if(q('sb-wgs-ppsf'))q('sb-wgs-ppsf').textContent='-';
 if(D.S&&D.S.length)countTo(q('sb-wgs-cls'),D.S[D.S.length-1],0,'',cdur);
 if(D.dom!=null)countTo(q('sb-wgs-dom'),D.dom,0,'',cdur);
 if(D.moi!=null)countTo(q('sb-wgs-moi'),D.moi,2,'',cdur);
 if(q('sb-wgs-pct'))q('sb-wgs-pct').textContent=d.pct||'-';
 q('sb-wgs-bal').textContent=(d.bal==='Sellers'?"Seller's Market":d.bal==='Buyers'?"Buyer's Market":'Balanced Market');
 var a=d.act||{};
 ['new','chg','pen'].forEach(function(f){
  var el=q('sb-wgs-'+f);if(!el)return;
  if(a[f]==null){el.textContent='awaiting data';el.className='n pend';}
  else{el.className='n';countTo(el,a[f],0,'',cdur);}
 });
 if(d.currentMonthLabel){if(q('sb-wgs-medmonth'))q('sb-wgs-medmonth').textContent=d.currentMonthLabel;if(q('sb-wgs-actmonth'))q('sb-wgs-actmonth').textContent=d.currentMonthLabel;}
 if(d.currentMonthOnly){if(q('sb-wgs-clsmonth'))q('sb-wgs-clsmonth').textContent=d.currentMonthOnly;if(q('sb-wgs-pctmonth'))q('sb-wgs-pctmonth').textContent=d.currentMonthOnly;}
 if(d.avg3Label&&q('sb-wgs-momlab'))q('sb-wgs-momlab').textContent=d.avg3Label;
 if(d.yoyLabel&&q('sb-wgs-yoylab'))q('sb-wgs-yoylab').textContent=d.yoyLabel;
 if(d.chartRangeLabel&&q('sb-wgs-chartrange'))q('sb-wgs-chartrange').textContent=d.chartRangeLabel;
 drawCombo(q('sb-wgs-chart'),D,dur);
 firstPaint=false;
}
function go(){if(fired)return;fired=true;renderLed();renderPtog();loadAndPaint();}
function maybe(){if(fired)return;var r=root.getBoundingClientRect();
 var vh=window.innerHeight||document.documentElement.clientHeight;
 if(r.top<vh*0.80&&r.bottom>vh*0.10){go();window.removeEventListener('scroll',onScroll);}}
function onScroll(){maybe();}
if(window.IntersectionObserver){var io=new IntersectionObserver(function(en){
 en.forEach(function(e){if(e.isIntersecting&&e.intersectionRatio>=0.2){go();io.disconnect();}});
},{threshold:[0,0.2,0.5]});io.observe(root);}
else{window.addEventListener('scroll',onScroll,{passive:true});}
window.addEventListener('resize',function(){if(fired){var dd=fullCache[cur+':'+ptype];if(dd)drawCombo(q('sb-wgs-chart'),dd.D,0.9);}});
maybe();
setTimeout(function(){if(!fired&&!window.IntersectionObserver)go();},9000);
})();
</script>
<script id="sb-wgs-fit">(function(){var el=document.getElementById("sb-home-wgs");if(!el)return;var mq=window.matchMedia("(min-width:768px)");var GAP=28;function fit(){if(!mq.matches){el.style.zoom="";return;}el.style.zoom="1";var nat=el.getBoundingClientRect().height;if(!nat)return;var avail=window.innerHeight-GAP;var z=avail/nat;if(z>=1){el.style.zoom="";return;}if(z<0.72)z=0.72;el.style.zoom=String(Math.floor(z*1000)/1000);}if(document.readyState==="complete")fit();else window.addEventListener("load",fit);window.addEventListener("resize",fit);setTimeout(fit,600);setTimeout(fit,2600);})();</script></section>`;

// ---- ADDITIVE: centralized tax data for the legacy mortgage/tax widget (sb-tax-data.json) ----
const SB_TAX_FIX = '<script id="sb-tax-fix">' +
'(function(){' +
'if(window.__sbTaxFix)return;window.__sbTaxFix=1;' +
'var SEL=document.getElementById("m-state"),BTN=document.getElementById("m-calc");' +
'if(!SEL||!BTN)return;' +
'var DATA=null;' +
'function taxOf(br,inc){var last=0,tot=0;for(var i=0;i<br.length;i++){var cap=br[i][0];if(cap===null)cap=Infinity;' +
'var s=Math.min(inc,cap)-last;if(s>0)tot+=s*br[i][1];last=cap;if(inc<=cap)break;}return tot;}' +
'function buildStates(){' +
'var keys=Object.keys(DATA.states).sort();' +
'SEL.innerHTML="";' +
'var o=document.createElement("option");o.value="";o.textContent="Florida (0%)";SEL.appendChild(o);' +
'keys.forEach(function(k){var op=document.createElement("option");op.value=k;op.textContent=k;SEL.appendChild(op);});' +
'SEL.value="NY";}' +
'function buildCities(){' +
'var wrap=document.getElementById("sbtf-citywrap");if(!wrap)return;' +
'var st=SEL.value,arr=(DATA.localities[st]||{}).cities||[];' +
'var cs=document.getElementById("sbtf-city");cs.innerHTML="";' +
'if(!arr.length){wrap.style.display="none";return;}' +
'wrap.style.display="block";' +
'arr.forEach(function(c,ix){var op=document.createElement("option");op.value=String(ix);op.textContent=c.name;cs.appendChild(op);});}' +
'function localTax(inc){var st=SEL.value,arr=(DATA.localities[st]||{}).cities||[];' +
'var cs=document.getElementById("sbtf-city");if(!cs||!arr.length)return 0;' +
'var c=arr[parseInt(cs.value,10)||0];if(!c)return 0;' +
'if(c.type==="brackets"&&c.brackets)return taxOf(c.brackets.single,inc);' +
'return inc*(c.rate||0);}' +
'var lbl=SEL.previousElementSibling;' +
'var host=SEL.parentNode;' +
'var cw=document.createElement("div");cw.id="sbtf-citywrap";cw.style.cssText="margin-top:8px;display:none;";' +
'cw.innerHTML=\'<label for="sbtf-city" style="display:block;font-family:Inter,system-ui,sans-serif;font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#6B5D52;margin-bottom:3px;">City / Locality</label><select id="sbtf-city" style="width:100%;border:1.5px solid #002349;border-radius:6px;padding:7px 9px;font-size:12px;font-family:Inter,system-ui,sans-serif;background:#fff;color:#002349;box-sizing:border-box;"></select>\';' +
'host.parentNode.insertBefore(cw,host.nextSibling);' +
'var pw=document.createElement("div");pw.style.cssText="margin-top:8px;display:flex;align-items:center;gap:7px;";' +
'pw.innerHTML=\'<input type="checkbox" id="sbtf-phys" style="width:15px;height:15px;accent-color:#002349;"><label for="sbtf-phys" style="font-family:Inter,system-ui,sans-serif;font-size:11px;color:#002349;">Physician loan (no PMI, low or zero down)</label>\';' +
'cw.parentNode.insertBefore(pw,cw.nextSibling);' +
'if(document.body.getAttribute("data-sb-phys")==="1"){pw.querySelector("#sbtf-phys").checked=true;}' +
'SEL.addEventListener("change",buildCities);' +
'var nb=BTN.cloneNode(true);BTN.parentNode.replaceChild(nb,BTN);BTN=nb;' +
'BTN.addEventListener("click",function(){' +
'if(!DATA)return;' +
'var price=parseFloat((document.getElementById("m-price")||{}).value)||0;' +
'var down=(parseFloat((document.getElementById("m-down")||{}).value)||0)/100;' +
'var rate=(parseFloat((document.getElementById("m-rate")||{}).value)||0)/100/12;' +
'var income=parseFloat((document.getElementById("m-income")||{}).value)||0;' +
'var st=SEL.value;' +
'var phys=(document.getElementById("sbtf-phys")||{}).checked;' +
'if(phys&&down>0.1)down=0.1;' +
'var loan=price*(1-down),n=360;' +
'var monthly=rate===0?loan/n:loan*rate*Math.pow(1+rate,n)/(Math.pow(1+rate,n)-1);' +
'var stax=0;' +
'if(st&&DATA.states[st])stax=taxOf(DATA.states[st].brackets.single,income);' +
'var ltax=localTax(income);' +
'var annual=stax+ltax,decade=annual*10;' +
'var fmt=function(v){return "$"+Math.round(v).toLocaleString();};' +
'var mm=document.getElementById("m-monthly");if(mm)mm.textContent=fmt(monthly)+"/mo";' +
'var ma=document.getElementById("m-annual");if(ma)ma.textContent=fmt(annual);' +
'var md=document.getElementById("m-decade");if(md)md.textContent=fmt(decade);' +
'var res=document.getElementById("m-results");if(res){res.style.display="flex";res.style.flexDirection="column";}' +
'});' +
'fetch("/js/sb-tax-data.json").then(function(r){return r.json();}).then(function(d){DATA=d;buildStates();buildCities();}).catch(function(){});' +
'})();' +
'<\/script>';

function applyTaxFix(html, pathname){
  if (!html || html.indexOf('id="m-calc"') < 0) return html;
  if (html.indexOf('id="sb-tax-fix"') > -1) return html;
  if (html.indexOf('</body>') < 0) return html;
  const p = (pathname || '').replace(/index\.html$/, '');
  const physDefault = /^\/lifestyles\/physician-relocation\/$/.test(p) || /^\/cities\/[a-z\-]+\/physician\/$/.test(p);
  let out = html;
  if (physDefault && /<body(\s|>)/.test(out) && out.indexOf('data-sb-phys') < 0) {
    out = out.replace(/<body(\s|>)/, function(m, g){ return '<body data-sb-phys="1"' + g; });
  }
  return out.replace('</body>', function(){ return SB_TAX_FIX + '</body>'; });
}

function applyMarketSnapshot(html, pathname){
  if (!pathname) return html;
  if (html.includes('id="market-data"')) return html;
  const p = pathname.replace(/index\.html$/, '');
  const A = '<div class="tx-head">';
  if (p === '/') { return html.includes(A) ? html.replace(A, () => MARKET_GRAPH + A) : html; }
  // r306: city pages opt in to the homepage market widget with an inline slot marker.
  // The widget opens on that city's tab, and its pre-paint headline matches too.
  if (html.indexOf('<!--SB-MKT-SLOT-->') !== -1) {
    // r368: any page can opt in with the slot marker, not just /cities/.
    // A non-city page (the state relocation pages) gets the default tab.
    const slug = p.indexOf('/cities/') === 0
      ? p.slice(8).replace(/\/$/, '').replace(/-homes-for-sale$/, '')
      : '';
    let mg = MARKET_GRAPH;
    if (slug && mg.indexOf('"' + slug + '":{') !== -1) {
      mg = mg.replace("var cur='orlando'", function(){ return "var cur='" + slug + "'"; });
      try {
        const dm = mg.match(/<script type="application\/json" id="sb-home-wgs-data">([\s\S]*?)<\/script>/);
        const c = dm ? JSON.parse(dm[1])[slug] : null;
        if (c && c.label) {
          mg = mg.replace('<span id="sb-wgs-city">Orlando</span>', function(){ return '<span id="sb-wgs-city">' + c.label + '</span>'; });
        }
        if (c && c.D && c.D.median) {
          const md = String(c.D.median).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          mg = mg.replace('<div class="v" id="sb-wgs-med">$425,000</div>', function(){ return '<div class="v" id="sb-wgs-med">$' + md + '</div>'; });
        }
        // r330: the ten-market screen-reader paragraph was byte-identical on the homepage and all ten city pages.
        // City pages now carry a one-city version so each page has unique text; the homepage keeps the ten-market one.
        if (c && c.D && c.D.median) {
          const md2 = String(c.D.median).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          const closed = (c.D.S && c.D.S.length) ? c.D.S[c.D.S.length - 1] : null;
          let one = 'In August 2026 the median sold price for a single-family home in ' + c.label + ' was $' + md2;
          if (closed) one += ', with ' + closed + ' homes closed';
          if (c.D.dom) one += ', ' + c.D.dom + ' median days on market';
          if (c.pct) one += ' and ' + c.pct + ' of last list price';
          one += '. Data from Stellar MLS InfoSparks.';
          mg = mg.replace(/<p class="sr-mkt" id="sb-wgs-sr">[^<]*<\/p>/, function(){ return '<p class="sr-mkt" id="sb-wgs-sr">' + one + '</p>'; });
        }
      } catch (e) {}
    }
    return html.replace('<!--SB-MKT-SLOT-->', function(){ return mg; });
  }
  const LEDGER_PAGES = {
    '/lifestyles/physician-relocation/': '<section id="city-tiles"',
    '/lifestyles/golf/': '<section>',
    '/lifestyles/over-2-million/': '<section>',
    '/lifestyles/waterfront/': '<section>',
    '/lifestyles/canal-front-homes/': '<section>'
  };
  const anchor = LEDGER_PAGES[p];
  if (!anchor) return html;
  if (p === '/lifestyles/physician-relocation/') {
    return html.includes(anchor) ? html.replace(anchor, () => MARKET_GRAPH + anchor) : html;
  }
  const marker = 'Choose Your Market';
  const mi = html.indexOf(marker);
  if (mi < 0) return html;
  const si = html.lastIndexOf('<section', mi);
  if (si < 0) return html;
  return html.slice(0, si) + MARKET_GRAPH + html.slice(si);
}

// ── ADDITIVE (mobile pass): clamp market band to 5 rows on mobile via CSS-only expander.
// Tags rows 6+ with an extra class and injects a checkbox + label; sb-global.css does the rest.
function applyMarketClamp(html){
  if (!html.includes('id="market-data"') || html.includes('mkt-rows-exp')) return html;
  let n = 0;
  html = html.replace(/<div class="mkt-row"/g, function(m){
    n += 1;
    return n >= 6 ? '<div class="mkt-row mkt-row-x"' : m;
  });
  if (n < 6) return html;
  html = html.replace('<div class="mkt-row"', '<input type="checkbox" id="mkt-rows-exp" class="sbx-toggle"><div class="mkt-row"');
  // place the toggle label after the last row: each .mkt-row nests 5 </div> (city, bar-wrapper, bar, val, row),
  // so the 5th </div> from the last row open closes the row. Inserting after it makes the label a sibling of
  // #mkt-rows-exp and the rows (required for the :checked ~ .mkt-row-x / ~ .sbx-label selectors to fire).
  const last = html.lastIndexOf('<div class="mkt-row');
  let i = last, closes = 0;
  while (closes < 5 && i !== -1) { i = html.indexOf('</div>', i + 1); if (i !== -1) closes += 1; }
  if (i === -1) return html;
  const end = i + 6;
  const label = '<label for="mkt-rows-exp" class="sbx-label mkt-more-label"><span class="sbx-more">View all 10 markets</span><span class="sbx-less">Show top 5</span><span class="sbx-icon"></span></label>';
  return html.slice(0, end) + label + html.slice(end);
}

// ── ADDITIVE (mobile pass): footer accordions. Markets We Serve grid and the three
// secondary office addresses collapse on mobile; Lake Mary HQ and socials stay visible.
// All links remain server-rendered in the DOM.
function applyFooterAccordions(html){
  if (html.includes('ftr-mkts-exp')) return html;
  html = html.replace(
    /(<p style="font-size:8\.5px;letter-spacing:0\.22em;text-transform:uppercase;color:#C4952A;margin-bottom:3px;">Markets We Serve<\/p>)\s*(<div style="display:grid;grid-template-columns:1fr 1fr;gap:0px 8px;">)/,
    '<input type="checkbox" id="ftr-mkts-exp" class="sbx-toggle"><label for="ftr-mkts-exp" class="ftr-acc-label">$1<span class="ftr-acc-icon"></span></label><div class="ftr-acc-body" style="display:grid;grid-template-columns:1fr 1fr;gap:0px 8px;">'
  );
  html = html.replace(
    /(<p style="font-size:9px;color:rgba\(255,255,255,0\.35\);line-height:1\.7;margin:6px 0 0;">7600 Dr\. Phillips Blvd[\s\S]*?34787<\/p>)/,
    '<input type="checkbox" id="ftr-offc-exp" class="sbx-toggle"><label for="ftr-offc-exp" class="ftr-acc-label ftr-offc-label"><span style="font-size:8.5px;letter-spacing:0.22em;text-transform:uppercase;color:#C4952A;">More Offices</span><span class="ftr-acc-icon"></span></label><div class="ftr-acc-body">$1</div>'
  );
  return html;
}

// ── ADDITIVE (mobile pass): unified 4-tab bottom bar + drawer entries, sitewide.
// Runs LAST in the chain so applyHeader/applyBottomNav cannot overwrite it.
// Each transform carries its own idempotency marker: the homepage arrives with
// the new nav already static, but still needs wiring + drawer additions because
// applyHeader replaces the drawer and the original wiring script at serve time.
const CALC_MORTGAGE = `<div id="mortgage-sheet" class="slide-panel fixed inset-x-0 bottom-0 z-[90] flex flex-col" style="height:auto;max-height:94dvh;border-radius:20px 20px 0 0;overflow-y:auto;"><style id="sb-mcx-2026">#mortgage-sheet{background:linear-gradient(-45deg,#0b0f17,#141b29,#080b11,#1a2335) !important;background-size:400% 400% !important;animation:mcxFlow 15s ease infinite;border:0 !important;box-shadow:0 -10px 40px rgba(0,0,0,.55) !important;color:#fff;padding:18px 14px 22px;}@keyframes mcxFlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@media (prefers-reduced-motion:reduce){#mortgage-sheet{animation:none !important;}}#mortgage-sheet *{box-sizing:border-box;}#mortgage-sheet .mcx-card{position:relative;overflow:hidden;max-width:1152px;margin:0 auto;background:#141b29;border:1px solid rgba(212,175,55,.55);border-radius:3rem;box-shadow:0 8px 32px rgba(0,0,0,.5);}#mortgage-sheet .mcx-orb{display:none;}#mortgage-sheet .mcx-grid{position:relative;z-index:10;display:grid;grid-template-columns:1fr;gap:30px;padding:30px 24px;}#mortgage-sheet .mcx-h{font-family:'Cormorant Garamond',Georgia,serif;font-size:28px;font-weight:400;letter-spacing:.02em;margin:0 0 22px;color:#f1f5f9;}#mortgage-sheet .mcx-x{position:absolute;top:14px;right:18px;z-index:20;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);color:#fff;width:34px;height:34px;border-radius:50%;font-size:18px;cursor:pointer;}#mortgage-sheet .mcx-tiles{display:grid;grid-template-columns:1fr;gap:16px;}#mortgage-sheet .tile{background:#080b11;padding:16px;border-radius:1rem;border:1px solid rgba(212,175,55,.3);}#mortgage-sheet .tile label{display:block;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em;font-weight:700;margin:0 0 8px;}#mortgage-sheet .tile .in{display:flex;align-items:center;}#mortgage-sheet .tile .ad{color:#94a3b8;font-size:18px;}#mortgage-sheet .tile input{background:transparent;border:0;outline:none;width:100%;color:#f1f5f9;font-family:'Cormorant Garamond',Georgia,serif;font-size:24px;font-weight:500;padding:0 6px;}#mortgage-sheet input[type=number]{-moz-appearance:textfield;}#mortgage-sheet input[type=number]::-webkit-inner-spin-button,#mortgage-sheet input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}#mortgage-sheet .seg{display:flex;gap:6px;background:#080b11;border-radius:12px;padding:4px;border:1px solid rgba(212,175,55,0.30);}#mortgage-sheet .seg button{flex:1;padding:9px 0;border:0;border-radius:8px;background:transparent;color:#94a3b8;font:500 13px/1 Inter,system-ui,sans-serif;cursor:pointer;transition:all .2s ease;}#mortgage-sheet .seg button.on{background:rgba(212,175,55,.15);color:#d4af37;box-shadow:0 0 0 1px rgba(212,175,55,.5) inset;}#mortgage-sheet .mini{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px;}#mortgage-sheet .mini label{display:block;font-size:10px;color:#94a3b8;text-transform:uppercase;font-weight:700;margin:0 0 4px;}#mortgage-sheet .mini input,#mortgage-sheet .mini select{width:100%;background:#080b11;border-radius:8px;padding:9px 10px;font:500 13px/1.2 Inter,system-ui,sans-serif;color:#f1f5f9;outline:none;border:1px solid rgba(212,175,55,0.30);-webkit-appearance:none;appearance:none;}#mortgage-sheet .mini select option{background:#141b29;color:#f1f5f9;}#mortgage-sheet .checks{display:flex;flex-wrap:wrap;gap:22px;padding-top:18px;}#mortgage-sheet .checks label{display:flex;align-items:center;gap:9px;cursor:pointer;font-size:13.5px;color:#f1f5f9;font-weight:500;}#mortgage-sheet .checks input{width:19px;height:19px;border-radius:6px;accent-color:#d4af37;cursor:pointer;}#mortgage-sheet .sumcard{position:relative;overflow:hidden;background:#080b11;padding:28px;border-radius:1.5rem;border:1px solid rgba(212,175,55,.55);box-shadow:0 10px 30px rgba(0,0,0,.5);display:flex;flex-direction:column;justify-content:center;}#mortgage-sheet .sumcard .ico{position:absolute;top:14px;right:14px;opacity:.5;}#mortgage-sheet .sumcard .k{font-size:13px;color:#94a3b8;text-transform:uppercase;letter-spacing:.16em;font-weight:700;margin:0 0 8px;}#mortgage-sheet .sumcard .big{font-family:'Cormorant Garamond',Georgia,serif;font-size:44px;font-weight:600;line-height:1.05;margin:0;color:#f1f5f9;}#mortgage-sheet .sumrows{margin-top:26px;padding-top:20px;border-top:1px solid rgba(51,65,85,0.5);display:flex;flex-direction:column;gap:11px;font-size:13.5px;font-weight:500;}#mortgage-sheet .sumrows div{display:flex;justify-content:space-between;color:#f1f5f9;}#mortgage-sheet .sumrows span{color:#94a3b8;}#mortgage-sheet .mcx-cta{display:block;width:100%;margin-top:26px;padding:15px 10px;border:0;border-radius:12px;background:linear-gradient(to right,#d4af37,#aa8822);color:#080d0a;text-align:center;font:700 11px/1 Inter,system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;cursor:pointer;transition:all .3s ease;}#mortgage-sheet .mcx-cta:hover{opacity:.9;transform:translateY(-1px);}@media(min-width:768px){#mortgage-sheet .mcx-tiles{grid-template-columns:1fr 1fr;}#mortgage-sheet .mini{grid-template-columns:repeat(4,1fr);}}@media(min-width:1024px){#mortgage-sheet .mcx-grid{grid-template-columns:8fr 4fr;gap:44px;padding:56px 48px;}#mortgage-sheet .mcx-h{font-size:30px;}#mortgage-sheet .sumcard .big{font-size:48px;}}</style><button id="mortgage-close" class="mcx-x" type="button" aria-label="Close calculator">&#215;</button><div class="mcx-card"><span class="mcx-orb a"></span><span class="mcx-orb b"></span><div class="mcx-grid"><div><h2 class="mcx-h">Calculate Your Mortgage</h2><div class="mcx-tiles"><div class="tile"><label for="mc-price">Home Price</label><div class="in"><span class="ad">$</span><input type="number" id="mc-price" value="700000"></div></div><div class="tile"><label for="mc-down">Down Payment</label><div class="in"><input type="number" id="mc-down" value="20"><span class="ad">%</span></div></div><div class="tile"><label>Term</label><div class="seg" id="mc-seg"><button type="button" data-t="30" class="on">30 yr</button><button type="button" data-t="15">15 yr</button></div></div><div class="tile"><label for="mc-rate">Rate</label><div class="in"><input type="number" step="0.01" id="mc-rate" value="6.43"><span class="ad">%</span></div></div></div><div class="mini"><div><label for="mc-county">County</label><select id="mc-county"></select></div><div><label for="mc-ins">Ins. (Yr)</label><input type="number" id="mc-ins" value="3850"></div><div><label for="mc-hoa">HOA (Mo)</label><input type="number" id="mc-hoa" value="0"></div><div><label for="mc-extra">Extra (Mo)</label><input type="number" id="mc-extra" value="0"></div></div><div class="checks"><label><input type="checkbox" id="mc-primary" checked> Primary Residence</label><label><input type="checkbox" id="mc-phys"> Physician Loan</label></div><p class="k" id="mc-rate-note" style="font-size:11px;color:#94a3b8;margin:16px 0 0;">Freddie Mac avg</p></div><div><div class="sumcard"><span class="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span><p class="k">Estimated Monthly</p><p class="big" id="mc-pay">$0</p><div class="sumrows"><div><span>P&amp;I</span><b id="mc-pi">$0</b></div><div><span>Taxes</span><b id="mc-tax">$0</b></div><div><span>Insurance</span><b id="mc-hi">$0</b></div><div id="mc-pmi-row" style="display:none"><span>PMI</span><b id="mc-pmi">$0</b></div></div><a class="mcx-cta" href="/contact/">Questions? Ask Sean and Barb</a></div></div></div></div><script>(function(){var $=function(id){return document.getElementById(id);};if(!$("mc-price")||$("mc-price").getAttribute("data-mcx"))return;$("mc-price").setAttribute("data-mcx","1");var C=[{n:"Orange",m:16.70},{n:"Seminole",m:15.30},{n:"Lake",m:16.00},{n:"Osceola",m:17.20},{n:"Volusia",m:18.20},{n:"Polk",m:17.00}];var RATE={"30":6.43,"15":5.79},term=30;var cs=$("mc-county");cs.innerHTML=C.map(function(c,i){return '<option value="'+i+'">'+c.n+'</option>';}).join('');function money(n){return "$"+Math.round(isFinite(n)?n:0).toLocaleString("en-US");}function num(id,d){var el=$(id);if(!el)return d;var v=parseFloat(el.value);return isFinite(v)?v:d;}function compute(){var price=num("mc-price",700000),dpp=num("mc-down",20),rate=num("mc-rate",6.43);var c=C[+cs.value||0],insY=num("mc-ins",0),hoa=num("mc-hoa",0),extra=num("mc-extra",0);var primary=$("mc-primary").checked,phys=$("mc-phys").checked;var down=price*(dpp/100),loan=Math.max(0,price-down),pi=0;if(loan>0&&rate>0){var r=(rate/100)/12,n=term*12;pi=(loan*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);}var taxable=primary?Math.max(0,price-50000):price;var tax=(taxable*c.m/1000)/12,hi=insY/12;var pmi=(phys||dpp>=20)?0:(loan*0.0075)/12;$("mc-pay").textContent=money(pi+tax+hi+pmi+hoa+extra);$("mc-pi").textContent=money(pi);$("mc-tax").textContent=money(tax);$("mc-hi").textContent=money(hi);$("mc-pmi").textContent=money(pmi);$("mc-pmi-row").style.display=pmi>0?"flex":"none";}["mc-price","mc-down","mc-rate","mc-county","mc-ins","mc-hoa","mc-extra"].forEach(function(id){var el=$(id);if(el){el.addEventListener("input",compute);el.addEventListener("change",compute);}});["mc-primary","mc-phys"].forEach(function(id){$(id).addEventListener("change",function(){if(id==="mc-phys"&&$(id).checked){$("mc-down").value=0;}compute();});});var segs=$("mc-seg").querySelectorAll("button");for(var q=0;q<segs.length;q++){(function(b){b.addEventListener("click",function(){for(var z=0;z<segs.length;z++){segs[z].classList.remove("on");}b.classList.add("on");term=+b.getAttribute("data-t");if(RATE[term]){$("mc-rate").value=RATE[term];}compute();});})(segs[q]);}if($("mortgage-close"))$("mortgage-close").addEventListener("click",function(){$("mortgage-sheet").classList.remove("open");});$("mc-ins").value=Math.round(num("mc-price",700000)*0.0055);compute();try{fetch("/api/mortgage-rate").then(function(r){return r.json();}).then(function(d){if(d&&d.ok){RATE["30"]=d.r30;RATE["15"]=d.r15;$("mc-rate").value=RATE[term]||d.r30;$("mc-rate-note").textContent="Freddie Mac avg"+(d.asOf?(" wk of "+d.asOf):"")+(d.live?"":" (estimate)");compute();}}).catch(function(){});}catch(e){}})();</script></div>`;
const CALC_TAX = `<div id="tax-sheet" class="slide-panel fixed inset-x-0 bottom-0 z-[90] flex flex-col" style="height:auto;max-height:92dvh;border-radius:20px 20px 0 0;overflow-y:auto;background:#141b29;border:1.5px solid rgba(212,175,55,0.55);box-shadow:0 -8px 32px rgba(0,0,0,0.6);"><div style="background:#1a2335;padding:14px 16px;border-radius:20px 20px 0 0;border-bottom:1px solid rgba(212,175,55,0.25);display:flex;align-items:center;gap:10px;flex-shrink:0;position:sticky;top:0;z-index:2;"><div style="width:36px;height:36px;border-radius:50%;background:#080b11;border:1px solid rgba(212,175,55,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><div style="flex:1;"><p style="margin:0;font-family:Cormorant Garamond,Georgia,serif;font-size:18px;color:#f1f5f9;font-style:italic;line-height:1.1;">Florida Tax Savings</p><p style="margin:0;font-size:10px;letter-spacing:.05em;color:#94a3b8;">What you keep by relocating to Florida</p></div><button id="tax-close" aria-label="Close" style="color:#94a3b8;font-size:20px;background:none;border:none;cursor:pointer;padding:4px;line-height:1;">&#10005;</button></div><div style="padding:16px;"><div style="background:#080b11;border:1px solid rgba(212,175,55,0.4);border-radius:14px;padding:16px;margin-bottom:16px;text-align:center;"><p style="margin:0;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#d4af37;font-family:Inter,system-ui,sans-serif;font-weight:700;">Estimated Annual Savings</p><p id="tc-savings" style="margin:4px 0 0;font-family:Cormorant Garamond,Georgia,serif;font-size:38px;color:#f1f5f9;line-height:1;">$0</p><p id="tc-sub" style="margin:4px 0 0;font-size:11px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">Florida has no state income tax</p></div><div style="margin:0 0 12px;"><label style="display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;">Annual Household Income</label><input id="tc-income" type="text" inputmode="numeric" value="500000" style="width:100%;box-sizing:border-box;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:9px 11px;font-size:15px;color:#f1f5f9;background:#080b11;font-family:Inter,system-ui,sans-serif;"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div style="margin:0 0 12px;"><label style="display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;">Filing</label><div style="display:flex;gap:6px;"><button id="tc-single" type="button" style="flex:1;padding:9px;border:1px solid #d4af37;border-radius:10px;background:#080b11;color:#d4af37;font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:600;cursor:pointer;">Single</button><button id="tc-joint" type="button" style="flex:1;padding:9px;border:1px solid rgba(212,175,55,0.30);border-radius:10px;background:transparent;color:#94a3b8;font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:600;cursor:pointer;">Joint</button></div></div><div style="margin:0 0 12px;"><label style="display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;">Moving From</label><select id="tc-state" style="width:100%;box-sizing:border-box;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:9px 11px;font-size:15px;color:#f1f5f9;background:#080b11;font-family:Inter,system-ui,sans-serif;"><option value="AL">Alabama</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY" selected>New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option></select></div></div><div id="tc-city-wrap" style="display:none;margin:0 0 12px;"><label style="display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;">City / Locality</label><select id="tc-city" style="width:100%;box-sizing:border-box;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:9px 11px;font-size:15px;color:#f1f5f9;background:#080b11;font-family:Inter,system-ui,sans-serif;"></select><p id="tc-city-rate" style="margin:5px 0 0;font-size:11px;line-height:1.4;color:#94a3b8;font-family:Inter,system-ui,sans-serif;"></p></div><div style="background:#1a2335;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:12px 14px;margin:4px 0 12px;"><div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;border-bottom:1px solid rgba(51,65,85,0.5);"><span style="font-size:13px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">State income tax there</span><span id="tc-there" style="font-size:15px;color:#f1f5f9;font-weight:600;font-family:Inter,system-ui,sans-serif;">$0</span></div><div id="tc-local-row" style="display:none;justify-content:space-between;align-items:baseline;padding:7px 0;border-bottom:1px solid rgba(51,65,85,0.5);"><span style="font-size:13px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">Local income tax there</span><span id="tc-local" style="font-size:15px;color:#f1f5f9;font-weight:600;font-family:Inter,system-ui,sans-serif;">$0</span></div><div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;border-bottom:1px solid rgba(51,65,85,0.5);"><span style="font-size:13px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">State income tax in Florida</span><span style="font-size:15px;color:#f1f5f9;font-weight:600;font-family:Inter,system-ui,sans-serif;">$0</span></div><div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;border-bottom:1px solid rgba(51,65,85,0.5);"><span style="font-size:13px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">Effective rate there</span><span id="tc-rate" style="font-size:15px;color:#f1f5f9;font-weight:600;font-family:Inter,system-ui,sans-serif;">0%</span></div><div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;"><span style="font-size:13px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">Kept over 10 years</span><span id="tc-10yr" style="font-size:15px;color:#d4af37;font-weight:700;font-family:Inter,system-ui,sans-serif;">$0</span></div></div><p style="margin:0 0 12px;font-size:10px;line-height:1.5;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">Estimate of state income tax using current-year brackets at the income and filing status you enter. Where a city or locality is selected, its local income tax is included using physician-level approximate rates. Not tax advice. Florida levies no state or local income tax.</p><a href="/relocation/" style="display:block;width:100%;box-sizing:border-box;background:linear-gradient(to right,#d4af37,#aa8822);color:#080d0a;text-align:center;padding:12px;border-radius:12px;font-family:Inter,system-ui,sans-serif;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;margin-bottom:8px;">Explore Relocation Info</a><a href="tel:4073830707" style="display:block;width:100%;box-sizing:border-box;background:transparent;color:#f1f5f9;text-align:center;padding:11px;border-radius:12px;border:1px solid rgba(212,175,55,0.4);font-family:Inter,system-ui,sans-serif;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;">Talk to Sean &amp; Barb</a></div><script>(function(){var TAX = {
  AL:{single:[[500,0.02],[3000,0.04],[Infinity,0.05]],joint:[[1000,0.02],[6000,0.04],[Infinity,0.05]]},
  AZ:{single:[[Infinity,0.025]],joint:[[Infinity,0.025]]},
  AR:{single:[[4600,0.02],[Infinity,0.039]],joint:[[4600,0.02],[Infinity,0.039]]},
  CA:{single:[[10756,0.01],[25499,0.02],[40245,0.04],[55866,0.06],[70606,0.08],[360659,0.093],[432787,0.103],[721314,0.113],[1000000,0.123],[Infinity,0.133]],joint:[[21512,0.01],[50998,0.02],[80490,0.04],[111732,0.06],[141212,0.08],[721318,0.093],[865574,0.103],[1000000,0.113],[1442628,0.123],[Infinity,0.133]]},
  CO:{single:[[Infinity,0.044]],joint:[[Infinity,0.044]]},
  CT:{single:[[10000,0.02],[50000,0.045],[100000,0.055],[200000,0.06],[250000,0.065],[500000,0.069],[Infinity,0.0699]],joint:[[20000,0.02],[100000,0.045],[200000,0.055],[400000,0.06],[500000,0.065],[1000000,0.069],[Infinity,0.0699]]},
  DE:{single:[[2000,0],[5000,0.022],[10000,0.039],[20000,0.048],[25000,0.052],[60000,0.0555],[Infinity,0.066]],joint:[[2000,0],[5000,0.022],[10000,0.039],[20000,0.048],[25000,0.052],[60000,0.0555],[Infinity,0.066]]},
  GA:{single:[[Infinity,0.0499]],joint:[[Infinity,0.0499]]},
  HI:{single:[[2400,0.014],[4800,0.032],[9600,0.055],[14400,0.064],[19200,0.068],[24000,0.072],[36000,0.076],[48000,0.079],[150000,0.0825],[175000,0.09],[200000,0.1],[Infinity,0.11]],joint:[[4800,0.014],[9600,0.032],[19200,0.055],[28800,0.064],[38400,0.068],[48000,0.072],[72000,0.076],[96000,0.079],[300000,0.0825],[350000,0.09],[400000,0.1],[Infinity,0.11]]},
  ID:{single:[[4811,0],[Infinity,0.053]],joint:[[9622,0],[Infinity,0.053]]},
  IL:{single:[[Infinity,0.0495]],joint:[[Infinity,0.0495]]},
  IN:{single:[[Infinity,0.0295]],joint:[[Infinity,0.0295]]},
  IA:{single:[[Infinity,0.038]],joint:[[Infinity,0.038]]},
  KS:{single:[[23000,0.052],[Infinity,0.0558]],joint:[[46000,0.052],[Infinity,0.0558]]},
  KY:{single:[[Infinity,0.035]],joint:[[Infinity,0.035]]},
  LA:{single:[[Infinity,0.03]],joint:[[Infinity,0.03]]},
  ME:{single:[[26050,0.058],[61600,0.0675],[Infinity,0.0715]],joint:[[52100,0.058],[123200,0.0675],[Infinity,0.0715]]},
  MD:{single:[[1000,0.02],[2000,0.03],[3000,0.04],[100000,0.0475],[125000,0.05],[150000,0.0525],[250000,0.055],[500000,0.0575],[1000000,0.0625],[Infinity,0.065]],joint:[[1000,0.02],[2000,0.03],[3000,0.04],[150000,0.0475],[175000,0.05],[225000,0.0525],[300000,0.055],[600000,0.0575],[1200000,0.0625],[Infinity,0.065]]},
  MA:{single:[[1083150,0.05],[Infinity,0.09]],joint:[[1083150,0.05],[Infinity,0.09]]},
  MI:{single:[[Infinity,0.0425]],joint:[[Infinity,0.0425]]},
  MN:{single:[[31690,0.0535],[104090,0.068],[193240,0.0785],[Infinity,0.0985]],joint:[[46330,0.0535],[184040,0.068],[321450,0.0785],[Infinity,0.0985]]},
  MS:{single:[[10000,0],[Infinity,0.04]],joint:[[10000,0],[Infinity,0.04]]},
  MO:{single:[[1348,0],[2696,0.02],[4044,0.025],[5392,0.03],[6740,0.035],[8088,0.04],[9436,0.045],[Infinity,0.047]],joint:[[1348,0],[2696,0.02],[4044,0.025],[5392,0.03],[6740,0.035],[8088,0.04],[9436,0.045],[Infinity,0.047]]},
  MT:{single:[[47500,0.047],[Infinity,0.0565]],joint:[[95000,0.047],[Infinity,0.0565]]},
  NE:{single:[[4130,0.0246],[24760,0.0351],[Infinity,0.0455]],joint:[[8250,0.0246],[49530,0.0351],[Infinity,0.0455]]},
  NJ:{single:[[20000,0.014],[35000,0.0175],[40000,0.035],[75000,0.05525],[500000,0.0637],[1000000,0.0897],[Infinity,0.1075]],joint:[[20000,0.014],[50000,0.0175],[70000,0.0245],[80000,0.035],[150000,0.05525],[500000,0.0637],[1000000,0.0897],[Infinity,0.1075]]},
  NM:{single:[[5500,0.017],[11000,0.032],[16000,0.047],[210000,0.049],[Infinity,0.059]],joint:[[8000,0.017],[16000,0.032],[24000,0.047],[315000,0.049],[Infinity,0.059]]},
  NY:{single:[[17150,0.04],[23600,0.045],[27900,0.0525],[161550,0.0585],[323200,0.0625],[2155350,0.0685],[5000000,0.0965],[25000000,0.103],[Infinity,0.109]],joint:[[27900,0.04],[43000,0.045],[161550,0.0525],[323200,0.059],[2155350,0.0685],[5000000,0.0965],[25000000,0.103],[Infinity,0.109]]},
  NC:{single:[[Infinity,0.0399]],joint:[[Infinity,0.0399]]},
  ND:{single:[[44725,0],[225975,0.0195],[Infinity,0.025]],joint:[[74750,0],[275250,0.0195],[Infinity,0.025]]},
  OH:{single:[[26050,0],[Infinity,0.0275]],joint:[[26050,0],[Infinity,0.0275]]},
  OK:{single:[[3750,0],[4900,0.025],[7200,0.035],[Infinity,0.045]],joint:[[7500,0],[9800,0.025],[14400,0.035],[Infinity,0.045]]},
  OR:{single:[[10000,0.0475],[25000,0.0675],[125000,0.0875],[Infinity,0.099]],joint:[[18400,0.0475],[46200,0.0675],[250000,0.0875],[Infinity,0.099]]},
  PA:{single:[[Infinity,0.0307]],joint:[[Infinity,0.0307]]},
  RI:{single:[[77450,0.0375],[176050,0.0475],[Infinity,0.0599]],joint:[[77450,0.0375],[176050,0.0475],[Infinity,0.0599]]},
  SC:{single:[[30000,0.0199],[Infinity,0.0521]],joint:[[30000,0.0199],[Infinity,0.0521]]},
  UT:{single:[[Infinity,0.045]],joint:[[Infinity,0.045]]},
  VT:{single:[[47900,0.0335],[116150,0.066],[242000,0.076],[Infinity,0.0875]],joint:[[80100,0.0335],[193900,0.066],[404200,0.076],[Infinity,0.0875]]},
  VA:{single:[[3000,0.02],[5000,0.03],[17000,0.05],[Infinity,0.0575]],joint:[[3000,0.02],[5000,0.03],[17000,0.05],[Infinity,0.0575]]},
  WV:{single:[[10000,0.0222],[25000,0.0296],[40000,0.0333],[60000,0.0444],[Infinity,0.0482]],joint:[[10000,0.0222],[25000,0.0296],[40000,0.0333],[60000,0.0444],[Infinity,0.0482]]},
  WI:{single:[[14320,0.035],[28640,0.044],[315310,0.053],[Infinity,0.0765]],joint:[[19090,0.035],[38190,0.044],[420420,0.053],[Infinity,0.0765]]}
  };

  function calcTax(income,state,f){
    var b=TAX[state]; if(!b) return 0;
    var br=b[f]||b.single, tax=0, prev=0;
    for(var i=0;i<br.length;i++){
      var ceil=br[i][0],rate=br[i][1];
      if(income<=prev) break;
      tax+=(Math.min(income,ceil)-prev)*rate;
      prev=ceil;
      if(income<=ceil) break;
    }
    return tax;
  }
var $=function(id){return document.getElementById(id);};if(!$("tc-income"))return;var filing="single";var SN={AL:"Alabama",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",UT:"Utah",VT:"Vermont",VA:"Virginia",WV:"West Virginia",WI:"Wisconsin"};var LOCAL={};var LOCAL_URL="/lifestyles/physician-relocation/local-tax-data.json";function toLocalMap(states){var out={};Object.keys(states||{}).forEach(function(st){out[st]=(states[st]||[]).map(function(c){return{name:c.name,r:c.physicianLocalRate||0,t:(c.type==="surcharge_of_state_tax")?"surcharge":"flat",s:c.surchargeRate||0};});});return out;}function populateCities(){var wrap=$("tc-city-wrap"),sel2=$("tc-city");if(!wrap||!sel2)return;var arr=LOCAL[$("tc-state").value];sel2.innerHTML="";if(!arr){wrap.style.display="none";updateCityRate();compute();return;}arr.forEach(function(c){var o=document.createElement("option");o.value=JSON.stringify({r:c.r||0,t:c.t||"flat",s:c.s||0});o.textContent=c.name;sel2.appendChild(o);});wrap.style.display="block";updateCityRate();compute();}function updateCityRate(){var el=$("tc-city-rate"),wrap=$("tc-city-wrap"),sel2=$("tc-city");if(!el)return;if(!wrap||wrap.style.display==="none"||!sel2||!sel2.value){el.textContent="";return;}var name=sel2.options[sel2.selectedIndex]?sel2.options[sel2.selectedIndex].textContent:"";var c;try{c=JSON.parse(sel2.value);}catch(e){el.textContent="";return;}var pct=function(x){return (x*100).toFixed(3).replace(/\.?0+$/,"");};if(c.t==="surcharge"){el.textContent=name+": "+pct(c.s)+"% surcharge on your state income tax";}else if((c.r||0)>0){el.textContent=name+" local income tax: "+pct(c.r)+"%";}else{el.textContent="No local income tax in this area";}}function num(id){var el=$(id);if(!el)return 0;var v=parseFloat((el.value||"").toString().replace(/[^0-9.]/g,""));return isNaN(v)?0:v;}function money(n){return "$"+Math.round(n).toLocaleString("en-US");}function setFiling(f){filing=f;var a=$("tc-single"),b=$("tc-joint");a.style.background=f==="single"?"#080b11":"transparent";a.style.color=f==="single"?"#d4af37":"#94a3b8";a.style.borderColor=f==="single"?"#d4af37":"rgba(51,65,85,0.5)";b.style.background=f==="joint"?"#080b11":"transparent";b.style.color=f==="joint"?"#d4af37":"#94a3b8";b.style.borderColor=f==="joint"?"#d4af37":"rgba(51,65,85,0.5)";compute();}function compute(){var income=num("tc-income");var st=$("tc-state").value;var tax=0;try{tax=calcTax(income,st,filing);}catch(e){tax=0;}var localTax=0;var wrap=$("tc-city-wrap"),sel2=$("tc-city");if(wrap&&wrap.style.display!=="none"&&sel2&&sel2.value){try{var c=JSON.parse(sel2.value);localTax=(c.t==="surcharge")?tax*(c.s||0):income*(c.r||0);}catch(e2){localTax=0;}}var total=tax+localTax;var rate=income>0?total/income*100:0;$("tc-savings").textContent=money(total)+"/yr";$("tc-there").textContent=money(tax);var lr=$("tc-local-row");if(lr){if(localTax>0){lr.style.display="flex";$("tc-local").textContent=money(localTax);}else{lr.style.display="none";}}$("tc-rate").textContent=rate.toFixed(1)+"%";$("tc-10yr").textContent=money(total*10);$("tc-sub").textContent="vs "+money(total)+" in "+(SN[st]||st)+" \u2014 Florida has no state income tax";}$("tc-single").addEventListener("click",function(){setFiling("single");});$("tc-joint").addEventListener("click",function(){setFiling("joint");});["tc-income","tc-state"].forEach(function(id){var el=$(id);if(el){el.addEventListener("input",compute);el.addEventListener("change",compute);}});$("tc-state").addEventListener("change",function(){populateCities();});if($("tc-city")){$("tc-city").addEventListener("change",function(){updateCityRate();compute();});}fetch(LOCAL_URL).then(function(r){return r.json();}).then(function(d){LOCAL=toLocalMap(d.states);populateCities();}).catch(function(e){});if($("tax-close"))$("tax-close").addEventListener("click",function(){$("tax-sheet").classList.remove("open");});compute();})();</script></div>`;
// ── ADDITIVE: Seller Net bottom sheet (opened by drawer-net). Same math as the
//    on-page #sv-net-calc: net = price x preset - (mortgage + HELOC); presets bake
//    commission + ~1.5% closing costs (6%->0.925, 5.5%->0.930, 5%->0.935).
const CALC_SELLER = `<div id="seller-sheet" class="slide-panel fixed inset-x-0 bottom-0 z-[90] flex flex-col" style="height:auto;max-height:92dvh;border-radius:20px 20px 0 0;overflow-y:auto;background:#141b29;border:1.5px solid rgba(212,175,55,0.55);box-shadow:0 -8px 32px rgba(0,0,0,0.6);"><div style="background:#1a2335;padding:14px 16px;border-radius:20px 20px 0 0;border-bottom:1px solid rgba(212,175,55,0.25);display:flex;align-items:center;gap:10px;flex-shrink:0;position:sticky;top:0;z-index:2;"><div style="width:36px;height:36px;border-radius:50%;background:#080b11;border:1px solid rgba(212,175,55,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><div style="flex:1;"><p style="margin:0;font-family:Cormorant Garamond,Georgia,serif;font-size:18px;color:#f1f5f9;font-style:italic;line-height:1.1;">Seller Net Sheet</p><p style="margin:0;font-size:10px;letter-spacing:.05em;color:#94a3b8;">What you walk away with</p></div><button id="seller-close" aria-label="Close" style="color:#94a3b8;font-size:20px;background:none;border:none;cursor:pointer;padding:4px;line-height:1;">&#10005;</button></div><div style="padding:16px;"><div style="background:#080b11;border:1px solid rgba(212,175,55,0.4);border-radius:14px;padding:16px;margin-bottom:16px;text-align:center;"><p style="margin:0;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#d4af37;font-family:Inter,system-ui,sans-serif;font-weight:700;">Estimated Net Proceeds</p><p id="sn-net" style="margin:4px 0 0;font-family:Cormorant Garamond,Georgia,serif;font-size:38px;color:#f1f5f9;line-height:1;">$0</p></div><div style="margin:0 0 12px;"><label style="display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;">Expected Sale Price</label><input id="sn-price" type="text" inputmode="numeric" value="850000" style="width:100%;box-sizing:border-box;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:9px 11px;font-size:15px;color:#f1f5f9;background:#080b11;font-family:Inter,system-ui,sans-serif;"></div><div style="margin:0 0 12px;"><label style="display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;">Total Listing Commission</label><div style="display:flex;gap:6px;"><button id="sn-c6" type="button" style="flex:1;padding:9px 4px;border:1px solid #d4af37;border-radius:10px;background:#080b11;color:#d4af37;font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:600;cursor:pointer;line-height:1.3;">6%<br><span style="font-size:9px;font-weight:400;">Standard</span></button><button id="sn-c55" type="button" style="flex:1;padding:9px 4px;border:1px solid rgba(212,175,55,0.30);border-radius:10px;background:transparent;color:#94a3b8;font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:600;cursor:pointer;line-height:1.3;">5.5%<br><span style="font-size:9px;font-weight:400;">Preferred</span></button><button id="sn-c5" type="button" style="flex:1;padding:9px 4px;border:1px solid rgba(212,175,55,0.30);border-radius:10px;background:transparent;color:#94a3b8;font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:600;cursor:pointer;line-height:1.3;">5%<br><span style="font-size:9px;font-weight:400;">Select</span></button></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div style="margin:0 0 12px;"><label style="display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;">Mortgage Payoff</label><input id="sn-mort" type="text" inputmode="numeric" value="0" style="width:100%;box-sizing:border-box;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:9px 11px;font-size:15px;color:#f1f5f9;background:#080b11;font-family:Inter,system-ui,sans-serif;"></div><div style="margin:0 0 12px;"><label style="display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8;font-weight:700;margin:0 0 4px;">HELOC Balance</label><input id="sn-heloc" type="text" inputmode="numeric" value="0" style="width:100%;box-sizing:border-box;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:9px 11px;font-size:15px;color:#f1f5f9;background:#080b11;font-family:Inter,system-ui,sans-serif;"></div></div><div style="background:#1a2335;border:1px solid rgba(212,175,55,0.30);border-radius:12px;padding:12px 14px;margin:4px 0 12px;"><div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;border-bottom:1px solid rgba(51,65,85,0.5);"><span style="font-size:13px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">After commission &amp; closing costs</span><span id="sn-gross" style="font-size:15px;color:#f1f5f9;font-weight:600;font-family:Inter,system-ui,sans-serif;">$0</span></div><div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;border-bottom:1px solid rgba(51,65,85,0.5);"><span style="font-size:13px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">Less loan payoff</span><span id="sn-payoff" style="font-size:15px;color:#f1f5f9;font-weight:600;font-family:Inter,system-ui,sans-serif;">- $0</span></div><div style="display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;"><span style="font-size:13px;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">Estimated net proceeds</span><span id="sn-net2" style="font-size:15px;color:#d4af37;font-weight:700;font-family:Inter,system-ui,sans-serif;">$0</span></div></div><p style="margin:0 0 12px;font-size:10px;line-height:1.5;color:#94a3b8;font-family:Inter,system-ui,sans-serif;">Estimate only. Accuracy generally within a few hundred dollars. Does not factor in prorations or currently due HOA fees.</p><a href="/selling-your-home/#sv-valuation" style="display:block;width:100%;box-sizing:border-box;background:linear-gradient(to right,#d4af37,#aa8822);color:#080d0a;text-align:center;padding:12px;border-radius:12px;font-family:Inter,system-ui,sans-serif;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;margin-bottom:8px;">Request a Valuation</a><a href="tel:4073830707" style="display:block;width:100%;box-sizing:border-box;background:transparent;color:#f1f5f9;text-align:center;padding:11px;border-radius:12px;border:1px solid rgba(212,175,55,0.4);font-family:Inter,system-ui,sans-serif;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;text-decoration:none;">Talk to Sean &amp; Barb</a></div><script>(function(){var $=function(id){return document.getElementById(id);};if(!$("sn-price"))return;var M=0.925;function num(id){var el=$(id);if(!el)return 0;var v=parseFloat((el.value||"").toString().replace(/[^0-9.]/g,""));return isNaN(v)?0:v;}function money(n){return "$"+Math.round(n).toLocaleString("en-US");}function setM(m,on){M=m;["sn-c6","sn-c55","sn-c5"].forEach(function(id){var b=$(id);var act=id===on;b.style.background=act?"#080b11":"transparent";b.style.borderColor=act?"#d4af37":"rgba(51,65,85,0.5)";b.style.color=act?"#d4af37":"#94a3b8";});compute();}function compute(){var gross=num("sn-price")*M;var payoff=num("sn-mort")+num("sn-heloc");var net=gross-payoff;$("sn-gross").textContent=money(gross);$("sn-payoff").textContent="- "+money(payoff);$("sn-net").textContent=money(net);$("sn-net2").textContent=money(net);}$("sn-c6").addEventListener("click",function(){setM(0.925,"sn-c6");});$("sn-c55").addEventListener("click",function(){setM(0.930,"sn-c55");});$("sn-c5").addEventListener("click",function(){setM(0.935,"sn-c5");});["sn-price","sn-mort","sn-heloc"].forEach(function(id){var el=$(id);if(el){el.addEventListener("input",compute);}});if($("seller-close"))$("seller-close").addEventListener("click",function(){$("seller-sheet").classList.remove("open");});compute();})();</script></div>`;
function applySellerSheet(html){
  if(!html.includes('</body>')) return html;
  if(html.includes('id="seller-sheet"')) return html;
  return html.replace('</body>', function(){ return CALC_SELLER+'</body>'; });
}
function replaceCalcSheets(html){
  if(!html.includes('</body>')) return html;
  if(html.includes('id="tax-sheet"')) return html;
  var k=html.indexOf('id="mortgage-sheet"');
  if(k<0){ return html.replace('</body>', function(){ return CALC_MORTGAGE+CALC_TAX+'</body>'; }); }
  var start=html.lastIndexOf('<div', k);
  var mc=html.indexOf("getElementById('mortgage-close')", k);
  if(mc<0) return html;
  var end=html.indexOf('</script>', mc);
  if(end<0) return html;
  end+=9;
  return html.slice(0,start)+CALC_MORTGAGE+CALC_TAX+html.slice(end);
}
function applyChromeV2(html){
  // 1. bottom nav -> four tabs (marker: btn-menu-bar)
  if (!html.includes('btn-menu-bar')) {
    const NAV_V2 = '<nav id="bottom-nav" class="fixed bottom-0 left-0 right-0 z-50 h-[72px] flex items-center justify-around px-2" data-astro-cid-ltxpr5xc>'
      + '<a href="/cities/" class="bottom-tab" data-astro-cid-ltxpr5xc><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg><span>Search</span></a>'
      + '<a href="tel:4073830707" class="bottom-tab" id="btn-call-bar" data-sb-cta-skip data-astro-cid-ltxpr5xc><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg><span>Call</span></a>'
      + '<button class="bottom-tab" id="btn-chat" data-astro-cid-ltxpr5xc><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg><span>Ask 24/7</span></button>'
      + '<button class="bottom-tab" id="btn-menu-bar" data-astro-cid-ltxpr5xc><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18"></path></svg><span>Menu</span></button>'
      + '</nav>';
    html = html.replace(/<nav [^>]*id="bottom-nav"[\s\S]*?<\/nav>/, function(){ return NAV_V2; });
  }
  // 2. Menu tab wiring (marker: sb-menu-tab) - injected before </body>, survives applyHeader
  if (html.includes('btn-menu-bar') && !html.includes('sb-menu-tab')) {
    html = html.replace('</body>', '<script>/*sb-menu-tab*/(function(){var b=document.getElementById("btn-menu-bar");if(b)b.addEventListener("click",function(){var h=document.getElementById("hamburger");if(h)h.click();});})();<\/script></body>');
  }
  // 3. drawer: Tools accordion after Contact (marker: drawer-tax)
  if (!html.includes('id="drawer-tax"')) {
    html = html.replace(/(<a href="\/contact\/" class="nav-link"[^>]*>Contact<\/a>)/, function(m){
      return m
        + '<div class="nav-acc" data-astro-cid-3ef6ksr2><button class="nav-link nav-acc-head" type="button" aria-expanded="false" data-astro-cid-3ef6ksr2>Tools<span class="nav-acc-chev" aria-hidden="true">&#8250;</span></button><div class="nav-acc-panel" data-astro-cid-3ef6ksr2><div class="nav-acc-inner" data-astro-cid-3ef6ksr2>'
        + '<button id="drawer-mortgage" class="nav-link nav-acc-item" style="background:none;border:none;padding:0;text-align:left;cursor:pointer;" onclick="var c=document.getElementById(&quot;nav-close&quot;);if(c)c.click();var s=document.getElementById(&quot;mortgage-sheet&quot;);if(s)s.classList.add(&quot;open&quot;);" data-astro-cid-3ef6ksr2>Mortgage Calc</button>'
        + '<button id="drawer-tax" class="nav-link nav-acc-item" style="background:none;border:none;padding:0;text-align:left;cursor:pointer;" onclick="var c=document.getElementById(&quot;nav-close&quot;);if(c)c.click();var s=document.getElementById(&quot;tax-sheet&quot;);if(s)s.classList.add(&quot;open&quot;);" data-astro-cid-3ef6ksr2>State Tax Savings</button>'
        + '<button id="drawer-net" class="nav-link nav-acc-item" style="background:none;border:none;padding:0;text-align:left;cursor:pointer;" onclick="var c=document.getElementById(&quot;nav-close&quot;);if(c)c.click();var s=document.getElementById(&quot;seller-sheet&quot;);if(s)s.classList.add(&quot;open&quot;);" data-astro-cid-3ef6ksr2>Seller Net Calc</button>'
        + '</div></div></div>';
    });
  }
  // 5. First-touch QR source capture (marker: sb-src-capture-2026)
  // Reads ?src= on any page, stores FIRST value for the session, then stamps a
  // hidden src field onto every Apps Script form so scan-to-lead closes the loop.
  if (html.includes('</body>') && !html.includes('sb-src-capture-2026')) {
    html = html.replace('</body>', '<script>/*sb-src-capture-2026*/(function(){try{var K="sb_src";var m=location.search.match(/[?&]src=([^&]*)/);if(m&&m[1]&&!sessionStorage.getItem(K)){sessionStorage.setItem(K,decodeURIComponent(m[1].replace(/\\+/g," ")).slice(0,64));}var v=sessionStorage.getItem(K)||"";if(!v){return;}var fs=document.querySelectorAll("form");for(var i=0;i<fs.length;i++){var f=fs[i];var a=f.getAttribute("action")||"";if(a.indexOf("script.google.com")===-1){continue;}if(f.querySelector("input[name=src]")){continue;}var n=document.createElement("input");n.type="hidden";n.name="src";n.value=v;f.appendChild(n);}}catch(e){}})();<\/script></body>');
  }
  // 4. About label span swap (marker: nav-about-short)
  if (!html.includes('nav-about-short')) {
    html = html.replace(/>About Sean &amp; Barb<\/a>/, function(){
      return '><span class="nav-about-full">About Sean &amp; Barb</span><span class="nav-about-short">About</span></a>';
    });
  }
  return html;
}

// ── ADDITIVE (single-source ticker): read /market-data.json once per isolate and
// regenerate the 10-city price ticker (.wgs-track) from it, so a market-data update
// is a one-file change instead of hand-editing every city page. SSR fallback = the
// hardcoded ticker already in each page; this overwrites it at the edge from the JSON.
let SB_MARKET_CACHE = null;
async function sbEnsureMarket(env, url){
  if (SB_MARKET_CACHE) return;
  try {
    const r = await env.ASSETS.fetch(new URL('/market-data.json', url).toString());
    if (r.ok) SB_MARKET_CACHE = await r.json();
  } catch (e) {}
}
function sbBuildTicker(data){
  const cities = data && data.cities;
  if (!cities) return null;
  const rows = Object.keys(cities).map(function(k){ return cities[k]; })
    .filter(function(c){ return c && typeof c.median_raw === 'number' && c.label; })
    .sort(function(a,b){ return b.median_raw - a.median_raw; });
  if (!rows.length) return null;
  const item = function(c){
    const k = Math.round(c.median_raw/1000);
    const yoy = (c.yoy || '').trim();
    const up = yoy.charAt(0) === '+';
    const cls = up ? 'u' : 'dn';
    const arrow = up ? '\u25B2' : '\u25BC';
    return '<span class="wgs-ti"><span class="c">' + c.label + '</span>'
         + '<span class="p">$' + k + 'K</span>'
         + '<span class="' + cls + '">' + arrow + ' ' + yoy + '</span></span>';
  };
  const single = rows.map(item).join('');
  return single + single; // duplicate for the seamless marquee loop
}
function applyMarketTicker(html){
  if (!SB_MARKET_CACHE || html.indexOf('wgs-track') === -1) return html;
  const run = sbBuildTicker(SB_MARKET_CACHE);
  if (!run) return html;
  return html.replace(/(?:<span class="wgs-ti">[\s\S]*?<\/span><\/span>)+/, run);
}

// Sitewide type: Playfair Display (variable, self-hosted) for all display/serif type,
// Inter unchanged for sans. The alias blocks remap the ~400 hardcoded Cormorant Garamond
// and EB Garamond references on existing pages without editing 113 files.
// Family names are intentionally unquoted so this payload string needs no quote escaping.
const SB_FONTS = '<style id=\"sb-fonts-playfair-2026\">@font-face{font-family:Playfair Display;font-style:normal;font-weight:400 900;font-display:swap;src:url(/fonts/playfair-display-var.woff2);}@font-face{font-family:Playfair Display;font-style:italic;font-weight:400 900;font-display:swap;src:url(/fonts/playfair-display-var-italic.woff2);}@font-face{font-family:Cormorant Garamond;font-style:normal;font-weight:400 900;font-display:swap;src:url(/fonts/playfair-display-var.woff2);}@font-face{font-family:Cormorant Garamond;font-style:italic;font-weight:400 900;font-display:swap;src:url(/fonts/playfair-display-var-italic.woff2);}@font-face{font-family:EB Garamond;font-style:normal;font-weight:400 900;font-display:swap;src:url(/fonts/playfair-display-var.woff2);}@font-face{font-family:EB Garamond;font-style:italic;font-weight:400 900;font-display:swap;src:url(/fonts/playfair-display-var-italic.woff2);}:root{--font-serif:Playfair Display,Georgia,serif;--font-display:Playfair Display,Georgia,serif;}</style>';




// Desktop-only: pull short heroes up flush under the ~68px compact header so no
// page background (cream) or hero-bg strip shows between the header and the hero.
// Targets the three hero patterns: inline margin-top:88px sections, and the
// class-based .nyfl-hero / .rh-hero / .phys-hero-d heroes. Mobile keeps 88px.
const SB_HERO_UP = '<style id="sb-hero-up-2026">@media (min-width:1024px){main section[style*="margin-top:88px"],main section[style*="margin-top:96px"],main section[style*="margin-top:58px"]{margin-top:0 !important;}main > section[class*="mt-["]{margin-top:0 !important;}.nyfl-herowrap,.nyfl-hero,.rh-hero,.phys-hero-d,.sb-blog-hero{margin-top:0 !important;}main > section:first-of-type,main > .nyfl-herowrap:first-child{margin-top:0 !important;}}</style>';
const SB_HEADER_GLOBAL = '<style id="sb-header-2026">@media (max-width:1199px){#site-header{padding:6px 20px !important;}#site-header .sbh-wrap{display:flex;align-items:center;justify-content:space-between;}#site-header nav.sbh-pill{display:none !important;}#site-header .sb-logo-wrap img{height:80px !important;max-width:55vw !important;display:block !important;}}@media (min-width:1200px){#bottom-nav,#hamburger,#nav-drawer{display:none !important;}#site-header{padding:16px 40px !important;box-shadow:none !important;overflow-x:clip;background:linear-gradient(180deg,rgba(6,10,17,0.72) 0%,rgba(6,10,17,0) 100%) !important;border-bottom:1px solid rgba(212,175,55,0.22) !important;transition:padding .3s ease,background .3s ease,border-color .3s ease;}#site-header.hero-active,#site-header.scrolled{background:linear-gradient(180deg,rgba(6,10,17,0.72) 0%,rgba(6,10,17,0) 100%) !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;}#site-header.shrunk,#site-header.shrunk.scrolled,#site-header.shrunk.hero-active{background:rgba(6,10,17,0.92) !important;-webkit-backdrop-filter:blur(16px) !important;backdrop-filter:blur(16px) !important;padding:10px 40px !important;border-bottom-color:rgba(212,175,55,0.26) !important;}#site-header .sbh-wrap{display:flex !important;align-items:center;justify-content:space-between;gap:34px;width:100% !important;max-width:1280px !important;margin:0 auto !important;min-height:0 !important;padding:0 !important;grid-template-columns:none !important;}#site-header .sbh-shield{flex:0 0 auto;display:flex;align-items:center;text-decoration:none;background:none !important;border:0 !important;box-shadow:none !important;padding:0 !important;border-radius:0 !important;height:auto !important;width:auto !important;overflow:visible !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;transform:none !important;}#site-header .sbh-shield .sb-logo-wrap{display:block;}#site-header .sbh-shield img,#site-header .sb-logo-wrap img{height:auto !important;max-height:56px !important;width:auto !important;max-width:100% !important;object-fit:contain !important;display:block !important;margin:0 !important;transition:max-height .3s ease;}#site-header.shrunk .sbh-shield img,#site-header.shrunk .sb-logo-wrap img{height:auto !important;max-height:40px !important;}#site-header nav.sbh-pill{display:flex !important;flex:0 1 auto;min-width:0;align-items:center;justify-content:flex-end !important;gap:clamp(18px,1.9vw,30px) !important;background:none !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;border:0 !important;box-shadow:none !important;padding:0 !important;border-radius:0 !important;white-space:nowrap;}#site-header nav.sbh-pill a.sbh-item,#site-header nav.sbh-pill button.nav-buy-toggle,#site-header .sbh-item,#site-header .nav-buy-toggle{font-family:Inter,system-ui,sans-serif !important;font-size:12px !important;line-height:1 !important;font-weight:500 !important;letter-spacing:0.13em !important;text-transform:uppercase !important;color:rgba(255,255,255,0.9) !important;text-decoration:none !important;background:none !important;border:0;padding:0;cursor:pointer;display:inline-flex;align-items:center;gap:5px;position:relative;transition:color .25s ease;}#site-header .sbh-item:hover,#site-header .nav-buy:hover .nav-buy-toggle{color:#D4AF37 !important;}#site-header .luxury-link::after{content:"";position:absolute;left:50%;bottom:-6px;width:0;height:1px;background:#D4AF37;opacity:0;transform:translateX(-50%);transition:width .3s ease,opacity .3s ease;}#site-header .luxury-link:hover::after{width:100%;opacity:1;}#site-header .nav-buy{position:relative;display:inline-flex;align-items:center;}#site-header .nav-buy::before{display:none !important;}#site-header .nav-buy::after{content:"";position:absolute;top:100%;left:-16px;right:-16px;height:24px;}#site-header .chevron{color:rgba(212,175,55,0.7);font-size:9px;transition:transform .3s ease;}#site-header .nav-buy:hover .chevron,#site-header .nav-buy:focus-within .chevron{transform:rotate(180deg);}#site-header .sbh-cta{border:1px solid rgba(255,255,255,0.28) !important;border-radius:999px !important;padding:10px 24px !important;transition:background .3s ease,color .3s ease,border-color .3s ease;}#site-header .sbh-cta:hover{background:#FFFFFF !important;color:#0A0E14 !important;border-color:#FFFFFF !important;}#site-header .sbh-cta::after{display:none !important;}#site-header nav.sbh-pill .nav-buy-menu{position:absolute !important;top:100%;left:50%;transform:translateX(-50%) translateY(-8px) scale(.95);transform-origin:top center;margin-top:14px;display:flex;flex-direction:column;gap:2px;background:#0a0f18 !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;border:1px solid rgba(212,175,55,0.40) !important;border-radius:1.6rem !important;padding:10px !important;min-width:230px !important;opacity:0;visibility:hidden;pointer-events:none;box-shadow:0 24px 48px rgba(0,0,0,0.75) !important;z-index:60;transition:opacity .3s ease,transform .3s ease;}#site-header nav.sbh-pill .nav-buy-menu::before{content:"";position:absolute;top:-18px;left:0;right:0;height:18px;}#site-header nav.sbh-pill .nav-buy:hover .nav-buy-menu,#site-header nav.sbh-pill .nav-buy:focus-within .nav-buy-menu{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0) scale(1);}#site-header nav.sbh-pill .nav-buy:last-of-type .nav-buy-menu{left:auto;right:0;transform:translateY(-8px) scale(.95);transform-origin:top right;}#site-header nav.sbh-pill .nav-buy:last-of-type:hover .nav-buy-menu,#site-header nav.sbh-pill .nav-buy:last-of-type:focus-within .nav-buy-menu{transform:translateY(0) scale(1);}#site-header nav.sbh-pill .nav-buy-menu a{font-family:Inter,system-ui,sans-serif !important;font-size:10px !important;font-weight:600 !important;letter-spacing:0.16em !important;text-transform:uppercase !important;color:rgba(255,255,255,0.78) !important;text-decoration:none !important;padding:13px 18px !important;border-radius:999px !important;white-space:nowrap;text-align:left;background:none !important;transition:color .3s ease,background .3s ease;}#site-header .nav-buy-menu a::before{display:none !important;}#site-header nav.sbh-pill .nav-buy-menu a:hover,#site-header nav.sbh-pill .nav-buy-menu a:focus-visible{color:#000000 !important;background:#D4AF37 !important;}}</style>';

const SB_MCX_EMBED = '<style id="sb-mcx-embed-2026">#mcx-host{max-width:100%;margin:0 auto;}#mcx-host #mortgage-sheet{position:static !important;inset:auto !important;max-height:none !important;border-radius:18px !important;overflow:visible !important;transform:none !important;pointer-events:auto !important;opacity:1 !important;visibility:visible !important;transition:none !important;box-shadow:0 24px 60px rgba(0,0,0,0.35) !important;display:block !important;}#mcx-host #mortgage-sheet .mcx-head{position:static;}#mcx-host #mortgage-close{display:none !important;}</style><script>/*sb-mcx-embed-2026*/(function(){var host=document.getElementById("mcx-host");if(!host)return;function move(){var sh=document.getElementById("mortgage-sheet");if(!sh||host.contains(sh))return false;host.appendChild(sh);return true;}if(!move()){var t=0,iv=setInterval(function(){if(move()||++t>40)clearInterval(iv);},50);}})();<\/script>';

const SB_TYPE_GLOBAL = '<style id="sb-type-2026">@font-face{font-family:Playfair Display;font-style:normal;font-weight:400 700;font-display:swap;src:url(/fonts/playfair-display-var.woff2) format(\'woff2\');}@font-face{font-family:Playfair Display;font-style:italic;font-weight:400 700;font-display:swap;src:url(/fonts/playfair-display-var-italic.woff2) format(\'woff2\');}main h1,.hero-headline,main .section-heading,main .cf-h,main .cf-t,main .gc-h,main .gc-dt,main .gc-vt,main .stone-h,main .sell-h,main .nyfl-h{font-family:Playfair Display,Georgia,serif !important;font-style:normal !important;}main h1,.hero-headline{font-weight:400 !important;}main .section-heading{font-weight:300 !important;}.section-eyebrow{font-family:Inter,system-ui,sans-serif !important;font-size:11px !important;letter-spacing:0.28em !important;text-transform:uppercase !important;}body,p,li{font-family:Inter,system-ui,sans-serif;}</style>';

const SB_NAV_MORPH = '<style id="sb-nav-morph-2026">#site-header{transition:transform .3s ease, opacity .4s ease;}#site-header .sbh-wrap{pointer-events:none;}#site-header .sbh-shield,#site-header nav.sbh-pill,#site-header #hamburger{pointer-events:auto;}#site-header.sb-away{transform:translateY(-140%);opacity:0;pointer-events:none;}#site-header.sb-fade{opacity:0;pointer-events:none;transition:opacity 1s ease !important;}@media (prefers-reduced-motion: reduce){#site-header{transition:none !important;}}</style><script>/*sb-nav-morph-2026*/(function(){var hdr=document.getElementById("site-header");if(!hdr)return;var lastY=window.pageYOffset||0,idle=null,fadeT=null,tick=false,pinned=false;function clearFade(){if(fadeT){clearTimeout(fadeT);fadeT=null;}}function armFade(){clearFade();if(pinned)return;fadeT=setTimeout(function(){if(!pinned)hdr.classList.add("sb-fade");},1500);}function show(){hdr.classList.remove("sb-away");hdr.classList.remove("sb-fade");armFade();}function hide(){if(!pinned)hdr.classList.add("sb-away");}function onScroll(){tick=false;clearFade();var y=window.pageYOffset||0;if(y<=120){lastY=y;clearTimeout(idle);show();return;}if(y<lastY-4){lastY=y;clearTimeout(idle);show();return;}if(y>lastY+4){hide();}lastY=y;clearTimeout(idle);idle=setTimeout(show,220);}window.addEventListener("scroll",function(){if(!tick){window.requestAnimationFrame(onScroll);tick=true;}},{passive:true});document.addEventListener("mousemove",function(e){if(e.clientY<=90)show();},{passive:true});hdr.addEventListener("mouseenter",function(){pinned=true;clearFade();hdr.classList.remove("sb-away");hdr.classList.remove("sb-fade");});hdr.addEventListener("mouseleave",function(){pinned=false;armFade();});hdr.addEventListener("focusin",function(){pinned=true;clearFade();hdr.classList.remove("sb-away");hdr.classList.remove("sb-fade");});hdr.addEventListener("focusout",function(){setTimeout(function(){if(!hdr.contains(document.activeElement)){pinned=false;armFade();}},0);});window.addEventListener("resize",onScroll);armFade();})();<\/script>';

// r330: GA4 lead events. Forms post natively into hidden iframes, so the success state is the sink iframe's load event
// after an un-prevented submit (every form calls preventDefault on validation failure). Marker: sb-lead-events-2026.
const SB_LEAD_EVENTS = '<script>/*sb-lead-events-2026*/(function(){if(window.__sbLeadEv)return;window.__sbLeadEv=1;function g(n,p){try{if(typeof window.gtag==="function"){window.gtag("event",n,p);}}catch(e){}}function pp(){return location.pathname||"/";}function fid(f){var s=f.querySelector("input[name=source]");return (s&&s.value)||f.id||"form";}document.addEventListener("submit",function(e){try{var f=e.target;if(!f||f.tagName!=="FORM")return;if(e.defaultPrevented)return;var a=f.getAttribute("action")||"";if(a.indexOf("script.google.com")===-1)return;var id=fid(f),tg=f.getAttribute("target")||"";var fr=tg?document.querySelector("iframe[name="+JSON.stringify(tg)+"]"):null;if(!fr){g("generate_lead",{form_id:id,page_path:pp()});return;}var once=function(){fr.removeEventListener("load",once);g("generate_lead",{form_id:id,page_path:pp()});};fr.addEventListener("load",once);}catch(x){}},false);document.addEventListener("click",function(e){try{var t=e.target;var a=(t&&t.closest)?t.closest("a[href^=tel]"):null;if(!a)return;g("phone_call",{page_path:pp(),link_url:a.getAttribute("href")||""});}catch(x){}},true);function watchChat(){var c=document.getElementById("chat-sheet");if(!c||c.__sbW)return;c.__sbW=1;var was=c.classList.contains("open");try{new MutationObserver(function(){var now=c.classList.contains("open");if(now&&!was){g("ai_chat_open",{page_path:pp()});}was=now;}).observe(c,{attributes:true,attributeFilter:["class"]});}catch(x){}}if(document.readyState!=="loading")watchChat();else document.addEventListener("DOMContentLoaded",watchChat);setTimeout(watchChat,1500);})();<\/script>';

// ── r330: static featured listings on the ten city hub pages ─────────────────
// Googlebot runs the iHomefinder widget and receives an empty grid, so city pages had no listings in
// crawlable HTML. /featured-listings.json (Sean refreshes it monthly with the market data) feeds a real
// HTML block of 3 to 6 homes. No entries for a city means no block. Sean's listings first, then Premier
// Sotheby's. Marker: sb-featured-2026. Anchor: <section id="sb-meet" (present on all ten hub pages).
let SB_FEATURED_CACHE = null;
async function sbEnsureFeatured(env, url){
  if (SB_FEATURED_CACHE) return;
  try {
    const r = await env.ASSETS.fetch(new URL('/featured-listings.json', url).toString());
    if (r.ok) SB_FEATURED_CACHE = await r.json();
  } catch (e) {}
}
const SB_FEATURED_CSS = '<style id="sb-featured-2026">#sb-featured{font-family:Inter,system-ui,sans-serif;}#sb-featured .sbf-in{max-width:1180px;margin:0 auto;}#sb-featured .sbf-sub{font-size:13px;color:#6b5f52;margin:14px 0 26px;line-height:1.6;}#sb-featured .sbf-grid{display:grid;grid-template-columns:1fr;gap:22px;}@media (min-width:700px){#sb-featured .sbf-grid{grid-template-columns:1fr 1fr;}}@media (min-width:1100px){#sb-featured .sbf-grid{grid-template-columns:1fr 1fr 1fr;}}#sb-featured .sbf-card{display:block;background:#fff;border:1px solid rgba(0,35,73,0.14);text-decoration:none;color:#0f1a26;overflow:hidden;transition:transform .35s ease,box-shadow .35s ease;}#sb-featured .sbf-card:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(0,35,73,0.18);}#sb-featured .sbf-img{position:relative;aspect-ratio:3/2;overflow:hidden;background:#dfd9d0;}#sb-featured .sbf-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease;}#sb-featured .sbf-card:hover .sbf-img img{transform:scale(1.05);}#sb-featured .sbf-tag{position:absolute;top:12px;left:12px;background:#002349;color:#E0BC6B;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;padding:6px 10px;font-weight:700;}#sb-featured .sbf-body{padding:16px 18px 18px;}#sb-featured .sbf-price{font-family:Playfair Display,Georgia,serif;font-size:24px;color:#002349;margin:0 0 4px;line-height:1.1;}#sb-featured .sbf-addr{font-size:14px;color:#0f1a26;margin:0 0 2px;font-weight:500;}#sb-featured .sbf-comm{font-size:12px;color:#8a6410;letter-spacing:.06em;text-transform:uppercase;margin:0 0 10px;}#sb-featured .sbf-meta{font-size:13px;color:#4f463d;margin:0;padding-top:10px;border-top:1px solid rgba(0,35,73,0.10);display:flex;gap:14px;flex-wrap:wrap;}#sb-featured .sbf-mls{font-size:11px;color:#8a7c6e;margin:8px 0 0;}#sb-featured .sbf-attr{font-size:11px;color:#8a7c6e;line-height:1.55;margin:22px 0 0;}#sb-featured .sbf-more{display:inline-block;margin-top:22px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#002349;text-decoration:none;border-bottom:1px solid #C4952A;padding-bottom:4px;}</style>';
function sbEsc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function sbFeaturedBlock(label, list, updated){
  const cards = list.slice(0, 6).map(function(l){
    const href = l.url || (l.mls ? ('/listing/?id=' + encodeURIComponent(String(l.mls) + '_32')) : '#');
    const title = l.address || l.community || 'Featured home';
    const meta = [];
    if (l.beds) meta.push(sbEsc(l.beds) + ' bd');
    if (l.baths) meta.push(sbEsc(l.baths) + ' ba');
    if (l.sqft) meta.push(sbEsc(l.sqft) + ' sq ft');
    const tag = l.listedBy ? sbEsc(l.listedBy) : '';
    return '<a class="sbf-card" href="' + sbEsc(href) + '">'
      + '<div class="sbf-img">' + (l.photo ? '<img src="' + sbEsc(l.photo) + '" alt="' + sbEsc(title + ', ' + label) + '" loading="lazy" width="640" height="427">' : '')
      + (tag ? '<span class="sbf-tag">' + tag + '</span>' : '') + '</div>'
      + '<div class="sbf-body">'
      + (l.price ? '<p class="sbf-price">' + sbEsc(l.price) + '</p>' : '')
      + '<p class="sbf-addr">' + sbEsc(title) + '</p>'
      + (l.community && l.address ? '<p class="sbf-comm">' + sbEsc(l.community) + '</p>' : '')
      + (meta.length ? '<p class="sbf-meta"><span>' + meta.join('</span><span>') + '</span></p>' : '')
      + (l.mls ? '<p class="sbf-mls">MLS# ' + sbEsc(l.mls) + '</p>' : '')
      + '</div></a>';
  }).join('');
  return '<section id="sb-featured" class="sb-band" style="background:#F4F2EF;padding:56px 20px 60px;">' + SB_FEATURED_CSS
    + '<div class="sbf-in"><h2 class="section-heading mb-2">Featured ' + sbEsc(label) + ' Homes</h2><span class="gold-rule"></span>'
    + '<p class="sbf-sub">Homes listed by Sean &amp; Barb and Premier Sotheby\'s International Realty in ' + sbEsc(label) + '.' + (updated ? ' Updated ' + sbEsc(updated) + '.' : '') + '</p>'
    + '<div class="sbf-grid">' + cards + '</div>'
    + '<p class="sbf-attr">Based on information from the Stellar Multiple Listing Service. This information may or may not include all listed expired, withdrawn, pending or sold properties of one or more members of the Stellar Multiple Listing Service. Listing status and price can change at any time.</p>'
    + '</div></section>';
}
function applyFeaturedListings(html, pathname){
  try {
    if (!pathname || !SB_FEATURED_CACHE || !SB_FEATURED_CACHE.cities) return html;
    if (html.indexOf('id="sb-featured"') !== -1) return html;
    const m = pathname.match(/^\/cities\/([a-z-]+)-homes-for-sale\/?$/);
    if (!m) return html;
    const list = SB_FEATURED_CACHE.cities[m[1]];
    if (!Array.isArray(list) || !list.length) return html;
    const anchor = '<section id="sb-meet"';
    if (html.indexOf(anchor) === -1) return html;
    const labels = { 'orlando':'Orlando', 'winter-garden':'Winter Garden', 'windermere':'Windermere', 'dr-phillips':'Dr. Phillips', 'lake-nona':'Lake Nona', 'winter-park':'Winter Park', 'maitland':'Maitland', 'longwood':'Longwood', 'lake-mary':'Lake Mary', 'oviedo':'Oviedo' };
    const label = labels[m[1]] || m[1];
    return html.replace(anchor, function(){ return sbFeaturedBlock(label, list, SB_FEATURED_CACHE.updated) + anchor; });
  } catch (e) { return html; }
}

async function serveHTML(resp, pathname, request){
  const ct = resp.headers.get('content-type') || '';
  if (!ct.includes('text/html')) return resp;
  let html = await resp.text();
  html = applyFooter(html);
  if (pathname) html = applyHeader(html, pathname);
  if (html.includes('</head>') && !html.includes('/sb-global.css')) html = html.replace('</head>', '<link rel="stylesheet" href="/sb-global.css?v=20260815a"></head>');
  html = html.replace('href="/sb-global.css"', 'href="/sb-global.css?v=20260815a"');
  if (html.includes('</head>') && !html.includes('sb-faq-accordion')) html = html.replace('</head>', SB_FAQ_ACCORDION + '</head>');
  if (html.includes('</head>') && !html.includes('sb-header-2026')) html = html.replace('</head>', SB_HEADER_GLOBAL + '</head>');
  if (html.includes('</head>') && !html.includes('sb-type-2026')) html = html.replace('</head>', SB_TYPE_GLOBAL + '</head>');
  if (!sbIsLikelyBot(request) && html.includes('<head>') && !html.includes('G-BPSHREN4PQ')) html = html.replace('<head>', '<head>' + GA4_TAG);
  if (html.includes('</body>') && !html.includes('sb-cta-toggle-global')) html = html.replace('</body>', SB_CTA_TOGGLE_SCRIPT + '</body>');
  if (html.includes('</body>') && !html.includes('sb-valuation-scroll-global')) html = html.replace('</body>', SB_VALUATION_SCROLL_SCRIPT + '</body>');
  if (html.includes('</body>') && !html.includes('sb-fonts-playfair-2026')) html = html.replace('</body>', SB_FONTS + '</body>');
  html = html.split('/fonts/cormorant-garamond-400.woff2').join('/fonts/playfair-display-var.woff2');
  if (html.includes('</body>') && !html.includes('sb-hero-up-2026')) html = html.replace('</body>', SB_HERO_UP + '</body>');
  // r232: the scroll-away header + gold Menu pill is sitewide, not homepage only.
  if (html.includes('</body>') && !html.includes('sb-nav-morph-2026')) html = html.replace('</body>', SB_NAV_MORPH + '</body>');
  if (html.includes('</body>') && !html.includes('sb-lead-events-2026')) html = html.replace('</body>', SB_LEAD_EVENTS + '</body>');
  if (html.includes('id="mcx-host"') && !html.includes('sb-mcx-embed-2026')) html = html.replace('</body>', SB_MCX_EMBED + '</body>');
  html = applyBottomNav(html);
  html = applyMarketSnapshot(html, pathname);
  html = applyFeaturedListings(html, pathname);
  html = applyTaxFix(html, pathname);
  html = applyMarketClamp(html);
  html = applyMarketTicker(html);
  html = applyFooterAccordions(html);
  html = applyChromeV2(html);
  if (!pathname || pathname.indexOf('/physician-relocation/guide') === -1) html = replaceCalcSheets(html);
  if (!pathname || pathname.indexOf('/physician-relocation/guide') === -1) html = applySellerSheet(html);
  const headers = new Headers(resp.headers);
  headers.delete('content-length');
  headers.delete('content-encoding');
  return new Response(html, { status: resp.status, statusText: resp.statusText, headers });
}

// ── Schools: OCPS attendance-zone lookup helpers ─────────────────
const SB_ZONE_FILES = { elementary:'/schools/zones/elementary.geojson', middle:'/schools/zones/middle.geojson', high:'/schools/zones/high.geojson' };
let _sbZoneCache = {};
async function sbLoadZone(env, url, key){
  if (_sbZoneCache[key] !== undefined) return _sbZoneCache[key];
  try {
    const r = await env.ASSETS.fetch(new URL(SB_ZONE_FILES[key], url).toString());
    _sbZoneCache[key] = r.ok ? await r.json() : null;
  } catch(e){ _sbZoneCache[key] = null; }
  return _sbZoneCache[key];
}
function sbPipRing(x, y, r){
  let ins=false, n=r.length, j=n-1;
  for (let i=0;i<n;i++){ const xi=r[i][0],yi=r[i][1],xj=r[j][0],yj=r[j][1];
    if (((yi>y)!==(yj>y)) && (x < (xj-xi)*(y-yi)/(yj-yi)+xi)) ins=!ins; j=i; }
  return ins;
}
function sbPipPoly(x, y, p){
  if (!sbPipRing(x,y,p[0])) return false;
  for (let k=1;k<p.length;k++){ if (sbPipRing(x,y,p[k])) return false; }
  return true;
}
function sbFindSchool(x, y, fc){
  if (!fc || !fc.features) return null;
  for (const f of fc.features){ const g=f.geometry; if(!g) continue;
    if (g.type==='Polygon'){ if (sbPipPoly(x,y,g.coordinates)) return f; }
    else if (g.type==='MultiPolygon'){ for (const pp of g.coordinates){ if (sbPipPoly(x,y,pp)) return f; } }
  }
  return null;
}
function sbTitle(s){ return (s||'').toLowerCase().replace(/\b\w/g, function(c){ return c.toUpperCase(); }); }
function sbTitleAddr(s){
  var t = sbTitle(s||'');
  return t.replace(/\b([A-Za-z]{2}),?\s*(\d{5})(-\d{4})?\b/, function(m, st, z, z4){ return st.toUpperCase() + ', ' + z + (z4 || ''); });
}
function sbFmt(feat, suffix){
  if(!feat) return null;
  const p=feat.properties||{};
  const t=sbTitle(p.SCHOOL||'');
  const name=/school/i.test(t) ? t : (t+' '+suffix);
  const lat=(typeof p.SLAT==='number')?p.SLAT:null, lng=(typeof p.SLNG==='number')?p.SLNG:null;
  return { name:name, address:p.ADDR||null, website:p.WEB||null, phone:p.PHONE||null, lat:lat, lng:lng, zone:feat.geometry||null };
}
async function sbGeocode(env, address){
  try {
    if (env.GEOCODE_KEY){
      const g = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address)+'&components=administrative_area:FL|country:US&key='+env.GEOCODE_KEY);
      const j = await g.json();
      if (j.results && j.results[0]){ const l=j.results[0].geometry.location; return {lat:l.lat, lng:l.lng}; }
      return null;
    }
    const u = 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address='+encodeURIComponent(address)+'&benchmark=Public_AR_Current&format=json';
    const r = await fetch(u);
    const j = await r.json();
    const m = j.result && j.result.addressMatches && j.result.addressMatches[0];
    return m ? {lat:m.coordinates.y, lng:m.coordinates.x} : null;
  } catch(e){ return null; }
}

const SB_INDEXNOW_KEY = '7d799cfaa0c546fe51d4c6286b41ceca';
const SB_INDEXNOW_SECRET = 'a9b9815e976bef4075fa6dc57dab9b5fe1e8634d'; // override with the INDEXNOW_SECRET Pages env var if it is ever set

// ── ADDITIVE: Single Family / Condo / Townhome median-price config, all ten markets (server-side only) ──
const METRIC_CSV = {
  'orlando': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBza9-LzG', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrBs-UUf', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrBz-UqH', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrBr-Y2l', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtj-5Xn', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrta-EeM', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtF-PoK', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtR-cC5', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtM-KeP' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtp-uk8', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtI-eQZ', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtv-enY', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtk-Rtk', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrt9-oNC', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrt0-xkh', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtn-z0K', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtV-O17', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtc-qOQ' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtN-LsR', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrtG-uIK', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdt-Jno', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdm-PVe', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdh-Vbd', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdQ-JaC', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdZ-0Sb', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdP-NvX', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdY-ofY' }
  },
  'winter-garden': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrd8-XAs', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdw-Nam', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdS-6e4', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdq-8Na', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrd3-XQv', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdX-xTQ', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdz-lAM', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdr-v0D', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdK-pDO' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdi-MJ2', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdJ-AZu', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrd5-QIE', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrd6-Its', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdp-VgK', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdx-wm5', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdo-pkV', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdI-5V4', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdv-i5O' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrd4-tol', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrde-nWg', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdk-rEy', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrd9-ajM', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdV-Wxr', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdc-ZKj', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdN-Y9x', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdG-nAB', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrdg-Ypa' }
  },
  'windermere': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCi-owN', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCU-hDF', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCp-uTB', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrC4-RCb', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCe-55S', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCk-f71', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrC9-GbD', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCV-aUI', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCc-hso' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCR-JiG', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrC8-9H1', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCw-pFl', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCS-N34', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCO-Pwa', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCy-fCc', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCX-8MJ', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCr-bl8', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCD-nM8' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCd-KlD', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCm-nYj', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCh-byw', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrC2-NaK', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCQ-rt3', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCZ-YbM', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCj-t0l', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCf-xPR', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrCP-2kg' }
  },
  'dr-phillips': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhc-TIa', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhN-RQe', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhG-wyp', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhg-1od', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2d-QsQ', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2l-LlV', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2m-3A9', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2Q-jYG', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr27-7z6' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2R-VWH', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2S-gTw', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2X-YaE', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2a-Ilh', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2i-JzQ', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2U-QTy', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2W-JXZ', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr26-tEP', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2o-VHq' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2k-puN', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr29-hwr', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr20-Xqm', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2n-dwW', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2V-RrX', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2c-F1R', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2N-hnp', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2G-vJQ', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr2g-kNv' }
  },
  'lake-nona': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmh-2Ql', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrm2-lFS', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmQ-SSk', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmb-meS', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrml-osL', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmZ-zca', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmj-DAd', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmf-k9w', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmP-JTy' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmY-66Z', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmH-jXc', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmF-o1e', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmE-qk6', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmR-rLn', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrm8-HTT', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmw-NPv', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmS-Ysp', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmO-D0j' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmu-MCH', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmA-KkR', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmq-xY6', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrm3-gPb', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrm6-ci2', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmp-Gd1', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmx-qhV', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmo-NCQ', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmI-qVN' }
  },
  'winter-park': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrm9-SXY', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmV-Nqt', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmc-5Ib', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmN-P3S', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrmG-8L8', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrht-5Rz', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhd-FLj', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhC-Lhj', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrh2-xhz' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhT-rZw', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhZ-EgI', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhP-JHT', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhF-ZVI', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhE-7gu', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhR-Fdh', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhS-n0D', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhA-qYi', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhy-5vB' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhz-kny', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhK-SOI', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhL-pEE', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrha-jsZ', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrh5-5n2', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrh6-v34', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhp-UTb', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrhx-cX7', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrho-qwJ' }
  },
  'maitland': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQB-Htf', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQt-3T1', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQ2-c15', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQQ-bBW', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQ7-1MB', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQT-mwm', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQb-epW', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQj-U9s', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQf-U3a' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQH-NbA', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQF-FIm', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQE-gxU', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQR-MtS', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQ8-3pO', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQw-yZN', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQu-OCM', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQA-o6m', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQq-Mbj' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQ3-uKi', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQy-6eT', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQX-ait', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQs-vaG', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQD-Pi7', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQa-iW5', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQM-sSm', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQ1-s07', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrQi-x09' }
  },
  'longwood': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7u-Yxq', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7A-eiW', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7q-qXP', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7X-38n', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr71-Ju7', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7i-0kR', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7J-7sn', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr75-H4L', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7U-pyI' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7W-foZ', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr76-GI4', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7p-1Ar', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7x-GiQ', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7o-n2P', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7I-OoU', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7v-OwI', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr74-EMD', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7e-vGo' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7n-1ii', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7N-dR2', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBr7G-jv2', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTt-YN9', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTd-uBB', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTC-hSi', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrT2-KJt', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTQ-2E2', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrT7-EpA' }
  },
  'lake-mary': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrAV-jc2', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrAG-EGT', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrAg-p3t', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqB-97e', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqt-kPY', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqd-VDI', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqC-uD9', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqm-3Ae', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqQ-0iL' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqZ-6OL', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqj-wIf', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqY-oI6', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqE-HZm', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqR-PTE', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrq8-c7q', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqw-tQx', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqS-WzH', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqO-y4x' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqq-pdh', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrq3-ffe', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqy-jr7', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqz-AtO', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqr-H4K', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqD-HyT', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqK-inr', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqL-wo7', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrqM-bCY' }
  },
  'oviedo': {
    sf: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTw-dGb', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTO-qwR', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTq-XQE', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTy-GIx', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTz-wLq', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTD-OrY', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrT1-rec', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrT5-b2V', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrT6-1sz' },
    condo: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTo-0iw', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTI-RE', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTv-hzR', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrT4-KI5', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTe-udq', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTk-4kV', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrT9-zqG', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrT0-IcN', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTn-oPs' },
    th: { price: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTN-0IQ', newList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTG-8Ao', active: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrTg-o9t', pending: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrbB-IYB', closed: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrbC-UnY', dom: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrbh-kA1', moi: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrbQ-sqK', pctList: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrbT-vXv', ppsf: 'https://stellarmls.stats.showingtime.com/infoserv/s-v1/tBrbl-qfl' }
  }
};
const CITIES_LABELS = {
  'orlando':'Orlando','winter-garden':'Winter Garden','windermere':'Windermere','dr-phillips':'Dr. Phillips',
  'lake-nona':'Lake Nona','winter-park':'Winter Park','maitland':'Maitland','longwood':'Longwood',
  'lake-mary':'Lake Mary','oviedo':'Oviedo'
};
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function sbParseMonthLabel(s){
  const parts = s.split(' ');
  const mi = MONTH_NAMES.indexOf(parts[0]);
  const yr = parseInt(parts[1], 10);
  if (mi === -1 || !isFinite(yr)) return null;
  return { month: mi, year: yr, key: yr * 12 + mi };
}
function sbMonthAbbr(s){
  const m = String(s).match(/^([A-Za-z]+)/);
  return m ? m[1].slice(0, 3) : String(s);
}
function sbFmtMoney(v){
  return '$' + Math.round(v).toLocaleString('en-US');
}
// 3-month average, matching the site's established trend-window convention. Requires at least 2 of the
// last 3 months present, else returns null (thin markets can have gap months) rather than average too few points.
function sbAvgWindow(rows, months){
  if (rows.length < 2) return null;
  const win = rows.slice(-months);
  if (win.length < Math.max(2, months - 1)) return null;
  const avg = win.reduce(function(s, r){ return s + r.value; }, 0) / win.length;
  return { avg: avg, win: win };
}
// Percent change of the current N-month average vs. the same N calendar months a year earlier. Requires
// near-full coverage on both sides; thin/gappy segments return null so the UI shows n/a rather than a
// swing driven by one or two outlier sales.
function sbYoyPct(rows, months){
  const win = rows.slice(-months);
  if (win.length < Math.max(2, months - 1)) return null;
  const curAvg = win.reduce(function(s, r){ return s + r.value; }, 0) / win.length;
  const byKey = {};
  rows.forEach(function(r){ byKey[r.key] = r.value; });
  const yearAgoVals = win.map(function(r){ return byKey[r.key - 12]; }).filter(function(v){ return v !== undefined; });
  if (yearAgoVals.length < Math.max(2, months - 1)) return null;
  const yearAgoAvg = yearAgoVals.reduce(function(s, v){ return s + v; }, 0) / yearAgoVals.length;
  return { curAvg: curAvg, yearAgoAvg: yearAgoAvg, pct: ((curAvg - yearAgoAvg) / yearAgoAvg) * 100 };
}
function sbParseInfoSparksCsv(text){
  const lines = text.split(/\r?\n/);
  const meta = {};
  let dateIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^Date,/.test(lines[i])) { dateIdx = i; break; }
    const m = lines[i].match(/^([^,]+):,(.*)$/);
    if (m) meta[m[1].trim()] = m[2].replace(/^"|"$/g, '').trim();
  }
  const rows = [];
  if (dateIdx !== -1) {
    for (let i = dateIdx + 1; i < lines.length; i++) {
      const l = lines[i];
      if (!l.trim()) break;
      const parts = l.split(',');
      const dateStr = (parts[0] || '').trim();
      if (!/^[A-Za-z]+ \d{4}$/.test(dateStr)) break;
      const val = parseFloat(parts[1]);
      if (isFinite(val)) rows.push({ date: dateStr, value: val });
    }
  }
  return { meta: meta, rows: rows };
}


export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // ── ADDITIVE: warm market-data cache so the city ticker renders from /market-data.json ──
    if (pathname.indexOf('/cities/') === 0) { await sbEnsureMarket(env, url); }
    if (pathname.indexOf('/cities/') === 0) { await sbEnsureFeatured(env, url); }

    // ── Schools: address -> OCPS zoned schools (Orange County only) ──
    if (pathname === '/api/zoned-schools') {
      const cors = { 'content-type':'application/json', 'access-control-allow-origin':'*' };
      try {
        let lat = parseFloat(url.searchParams.get('lat'));
        let lng = parseFloat(url.searchParams.get('lng'));
        const address = (url.searchParams.get('address')||'').toString().slice(0,200);
        if ((isNaN(lat)||isNaN(lng)) && address){
          const geo = await sbGeocode(env, address);
          if (!geo) return new Response(JSON.stringify({ok:false, error:'not_found'}), {headers:cors});
          lat = geo.lat; lng = geo.lng;
        }
        if (isNaN(lat)||isNaN(lng)) return new Response(JSON.stringify({ok:false, error:'no_input'}), {status:400, headers:cors});
        const [el, mi, hi] = await Promise.all([ sbLoadZone(env,url,'elementary'), sbLoadZone(env,url,'middle'), sbLoadZone(env,url,'high') ]);
        const elem = sbFindSchool(lng,lat,el), middle = sbFindSchool(lng,lat,mi), high = sbFindSchool(lng,lat,hi);
        return new Response(JSON.stringify({
          ok:true, lat:lat, lng:lng, inDistrict: !!(elem||middle||high),
          schools:{ elementary: sbFmt(elem,'Elementary School'), middle: sbFmt(middle,'Middle School'), high: sbFmt(high,'High School') }
        }), {headers:cors});
      } catch(e){
        return new Response(JSON.stringify({ok:false, error:'server'}), {status:500, headers:cors});
      }
    }

    // ── Schools: address autocomplete (Google Places New -> Google Geocoding -> Photon) ──
    if (pathname === '/api/geo-suggest') {
      const cors = { 'content-type':'application/json', 'access-control-allow-origin':'*', 'cache-control':'public, max-age=120' };
      const q = (url.searchParams.get('q')||'').toString().trim().slice(0,120);
      if (q.length < 3) return new Response(JSON.stringify({ok:true, suggestions:[]}), {headers:cors});
      if (env.GEOCODE_KEY) {
        // 1) Google Places Autocomplete (New)
        try {
          const gr = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
            method:'POST',
            headers:{ 'Content-Type':'application/json', 'X-Goog-Api-Key': env.GEOCODE_KEY },
            body: JSON.stringify({ input:q, includedRegionCodes:['us'], locationBias:{ circle:{ center:{latitude:28.54,longitude:-81.38}, radius:50000 } } })
          });
          if (gr.ok) {
            const gj = await gr.json();
            const out = [];
            (gj.suggestions||[]).forEach(function(s){
              const pp = s.placePrediction; if (!pp) return;
              const label = pp.text && pp.text.text; if (!label) return;
              out.push({ label: label.replace(/, USA$/,''), placeId: pp.placeId||null, lat:null, lng:null });
            });
            if (out.length) return new Response(JSON.stringify({ok:true, source:'google_places', suggestions:out}), {headers:cors});
          }
        } catch(e){}
        // 2) Google Geocoding (accurate house/city/zip; same key)
        try {
          const u = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(q)+'&components=country:US&bounds=27.90,-81.75%7C28.95,-80.95&key='+env.GEOCODE_KEY;
          const r = await fetch(u);
          const j = await r.json();
          if (j.status === 'OK' && j.results && j.results.length) {
            const out = [];
            j.results.slice(0,6).forEach(function(res){
              const loc = res.geometry && res.geometry.location;
              out.push({ label: (res.formatted_address||'').replace(/, USA$/,''), lat: loc?loc.lat:null, lng: loc?loc.lng:null });
            });
            if (out.length) return new Response(JSON.stringify({ok:true, source:'google_geocode', suggestions:out}), {headers:cors});
          }
        } catch(e){}
      }
      // 3) Photon (komoot) -- keyless fuzzy autocomplete, biased to Central FL, handles partial input
      try {
        const u = 'https://photon.komoot.io/api/?q=' + encodeURIComponent(q) + '&lat=28.54&lon=-81.38&limit=6&lang=en';
        const r = await fetch(u);
        if (r.ok) {
          const j = await r.json();
          const seen = {}, out = [];
          (j.features||[]).forEach(function(f){
            const p = f.properties||{}, g = f.geometry||{};
            if (p.countrycode && p.countrycode !== 'US') return;
            const parts = [];
            if (p.housenumber && p.street) parts.push(p.housenumber + ' ' + p.street);
            else if (p.street) parts.push(p.street);
            else if (p.name) parts.push(p.name);
            if (p.city) parts.push(p.city); else if (p.district) parts.push(p.district);
            if (p.state) parts.push(p.state);
            if (p.postcode) parts.push(p.postcode);
            const label = parts.join(', ');
            if (!label || seen[label]) return; seen[label] = 1;
            const c = g.coordinates || [];
            out.push({ label: label, lat: (typeof c[1]==='number')?c[1]:null, lng: (typeof c[0]==='number')?c[0]:null });
          });
          if (out.length) return new Response(JSON.stringify({ok:true, source:'photon', suggestions:out}), {headers:cors});
        }
      } catch(e){}
      // 4) US Census geocoder (keyless, accurate; needs a fairly complete address)
      try {
        const u = 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=' + encodeURIComponent(q) + '&benchmark=Public_AR_Current&format=json';
        const r = await fetch(u);
        const j = await r.json();
        const matches = (j.result && j.result.addressMatches) || [];
        const seen = {}, out = [];
        matches.slice(0,6).forEach(function(m){
          const label = sbTitleAddr(m.matchedAddress || '');
          if (!label || seen[label]) return; seen[label] = 1;
          const c = m.coordinates || {};
          out.push({ label: label, lat: (typeof c.y==='number')?c.y:null, lng: (typeof c.x==='number')?c.x:null });
        });
        return new Response(JSON.stringify({ok:true, source:'census', suggestions:out}), {headers:cors});
      } catch(e){
        return new Response(JSON.stringify({ok:false, suggestions:[]}), {headers:cors});
      }
    }

    // ── ADDITIVE: Single Family / Condo / Townhome median price, per market. Server-side fetch of the
    // live Stellar InfoSparks CSVs so the browser never has to worry about Stellar's own CORS headers.
    if (pathname === '/api/ptype-full') {
      const cors = { 'content-type':'application/json', 'access-control-allow-origin':'*', 'cache-control':'public, max-age=900' };
      const market = (url.searchParams.get('market')||'').toLowerCase();
      const ptype = (url.searchParams.get('ptype')||'').toLowerCase();
      const cfg = (METRIC_CSV[market]||{})[ptype];
      if (!cfg) return new Response(JSON.stringify({ok:false, error:'unknown_market_or_type'}), {status:400, headers:cors});
      try {
        const keys = Object.keys(cfg);
        const texts = await Promise.all(keys.map(function(k){
          return fetch(cfg[k], { cf: { cacheTtl: 1800, cacheEverything: true } }).then(function(r){ return r.text(); });
        }));
        const parsed = {};
        keys.forEach(function(k, i){ parsed[k] = sbParseInfoSparksCsv(texts[i]); });

        function labeled(k){
          return parsed[k].rows.map(function(r){
            const p = sbParseMonthLabel(r.date);
            return p ? { date: r.date, value: r.value, month: p.month, year: p.year, key: p.key } : null;
          }).filter(Boolean);
        }
        function last(k){ const r = parsed[k].rows; return r.length ? r[r.length - 1] : null; }

        const priceRows = labeled('price');
        const priceCur = last('price');
        if (!priceCur) return new Response(JSON.stringify({ok:false, error:'no_data'}), {status:502, headers:cors});

        const avg3 = sbAvgWindow(priceRows, 3);
        const yoy = sbYoyPct(priceRows, 3);

        const activeRows = parsed.active.rows.slice(-10);
        const closedRows = parsed.closed.rows.slice(-10);
        const n = Math.max(1, Math.min(activeRows.length, closedRows.length, 10));
        const activeWin = activeRows.slice(-n);
        const closedWin = closedRows.slice(-n);
        const L = activeWin.map(function(r){ return r.value; });
        const S = closedWin.map(function(r){ return r.value; });
        const monthAbbrs = activeWin.map(function(r){ return sbMonthAbbr(r.date); });

        const domCur = last('dom');
        const moiCur = last('moi');
        const ppsfCur = last('ppsf');
        const pctCur = last('pctList');
        const newCur = last('newList');
        const pendCur = last('pending');

        const moiVal = moiCur ? moiCur.value : null;
        let bal = 'Balanced';
        if (moiVal != null) { if (moiVal < 3) bal = 'Sellers'; else if (moiVal > 6) bal = 'Buyers'; }

        const segLabel = parsed.price.meta['Segments'];
        const monthOnly = priceCur.date.split(' ')[0];
        const avg3Label = avg3 ? (sbMonthAbbr(avg3.win[0].date) + '-' + sbMonthAbbr(avg3.win[avg3.win.length-1].date) + ' Avg') : null;
        const yoyYear = avg3 ? (avg3.win[avg3.win.length-1].year - 1) : null;
        const yoyLabel = (avg3 && yoyYear) ? ('vs ' + sbMonthAbbr(avg3.win[0].date) + '-' + sbMonthAbbr(avg3.win[avg3.win.length-1].date) + ' ' + yoyYear) : null;
        const chartRangeLabel = activeWin.length ? (sbMonthAbbr(activeWin[0].date) + ' ' + activeWin[0].date.split(' ')[1] + ' to ' + sbMonthAbbr(activeWin[activeWin.length-1].date) + ' ' + activeWin[activeWin.length-1].date.split(' ')[1]) : null;

        return new Response(JSON.stringify({
          ok: true,
          label: CITIES_LABELS[market] || segLabel || market,
          propertyType: (segLabel && parsed.price.meta[segLabel]) || null,
          asOf: parsed.price.meta['Data from'] || null,
          currentMonthLabel: priceCur.date,
          currentMonthOnly: monthOnly,
          avg3Label: avg3Label,
          yoyLabel: yoyLabel,
          chartRangeLabel: chartRangeLabel,
          D: {
            L: L, S: S, months: monthAbbrs,
            median: priceCur.value,
            dom: domCur ? domCur.value : null,
            moi: moiVal,
            pinPos: moiVal != null ? (moiVal / 9 * 100) : null
          },
          avg3: avg3 ? sbFmtMoney(avg3.avg) : null,
          yoy: yoy ? ((yoy.pct >= 0 ? '+' : '') + yoy.pct.toFixed(2) + '%') : null,
          ppsf: ppsfCur ? ppsfCur.value : null,
          pct: pctCur ? (pctCur.value * 100).toFixed(1) + '%' : null,
          bal: bal,
          act: { new: newCur ? newCur.value : null, pen: pendCur ? pendCur.value : null }
        }), { headers: cors });
      } catch (e) {
        return new Response(JSON.stringify({ok:false, error:'fetch_failed'}), {status:502, headers:cors});
      }
    }

    // ── Physician guide: activity notification (open / download) ──
    if (pathname === '/api/guide-event') {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
      try {
        const data = await request.json();
        const event = (data.event || '').toString().slice(0, 40);
        const who = ((data.who || '').toString().slice(0, 120)) || 'A physician';
        const key = (data.key || '').toString().slice(0, 80);
        const labels = { open: 'opened their guide', download: 'downloaded their notes', 'probate-checklist': 'downloaded the Probate 30-Day Checklist' };
        const what = labels[event] || ('triggered: ' + event);
        const when = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        if (env.RESEND_API_KEY) {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
            body: JSON.stringify({
              from: 'Guide Activity <sean@seanandbarb.com>',
              to: ['sean@seanandbarb.com'], reply_to: 'sean@seanandbarb.com',
              subject: `\u{1F4D6} ${who} ${what}`,
              html: `<p><b>${who}</b> ${what}.</p><p>Link key: ${key || '\u2014'}<br>Time: ${when} ET</p>` +
                    `<p><a href="https://www.seanandbarb.com/lifestyles/physician-relocation/guide/?k=${encodeURIComponent(key)}">Open their edition</a></p>`,
            }),
          });
        }
        return Response.json({ ok: true });
      } catch (e) {
        return Response.json({ ok: true });
      }
    }

    // ── Physician guide: cross-device notes sync (KV-backed) ──
    if (pathname === '/api/guide-notes') {
      const k = (url.searchParams.get('k') || '').toString().replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 80);
      if (!k) return Response.json({ ok:false, error:'missing key' }, { status:400 });
      const KVNS = env.GUIDE_NOTES;
      if (!KVNS) return Response.json({ ok:false, error:'kv-not-bound' });
      const TTL = 60 * 60 * 24 * 548; // ~18 months
      if (request.method === 'GET') {
        const val = await KVNS.get('notes:' + k);
        if (val == null) return Response.json({ ok:true, store:null });
        try { await KVNS.put('notes:' + k, val, { expirationTtl: TTL }); } catch (e) {} // refresh window on open
        let store = null; try { store = JSON.parse(val); } catch (e) {}
        return Response.json({ ok:true, store });
      }
      if (request.method === 'POST') {
        let body; try { body = await request.json(); } catch (e) { return Response.json({ ok:false }, { status:400 }); }
        const store = body && body.store;
        if (!store) return Response.json({ ok:false }, { status:400 });
        const json = JSON.stringify(store);
        if (json.length > 600000) return Response.json({ ok:false, error:'too-large' }, { status:413 });
        await KVNS.put('notes:' + k, json, { expirationTtl: TTL });
        return Response.json({ ok:true });
      }
      return new Response('Method not allowed', { status:405 });
    }

    // Live mortgage rate (Freddie Mac PMMS via FRED, edge-cached 24h, no key/cron)
    if (pathname === '/api/mortgage-rate') {
      const cache = caches.default;
      const ckey = new Request(url.origin + '/api/mortgage-rate');
      let hit = await cache.match(ckey);
      if (hit) return hit;
      async function fred(id){
        try{
          const r = await fetch('https://fred.stlouisfed.org/graph/fredgraph.csv?id=' + id, { cf:{ cacheTtl:3600, cacheEverything:true } });
          if(!r.ok) return null;
          const txt = await r.text();
          const lines = txt.trim().split('\n');
          for(let i=lines.length-1;i>0;i--){
            const p = lines[i].split(',');
            const v = parseFloat(p[1]);
            if(!isNaN(v)) return { rate:v, asOf:(p[0]||'').trim() };
          }
        }catch(e){}
        return null;
      }
      const [a,b] = await Promise.all([fred('MORTGAGE30US'), fred('MORTGAGE15US')]);
      const body = { ok:true, r30: a?a.rate:6.43, r15: b?b.rate:5.79, asOf: (a&&a.asOf)||(b&&b.asOf)||null, live: !!(a||b), source:'Freddie Mac PMMS via FRED' };
      const out = new Response(JSON.stringify(body), { headers:{ 'content-type':'application/json', 'cache-control':'public, max-age=86400' } });
      try{ await cache.put(ckey, out.clone()); }catch(e){}
      return out;
    }


    // ── r330: IndexNow (Bing, Yandex, Naver, Seznam share the endpoint) ──────────────
    // Key file is also shipped as a static asset; this route guarantees it even if the asset is missed.
    if (pathname === '/' + SB_INDEXNOW_KEY + '.txt') {
      return new Response(SB_INDEXNOW_KEY, { headers: { 'content-type': 'text/plain;charset=UTF-8', 'cache-control': 'public, max-age=86400' } });
    }
    if (pathname === '/api/indexnow') {
      const secret = env.INDEXNOW_SECRET || SB_INDEXNOW_SECRET;
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
      if ((request.headers.get('x-sb-indexnow') || '') !== secret) return Response.json({ ok:false, error:'unauthorized' }, { status: 401 });
      try {
        const urls = [];
        const sm = await env.ASSETS.fetch(new URL('/sitemap.xml', url).toString());
        if (sm.ok) {
          const xml = await sm.text();
          const re = /<loc>\s*([^<\s]+)\s*<\/loc>/g; let mm;
          while ((mm = re.exec(xml))) urls.push(mm[1]);
        }
        try {
          const pm = await env.ASSETS.fetch(new URL('/insights/posts.json', url).toString());
          if (pm.ok) {
            const posts = await pm.json();
            const etNow = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
            const pad = n => String(n).padStart(2, '0');
            const today = etNow.getFullYear() + '-' + pad(etNow.getMonth() + 1) + '-' + pad(etNow.getDate());
            urls.push('https://www.seanandbarb.com/insights/');
            posts.filter(p => String(p.publishDate) <= today).forEach(p => urls.push('https://www.seanandbarb.com' + (p.url || ('/insights/' + p.slug + '/'))));
          }
        } catch (e) {}
        const list = Array.from(new Set(urls)).slice(0, 10000);
        const body = { host: 'www.seanandbarb.com', key: SB_INDEXNOW_KEY, keyLocation: 'https://www.seanandbarb.com/' + SB_INDEXNOW_KEY + '.txt', urlList: list };
        const r = await fetch('https://api.indexnow.org/indexnow', { method:'POST', headers:{ 'content-type':'application/json; charset=utf-8' }, body: JSON.stringify(body) });
        const txt = await r.text();
        return Response.json({ ok: r.ok || r.status === 202, status: r.status, submitted: list.length, upstream: txt.slice(0, 300) });
      } catch (e) {
        return Response.json({ ok:false, error:'indexnow-failed' }, { status: 502 });
      }
    }
    // ── Legacy URL cleanup (2026-06-16) ──────────────────────────────────
    // Old/dead paths from the prior site structure. Matched WITHOUT a trailing
    // slash (root excepted) so /foo and /foo/ both resolve. Placed before the
    // COMMUNITIES map and listing routes so it never shadows a live route.
    const cleanPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

    // r330 (URL hygiene): /listing?id= and /listing-report?id= were both getting indexed alongside the
    // trailing-slash forms. Single 301 to the canonical slash form, query string preserved.
    if (pathname === '/listing' || pathname === '/listing-report') {
      return Response.redirect('https://www.seanandbarb.com' + pathname + '/' + url.search, 301);
    }

    // 301 → live equivalent (preserves any inbound links / equity).
    const REDIRECTS = {
      '/central-florida-communities/dr.-phillips': '/cities/dr-phillips-homes-for-sale/',
      '/central-florida-communities/lake-nona':   '/cities/lake-nona-homes-for-sale/',
      '/properties':  '/idx/',
      '/contact-8':   '/contact/',
      '/sell':                       '/selling-your-home/',
      '/sell/downsizing':            '/selling-your-home/downsizing/',
      '/sell/dr-phillips':           '/selling-your-home/dr-phillips/',
      '/sell/lake-mary':             '/selling-your-home/lake-mary/',
      '/sell/lake-nona':             '/selling-your-home/lake-nona/',
      '/sell/longwood':              '/selling-your-home/longwood/',
      '/sell/luxury-home-marketing': '/selling-your-home/luxury-home-marketing/',
      '/sell/maitland':              '/selling-your-home/maitland/',
      '/sell/orlando':               '/selling-your-home/orlando/',
      '/sell/oviedo':                '/selling-your-home/oviedo/',
      '/sell/windermere':            '/selling-your-home/windermere/',
      '/sell/winter-garden':         '/selling-your-home/winter-garden/',
      '/sell/winter-park':           '/selling-your-home/winter-park/',
      '/lifestyles/waterfront-homes': '/lifestyles/waterfront/',
      '/mortgage-calculator':        '/buying-a-home/#buy-mortgage-calc',
      '/blog':                       '/insights/',
      '/net-sheet.html':             '/selling-your-home/#sv-net-calc',
      '/dr-phillips-homes-for-sale': '/cities/dr-phillips-homes-for-sale/',
      '/lake-mary-homes-for-sale':  '/cities/lake-mary-homes-for-sale/',
      '/lake-nona-homes-for-sale':  '/cities/lake-nona-homes-for-sale/',
      '/longwood-homes-for-sale':   '/cities/longwood-homes-for-sale/',
      '/maitland-homes-for-sale':   '/cities/maitland-homes-for-sale/',
      '/orlando-homes-for-sale':    '/cities/orlando-homes-for-sale/',
      '/oviedo-homes-for-sale':     '/cities/oviedo-homes-for-sale/',
      '/windermere-homes-for-sale': '/cities/windermere-homes-for-sale/',
      '/winter-garden-homes-for-sale': '/cities/winter-garden-homes-for-sale/',
      '/winter-park-homes-for-sale': '/cities/winter-park-homes-for-sale/',
      // r376 - low-value pages retired, 301 to the closest live page
      '/listings':   '/idx/',
      '/markets':    '/market-report/',
      '/lifestyles/new-york-to-florida-relocation': '/relocation/new-york-to-florida/',
      '/insights/central-florida-seller-pricing-2026': '/selling-your-home/',
      '/insights/central-florida-buyer-market-shift-2026': '/buying-a-home/',
      '/insights/downtown-orlando-lake-eola-tower-2026': '/cities/orlando-homes-for-sale/',
      '/insights/lake-nona-laureate-park-426-homes-2026': '/cities/lake-nona-homes-for-sale/',
    };
    if (REDIRECTS[cleanPath]) {
      return Response.redirect('https://www.seanandbarb.com' + REDIRECTS[cleanPath], 301);
    }
    // r376 - /listings/* and /markets/* were template rewrites; send every subpath to the live equivalent.
    if (cleanPath.indexOf('/listings/') === 0) return Response.redirect('https://www.seanandbarb.com/idx/', 301);
    if (cleanPath.indexOf('/markets/') === 0) return Response.redirect('https://www.seanandbarb.com/market-report/', 301);

    // 410 Gone → permanently removed pages (drops them from Google faster than 404).
    const GONE = new Set(['/free-pre-listing-checklist', '/mo', '/yr', '/relocation/texas-to-florida']);
    if (GONE.has(cleanPath)) {
      const g = await env.ASSETS.fetch(new URL('/404.html', url).toString());
      const body = g.ok ? await g.text()
        : '<!doctype html><meta name="robots" content="noindex"><title>Page removed</title><p>This page no longer exists.</p>';
      return new Response(body, {
        status: 410,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
          'x-robots-tag': 'noindex',
          'cache-control': 'public, max-age=3600',
        },
      });
    }

    // ── Insights: date-gated publishing (Option A scheduler) ─────────────
    // Articles ship as static files; publishDate in /insights/posts.json gates them.
    // Index lists only live posts; future-dated articles 404 (noindex) until live.
    if (pathname === '/insights' || pathname === '/insights/' || pathname.startsWith('/insights/') || pathname === '/insights-sitemap.xml') {
      const etNow = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const pad = n => String(n).padStart(2, '0');
      const today = etNow.getFullYear() + '-' + pad(etNow.getMonth() + 1) + '-' + pad(etNow.getDate());

      let allPosts = [];
      try {
        const pm = await env.ASSETS.fetch(new URL('/insights/posts.json', url).toString());
        if (pm.ok) allPosts = await pm.json();
      } catch (e) { allPosts = []; }
      const live = allPosts.filter(p => String(p.publishDate) <= today);

      if (pathname === '/insights-sitemap.xml') {
        const rows = ['<url><loc>https://www.seanandbarb.com/insights/</loc></url>']
          .concat(live.map(p => `<url><loc>https://www.seanandbarb.com${p.url || ('/insights/' + p.slug + '/')}</loc><lastmod>${p.publishDate}</lastmod></url>`));
        const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + rows.join('\n') + '\n</urlset>';
        return new Response(xml, { headers: { 'content-type': 'application/xml;charset=UTF-8', 'cache-control': 'public, max-age=300' } });
      }

      if (pathname === '/insights' || pathname === '/insights/') {
        const idx = await env.ASSETS.fetch(new URL('/insights/index.html', url).toString());
        let html = await idx.text();
        const cards = live.length ? live.map(p => {
          const img = p.heroImage ? ` style="background-image:url('${p.heroImage}')"` : '';
          return `<a class="sb-blog-card" data-category="${p.category}" href="${p.url || ('/insights/' + p.slug + '/')}"><div class="sb-blog-card-img"${img}></div><div class="sb-blog-card-body"><p class="sb-blog-card-cat">${p.category}</p><h2>${p.title}</h2><p>${p.description}</p><p class="sb-blog-card-meta">${p.readingMinutes} min read</p></div></a>`;
        }).join('') : '<p class="sb-blog-empty">New insights are publishing soon. Check back shortly.</p>';
        // category pills: "All" + each distinct live category (only show if >1 category)
        const cats = [...new Set(live.map(p => p.category))];
        let pills = '';
        if (cats.length > 1) {
          pills = '<button type="button" data-cat="all" class="is-active">All</button>' +
            cats.map(c => `<button type="button" data-cat="${c}">${c}</button>`).join('');
        }
        html = html.replace('<!--__BLOG_PILLS__-->', pills).replace('<!--__BLOG_CARDS__-->', cards);
        return serveHTML(new Response(html, { status: 200, headers: { 'content-type': 'text/html;charset=UTF-8' } }), pathname, request);
      }

      const am = pathname.match(/^\/insights\/([a-z0-9-]+)\/?$/);
      if (am) {
        const slug = am[1];
        const post = allPosts.find(p => p.slug === slug);
        if (post) {
          if (String(post.publishDate) > today) {
            const nf = await env.ASSETS.fetch(new URL('/404.html', url).toString());
            const body = nf.ok ? await nf.text() : '<!doctype html><meta name="robots" content="noindex"><title>Not found</title>';
            return new Response(body, { status: 404, headers: { 'content-type': 'text/html;charset=UTF-8', 'x-robots-tag': 'noindex' } });
          }
          const a = await env.ASSETS.fetch(new URL('/insights/' + slug + '/index.html', url).toString());
          if (a.ok) return serveHTML(a, pathname, request);
        }
      }
      // /insights/insights.css, /insights/posts.json, unknown slugs: fall through to normal asset handling.
    }

    // ── Neighbourhood community pages ─────────────────────────────────────
    const COMMUNITIES = {
      '/orlando-homes-for-sale/bay-hill/': {
        id: 3003026,
        label: 'Bay Hill',
        city: 'Orlando',
        zip: '32819',
        priceRange: '$1.2M-$4M',
        image: '/images/nbhd-bay-hill.webp',
        title: 'Bay Hill Homes for Sale | Orlando FL 32819 | Sean & Barb',
        description: 'Bay Hill luxury homes for sale in Orlando FL 32819 - Arnold Palmer\'s guard-gated enclave on the Butler Chain of Lakes. Browse active listings with Sean & Barb, Premier Sotheby\'s International Realty.',
      },
      '/orlando-homes-for-sale/cypress-point/': {
        id: 3002959,
        label: 'Cypress Point',
        city: 'Orlando',
        zip: '32836',
        priceRange: '$900K-$2.5M',
        image: '/images/nbhd-cypress-point.webp',
        title: 'Cypress Point Homes for Sale | Orlando FL 32836 | Sean & Barb',
        description: 'Cypress Point luxury homes for sale in Orlando FL 32836 - guard-gated community in the Dr. Phillips corridor near Restaurant Row and Big Sand Lake. Browse active listings with Sean & Barb.',
      },
      '/orlando-homes-for-sale/emerson-pointe/': {
        id: 3002960,
        label: 'Emerson Pointe',
        city: 'Orlando',
        zip: '32819',
        priceRange: '$1.5M-$4M',
        image: '/images/nbhd-emerson-pointe.webp',
        title: 'Emerson Pointe Homes for Sale | Orlando FL 32819 | Sean & Barb',
        description: 'Emerson Pointe lakefront homes for sale in Orlando FL 32819 - exclusive guard-gated enclave on Lake Tibet in Bay Hill. Browse active listings with Sean & Barb, Premier Sotheby\'s International Realty.',
      },
      '/orlando-homes-for-sale/estates-at-phillips-landing/': {
        id: 3002962,
        label: 'Estates at Phillips Landing',
        city: 'Orlando',
        zip: '32836',
        priceRange: '$1M-$3.5M',
        image: '/images/nbhd-phillips-landing.webp',
        title: 'Estates at Phillips Landing Homes for Sale | Orlando FL 32836 | Sean & Barb',
        description: 'Estates at Phillips Landing luxury homes for sale in Orlando FL 32836 - premier guard-gated community in Dr. Phillips with lakefront lots and A-rated schools. Browse active listings with Sean & Barb.',
      },
      '/orlando-homes-for-sale/vizcaya/': {
        id: 3002989,
        label: 'Vizcaya',
        city: 'Orlando',
        zip: '32836',
        priceRange: '$900K-$2.5M',
        image: '/images/nbhd-vizcaya.webp',
        title: 'Vizcaya Homes for Sale | Orlando FL 32836 | Sean & Barb',
        description: 'Vizcaya luxury homes for sale in Orlando FL 32836 - Mediterranean-inspired guard-gated community on Big Sand Lake in Dr. Phillips. Browse active listings with Sean & Barb, Premier Sotheby\'s.',
      },
      '/orlando-homes-for-sale/turtle-creek/': {
        id: 3003020,
        label: 'Turtle Creek',
        city: 'Orlando',
        zip: '32836',
        priceRange: '$800K-$2M',
        image: '/images/nbhd-turtle-creek.webp',
        title: 'Turtle Creek Homes for Sale | Orlando FL 32836 | Sean & Barb',
        description: 'Turtle Creek luxury homes for sale in Orlando FL 32836 - guard-gated community on Little Fish Lake in the Dr. Phillips corridor. Browse active listings with Sean & Barb, Premier Sotheby\'s.',
      },
      '/orlando-homes-for-sale/reserve-at-cypress-point/': {
        id: 3003023,
        label: 'Reserve at Cypress Point',
        city: 'Orlando',
        zip: '32836',
        priceRange: '$900K-$2.5M',
        image: '/images/nbhd-reserve-cypress-point.webp',
        title: 'Reserve at Cypress Point Homes for Sale | Orlando FL 32836 | Sean & Barb',
        description: 'Reserve at Cypress Point luxury homes for sale in Orlando FL 32836 - intimate guard-gated enclave in Dr. Phillips near Restaurant Row and top-rated schools. Browse active listings with Sean & Barb.',
      },
      '/orlando-homes-for-sale/royal-cypress-preserve/': {
        id: 3003025,
        label: 'Royal Cypress Preserve',
        city: 'Orlando',
        zip: '32836',
        priceRange: '$700K-$1.8M',
        image: '/images/nbhd-royal-cypress-preserve.webp',
        title: 'Royal Cypress Preserve Homes for Sale | Orlando FL 32836 | Sean & Barb',
        description: 'Royal Cypress Preserve luxury homes for sale in Orlando FL 32836 - Toll Brothers guard-gated community in Dr. Phillips with resort amenities and A-rated schools. Browse active listings with Sean & Barb.',
      },
      '/orlando-homes-for-sale/lake-nona-estates/': {
        id: 3003029,
        label: 'Lake Nona Estates',
        city: 'Orlando',
        zip: '32827',
        priceRange: '$2M-$15M+',
        image: '/images/nbhd-lake-nona-gcc.webp',
        title: 'Lake Nona Estates Homes for Sale | Orlando FL 32827 | Sean & Barb',
        description: 'Lake Nona Estates luxury homes for sale in Orlando FL 32827 - ultra-exclusive guard-gated golf community with custom estates from $2M. Adjacent to Medical City and UCF Health. Browse listings with Sean & Barb.',
      },
      '/winter-garden-homes-for-sale/canopy-oaks/': {
        id: 3009250,
        label: 'Canopy Oaks',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$550K-$1.1M',
        image: '/images/nbhd-wg-canopy-oaks.webp',
        title: 'Canopy Oaks Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Canopy Oaks gated community homes for sale in Winter Garden FL 34787 - boutique enclave of 98 single-family homes near Fowler Groves. Browse listings with Sean & Barb, Premier Sotheby\'s International Realty.',
      },
      '/winter-garden-homes-for-sale/bronsons-landing/': {
        id: 3009251,
        label: "Bronson's Landing",
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$900K-$3M',
        image: '/images/nbhd-wg-bronsons-landing.webp',
        title: "Bronson's Landing Homes for Sale | Winter Garden FL 34787 | Sean & Barb",
        description: "Bronson's Landing gated lakefront community homes for sale in Winter Garden FL 34787 - exclusive estates on Lake Apopka with private docks. Browse listings with Sean & Barb.",
      },
      '/winter-garden-homes-for-sale/hickory-hammock/': {
        id: 3009252,
        label: 'Hickory Hammock at Johns Lake',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$500K-$1.4M',
        image: '/images/nbhd-wg-hickory-hammock.webp',
        title: 'Hickory Hammock Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Hickory Hammock at Johns Lake homes for sale in Winter Garden FL 34787 - 800+ home master-planned community with resort amenities. Browse listings with Sean & Barb.',
      },
      '/winter-garden-homes-for-sale/lakeshore-preserve/': {
        id: 3009253,
        label: 'Lakeshore Preserve',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$800K-$2.2M',
        image: '/images/nbhd-wg-lakeshore-preserve.webp',
        title: 'Lakeshore Preserve Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Lakeshore Preserve by Toll Brothers homes for sale in Winter Garden FL 34787 - luxury community on Lake Hancock with resort pool and fitness center. Browse listings with Sean & Barb.',
      },
      '/winter-garden-homes-for-sale/waterleigh/': {
        id: 3009254,
        label: 'Waterleigh',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$400K-$950K',
        image: '/images/nbhd-wg-waterleigh.webp',
        title: 'Waterleigh Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Waterleigh homes for sale in Winter Garden FL 34787 - master-planned community spanning 1,400+ acres across multiple lakes with two clubhouses. Browse listings with Sean & Barb.',
      },
      '/winter-garden-homes-for-sale/stoneybrook-west/': {
        id: 3009255,
        label: 'Stoneybrook West',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$450K-$1.2M',
        image: '/images/nbhd-wg-stoneybrook-west.webp',
        title: 'Stoneybrook West Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Stoneybrook West guard-gated golf community homes for sale in Winter Garden FL 34787 - 1,400 homes on Johns Lake with 18-hole course. Browse listings with Sean & Barb.',
      },
      '/winter-garden-homes-for-sale/hamlin-reserve/': {
        id: 3009256,
        label: 'Hamlin Reserve',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$600K-$1.3M',
        image: '/images/nbhd-wg-hamlin-reserve.webp',
        title: 'Hamlin Reserve Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Hamlin Reserve gated community homes for sale in Horizon West, Winter Garden FL 34787 - walking distance to Hamlin town center and Lake Hancock. Browse listings with Sean & Barb.',
      },
      '/winter-garden-homes-for-sale/watermark/': {
        id: 3009257,
        label: 'Watermark',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$550K-$1.1M',
        image: '/images/nbhd-wg-watermark.webp',
        title: 'Watermark Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Watermark gated community homes for sale in Horizon West, Winter Garden FL 34787 - Meritage Homes community with resort amenities. Browse listings with Sean & Barb.',
      },
      '/winter-garden-homes-for-sale/deer-island/': {
        id: 3009258,
        label: 'Deer Island',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$500K-$1.5M',
        image: '/images/city-winter-garden.webp',
        title: 'Deer Island Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Deer Island guard-gated community homes for sale on Lake Apopka, Winter Garden FL 34787 - private island enclave with golf course and club amenities. Browse listings with Sean & Barb.',
      },
      '/winter-garden-homes-for-sale/stanton-estates/': {
        id: 3009259,
        label: 'Stanton Estates',
        city: 'Winter Garden',
        zip: '34787',
        priceRange: '$700K-$2M',
        image: '/images/city-winter-garden.webp',
        title: 'Stanton Estates Homes for Sale | Winter Garden FL 34787 | Sean & Barb',
        description: 'Stanton Estates gated luxury community homes for sale in Winter Garden FL 34787 - boutique enclave with custom estate homes and top-rated schools nearby. Browse listings with Sean & Barb.',
      },
    };

    const community = COMMUNITIES[pathname];
    if (community) {
      const assetUrl = new URL(request.url);
      assetUrl.pathname = '/listing-report/';
      assetUrl.search = '';
      const assetResponse = await env.ASSETS.fetch(new Request(assetUrl.toString(), request));
      let html = await assetResponse.text();

      const canonicalUrl = `https://www.seanandbarb.com${pathname}`;
      const ogImage = `https://www.seanandbarb.com${community.image}`;

      const nbhdScript = `<script>window.__nbhd={id:${community.id},label:${JSON.stringify(community.label)},city:${JSON.stringify(community.city)},zip:${JSON.stringify(community.zip)},priceRange:${JSON.stringify(community.priceRange)}};</script>`;

      // NOTE: the template minifies attributes in arbitrary order and self-closes
      // (e.g. <link href="..." rel="canonical"/>), so these matchers are
      // attribute-order-agnostic. The previous fixed-order regexes silently failed,
      // which left every community page canonicalised to /listing-report/.
      const h1 = `${community.label} Homes for Sale`;
      html = html
        .replace(/<title>[^<]*<\/title>/i, `<title>${community.title}</title>`)
        .replace(/<meta\b[^>]*\bname="description"[^>]*>/i, `<meta name="description" content="${community.description}"/>`)
        .replace(/<link\b[^>]*\brel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonicalUrl}"/>`)
        .replace(/<meta\b[^>]*\bproperty="og:title"[^>]*>/i, `<meta property="og:title" content="${community.title}"/>`)
        .replace(/<meta\b[^>]*\bproperty="og:description"[^>]*>/i, `<meta property="og:description" content="${community.description}"/>`)
        .replace(/<meta\b[^>]*\bproperty="og:url"[^>]*>/i, `<meta property="og:url" content="${canonicalUrl}"/>`)
        .replace(/<meta\b[^>]*\bproperty="og:image"[^>]*>/i, `<meta property="og:image" content="${ogImage}"/>`)
        .replace(/<meta\b[^>]*\bname="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${community.title}"/>`)
        .replace(/<meta\b[^>]*\bname="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${community.description}"/>`)
        .replace(/<meta\b[^>]*\bname="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${ogImage}"/>`)
        .replace(/(<h1\b[^>]*\bid="lr-h1"[^>]*>)[^<]*(<\/h1>)/i, `$1${h1}$2`)
        .replace('</head>', `${nbhdScript}</head>`)
        .replace('<head>', sbIsLikelyBot(request) ? '<head>' : ('<head>' + GA4_TAG));

      return new Response(applyHeader(applyFooter(html), pathname), {
        status: 200,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
          'cache-control': 'public, max-age=0, must-revalidate',
        },
      });
    }


    // ── Listing detail pages: /orlando-homes-for-sale/listing/{MLS}/ ──────
    // Pattern: /{city-slug}/listing/{mlsNumber}/
    // Worker fetches /listing/?id={mlsNumber}_32 from assets (iHF needs ?id=)
    // then injects history.replaceState so browser shows the clean URL.
    const listingMatch = pathname.match(/^\/([a-z-]+homes-for-sale)\/listing\/([A-Za-z0-9]+)\/$/);
    if (listingMatch) {
      const citySlug  = listingMatch[1]; // e.g. "orlando-homes-for-sale"
      const mlsNumber = listingMatch[2]; // e.g. "O6404038"
      const fullId    = `${mlsNumber}_32`; // iHF internal ID format

      const assetUrl = new URL(request.url);
      assetUrl.pathname = '/listing/';
      assetUrl.search   = `?id=${fullId}`;
      const assetResponse = await env.ASSETS.fetch(new Request(assetUrl.toString(), request));
      let html = await assetResponse.text();

      const cleanUrl    = `https://www.seanandbarb.com${pathname}`;
      const cityName    = citySlug.replace(/-homes-for-sale$/, '').replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase()); // e.g. "Orlando"

      const title       = `MLS# ${mlsNumber} | ${cityName} Home for Sale | Sean & Barb`;
      const description = `View listing MLS# ${mlsNumber} - ${cityName}, FL. Photos, price, beds, baths, and commute times. Listed by Sean & Barb, Premier Sotheby's International Realty.`;

      // Inject history.replaceState BEFORE kestrel loads so iHF still reads
      // the original ?id= from the asset fetch, but browser shows clean URL.
      // We also need window.location.search to return the ?id= so iHF works -
      // replaceState only changes the display URL, not window.location during
      // the current page parse, so iHF reads ?id= correctly then the URL cleans up.
      const cleanUrlScript = `<script>history.replaceState(null,'','${pathname}');</script>`;

      // Order-agnostic matchers (defensive): the /listing/ template currently
      // uses standard attribute order so these worked, but harden against a future
      // re-minify into reversed order (which is what broke the community handler).
      html = html
        .replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`)
        .replace(/<meta\b[^>]*\bname="description"[^>]*>/i, `<meta name="description" content="${description}"/>`)
        .replace(/<link\b[^>]*\brel="canonical"[^>]*>/i, `<link rel="canonical" href="${cleanUrl}"/>`)
        .replace(/<meta\b[^>]*\bproperty="og:title"[^>]*>/i, `<meta property="og:title" content="${title}"/>`)
        .replace(/<meta\b[^>]*\bproperty="og:description"[^>]*>/i, `<meta property="og:description" content="${description}"/>`)
        .replace(/<meta\b[^>]*\bproperty="og:url"[^>]*>/i, `<meta property="og:url" content="${cleanUrl}"/>`)
        .replace(/<meta\b[^>]*\bname="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${title}"/>`)
        .replace(/<meta\b[^>]*\bname="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${description}"/>`)
        .replace('</head>', `${cleanUrlScript}</head>`)
        .replace('<head>', sbIsLikelyBot(request) ? '<head>' : ('<head>' + GA4_TAG));

      return new Response(applyHeader(applyFooter(html), pathname), {
        status: 200,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
          'cache-control': 'public, max-age=0, must-revalidate',
        },
      });
    }

    // ── Standard path rewrites ─────────────────────────────────────────────
    if (pathname.startsWith('/idx/') && pathname !== '/idx/') {
      const rewriteUrl = new URL(request.url);
      rewriteUrl.pathname = '/idx/';
      const response = await env.ASSETS.fetch(new Request(rewriteUrl.toString(), request));
      return serveHTML(response, pathname, request);
    }
    if (pathname.startsWith('/markets/') && pathname !== '/markets/') {
      const rewriteUrl = new URL(request.url);
      rewriteUrl.pathname = '/markets/';
      const response = await env.ASSETS.fetch(new Request(rewriteUrl.toString(), request));
      return serveHTML(response, pathname, request);
    }
    // ── ADDITIVE (IDX indexing): direct /listing/?id=X URLs previously served the
    // template's bare canonical (href="/listing/"), collapsing every listing into
    // one URL for Google. Give each a self-canonical and unique meta so Kestrel
    // detail pages are individually indexable.
    if (pathname === '/listing/' && url.searchParams.get('id')) {
      const lid = url.searchParams.get('id');
      const mls = (lid.split(':').pop() || lid).replace(/[^A-Za-z0-9-]/g, '');
      const resp = await env.ASSETS.fetch(request);
      let html = await resp.text();
      const selfUrl = 'https://www.seanandbarb.com/listing/?id=' + encodeURIComponent(lid);
      const t = 'MLS# ' + mls + ' | Central Florida Home for Sale | Sean & Barb';
      const d = 'View listing MLS# ' + mls + ': photos, price, beds, baths, zoned schools, and hospital drive times. Sean & Barb, Premier Sotheby\'s International Realty.';
      html = html
        .replace(/<title>[^<]*<\/title>/i, function(){ return '<title>' + t + '</title>'; })
        .replace(/<meta\b[^>]*\bname="description"[^>]*>/i, function(){ return '<meta name="description" content="' + d + '"/>'; })
        .replace(/<link\b[^>]*\brel="canonical"[^>]*>/i, function(){ return '<link rel="canonical" href="' + selfUrl + '"/>'; });
      return serveHTML(new Response(html, resp), pathname, request);
    }
    if (pathname.startsWith('/listing/') && pathname !== '/listing/') {
      const rewriteUrl = new URL(request.url);
      rewriteUrl.pathname = '/listing/';
      const response = await env.ASSETS.fetch(new Request(rewriteUrl.toString(), request));
      return serveHTML(response, pathname, request);
    }
    // ── ADDITIVE (IDX indexing): /listing-report/?id=N market-report pages ship with
    // no canonical or robots meta; give each a self-canonical, unique title, and
    // explicit index,follow so the 20 lifestyle report pages linked from city hubs
    // are individually indexable.
    if (pathname === '/listing-report/' && url.searchParams.get('id')) {
      const rid = url.searchParams.get('id').replace(/[^A-Za-z0-9-]/g, '');
      const resp = await env.ASSETS.fetch(request);
      let html = await resp.text();
      const selfUrl = 'https://www.seanandbarb.com/listing-report/?id=' + rid;
      const t = 'Live Central Florida Listing Report | Sean & Barb Premier Sotheby\'s';
      const extra = '<link rel="canonical" href="' + selfUrl + '"/><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large"/>';
      html = html
        .replace(/<title>[^<]*<\/title>/i, function(){ return '<title>' + t + ' #' + rid + '</title>' + extra; });
      return serveHTML(new Response(html, resp), pathname, request);
    }
    if (pathname.startsWith('/listing-report/') && pathname !== '/listing-report/') {
      const rewriteUrl = new URL(request.url);
      rewriteUrl.pathname = '/listing-report/';
      const response = await env.ASSETS.fetch(new Request(rewriteUrl.toString(), request));
      return serveHTML(response, pathname, request);
    }
    if (pathname.startsWith('/listings/') && pathname !== '/listings/') {
      const rewriteUrl = new URL(request.url);
      rewriteUrl.pathname = '/listings/';
      const response = await env.ASSETS.fetch(new Request(rewriteUrl.toString(), request));
      return serveHTML(response, pathname, request);
    }

    // ── Final fallback ────────────────────────────────────────────────────
    // Serve the requested asset. If it genuinely doesn't exist, return a real
    // 404 with the branded page (no-op for any existing page, which returns 200).
    const assetResp = await env.ASSETS.fetch(request);
    if (assetResp.status === 404) {
      const nf = await env.ASSETS.fetch(new URL('/404.html', url).toString());
      const body = nf.ok ? await nf.text()
        : '<!doctype html><meta name="robots" content="noindex"><title>Page not found</title><p>Page not found.</p>';
      return new Response(body, {
        status: 404,
        headers: { 'content-type': 'text/html;charset=UTF-8', 'x-robots-tag': 'noindex' },
      });
    }
    return serveHTML(assetResp, pathname, request);
  }
};

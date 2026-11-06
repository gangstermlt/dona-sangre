const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/importance-DneKf2zf.js","assets/importance-BnNaqHWd.css","assets/blood-C0KwsMu7.js","assets/blood-oypoc1hJ.css","assets/donation-process-CS5UVmxt.js","assets/donation-process-VS20sQZl.css","assets/requirements-CGsMKW0B.js","assets/requirements-DbyDYNQr.css","assets/faq-Bgx1hJHD.js","assets/faq-BjnRSOr5.css","assets/donation-day-CoM8Xk2M.js","assets/donation-day-zIYonHeG.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.querySelector(`#pageLoader`);if(!e||e.dataset.dismissed===`true`)return;e.dataset.dismissed=`true`,e.classList.add(`is-leaving`),e.setAttribute(`aria-hidden`,`true`);let t=()=>e.remove();e.addEventListener(`transitionend`,t,{once:!0}),window.setTimeout(t,900)}function t(){n(),r()}function n(){let e=document.createElement(`div`);e.className=`reading-progress`,e.setAttribute(`aria-hidden`,`true`),document.body.append(e);let t=!1,n=()=>{let n=document.documentElement.scrollHeight-window.innerHeight,r=n>0?Math.min(1,Math.max(0,window.scrollY/n)):0;e.style.transform=`scaleX(${r})`,t=!1},r=()=>{t||(t=!0,window.requestAnimationFrame(n))};window.addEventListener(`scroll`,r,{passive:!0}),window.addEventListener(`resize`,r,{passive:!0}),n()}function r(){let e=window.matchMedia?.(`(hover: hover) and (pointer: fine)`).matches,t=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;e&&!t&&document.addEventListener(`pointermove`,e=>{let t=e.target.closest(`.feature-card, .blood-component, .requirement-card`);if(!t)return;let n=t.getBoundingClientRect(),r=(e.clientX-n.left)/n.width,i=(e.clientY-n.top)/n.height;t.style.setProperty(`--pointer-x`,`${Math.round(r*100)}%`),t.style.setProperty(`--pointer-y`,`${Math.round(i*100)}%`)},{passive:!0})}function i(){return`
    <header class="site-header">
      <div class="container navbar">
        <a class="brand" href="#inicio" aria-label="Donar sangre salva vidas, inicio">
          <span class="brand-mark" aria-hidden="true">✚</span>
          <span>DONAR<span class="brand-light">SANGRE</span></span>
        </a>
        <button class="menu-toggle" id="menuToggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mainNavigation">
          <span></span><span></span><span></span>
        </button>
        <nav class="navigation" id="mainNavigation" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#importancia">¿Por qué donar?</a>
          <a href="#sangre">Conoce tu sangre</a>
          <a href="#proceso">El proceso</a>
          <a href="#requisitos">Requisitos</a>
          <a href="#preguntas">Dudas frecuentes</a>
          <a class="nav-cta" href="#jornada">Jornada · 17 nov.</a>
        </nav>
      </div>
    </header>
  `}function a(){let e=document.querySelector(`#menuToggle`),t=document.querySelector(`#mainNavigation`);e&&t&&(e.addEventListener(`click`,()=>{let n=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!n)),t.classList.toggle(`is-open`,!n),document.body.classList.toggle(`menu-open`,!n)}),t.addEventListener(`click`,n=>{n.target.closest(`a`)&&(e.setAttribute(`aria-expanded`,`false`),t.classList.remove(`is-open`),document.body.classList.remove(`menu-open`))}))}function o(){return`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-brand">
            <a class="brand brand-footer" href="#inicio"><span class="brand-mark">✚</span><span>DONAR<span class="brand-light">SANGRE</span></span></a>
            <p>Un gesto solidario puede ayudar a quienes más lo necesitan.</p>
          </div>
          <div class="footer-links">
            <a href="#importancia">Por qué donar</a>
            <a href="#requisitos">Requisitos</a>
            <a href="#preguntas">Preguntas frecuentes</a>
            <a href="#jornada">Jornada de donación</a>
          </div>
        </div>

        <section class="footer-social" aria-labelledby="footer-social-title">
          <div class="footer-social-copy">
            <h2 id="footer-social-title">Sigue a Cruz Roja</h2>
            <p>Consulta sus canales oficiales y encuentra más información sobre su labor.</p>
          </div>
          <div class="social-links">
            <a class="social-link" href="https://www.instagram.com/cruzrojaesp" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Cruz Roja Española">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="social-icon-fill" cx="17.5" cy="6.7" r="1.1"/></svg>
              <span>Instagram</span>
            </a>
            <a class="social-link" href="https://www.facebook.com/CruzRoja.es/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Cruz Roja Española">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H8v3.1h2.8v8z"/></svg>
              <span>Facebook</span>
            </a>
            <a class="social-link" href="https://x.com/cruzrojaesp" target="_blank" rel="noopener noreferrer" aria-label="X de Cruz Roja Española">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 3H21l-6.8 7.8L22.2 21h-6.3l-5-6.5L5.2 21H3.1l7.3-8.4L2.6 3h6.4l4.5 6zm-1.1 16.2H19L7.1 4.7H5.8z"/></svg>
              <span>X</span>
            </a>
            <a class="social-link" href="https://youtube.com/@cruzrojaesp?si=qIqElvacdt8GDTKj" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Cruz Roja Española">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9A3 3 0 0 0 3.1 19c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.6 15.5v-7l6 3.5z"/></svg>
              <span>YouTube</span>
            </a>
            <a class="social-link" href="https://www2.cruzroja.es/" target="_blank" rel="noopener noreferrer" aria-label="Página web oficial de Cruz Roja Española">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17M12 3c2.3 2.5 3.4 5.5 3.4 9s-1.1 6.5-3.4 9c-2.3-2.5-3.4-5.5-3.4-9S9.7 5.5 12 3Z"/></svg>
              <span>Web oficial</span>
            </a>
          </div>
        </section>

        <div class="footer-credit">
          <p>Esta web ha sido diseñada principalmente para la <strong>Campaña de Donación de Sangre de la Escuela Profesional Javeriana</strong>, utilizando herramientas de programación asistidas por inteligencia artificial y con supervisión humana.</p>
          <p class="footer-author">Autor de la web: <strong>Héctor Jesús Torres Rodríguez</strong></p>
        </div>

        <div class="footer-bottom">
          <span>Campaña informativa · Escuela Profesional Javeriana</span>
          <span>La aptitud para donar la determina el personal sanitario.</span>
        </div>
      </div>
    </footer>
  `}function s(){return`
    <section class="hero-section" id="inicio">
      <div class="hero-glow hero-glow-one" aria-hidden="true"></div>
      <div class="hero-glow hero-glow-two" aria-hidden="true"></div>
      <div class="container hero-layout">
        <div class="hero-copy">
          <span class="eyebrow"><span class="eyebrow-pulse"></span> CAMPAÑA DE DONACIÓN DE SANGRE</span>
          <h1>Un pequeño gesto.<br><span>Una gran vida.</span></h1>
          <p class="hero-lead">Donar sangre es compartir esperanza. Infórmate, resuelve tus dudas y participa en nuestra jornada solidaria.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#jornada">Quiero participar <span aria-hidden="true">↗</span></a>
            <a class="button button-quiet" href="#importancia">Descubrir por qué donar</a>
          </div>
          <div class="hero-event-note">
            <span class="calendar-icon" aria-hidden="true">17</span>
            <span><strong>17 de noviembre</strong><small>Escuela Profesional Javeriana</small></span>
          </div>
        </div>
        <div class="hero-visual" aria-label="Ilustración de una gota roja de sangre">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <span class="hero-cell hero-cell-one" aria-hidden="true"></span>
          <span class="hero-cell hero-cell-two" aria-hidden="true"></span>
          <span class="hero-cell hero-cell-three" aria-hidden="true"></span>
          <div class="drop-shadow"></div>
          <div class="hero-drop"><span>DONAR<br>ES VIDA</span></div>
          <div class="floating-note note-top"><span>♥</span> Un gesto voluntario</div>
          <div class="floating-note note-bottom"><span>✚</span> Ayuda a quien lo necesita</div>
        </div>
      </div>
      <div class="hero-bottom-line"><span></span><small>INFORMACIÓN · PREVENCIÓN · SOLIDARIDAD</small><span></span></div>
    </section>
  `}var c=`modulepreload`,l=function(e){return`/`+e},u={},d=function(e){return e.pathname.endsWith(`.css`)},f=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},p=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=l(t,n);let r=s(t),i=d(r);return f(u,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:c,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},m=[{id:`importancia`,label:`La importancia de donar`,load:()=>p(()=>import(`./importance-DneKf2zf.js`),__vite__mapDeps([0,1]))},{id:`sangre`,label:`Conoce tu sangre`,load:()=>p(()=>import(`./blood-C0KwsMu7.js`),__vite__mapDeps([2,3]))},{id:`proceso`,label:`El proceso de donación`,load:()=>p(()=>import(`./donation-process-CS5UVmxt.js`),__vite__mapDeps([4,5]))},{id:`requisitos`,label:`Requisitos para donar`,load:()=>p(()=>import(`./requirements-CGsMKW0B.js`),__vite__mapDeps([6,7]))},{id:`preguntas`,label:`Preguntas frecuentes`,load:()=>p(()=>import(`./faq-Bgx1hJHD.js`),__vite__mapDeps([8,9]))},{id:`jornada`,label:`Jornada de donación`,load:()=>p(()=>import(`./donation-day-CoM8Xk2M.js`),__vite__mapDeps([10,11]))}],h=document.querySelector(`#app`),g=new Map(m.map(e=>[e.id,e])),_=new Map;function v({id:e,label:t}){return`
    <section class="section-slot" id="${e}" data-section-slot="${e}" aria-label="${t}" aria-busy="true">
      <div class="container slot-inner">
        <span class="slot-dot" aria-hidden="true"></span>
        <p>Preparando ${t.toLowerCase()}…</p>
      </div>
    </section>
  `}async function y(e){let t=document.querySelector(`[data-section-slot="${e}"]`);if(!t||t.dataset.loaded===`true`)return;if(_.has(e))return _.get(e);let n=g.get(e);if(!n)return;let r=(async()=>{try{let r=await n.load(),i=document.createElement(`template`);i.innerHTML=r.render().trim();let a=i.content.firstElementChild;if(!a)throw Error(`La sección ${e} no generó contenido.`);t.replaceWith(a),r.init?.(a),a.dataset.loaded=`true`}catch(n){console.error(`No se pudo cargar la sección ${e}:`,n),t.innerHTML=`<div class="container slot-error"><p>No se ha podido cargar este apartado.</p><button class="text-button" type="button" data-retry="${e}">Volver a intentarlo</button></div>`,t.setAttribute(`aria-busy`,`false`)}finally{_.delete(e)}})();return _.set(e,r),r}function b(){let e=document.querySelectorAll(`[data-section-slot]`);if(!(`IntersectionObserver`in window)){e.forEach(e=>y(e.dataset.sectionSlot));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;let n=e.target.dataset.sectionSlot;t.unobserve(e.target),y(n)})},{rootMargin:`650px 0px`});e.forEach(e=>t.observe(e))}h.innerHTML=`
  ${i()}
  <main id="contenido">
    ${s()}
    ${m.map(v).join(``)}
  </main>
  ${o()}
`,a(),b(),t(),window.requestAnimationFrame(()=>{window.setTimeout(e,420)}),document.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-retry]`);if(t){let e=t.dataset.retry,n=t.closest(`[data-section-slot]`);n&&(n.innerHTML=`<div class="container slot-inner"><span class="slot-dot"></span><p>Volviendo a cargar…</p></div>`,y(e));return}let n=e.target.closest(`a[href^="#"]`);if(!n)return;let r=n.getAttribute(`href`).slice(1);g.has(r)&&document.querySelector(`[data-section-slot="${r}"]`)&&(e.preventDefault(),await y(r),document.getElementById(r)?.scrollIntoView({behavior:`smooth`,block:`start`}),history.replaceState(null,``,`#${r}`))});
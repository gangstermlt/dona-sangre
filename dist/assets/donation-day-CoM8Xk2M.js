function e(){return`
    <section class="donation-day-section" id="jornada">
      <div class="container">
        <div class="section-heading donation-heading reveal-on-view">
          <span class="section-kicker">RESERVA LA FECHA</span>
          <h2>La próxima donación<br><span>empieza contigo.</span></h2>
          <p>Te esperamos en la jornada de donación de sangre de la Escuela Profesional Javeriana.</p>
        </div>

        <div class="donation-day-card reveal-on-view">
          <div class="donation-day-copy">
            <span class="day-eyebrow">TU GOTA CUENTA</span>
            <h3>Un gesto pequeño.<br>Una ayuda enorme.</h3>
            <p>Ven a donar y ayuda a mantener las reservas de sangre disponibles para quienes las necesitan.</p>
            <div class="day-times">
              <span>☀ 10:00–14:00 h</span>
              <span>◐ 15:00–20:00 h</span>
            </div>
          </div>

          <div class="date-block">
            <span class="date-weekday">MARTES</span>
            <span class="date-day">17</span>
            <span class="date-month">NOVIEMBRE</span>
            <span class="date-place">Salón de actos<br>Escuela Profesional Javeriana</span>
            <div class="event-countdown" id="eventCountdown" aria-live="polite">Preparando cuenta atrás…</div>
            <a class="map-button" href="https://maps.app.goo.gl/r7RwvPSkBvAaGRRs7" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">⌖</span> Cómo llegar
            </a>
          </div>
        </div>

        <div class="day-note">
          <span aria-hidden="true">♥</span>
          <p>Acude después de haber comido algo, bien hidratado y con tu documento de identidad. El personal sanitario resolverá tus dudas antes de la donación.</p>
        </div>

        <div class="campaign-partners reveal-on-view" aria-label="Entidades colaboradoras">
          <div class="partner-logo partner-cruz">
            <img src="/logos/cruz-roja.webp" alt="Cruz Roja" loading="lazy" decoding="async">
          </div>
          <div class="partner-logo partner-school">
            <img src="/logos/javeriana.webp" alt="Escuela Profesional Javeriana" loading="lazy" decoding="async">
          </div>
          <div class="partner-logo partner-centre">
            <img src="/logos/centro-transfusion.webp" alt="Centro de Transfusión de la Comunidad de Madrid" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>
  `}function t(e){let t=e.querySelector(`#eventCountdown`);if(t){let e=new Date(2026,10,17,10,0,0),n=new Date(2026,10,17,20,0,0),r=()=>{let r=new Date,i=e.getTime()-r.getTime();if(i>0){let e=Math.floor(i/864e5),n=Math.floor(i%864e5/36e5),r=Math.floor(i%36e5/6e4);t.textContent=e>0?`Faltan ${e} días, ${n} h y ${r} min`:`Faltan ${n} h y ${r} min`}else r<=n?t.textContent=`¡Hoy es la jornada! Te esperamos`:t.textContent=`Gracias por apoyar la donación de sangre`};r(),window.setInterval(r,6e4)}let n=e.querySelectorAll(`.reveal-on-view`);if(!(`IntersectionObserver`in window)){n.forEach(e=>e.classList.add(`is-visible`));return}let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),r.unobserve(e.target))})},{threshold:.1});n.forEach(e=>r.observe(e))}export{t as init,e as render};
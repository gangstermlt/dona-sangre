function e(){return`
    <section class="content-section process-section" id="proceso">
      <div class="container">
        <div class="section-heading reveal-on-view"><span class="section-kicker">03 · EL PROCESO</span><h2>Donar es más sencillo<br><span>de lo que imaginas.</span></h2><p>El equipo sanitario acompaña al donante durante todo el proceso y comprueba que la donación sea segura.</p></div>
        <div class="process-steps">
          <article class="process-step reveal-on-view"><span class="step-number">01</span><div><h3>Recepción y cuestionario</h3><p>Se comprueba la identidad y se completa un cuestionario confidencial sobre la salud y los hábitos recientes.</p></div></article>
          <article class="process-step reveal-on-view"><span class="step-number">02</span><div><h3>Reconocimiento</h3><p>El personal sanitario valora si es buen momento para donar y realiza las comprobaciones necesarias.</p></div></article>
          <article class="process-step reveal-on-view"><span class="step-number">03</span><div><h3>Extracción</h3><p>Se recoge aproximadamente una unidad de sangre total. La extracción dura unos minutos; la visita completa lleva más tiempo por el registro, la entrevista y el descanso posterior.</p></div></article>
          <article class="process-step reveal-on-view"><span class="step-number">04</span><div><h3>Descanso y refrigerio</h3><p>Después de donar se recomienda descansar, beber y tomar algo antes de continuar con el día.</p></div></article>
        </div>
      </div>
    </section>
  `}function t(e){let t=e.querySelectorAll(`.reveal-on-view`);if(!(`IntersectionObserver`in window))return t.forEach(e=>e.classList.add(`is-visible`));let n=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))}),{threshold:.1});t.forEach(e=>n.observe(e))}export{t as init,e as render};
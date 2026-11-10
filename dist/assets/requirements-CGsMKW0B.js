function e(){return`
    <section class="content-section requirements-section" id="requisitos">
      <div class="container">
        <div class="section-heading reveal-on-view"><span class="section-kicker">04 · ANTES DE DONAR</span><h2>¿Puedo ser donante?</h2><p>Estos son criterios generales para la donación convencional de sangre en España. El equipo sanitario confirma la aptitud en cada visita.</p></div>
        <div class="requirements-grid">
          <article class="requirement-card reveal-on-view"><span>18+</span><h3>Edad</h3><p>Como regla general, entre 18 y 65 años. La continuidad por encima de esa edad requiere valoración.</p></article>
          <article class="requirement-card reveal-on-view"><span>+50 kg</span><h3>Peso</h3><p>Hay que pesar más de 50 kg para una donación convencional de sangre total.</p></article>
          <article class="requirement-card reveal-on-view"><span>Buen estado</span><h3>Salud</h3><p>Hay que encontrarse bien y superar la entrevista y las comprobaciones sanitarias.</p></article>
        </div>
        <div class="requirements-reminder reveal-on-view"><strong>Importante:</strong> no acudas en ayunas. Come algo ligero, hidrátate y explica siempre al personal sanitario si tomas medicamentos, has viajado recientemente o has tenido una infección.</div>
      </div>
    </section>
  `}function t(e){let t=e.querySelectorAll(`.reveal-on-view`);if(!(`IntersectionObserver`in window))return t.forEach(e=>e.classList.add(`is-visible`));let n=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))}),{threshold:.1});t.forEach(e=>n.observe(e))}export{t as init,e as render};
function e(){return`
    <section class="content-section importance-section" id="importancia">
      <div class="container">
        <div class="section-heading reveal-on-view">
          <span class="section-kicker">01 · LA IMPORTANCIA DE DONAR</span>
          <h2>Tu sangre puede ser<br><span>parte de una historia.</span></h2>
          <p>La sangre es imprescindible en la atención sanitaria. No se puede fabricar: las donaciones voluntarias permiten disponer de ella cuando alguien la necesita.</p>
        </div>
        <div class="feature-grid">
          <article class="feature-card reveal-on-view"><span class="feature-icon">✚</span><span class="feature-number">01</span><h3>En emergencias</h3><p>Puede ser necesaria tras accidentes, hemorragias, operaciones y complicaciones del parto.</p></article>
          <article class="feature-card feature-card-highlight reveal-on-view"><span class="feature-icon">♡</span><span class="feature-number">02</span><h3>En tratamientos</h3><p>Ayuda a pacientes que reciben tratamientos para enfermedades como algunos tipos de cáncer o trastornos de la sangre.</p></article>
          <article class="feature-card reveal-on-view"><span class="feature-icon">↗</span><span class="feature-number">03</span><h3>Todos los días</h3><p>Las reservas deben renovarse porque los componentes sanguíneos tienen un tiempo de conservación limitado.</p></article>
        </div>
        <div class="three-lives-note reveal-on-view"><div class="three-lives-symbol">3</div><div><h3>¿Por qué se dice que puedes ayudar a tres personas?</h3><p>Una donación de sangre total puede separarse en hematíes, plaquetas y plasma. Cada componente puede utilizarse para tratar a un paciente distinto, según sus necesidades. Por eso una donación puede beneficiar hasta a tres personas.</p></div></div>
      </div>
    </section>
  `}function t(e){let t=e.querySelectorAll(`.reveal-on-view`);if(!(`IntersectionObserver`in window)){t.forEach(e=>e.classList.add(`is-visible`));return}let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))})},{threshold:.12});t.forEach(e=>n.observe(e))}export{t as init,e as render};
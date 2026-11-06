var e={"O−":{receive:[`O−`],donate:[`O−`,`O+`,`A−`,`A+`,`B−`,`B+`,`AB−`,`AB+`]},"O+":{receive:[`O−`,`O+`],donate:[`O+`,`A+`,`B+`,`AB+`]},"A−":{receive:[`O−`,`A−`],donate:[`A−`,`A+`,`AB−`,`AB+`]},"A+":{receive:[`O−`,`O+`,`A−`,`A+`],donate:[`A+`,`AB+`]},"B−":{receive:[`O−`,`B−`],donate:[`B−`,`B+`,`AB−`,`AB+`]},"B+":{receive:[`O−`,`O+`,`B−`,`B+`],donate:[`B+`,`AB+`]},"AB−":{receive:[`O−`,`A−`,`B−`,`AB−`],donate:[`AB−`,`AB+`]},"AB+":{receive:[`O−`,`O+`,`A−`,`A+`,`B−`,`B+`,`AB−`,`AB+`],donate:[`AB+`]}};function t(){return`
    <section class="content-section blood-section" id="sangre">
      <div class="container">
        <div class="section-heading reveal-on-view"><span class="section-kicker">02 · CONOCE TU SANGRE</span><h2>Cuatro componentes.<br><span>Una función vital.</span></h2><p>La sangre transporta oxígeno y nutrientes, participa en la defensa del organismo y ayuda a detener las hemorragias.</p></div>
        <div class="blood-components">
          <article class="blood-component reveal-on-view"><span class="blood-symbol red-cell" aria-hidden="true">●</span><h3>Glóbulos rojos</h3><p>Transportan oxígeno desde los pulmones hasta los tejidos gracias a la hemoglobina.</p></article>
          <article class="blood-component reveal-on-view"><span class="blood-symbol white-cell" aria-hidden="true">✹</span><h3>Glóbulos blancos</h3><p>Forman parte del sistema inmunitario y ayudan a combatir infecciones.</p></article>
          <article class="blood-component reveal-on-view"><span class="blood-symbol platelet" aria-hidden="true">✦</span><h3>Plaquetas</h3><p>Intervienen en la coagulación y ayudan a detener las hemorragias.</p></article>
          <article class="blood-component reveal-on-view"><span class="blood-symbol plasma" aria-hidden="true">◒</span><h3>Plasma</h3><p>Es la parte líquida que transporta proteínas, nutrientes, hormonas y otras sustancias.</p></article>
        </div>
        <div class="blood-groups-panel reveal-on-view"><div><span class="section-kicker">SISTEMAS ABO Y RH</span><h3>Los ocho grupos sanguíneos principales</h3><p>La compatibilidad de esta tabla se refiere a transfusiones de glóbulos rojos. Antes de una transfusión, el equipo sanitario realiza pruebas específicas.</p></div><div class="group-pills" aria-label="Ocho grupos sanguíneos"><span>O−</span><span>O+</span><span>A−</span><span>A+</span><span>B−</span><span>B+</span><span>AB−</span><span>AB+</span></div></div>
        <div class="compatibility-wrap reveal-on-view">
          <h3>Compatibilidad básica de glóbulos rojos</h3>
          <div class="table-scroll"><table class="compatibility-table"><thead><tr><th>Receptor</th><th>Puede recibir de</th></tr></thead><tbody><tr><td>O−</td><td>O−</td></tr><tr><td>O+</td><td>O−, O+</td></tr><tr><td>A−</td><td>O−, A−</td></tr><tr><td>A+</td><td>O−, O+, A−, A+</td></tr><tr><td>B−</td><td>O−, B−</td></tr><tr><td>B+</td><td>O−, O+, B−, B+</td></tr><tr><td>AB−</td><td>O−, A−, B−, AB−</td></tr><tr><td>AB+</td><td>Todos los grupos ABO/Rh</td></tr></tbody></table></div>
          <p class="table-footnote">O− se considera donante universal de glóbulos rojos y AB+ receptor universal de glóbulos rojos. La compatibilidad del plasma es diferente.</p>
        </div>
        <div class="compatibility-check reveal-on-view">
          <div class="compatibility-check-copy">
            <span class="section-kicker">PRUÉBALO</span>
            <h3>Comprueba la compatibilidad</h3>
            <p>Selecciona un grupo y descubre de quién puede recibir glóbulos rojos y a quién puede donarlos.</p>
          </div>
          <div class="compatibility-interactive">
            <label for="bloodGroupSelect">Mi grupo sanguíneo es</label>
            <select id="bloodGroupSelect" class="blood-group-select">
              ${Object.keys(e).map(e=>`<option value="${e}"${e===`A+`?` selected`:``}>${e}</option>`).join(``)}
            </select>
            <div class="compatibility-results" aria-live="polite" aria-atomic="true">
              <div class="compatibility-result"><span class="result-icon" aria-hidden="true">↓</span><div><small>Puede recibir de</small><strong id="canReceive">O−, O+, A−, A+</strong></div></div>
              <div class="compatibility-result"><span class="result-icon result-icon-donate" aria-hidden="true">↑</span><div><small>Puede donar a</small><strong id="canDonate">A+, AB+</strong></div></div>
            </div>
          </div>
          <p class="compatibility-disclaimer">Información educativa sobre hematíes. Las transfusiones reales requieren pruebas cruzadas y valoración del equipo sanitario.</p>
        </div>
      </div>
    </section>
  `}function n(t){let n=t.querySelectorAll(`.reveal-on-view`);if(!(`IntersectionObserver`in window))n.forEach(e=>e.classList.add(`is-visible`));else{let e=new IntersectionObserver(t=>t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`is-visible`),e.unobserve(t.target))}),{threshold:.08});n.forEach(t=>e.observe(t))}let r=t.querySelector(`#bloodGroupSelect`),i=t.querySelector(`#canReceive`),a=t.querySelector(`#canDonate`);if(r&&i&&a){let t=()=>{let t=e[r.value];i.textContent=t.receive.join(`, `),a.textContent=t.donate.join(`, `)};r.addEventListener(`change`,t),t()}}export{n as init,t as render};
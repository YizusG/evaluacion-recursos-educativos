import { InnerHero, SiteShell } from "../site-shell";

export default function Page() {
  return (
    <SiteShell active="aplicacion">
      <InnerHero
        number="04"
        kicker="Aplicación del modelo rediseñado"
        title="CODA-Contexto en práctica"
        summary="Aplicación del instrumento a los dos recursos educativos digitales seleccionados y análisis de los resultados obtenidos."
      />

      <section className="application-intro">
        <div>
          <span>PROCESO DE APLICACIÓN</span>
          <h2>El mismo instrumento, dos recursos diferentes.</h2>
        </div>
        <p>
          Los dos RED fueron revisados mediante los 16 criterios de CODA-Contexto. Cada criterio recibió
          una valoración de 1 a 5 y una observación breve. La suma final permitió interpretar la pertinencia
          del recurso sin separar el resultado de las condiciones reales de uso.
        </p>
      </section>

      <section className="application-results">
        <article>
          <figure><img src="/images/red-analiza-maestros.webp" alt="Vista del recurso Analiza a los maestros" /></figure>
          <div>
            <small>APLICACIÓN 1 · EDU CATHYSSEN</small>
            <h2>Analiza a los maestros</h2>
            <div className="score-line"><strong>65</strong><span>/80</span></div>
            <b>Pertinencia suficiente</b>
            <h3>Fortalezas</h3>
            <p>Contenido artístico confiable, favorece la observación e interpretación visual y permite adaptación docente.</p>
            <h3>Aspectos por mejorar</h3>
            <p>Poca interactividad, requiere mediación docente y depende de conexión a internet.</p>
          </div>
        </article>

        <article>
          <figure><img src="/images/red-gaia-paisaje-color.jpg" alt="Vista del recurso Gaia, conociendo nuestro mundo" /></figure>
          <div>
            <small>APLICACIÓN 2 · INTEF</small>
            <h2>Gaia, conociendo nuestro mundo</h2>
            <div className="score-line"><strong>71</strong><span>/80</span></div>
            <b>Alta pertinencia</b>
            <h3>Fortalezas</h3>
            <p>Objetivos y actividades bien organizados, participación activa, trabajo cooperativo y buena reutilización.</p>
            <h3>Aspectos por mejorar</h3>
            <p>Secuencia extensa, algunas páginas con demasiado texto y requerimientos de materiales y tecnología.</p>
          </div>
        </article>
      </section>

      <section className="comparison-block">
        <div>
          <span>COMPARACIÓN</span>
          <h2>Dos recursos pertinentes, con necesidades distintas.</h2>
          <p>
            Ambos RED pueden utilizarse en el contexto escolar. Gaia obtiene una valoración global más alta por su organización,
            participación activa y posibilidades de reutilización. Analiza a los maestros conserva un valor pedagógico importante,
            pero requiere mayor mediación del docente y ajustes para fortalecer la interacción.
          </p>
        </div>
        <div className="comparison-scores">
          <article><small>Analiza a los maestros</small><strong>65/80</strong><span>Pertinencia suficiente</span></article>
          <article><small>Gaia</small><strong>71/80</strong><span>Alta pertinencia</span></article>
        </div>
      </section>

      <section className="questions-section">
        <header><span>ANÁLISIS DE IMPLEMENTACIÓN</span><h2>Tres preguntas para valorar el modelo.</h2></header>
        <article>
          <b>01</b>
          <div><h3>¿Cómo permite CODA-Contexto evaluar adecuadamente un RED?</h3><p>Porque integra aprendizaje, funcionamiento, comunicación y condiciones reales del aula. La escala de 1 a 5 orienta la valoración y las observaciones permiten justificar cada decisión.</p></div>
        </article>
        <article>
          <b>02</b>
          <div><h3>¿Qué ventajas presenta frente a otros modelos?</h3><p>Reúne la estructura de CODA, criterios de calidad de LORI y aportes pedagógicos de REEVES en un instrumento más corto, sencillo de aplicar y ajustado al contexto.</p></div>
        </article>
        <article>
          <b>03</b>
          <div><h3>¿Qué elementos pueden mejorarse?</h3><p>Algunos criterios pueden ajustarse según el área, el nivel educativo y el tipo de RED. También conviene seguir aplicándolo con más recursos y contrastar su utilidad con otros docentes.</p></div>
        </article>
      </section>

      <section className="canva-section">
        <div className="canva-copy">
          <span>PRESENTACIÓN FINAL</span>
          <h2>Informe de implementación</h2>
          <p>
            La presentación sintetiza la aplicación de CODA-Contexto, los resultados obtenidos con los dos RED
            y las conclusiones derivadas del proceso.
          </p>
          <a href="https://www.canva.com/design/DAHVmN8OyAg/nyED0JfsW_Af12y1m9thVA/view" target="_blank" rel="noopener noreferrer">
            Ver presentación completa en Canva ↗
          </a>
        </div>
        <div className="canva-frame">
          <iframe
            loading="lazy"
            src="https://www.canva.com/design/DAHVmN8OyAg/nyED0JfsW_Af12y1m9thVA/view?embed"
            allowFullScreen
            title="Presentación de implementación de CODA-Contexto"
          />
        </div>
      </section>

      <section className="application-close">
        <span>CIERRE</span>
        <h2>CODA-Contexto convierte la evaluación en una decisión pedagógica argumentada.</h2>
        <p>
          Su aplicación permite comparar recursos, reconocer fortalezas, identificar limitaciones y decidir qué ajustes
          son necesarios antes de incorporar un RED a la práctica de aula.
        </p>
      </section>
    </SiteShell>
  );
}

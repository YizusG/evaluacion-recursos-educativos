import { InnerHero, SiteShell } from "../site-shell";

const criteria = [
  ["Pedagógica", "Relación con los objetivos de aprendizaje", "Calidad y claridad del contenido", "Participación activa del estudiante", "Interés y motivación", "Posibilidad de adaptación docente"],
  ["Técnica", "Funcionamiento correcto", "Facilidad de uso y navegación", "Acceso desde los dispositivos disponibles", "Lectura y acceso a la información", "Reutilización en otras actividades"],
  ["Comunicación", "Claridad del lenguaje e instrucciones", "Orden de la información", "Calidad de imágenes, audio y video", "Relación entre textos, imágenes y actividades"],
  ["Contexto", "Adecuación al nivel y características de los estudiantes", "Posibilidad real de utilizarlo en clase"],
];

export default function Page() {
  return (
    <SiteShell active="rediseno">
      <InnerHero
        number="03"
        kicker="Propuesta de rediseño"
        title="CODA-Contexto"
        summary="Modelo de evaluación de recursos educativos digitales adaptado a la práctica docente y al contexto real del aula."
      />

      <section className="redesign-lead">
        <div>
          <span>MODELO REDISEÑADO</span>
          <h2>Una evaluación más simple, contextualizada y útil para decidir.</h2>
        </div>
        <div>
          <p>
            CODA-Contexto parte de la estructura de CODA e incorpora aportes de LORI y REEVES.
            El rediseño conserva criterios de calidad pedagógica y técnica, pero añade una lectura
            explícita de la comunicación y de las condiciones reales en las que el recurso será utilizado.
          </p>
          <p>
            La propuesta busca que la evaluación no se limite a comprobar si un RED funciona,
            sino que ayude a establecer si puede emplearse de manera pertinente con estudiantes,
            recursos y condiciones concretas.
          </p>
        </div>
      </section>

      <section className="reference-models">
        <article><small>REFERENTE 01</small><h2>CODA</h2><p>Aporta la estructura general de análisis didáctico y tecnológico.</p></article>
        <article><small>REFERENTE 02</small><h2>LORI</h2><p>Aporta criterios de calidad, usabilidad y presentación del recurso.</p></article>
        <article><small>REFERENTE 03</small><h2>REEVES</h2><p>Aporta la mirada pedagógica sobre el aprendizaje y el papel del estudiante.</p></article>
      </section>

      <section className="redesign-problem">
        <span>PROBLEMÁTICA</span>
        <h2>Evaluar un RED exige mirar más allá de su funcionamiento.</h2>
        <p>
          Los modelos revisados ofrecen criterios valiosos, pero al aplicarlos en la práctica pueden resultar
          extensos o poco ajustados a las condiciones concretas del aula. Por eso CODA-Contexto reúne criterios
          esenciales en un instrumento breve que también considera acceso, dispositivos, nivel de los estudiantes
          y posibilidades reales de uso.
        </p>
      </section>

      <section className="criteria-section">
        <header>
          <span>16 CRITERIOS</span>
          <h2>Cuatro dimensiones de evaluación</h2>
        </header>
        <div className="criteria-grid">
          {criteria.map(([dimension, ...items], i) => (
            <article key={dimension}>
              <b>0{i + 1}</b>
              <h3>{dimension}</h3>
              <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="scale-section">
        <div>
          <span>ESCALA DE VALORACIÓN</span>
          <h2>De 1 a 5</h2>
          <p>Cada criterio se valora con una escala sencilla y se acompaña de una observación breve.</p>
        </div>
        <div className="scale-list">
          {[["1","Muy bajo"],["2","Bajo"],["3","Medio"],["4","Alto"],["5","Muy alto"]].map(x=><div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}
        </div>
      </section>

      <section className="interpretation-section">
        <header><span>INTERPRETACIÓN GLOBAL</span><h2>Resultado máximo: 80 puntos</h2></header>
        <div className="interpretation-grid">
          <article><strong>68–80</strong><span>Alta pertinencia</span></article>
          <article><strong>52–67</strong><span>Pertinencia suficiente</span></article>
          <article><strong>36–51</strong><span>Pertinencia condicionada</span></article>
          <article><strong>16–35</strong><span>Baja pertinencia</span></article>
        </div>
      </section>

      <section className="method-section">
        <div><span>METODOLOGÍA</span><h2>Aplicación paso a paso</h2></div>
        <ol>
          <li><b>01</b><span>Seleccionar el RED y reconocer su propósito.</span></li>
          <li><b>02</b><span>Revisar los 16 criterios del instrumento.</span></li>
          <li><b>03</b><span>Asignar un puntaje de 1 a 5 a cada criterio.</span></li>
          <li><b>04</b><span>Registrar una observación breve que justifique la valoración.</span></li>
          <li><b>05</b><span>Sumar los resultados e interpretar el nivel de pertinencia.</span></li>
        </ol>
      </section>

      <section className="instrument-summary">
        <span>INSTRUMENTO</span>
        <h2>Una tabla breve para valorar y justificar.</h2>
        <p>
          El instrumento utiliza cinco columnas: número, dimensión, aspecto evaluado, puntaje de 1 a 5 y observación.
          El resultado numérico orienta la decisión, pero las observaciones permiten explicar por qué un recurso puede
          utilizarse, ajustarse o descartarse en un contexto determinado.
        </p>
      </section>
    </SiteShell>
  );
}

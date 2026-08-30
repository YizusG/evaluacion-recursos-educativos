import { SiteShell } from "./site-shell";

export default function Home(){return <SiteShell active="inicio">
  <section className="new-hero">
    <div className="hero-photo"><img src="/images/hero-academic-v2.png" alt="Docente analizando recursos educativos digitales"/><span className="photo-wash"/></div>
    <div className="hero-message reveal"><p className="micro">Portafolio académico · UDES · 2026</p><h1>Evaluación de<br/><em>Recursos Educativos</em><br/>Digitales</h1><p className="hero-motto">Evaluar lo digital con criterio humano.</p><p>Una exploración visual y argumentada de los modelos que permiten reconocer, comparar y mejorar la calidad de los recursos educativos digitales.</p><div className="hero-actions"><a className="button button-gold" href="/modelos-red">Comenzar recorrido <span>↗</span></a><a className="text-link" href="#proposito">Conocer el propósito <span>↓</span></a></div></div>
    <div className="hero-signature"><span>Evaluación de</span><strong>Recursos Educativos Digitales</strong></div>
  </section>
  <section className="credentials"><p><small>Autor</small>Jesús Alberto Giraldo Zapata</p><p><small>Profesora</small>Gloria Cecilia Ríos</p><p><small>Universidad</small>Universidad de Santander · UDES</p></section>
  <section className="purpose organic-section" id="proposito"><div className="section-tag">01 · PROPÓSITO</div><div><h2>La calidad no se supone.<br/><em>Se observa, se contrasta y se argumenta.</em></h2><p>Un recurso educativo digital no es valioso solo porque funciona. Debe articular contenido riguroso, intención pedagógica, experiencia accesible y una tecnología que permanezca al servicio del aprendizaje.</p><a className="round-link" href="/modelos-red"><span>Explorar criterios</span><b>→</b></a></div></section>
</SiteShell>}

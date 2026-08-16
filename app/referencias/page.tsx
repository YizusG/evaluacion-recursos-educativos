import {InnerHero,SiteShell} from "../site-shell";

export default function Page(){return <SiteShell active="referencias">
  <InnerHero number="05" kicker="Fuentes y trazabilidad" title="Referencias" summary="Base conceptual para fundamentar el análisis de calidad de los recursos educativos digitales."/>
  <section className="references">
    <p><span>01</span>Adame Rodríguez, S. I. (2015). Instrumento para evaluar recursos educativos digitales, LORI-AD. <i>Revista CERTUS, 12</i>, 56–67.</p>
    <p><span>02</span>Reeves, T. C. (1994). Evaluating what really matters in computer-based education. University of Georgia.</p>
    <p><span>03</span>Ministerio de Educación Nacional. (2012). <i>Recursos educativos digitales abiertos: Colombia.</i> Bogotá: MEN.</p>
    <p><span>04</span>UNESCO. (2019). <i>Recomendación sobre los Recursos Educativos Abiertos (REA).</i> París: UNESCO.</p>
  </section>
  <aside className="reference-note">Las referencias definitivas se revisarán y normalizarán en formato APA 7 cuando se incorpore el corpus completo de la actividad.</aside>
</SiteShell>}

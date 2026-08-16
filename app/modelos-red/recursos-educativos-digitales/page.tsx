import {InnerHero,SiteShell} from "../../site-shell";

const aspectsThyssen=[
  ["01","Nombre del RED","Analiza a los maestros."],
  ["02","Área de conocimiento","Educación Artística; expresión plástica; análisis visual y composición."],
  ["03","Nivel o grado","Educación Secundaria Obligatoria y Bachillerato. El recurso forma parte del programa Vorkurs, dirigido también a Formación Profesional y enseñanzas artísticas profesionales."],
  ["04","Autoría","EducaThyssen, Área de Educación del Museo Nacional Thyssen-Bornemisza. Publicado el 26 de abril de 2020."],
  ["05","Repositorio","Portal educativo EducaThyssen, integrado en el Museo Nacional Thyssen-Bornemisza."],
  ["06","Enlace directo","Acceso público mediante navegador, sin necesidad de registro para consultar el contenido."],
  ["07","Descripción","Propuesta basada en las enseñanzas de Johannes Itten. Orienta la observación de obras de grandes maestros mediante contrastes de claro y oscuro, distribución de pesos, ritmo de líneas, tensiones, direcciones de las miradas y síntesis geométrica de la composición."],
  ["08","Posibilidades educativas","Permite pasar de la contemplación general al análisis intencionado. Favorece la discriminación visual, la identificación de relaciones espaciales, la simplificación de formas complejas y la construcción de composiciones propias a partir de estructuras observadas."],
  ["09","Limitaciones","No incorpora evaluación automática, retroalimentación individual ni una secuencia graduada por niveles. Depende de la mediación docente y del trabajo práctico fuera de la pantalla. No ofrece un paquete editable o descargable del RED."],
  ["10","Verificación de estándares","Se presenta como contenido web adaptable y utiliza navegación, encabezados, texto e imágenes con atribución. No se declara compatibilidad con SCORM, IMS, LOM u otro estándar de empaquetado educativo; tampoco se publican metadatos pedagógicos completos. Su reutilización está condicionada por los términos del museo y los derechos de las obras reproducidas."],
  ["11","Vista del recurso","La imagen oficial identifica visualmente el recurso dentro de EducaThyssen y acompaña su consulta documental."]
];

const aspectsGaia=[
  ["01","Nombre del RED","Gaia, conociendo nuestro mundo: el paisaje y el color."],
  ["02","Área de conocimiento","Educación Plástica, Visual y Audiovisual, con articulación interdisciplinar con Geografía e Historia, Biología y Geología y lenguas extranjeras."],
  ["03","Nivel o grado","Diseñado para 1.º de Educación Secundaria Obligatoria. La introducción señala que puede adaptarse de 1.º a 3.º de ESO."],
  ["04","Autoría","Ana Molinero Morales y María Elena Pérez Fernández. Edición del Ministerio de Educación y Formación Profesional de España."],
  ["05","Repositorio","Repositorio de recursos educativos del INTEF, dentro de las situaciones de aprendizaje para Educación Secundaria."],
  ["06","Enlace directo","Acceso público al recurso completo en formato web, sin registro, con navegación por todas sus unidades, anexos y créditos."],
  ["07","Descripción","Situación de aprendizaje que vincula paisaje, color y sostenibilidad. Parte de la observación del entorno y conduce al alumnado por el boceto, la síntesis de elementos, la representación de profundidad, el estudio cromático y la producción artística con técnicas húmedas."],
  ["08","Posibilidades educativas","Ofrece una secuencia completa con conocimientos previos, actividades, productos evaluables, trabajo cooperativo y anexos. Permite entrenar la observación mediante fotografías, bocetos rápidos, comparación de propuestas, selección de rasgos esenciales y representación de relaciones cerca-lejos."],
  ["09","Limitaciones","Es una propuesta extensa y requiere adaptación al horario, materiales disponibles y contexto colombiano. Su foco incluye color, paisaje y sostenibilidad, por lo que el docente debe seleccionar las actividades más directamente relacionadas con la observación y el dibujo."],
  ["10","Verificación de estándares","Creado con eXeLearning, funciona en navegador y dispone del archivo fuente editable .elp. Declara licencia Creative Commons Reconocimiento-CompartirIgual 4.0, autoría, nivel, materia y créditos. Su estructura favorece reutilización y adaptación; la página no declara de forma explícita un paquete SCORM para esta versión publicada."],
  ["11","Vista del recurso","La portada oficial representa a Gaia y permite reconocer el recurso dentro del repositorio del INTEF."]
];

function ResourceCard({id,number,title,subtitle,image,alt,aspects,repository,direct,credit}:{id:string,number:string,title:string,subtitle:string,image:string,alt:string,aspects:string[][],repository:string,direct:string,credit:string}){
  return <article className="red-dossier" id={id}>
    <header className="red-heading"><div><span>RED {number}</span><h2>{title}</h2><p>{subtitle}</p></div><div className="red-actions"><a className="button button-blue" href={direct} target="_blank" rel="noreferrer">Abrir RED <b>↗</b></a><a className="line-link dark-link" href={repository} target="_blank" rel="noreferrer">Consultar repositorio ↗</a></div></header>
    <figure className="red-visual"><img src={image} alt={alt}/><figcaption>{credit}</figcaption></figure>
    <section className="aspect-list">{aspects.map(([n,label,text])=><div id={n==="11"?`${id}-vista`:undefined} className={`aspect-row${n==="11"?" aspect-row-view":""}`} key={n}><span>{n}</span><h3>{label}</h3><div className="aspect-content"><p>{text}</p>{n==="11"&&<figure className="aspect-resource-view"><div className="resource-browser-bar"><i/><i/><i/><small>Vista oficial del recurso</small></div><div className="aspect-resource-image"><img src={image} alt={alt}/></div><figcaption>{credit}</figcaption></figure>}</div>{n==="05"&&<a href={repository} target="_blank" rel="noreferrer">Ir al repositorio ↗</a>}{n==="06"&&<a href={direct} target="_blank" rel="noreferrer">Abrir enlace directo ↗</a>}</div>)}</section>
  </article>
}

export default function Page(){return <SiteShell active="modelos">
  <InnerHero number="2.2" kicker="Subpágina · Recursos educativos digitales" title="Dos recursos para aprender a observar" summary="La selección responde a una dificultad concreta: reconocer proporciones, relaciones, formas, luces, profundidad y estructura antes de traducirlas al dibujo."/>
  <section className="red-intro"><div><span>SELECCIÓN DE RED</span><h2>Observar la estructura.<br/>Representar el entorno.</h2></div><p>Los recursos escogidos se complementan: EducaThyssen orienta el análisis compositivo de obras de arte; el INTEF propone observar, sintetizar y representar paisajes mediante boceto, profundidad y color. Ambos están en español, son de acceso público y se dirigen a Educación Secundaria.</p></section>
  <nav className="red-jump" aria-label="Acceso a los recursos seleccionados"><a href="#analiza-maestros"><b>01</b><span>Analiza a los maestros<small>EducaThyssen</small></span></a><a href="#gaia"><b>02</b><span>Gaia: paisaje y color<small>INTEF</small></span></a></nav>
  <ResourceCard id="analiza-maestros" number="01" title="Analiza a los maestros" subtitle="Lectura visual, síntesis y estructura compositiva." image="/images/red-analiza-maestros.webp" alt="Esaú vendiendo su primogenitura, obra utilizada por el recurso Analiza a los maestros" aspects={aspectsThyssen} repository="https://www.educathyssen.org/profesores-estudiantes/vorkurs-comienza-bauhaus" direct="https://www.educathyssen.org/analiza-maestros" credit="Hendrick ter Brugghen · Esaú vendiendo su primogenitura, c. 1627 · Museo Nacional Thyssen-Bornemisza, Madrid."/>
  <ResourceCard id="gaia" number="02" title="Gaia, conociendo nuestro mundo" subtitle="El paisaje y el color como laboratorio de observación." image="/images/red-gaia-paisaje-color.jpg" alt="Portada oficial del recurso Gaia, conociendo nuestro mundo, del INTEF" aspects={aspectsGaia} repository="https://intef.es/recursos-educativos/situaciones-aprendizaje/" direct="https://descargas.intef.es/recursos_educativos/ODES_SGOA/ESO/EPVA/8B.1_SA_ESO_EPVA_Gaia_conociendo_nuestro_mundo/index.html" credit="Portada oficial del RED · INTEF · Licencia CC BY-SA 4.0."/>
  <section className="red-comparison"><span>RELACIÓN CON EL PROBLEMA</span><h2>Dos escalas de observación</h2><div><p><b>Analiza a los maestros</b> ejercita la lectura interna de una imagen: tensiones, pesos, direcciones y contrastes.</p><p><b>Gaia</b> traslada la observación al entorno: selección de rasgos, boceto, profundidad, color y representación.</p></div><a className="button button-gold" href="/modelos-red/seleccionando-modelos">Continuar a la selección de modelos <b>→</b></a></section>
 </SiteShell>}

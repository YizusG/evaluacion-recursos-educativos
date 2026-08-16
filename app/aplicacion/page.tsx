import { InnerHero, SiteShell } from "../site-shell";

export default function Page() {
  return (
    <SiteShell active="aplicacion">
      <InnerHero
        number="04"
        kicker="Segunda fase del proyecto"
        title="Aplicación"
        summary="Este apartado se desarrollará en un segundo momento, después de consolidar la selección y documentación de los recursos educativos digitales."
      />

      <section className="pending" aria-labelledby="application-pending-title">
        <small>Contenido pendiente</small>
        <h2 id="application-pending-title">Aplicación de los modelos de evaluación</h2>
        <p>
          La página se conserva dentro de la estructura del sitio. Su contenido académico será
          incorporado cuando se inicie la segunda fase del trabajo.
        </p>
      </section>
    </SiteShell>
  );
}

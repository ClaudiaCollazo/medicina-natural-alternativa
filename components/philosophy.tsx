const principles = [
  {
    title: "Visión integral",
    text: "El cuerpo, la mente y las emociones se entienden como un todo interconectado. No se trata solo el síntoma, sino a la persona completa.",
  },
  {
    title: "Energía en movimiento",
    text: "Según la tradición, la salud depende del flujo libre del Qi (energía vital) a través de canales o meridianos. El bloqueo de ese flujo genera desequilibrio.",
  },
  {
    title: "Estímulo del autocuidado",
    text: "Las terapias buscan activar la capacidad natural del organismo para regularse y recuperarse, apoyando sus propios mecanismos de sanación.",
  },
  {
    title: "Complemento, no sustituto",
    text: "La medicina natural puede acompañar y potenciar los tratamientos convencionales, especialmente en dolencias crónicas o de difícil manejo.",
  },
]

export function Philosophy() {
  return (
    <section id="filosofia" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Filosofía
            </span>
            <h2 className="text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              Una tradición de miles de años al servicio del bienestar
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              La medicina natural reúne saberes de distintas culturas —con especial
              raíz en la Medicina Tradicional China— que comparten una idea central:
              la salud es equilibrio. Cuando ese equilibrio se altera, aparecen la
              enfermedad y el malestar.
            </p>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/hierbas-medicinales.png"
                alt="Composición cenital de hierbas y raíces medicinales tradicionales sobre una superficie de piedra"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:content-start">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-xl font-medium text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

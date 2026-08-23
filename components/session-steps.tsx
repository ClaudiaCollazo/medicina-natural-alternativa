const steps = [
  {
    step: "01",
    title: "Valoración inicial",
    text: "Una entrevista detallada sobre tu historia, hábitos y síntomas. En la tradición se observan el pulso y la lengua para comprender tu equilibrio.",
  },
  {
    step: "02",
    title: "Plan personalizado",
    text: "A partir de la valoración se define qué técnicas combinar y con qué frecuencia, adaptadas a tu situación concreta.",
  },
  {
    step: "03",
    title: "La sesión terapéutica",
    text: "En un ambiente tranquilo se aplican las técnicas elegidas. La mayoría de las personas experimentan una profunda relajación.",
  },
  {
    step: "04",
    title: "Seguimiento",
    text: "Se evalúan los cambios y se ajusta el plan. El acompañamiento sostenido es clave en las dolencias crónicas.",
  },
]

export function SessionSteps() {
  return (
    <section id="sesion" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            La sesión
          </span>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            Cómo es el proceso, paso a paso
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="flex flex-col gap-3">
              <span className="font-serif text-3xl font-medium text-accent">{s.step}</span>
              <h3 className="font-serif text-xl font-medium text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

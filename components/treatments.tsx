import { Flame, Sprout, CircleDot, Footprints } from "lucide-react"

const featured = [
  {
    name: "Acupuntura",
    image: "/images/hero-acupuntura.png",
    alt: "Agujas de acupuntura finas colocadas sobre la piel durante una sesión",
    description:
      "Inserción de agujas muy finas en puntos específicos del cuerpo para restablecer el flujo de energía y estimular la respuesta natural del organismo.",
    benefits: [
      "Alivio del dolor crónico y agudo",
      "Reducción del estrés y la ansiedad",
      "Mejora del sueño y la digestión",
      "Regulación del sistema nervioso",
    ],
  },
  {
    name: "Digitopuntura",
    image: "/images/digitopuntura.png",
    alt: "Manos aplicando presión con el pulgar sobre un punto de acupresión",
    description:
      "También llamada acupresión, utiliza la presión de los dedos sobre los mismos puntos que la acupuntura. Es una técnica no invasiva, ideal como autocuidado.",
    benefits: [
      "No requiere agujas ni pinchazos",
      "Alivio de dolores de cabeza y tensión",
      "Fácil de aprender y aplicar en casa",
      "Favorece la relajación muscular",
    ],
  },
  {
    name: "Auriculoterapia",
    image: "/images/auriculoterapia.png",
    alt: "Primer plano de una oreja con pequeñas semillas colocadas en puntos de auriculoterapia",
    description:
      "Estimulación de puntos reflejos situados en el pabellón de la oreja, que se corresponden con distintos órganos y funciones del cuerpo, mediante semillas o pequeñas agujas.",
    benefits: [
      "Apoyo en procesos de dejar de fumar",
      "Control del apetito y la ansiedad",
      "Alivio del dolor a distancia",
      "Efecto prolongado entre sesiones",
    ],
  },
]

const others = [
  {
    icon: Flame,
    name: "Moxibustión",
    text: "Aplicación de calor con la planta de artemisa (moxa) sobre los puntos de acupuntura para tonificar y movilizar la energía.",
  },
  {
    icon: Sprout,
    name: "Fitoterapia",
    text: "Uso terapéutico de plantas medicinales, raíces y extractos naturales para acompañar procesos de recuperación.",
  },
  {
    icon: CircleDot,
    name: "Ventosas (cupping)",
    text: "Copas de succión que estimulan la circulación local, liberan tensiones musculares y favorecen la eliminación de toxinas.",
  },
  {
    icon: Footprints,
    name: "Reflexología",
    text: "Presión sobre zonas reflejas de pies y manos que se relacionan con órganos y sistemas de todo el cuerpo.",
  },
]

export function Treatments() {
  return (
    <section id="tratamientos" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Tratamientos
          </span>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            Terapias que acompañan el proceso de sanación
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Cada técnica tiene su propio enfoque, pero todas comparten el mismo
            objetivo: estimular los recursos del propio cuerpo para recuperar el
            equilibrio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((t) => (
            <article
              key={t.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.image || "/placeholder.svg"} alt={t.alt} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-serif text-2xl font-medium text-foreground">{t.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>
                <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => {
            const Icon = o.icon
            return (
              <div
                key={o.name}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-secondary/40 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-lg font-medium text-foreground">{o.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{o.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "¿La acupuntura duele?",
    a: "Las agujas son extremadamente finas, muy distintas a las de una inyección. La mayoría de las personas sienten solo un ligero pinchazo o una sensación de peso, calor u hormigueo que suele ser agradable.",
  },
  {
    q: "¿Cuántas sesiones se necesitan?",
    a: "Depende de cada persona y de la dolencia. Las molestias agudas pueden mejorar en pocas sesiones, mientras que las condiciones crónicas requieren un acompañamiento más prolongado y regular.",
  },
  {
    q: "¿Puedo combinar estas terapias con mi tratamiento médico?",
    a: "Sí. La medicina natural está pensada como complemento. Es importante informar a tu médico y a tu terapeuta de todos los tratamientos que sigues para coordinarlos de forma segura.",
  },
  {
    q: "¿Tienen respaldo científico?",
    a: "Existe evidencia sobre los beneficios de la acupuntura en ciertos tipos de dolor y náuseas, entre otros. La investigación continúa y varía según la técnica. Esta página es informativa y no sustituye el consejo médico.",
  },
  {
    q: "¿Quién no debería recibir estos tratamientos?",
    a: "Personas con ciertos trastornos de coagulación, embarazos de riesgo o determinadas condiciones deben consultar antes. Un profesional cualificado siempre valorará tu caso de forma individual.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="preguntas" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Preguntas frecuentes
          </span>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground">{item.q}</span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

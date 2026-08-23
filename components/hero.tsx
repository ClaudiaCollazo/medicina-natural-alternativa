import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-secondary-foreground">
            Medicina natural y tradicional
          </span>
          <h1 className="text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Sanar desde la raíz, restaurar el equilibrio
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Una guía informativa sobre la acupuntura, la digitopuntura, la
            auriculoterapia y otras terapias milenarias que acompañan el cuerpo
            frente a enfermedades difíciles de tratar con la medicina occidental.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#tratamientos"
              className={cn(buttonVariants(), "h-11 rounded-full px-6 text-base")}
            >
              Explorar tratamientos
            </a>
            <a
              href="#filosofia"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-11 rounded-full bg-transparent px-6 text-base",
              )}
            >
              Conocer la filosofía
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <img
              src="/images/hero-acupuntura.png"
              alt="Sesión de acupuntura con agujas colocadas suavemente sobre la espalda en un ambiente sereno"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

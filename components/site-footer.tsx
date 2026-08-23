import { Leaf } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <>
      <section id="contacto" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-24">
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            Da el primer paso hacia tu equilibrio
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Si quieres saber si estas terapias pueden ayudarte, agenda una valoración
            informativa. Escucharemos tu caso y resolveremos todas tus dudas sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hola@raizyequilibrio.com"
              className={cn(buttonVariants(), "h-11 rounded-full px-6 text-base")}
            >
              Agendar consulta
            </a>
            <a
              href="#tratamientos"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-11 rounded-full bg-transparent px-6 text-base",
              )}
            >
              Ver tratamientos
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-serif text-lg font-medium text-foreground">
                  Raíz y Equilibrio
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Espacio informativo sobre medicina natural y terapias tradicionales
                para el bienestar integral.
              </p>
            </div>

            <nav aria-label="Enlaces del pie de página">
              <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
                <li><a href="#filosofia" className="text-muted-foreground hover:text-primary">Filosofía</a></li>
                <li><a href="#tratamientos" className="text-muted-foreground hover:text-primary">Tratamientos</a></li>
                <li><a href="#enfermedades" className="text-muted-foreground hover:text-primary">Enfermedades</a></li>
                <li><a href="#sesion" className="text-muted-foreground hover:text-primary">La sesión</a></li>
                <li><a href="#preguntas" className="text-muted-foreground hover:text-primary">Preguntas</a></li>
                <li><a href="#contacto" className="text-muted-foreground hover:text-primary">Contacto</a></li>
              </ul>
            </nav>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="font-medium text-foreground">Aviso importante:</strong> El
              contenido de esta página tiene fines exclusivamente informativos y
              educativos. No constituye consejo médico ni sustituye el diagnóstico o
              tratamiento de un profesional de la salud. Ante cualquier síntoma o
              enfermedad, consulta siempre a tu médico.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Raíz y Equilibrio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

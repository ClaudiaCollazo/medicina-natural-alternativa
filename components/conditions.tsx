const conditions = [
  {
    title: "Dolor crónico",
    text: "Migrañas, lumbalgias, fibromialgia y dolores articulares persistentes que no ceden fácilmente con analgésicos.",
  },
  {
    title: "Trastornos del sueño",
    text: "Insomnio, sueño fragmentado y fatiga que suelen tener origen en el estrés y el desequilibrio nervioso.",
  },
  {
    title: "Ansiedad y estrés",
    text: "Estados de tensión sostenida, ataques de ansiedad y agotamiento emocional que afectan al cuerpo entero.",
  },
  {
    title: "Alteraciones digestivas",
    text: "Colon irritable, digestiones lentas e inflamación intestinal de causa funcional difícil de precisar.",
  },
  {
    title: "Desequilibrios hormonales",
    text: "Síndrome premenstrual, molestias de la menopausia y ciclos irregulares acompañados desde el equilibrio.",
  },
  {
    title: "Fatiga y baja energía",
    text: "Cansancio persistente y sensación de agotamiento sin causa orgánica clara identificada.",
  },
]

export function Conditions() {
  return (
    <section id="enfermedades" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Enfermedades difíciles de tratar
          </span>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            Un apoyo cuando la medicina convencional no basta
          </h2>
          <p className="text-pretty leading-relaxed text-primary-foreground/80">
            En muchas dolencias crónicas o de origen funcional, las terapias
            naturales ofrecen alivio y mejoran la calidad de vida acompañando —nunca
            reemplazando— el tratamiento médico.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <div key={c.title} className="flex flex-col gap-2 bg-primary p-6">
              <h3 className="font-serif text-xl font-medium">{c.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/75">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

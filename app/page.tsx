import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Treatments } from "@/components/treatments"
import { Conditions } from "@/components/conditions"
import { SessionSteps } from "@/components/session-steps"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Philosophy />
        <Treatments />
        <Conditions />
        <SessionSteps />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}

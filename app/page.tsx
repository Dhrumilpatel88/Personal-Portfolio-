import { Navbar }            from '@/components/layout/Navbar'
import { Footer }            from '@/components/layout/Footer'
import { LedStrip }          from '@/components/ui/LedStrip'
import { HeroSection }       from '@/components/sections/HeroSection'
import { AboutSection }      from '@/components/sections/AboutSection'
import { SkillsSection }     from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection }   from '@/components/sections/ProjectsSection'
import { EducationSection }  from '@/components/sections/EducationSection'
import { ContactSection }    from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LedStrip />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <LedStrip />
      </main>
      <Footer />
    </>
  )
}

import PixelButton from '../PixelButton'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Avatar — pixel-art initials */}
        <div className="mx-auto mb-6 w-24 h-24 md:w-32 md:h-32 border-4 border-primary flex items-center justify-center">
          <span className="font-heading text-primary text-lg md:text-2xl">MKU</span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-primary text-sm md:text-lg mb-4 leading-relaxed">
          PLAYER 1: KHEVIN
        </h1>

        {/* Subtitle */}
        <p className="font-heading text-secondary text-xs md:text-sm mb-6 leading-relaxed">
          SENIOR SOFTWARE ENGINEER
        </p>

        {/* Bio */}
        <p className="font-body text-muted text-lg md:text-2xl mb-8 leading-tight">
          7+ YEARS ARCHITECTING BACKEND SYSTEMS, REAL-TIME DATA PLATFORMS &amp; AI-NATIVE WORKFLOWS. GO · PYTHON · NODE.JS
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PixelButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            START QUEST
          </PixelButton>
          <PixelButton variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            INVENTORY
          </PixelButton>
        </div>
      </div>
    </section>
  )
}

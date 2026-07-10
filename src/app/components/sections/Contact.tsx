import { Linkedin, Github, Phone } from 'lucide-react'
import PixelButton from '../PixelButton'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-primary text-lg md:text-xl mb-6">FINAL LEVEL</h2>
        <p className="font-body text-muted text-lg md:text-2xl mb-8 leading-tight">
          READY TO TEAM UP? CONNECT YOUR COMMS MODULE AND LET'S BUILD SOMETHING EPIC.
        </p>

        <PixelButton href="mailto:muhammadkhevin@gmail.com" className="mb-8">
          SEND COMMS
        </PixelButton>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/muhammad-khevin-utama-987562162"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/vinutama"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="tel:+6289508174287"
            className="text-muted hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
        </div>

        {/* Optional: display phone as text below icons */}
        <p className="font-body text-muted text-lg mt-4">+62 895-0817-4287</p>
      </div>
    </section>
  )
}

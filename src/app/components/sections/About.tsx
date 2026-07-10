import PixelContainer from '../PixelContainer'

const skillGroups = [
  {
    title: 'WEAPONS (TECH)',
    items: ['Go (Gin, GORM)', 'Python (Flask, Celery)', 'Node.js (Express, NestJS)', 'TypeScript', 'SQL', 'NoSQL'],
  },
  {
    title: 'ARCHITECTURE',
    items: ['Microservices', 'Event-Driven', 'gRPC', 'REST APIs', 'TDD', 'RBAC'],
  },
  {
    title: 'INFRA & DATA',
    items: ['Docker', 'GCP', 'AWS', 'RabbitMQ', 'Kafka', 'Redis', 'Airflow', 'PostgreSQL', 'TimescaleDB', 'MongoDB'],
  },
  {
    title: 'FRONTEND',
    items: ['React', 'Next.js', 'TypeScript (TSX)', 'Tailwind CSS'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-primary text-lg md:text-xl mb-8 text-center">INVENTORY</h2>

        {/* Bio */}
        <PixelContainer className="mb-8">
          <p className="font-body text-muted text-lg md:text-2xl mb-4 leading-tight">
            Senior Software Engineer with 7+ years architecting backend systems, real-time data platforms, and data-orchestration engines in Go, Python, and Node.js. Led cross-functional squads delivering production systems processing 5,000+ concurrent GPS updates every 5 seconds.
          </p>
          <p className="font-body text-muted text-lg md:text-2xl leading-tight">
            Pioneered AI-native, multi-agent development workflows to accelerate delivery. Combines hands-on distributed-systems engineering with technical leadership—system design specs, deployment planning, and cross-functional coordination.
          </p>
        </PixelContainer>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <PixelContainer key={group.title}>
              <h3 className="font-heading text-secondary text-xs md:text-sm mb-4">{group.title}</h3>
              <ul className="font-body text-muted text-lg md:text-2xl space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="before:content-['▸'] before:text-primary before:mr-2">
                    {item}
                  </li>
                ))}
              </ul>
            </PixelContainer>
          ))}
        </div>
      </div>
    </section>
  )
}

import PixelContainer from '../PixelContainer'

const jobs = [
  {
    title: 'Senior SE, Squad Lead',
    company: 'PT Transportasi Jakarta',
    date: 'Jun 2024 – Present',
    bullets: [
      'Led 4-person squad; authored SDS, schemas, API contracts before every sprint.',
      'Architected Go-based Fleet Management System (Gin, GORM, gRPC, PostgreSQL, Redis, MinIO).',
      'Engineered GPS streaming service processing 5,000+ updates/5s across 100 RabbitMQ queues.',
      'Built AI-driven automation generating SDS docs and architecture diagrams from PRDs/Figma.',
    ],
  },
  {
    title: 'Senior SE, Backend',
    company: 'Delman Data Lab',
    date: 'Apr 2022 – Apr 2024',
    bullets: [
      'Led 2 backend engineers with code reviews and onboarding docs.',
      'Architected no-code ETL orchestration platform modeled on Apache Airflow.',
      'Integrated 16+ data sources (S3, Kafka, Hadoop, PostgreSQL, Salesforce).',
      'Delivered end-to-end ETL for hospital client (RS Harapan Kita).',
    ],
  },
  {
    title: 'Software Engineer, Backend',
    company: 'Delman Data Lab',
    date: 'Mar 2019 – Apr 2022',
    bullets: [
      'Built Flask APIs under strict TDD with Python unittest.',
      'Owned CI/CD pipelines end-to-end: deployment, production releases, incident response.',
      'Partnered with PM, Frontend, DevOps on API contracts and third-party integrations.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-primary text-lg md:text-xl mb-8 text-center">QUEST LOG</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-1 bg-muted" />

          {jobs.map((job, i) => (
            <div key={i} className="relative pl-12 md:pl-16 pb-12 last:pb-0">
              {/* Timeline node */}
              <div className="absolute left-2 md:left-4 w-[9px] h-[9px] md:w-3 md:h-3 bg-primary rounded-none border-2 border-primary animate-pulse mt-1.5" />

              <PixelContainer>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-1">
                  <h3 className="font-heading text-primary text-xs md:text-sm">{job.title}</h3>
                  <span className="font-heading text-secondary text-[10px] md:text-xs whitespace-nowrap">{job.date}</span>
                </div>
                <p className="font-body text-muted text-base md:text-xl mb-3">{job.company}</p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="font-body text-muted text-base md:text-xl leading-tight before:content-['-'] before:text-primary before:mr-2">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </PixelContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

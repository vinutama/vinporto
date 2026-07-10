import PixelContainer from '../PixelContainer'

const projects = [
  {
    title: 'FLEET COMMAND',
    tags: ['GO', 'GRPC', 'RABBITMQ', 'POSTGRESQL'],
    description: 'Real-time fleet management: 5,000+ GPS updates/5s across 100 queues, HMM/Viterbi map snapping, 7 safety anomaly detections, multi-level trip verification determining operator payment.',
  },
  {
    title: 'DATA ORCHESTRATOR',
    tags: ['PYTHON', 'FLASK', 'CELERY', 'HADOOP'],
    description: 'No-code ETL platform: 16+ data source integrations, pause/retry/resume from any node, one-click transforms, custom Python-script injection. Deployed for hospital client automating financial pipelines.',
  },
  {
    title: 'WORLD CUP 2026',
    tags: ['GO', 'REACT', 'TAILWIND', 'DOCKER'],
    description: 'Analytics dashboard: historical results, live group standings, scorer leaderboards, knockout brackets, "Chaos Zone" goal clustering, predictive views. Built entirely via AI-native pipeline.',
  },
  {
    title: 'LAND VERIFICATION',
    tags: ['FLASK', 'SQLALCHEMY', 'MINIO'],
    description: 'RBAC land-submission platform: multi-stage approval workflow, dynamic forms per role, automated image compression, dynamic PDF contract generation, full activity-log tracking.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-primary text-lg md:text-xl mb-8 text-center">ACHIEVEMENTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <PixelContainer key={project.title}>
              <h3 className="font-heading text-primary text-xs md:text-sm mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-heading text-[10px] md:text-xs text-secondary border-2 border-secondary px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-muted text-base md:text-xl leading-tight">
                {project.description}
              </p>
            </PixelContainer>
          ))}
        </div>
      </div>
    </section>
  )
}

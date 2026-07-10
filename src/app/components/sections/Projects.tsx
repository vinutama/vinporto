import React from "react";
import { PixelContainer } from "../PixelContainer";

const projects = [
  {
    title: "FLEET COMMAND",
    stack: ["GO", "GRPC", "RABBITMQ", "POSTGRESQL"],
    description: "Real-time fleet management: 5,000+ GPS updates/5s across 100 queues, HMM/Viterbi map snapping, 7 safety anomaly detections, multi-level trip verification determining operator payment.",
    imgPlaceholder: "IMG_FLEET.BMP"
  },
  {
    title: "DATA ORCHESTRATOR",
    stack: ["PYTHON", "FLASK", "CELERY", "HADOOP"],
    description: "No-code ETL platform: 16+ data source integrations, pause/retry/resume from any node, one-click transforms, custom Python-script injection. Deployed for hospital client automating financial pipelines.",
    imgPlaceholder: "IMG_ORCH.BMP"
  },
  {
    title: "WORLD CUP 2026",
    stack: ["GO", "REACT", "TAILWIND", "DOCKER"],
    description: "Analytics dashboard: historical results, live group standings, scorer leaderboards, knockout brackets, \"Chaos Zone\" goal clustering, predictive views. Built entirely via AI-native pipeline.",
    imgPlaceholder: "IMG_WC26.BMP"
  },
  {
    title: "LAND VERIFICATION",
    stack: ["FLASK", "SQLALCHEMY", "MINIO"],
    description: "RBAC land-submission platform: multi-stage approval workflow, dynamic forms per role, automated image compression, dynamic PDF contract generation, full activity-log tracking.",
    imgPlaceholder: "IMG_LAND.BMP"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-white">
          ACHIEVEMENTS
        </h2>
        <div className="hidden md:block flex-1 h-1 bg-[#0099FF] ml-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {projects.map((project, idx) => (
          <PixelContainer key={idx} className="group hover:-translate-y-2 transition-transform duration-200 cursor-pointer flex flex-col">
            <div className="w-full aspect-video bg-black border-4 border-[#C0C0C0] group-hover:border-[#00FF00] mb-4 flex items-center justify-center relative overflow-hidden transition-colors">
               <div className="absolute inset-0 bg-[#C0C0C0]/10 group-hover:bg-[#00FF00]/10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '8px 8px', backgroundPosition: '0 0, 4px 4px', opacity: 0.2 }} />
               <p className="font-['Press_Start_2P'] text-[10px] text-[#C0C0C0] group-hover:text-[#00FF00] z-10 transition-colors">
                 [{project.imgPlaceholder}]
               </p>
            </div>
            
            <h3 className="font-['Press_Start_2P'] text-sm md:text-base text-white mb-3 group-hover:text-[#00FF00] transition-colors">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, i) => (
                <span key={i} className="font-['VT323'] text-lg text-black bg-[#00FF00] px-2 py-0.5 uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="font-['VT323'] text-xl text-[#C0C0C0] leading-snug flex-1">
              {project.description}
            </p>
          </PixelContainer>
        ))}
      </div>
    </section>
  );
}

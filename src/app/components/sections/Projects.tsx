import React, { useState, useEffect } from "react";
import { PixelContainer } from "../PixelContainer";
import fleetImg from "../../../assets/img_fleet.png";
import orchImg from "../../../assets/img_orch.png";
import wc26Img from "../../../assets/img_wc26.png";
import landImg from "../../../assets/img_land.jpeg";
import laundryImg from "../../../assets/img_laundry.jpeg";

const projects = [
  {
    title: "FLEET COMMAND",
    stack: ["GO", "GRPC", "RABBITMQ", "POSTGRESQL"],
    description: "Real-time fleet management: 5,000+ GPS updates/5s across 100 queues, HMM/Viterbi map snapping, 7 safety anomaly detections, multi-level trip verification determining operator payment.",
    image: fleetImg,
    imgPlaceholder: "IMG_FLEET.BMP"
  },
  {
    title: "DATA ORCHESTRATOR",
    stack: ["PYTHON", "FLASK", "CELERY", "HADOOP"],
    description: "No-code ETL platform: 16+ data source integrations, pause/retry/resume from any node, one-click transforms, custom Python-script injection. Deployed for hospital client automating financial pipelines.",
    image: orchImg,
    imgPlaceholder: "IMG_ORCH.BMP"
  },
  {
    title: "WORLD CUP 2026",
    stack: ["GO", "REACT", "TAILWIND", "DOCKER"],
    description: "Analytics dashboard: historical results, live group standings, scorer leaderboards, knockout brackets, \"Chaos Zone\" goal clustering, predictive views. Built entirely via AI-native pipeline.",
    image: wc26Img,
    imgPlaceholder: "IMG_WC26.BMP"
  },
  {
    title: "LAND VERIFICATION",
    stack: ["FLASK", "SQLALCHEMY", "MINIO"],
    description: "RBAC land-submission platform: multi-stage approval workflow, dynamic forms per role, automated image compression, dynamic PDF contract generation, full activity-log tracking.",
    image: landImg,
    imgPlaceholder: "IMG_LAND.BMP"
  },
  {
    title: "SMART LAUNDRY",
    stack: ["NODE.JS", "EXPRESS", "NEXT.JS", "TAILWIND"],
    description: "Full-stack laundry dashboard: role-based auth, revenue analytics (daily avg, peak, trend, branch calendar views), IoT-ready machine management, merchant withdrawal system with real-time financial visibility.",
    image: laundryImg,
    imgPlaceholder: "IMG_LAUNDRY.BMP"
  }
];

export function Projects() {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  useEffect(() => {
    if (!zoomedImg) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomedImg(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [zoomedImg]);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-white">
          ACHIEVEMENTS
        </h2>
        <div className="hidden md:block flex-1 h-1 bg-[#0099FF] ml-8" />
      </div>

      <div className="relative">
        {/* ponytail: right fade only is enough to hint at scrollable content */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-pl-4 px-4 pb-4 -mx-4 md:-mx-8"
             style={{ 'scrollbar-width': 'thin', 'scrollbar-color': '#00FF00 #000' }}>
          {projects.map((project, idx) => (
            <PixelContainer key={idx} className="min-w-[300px] max-w-[380px] flex-shrink-0 snap-start group hover:-translate-y-2 transition-transform duration-200 cursor-pointer flex flex-col"
              onClick={() => setZoomedImg(project.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setZoomedImg(project.image); } }}>
              <div className="w-full aspect-video bg-black border-4 border-[#C0C0C0] group-hover:border-[#00FF00] mb-4 relative overflow-hidden transition-colors">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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
      </div>

      {zoomedImg && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setZoomedImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div className="border-4 border-[#00FF00] bg-black p-8 max-w-2xl w-full mx-4 aspect-video relative"
               onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-3 -right-3 text-white bg-black border-2 border-[#00FF00] w-8 h-8 flex items-center justify-center font-['Press_Start_2P'] text-sm"
              onClick={() => setZoomedImg(null)}
              aria-label="Close preview"
              autoFocus
            >
              [X]
            </button>
            <img src={zoomedImg} alt="Project preview" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

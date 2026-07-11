import React from "react";
import { PixelContainer } from "../PixelContainer";

const experiences = [
  {
    title: "Senior SE, Squad Lead",
    company: "PT Transportasi Jakarta",
    date: "Jun 2024 – Present",
    bullets: [
      "Led 4-person squad; authored SDS, schemas, API contracts before every sprint.",
      "Architected Go-based Fleet Management System (Gin, GORM, gRPC, PostgreSQL, Redis, MinIO).",
      "Engineered GPS streaming service processing 5,000+ updates/5s across 100 RabbitMQ queues.",
      "Built AI-driven automation generating SDS docs and architecture diagrams from PRDs/Figma."
    ]
  },
  {
    title: "Senior SE, Backend",
    company: "Delman Data Lab",
    date: "Apr 2022 – Apr 2024",
    bullets: [
      "Led 2 backend engineers with code reviews and onboarding docs.",
      "Architected no-code ETL orchestration platform modeled on Apache Airflow. Used across more than 20 divisions.",
      "Integrated 16+ data sources (S3, Kafka, Hadoop, PostgreSQL, Salesforce, Google BigQuery, ADLS, Cosmos DB, GCS, Oracle).",
      "Delivered end-to-end ETL for hospital client (RS Harapan Kita)."
    ]
  },
  {
    title: "Software Engineer, Backend",
    company: "Delman Data Lab",
    date: "Mar 2019 – Apr 2022",
    bullets: [
      "Built Flask APIs under strict TDD with Python unittest.",
      "Owned CI/CD pipelines end-to-end: deployment, production releases, incident response.",
      "Partnered with PM, Frontend, DevOps on API contracts and third-party integrations.",
      "Built a Hospital Information System deployed on Kubernetes, used daily by more than 30 internal hospital staff."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-white inline-block border-b-4 border-[#00FF00] pb-4">
          QUEST LOG
        </h2>
      </div>

      <div className="relative border-l-4 border-[#0099FF] ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline node */}
            <div className="absolute -left-[42px] md:-left-[58px] top-4 w-6 h-6 md:w-8 md:h-8 bg-black border-4 border-[#00FF00] flex items-center justify-center z-10">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-[#00FF00] motion-safe:animate-pulse" />
            </div>

            <PixelContainer variant={idx === 0 ? "primary" : "neutral"} className="w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b-2 border-white/20 pb-4 gap-4">
                <div>
                  <h3 className="font-['Press_Start_2P'] text-sm md:text-base text-[#00FF00]">
                    {exp.title}
                  </h3>
                  <p className="font-['VT323'] text-2xl text-white mt-1">
                    @{exp.company}
                  </p>
                </div>
                <div className="font-['VT323'] text-xl text-[#0099FF] bg-[#0099FF]/10 px-3 py-1 border-2 border-[#0099FF]">
                  {exp.date}
                </div>
              </div>

              <ul className="space-y-3 mt-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start font-['VT323'] text-xl md:text-2xl text-[#C0C0C0]">
                    <span className="text-[#00FF00] mr-4 mt-1">{'>'}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </PixelContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

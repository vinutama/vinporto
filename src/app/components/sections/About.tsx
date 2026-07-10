import React from "react";
import { PixelContainer } from "../PixelContainer";

export function About() {
  const skills = [
    { category: "WEAPONS (TECH)", items: ["Go (Gin, GORM)", "Python (Flask, Celery)", "Node.js (Express, NestJS)", "TypeScript", "SQL", "NoSQL"] },
    { category: "ARCHITECTURE", items: ["Microservices", "Event-Driven", "gRPC", "REST APIs", "TDD", "RBAC"] },
    { category: "INFRA & DATA", items: ["Docker", "GCP", "AWS", "RabbitMQ", "Kafka", "Redis", "Airflow", "PostgreSQL", "TimescaleDB", "MongoDB"] },
    { category: "FRONTEND", items: ["React", "Next.js", "TypeScript (TSX)", "Tailwind CSS"] },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="font-['Press_Start_2P'] text-3xl md:text-4xl text-white mb-4 flex items-center gap-4">
          <span className="text-[#00FF00]">{'>'}</span> INVENTORY: SKILLS
        </h2>
        <div className="h-1 w-full bg-[#0099FF]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PixelContainer className="h-full flex flex-col justify-center">
          <p className="font-['VT323'] text-2xl text-[#C0C0C0] leading-relaxed mb-6">
            Senior Software Engineer with 7+ years architecting backend systems, real-time data platforms, and data-orchestration engines in Go, Python, and Node.js. Led cross-functional squads delivering production systems processing 5,000+ concurrent GPS updates every 5 seconds.
          </p>
          <p className="font-['VT323'] text-2xl text-[#C0C0C0] leading-relaxed">
            Pioneered AI-native, multi-agent development workflows to accelerate delivery. Combines hands-on distributed-systems engineering with technical leadership—system design specs, deployment planning, and cross-functional coordination.
          </p>
        </PixelContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skillGroup, idx) => (
            <PixelContainer key={idx} variant="secondary" className="flex flex-col justify-center">
              <h3 className="font-['Press_Start_2P'] text-[10px] md:text-xs text-[#0099FF] mb-3">
                [{skillGroup.category}]
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="font-['VT323'] text-xl text-white bg-black border-2 border-[#C0C0C0] px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </PixelContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

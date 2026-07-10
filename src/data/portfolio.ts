export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: SkillCategory[];
  professionalExperience: Experience[];
  professionalProjects: Project[];
  personalProjects: Project[];
  education: { institution: string; period: string; degree: string };
  certifications: Certification[];
}

export const portfolio: PortfolioData = {
  name: "Muhammad Khevin Utama",
  role: "Senior Software Engineer",
  location: "Bogor, Indonesia",
  email: "muhammadkhevin@gmail.com",
  phone: "+62 895-0817-4287",
  linkedin: "linkedin.com/in/muhammad-khevin-utama-987562162",
  github: "github.com/vinutama",
  summary:
    "Senior Software Engineer with 7+ years of experience architecting backend systems, real-time data platforms, and data-orchestration engines in Go, Python, and Node.js. Led a cross-functional squad of 4 engineers to deliver a real-time Fleet Management platform processing 5,000+ concurrent GPS updates every 5 seconds, building on earlier work shipping a no-code ETL orchestration platform that integrated 16+ enterprise data sources for financial and healthcare clients. Combines hands-on distributed-systems engineering with technical leadership—system design specifications, deployment planning, and cross-functional coordination—and has recently pioneered AI-native, multi-agent development workflows to accelerate delivery.",

  skills: [
    {
      category: "Languages & Backend",
      items: [
        "Go (Gin, GORM)",
        "Python (Flask, SQLAlchemy, Celery)",
        "Node.js (Express.js, NestJS, Mongoose ODM, Prisma)",
        "TypeScript (Express.js, NestJS)",
        "SQL",
        "NoSQL",
      ],
    },
    {
      category: "Architecture & Practices",
      items: [
        "Microservices",
        "Event-Driven Architecture",
        "Layered Architecture",
        "TDD",
        "RBAC",
        "RESTful APIs",
        "gRPC",
      ],
    },
    {
      category: "Messaging & Streaming",
      items: ["RabbitMQ (exchanges, consistent hashing)", "Redis", "MQTT", "Apache Kafka"],
    },
    {
      category: "Data & Storage",
      items: [
        "PostgreSQL",
        "TimescaleDB",
        "MySQL",
        "MSSQL",
        "Oracle",
        "MongoDB",
        "MinIO",
        "Hadoop",
      ],
    },
    {
      category: "Data Engineering",
      items: [
        "Apache Airflow",
        "ETL/ELT pipeline design",
        "OLAP cube modeling",
        "Parquet-based archival",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript (TSX)", "Tailwind CSS"],
    },
    {
      category: "Infrastructure & Cloud",
      items: ["Docker", "Docker Compose", "CI/CD", "Google Cloud Platform", "AWS", "Linux"],
    },
    {
      category: "AI-Native Development",
      items: [
        "Autonomous agentic workflows",
        "Concurrent subagents & git worktrees",
        "AI-driven automation (Hermes Agent, OpenCode)",
      ],
    },
  ],

  professionalExperience: [
    {
      company: "PT Transportasi Jakarta",
      role: "Senior Software Engineer, Squad Lead",
      location: "Jakarta, Indonesia",
      period: "Jun 2024 – Present",
      highlights: [
        "Led a 4-person cross-functional squad (2 backend, 2 frontend engineers)—authoring System Design Specifications (SDS), database schemas, and API contracts before every sprint, running sprint grooming with PM and QA, and owning production Deployment Plans in coordination with QA, cross-squad leads, Tech Lead, EM, and DevOps.",
        "Accelerated squad velocity by building custom AI-driven automation that generates SDS documentation and architecture diagrams in Confluence directly from PRDs, Figma files, and schemas, auto-reviews pull requests, and breaks down JIRA tasks and story points.",
        "Architected a Go-based Fleet Management System (Gin, GORM, gRPC, PostgreSQL, Redis, MinIO) spanning authentication/RBAC, master data management, automated driver scheduling, live and headway tracking, trip verification, passenger information displays, CCTV monitoring, and AI-based people counting—deployed across playground, development, staging, and production environments.",
        "Engineered a high-concurrency GPS streaming service in Go processing 5,000+ location updates every 5 seconds across 100 RabbitMQ queues, using consistent hashing and per-vehicle worker assignment to eliminate race conditions.",
        "Improved live-tracking accuracy with HMM/Viterbi-based GPS snapping and corrected underlying GTFS route data via materialized views (trip direction, segment distances, stop geometry), while powering real-time ETA calculation and 7 driver/vehicle safety-anomaly detections (overspeed, route deviation, no seatbelt, drowsiness, distraction, smoking, and late dispatch).",
        "Designed a multi-level Trip Verification workflow (staff-to-head review, escalation, undo, and operator dispute resolution) serving as the system of record that determines operator payment across the entire bus fleet.",
        "Built a PostgreSQL + TimescaleDB time-series architecture with Airflow-orchestrated OLAP pipelines and tiered hot/warm/cold archival (Parquet via MinIO), supported by a pg_notify-based database listener for real-time trip/driver updates, a GPS simulator for hardware-independent QA testing, and a biweekly HR data sync from a third-party vendor system.",
      ],
    },
    {
      company: "Delman Data Lab",
      role: "Senior Software Engineer, Backend",
      location: "Jakarta, Indonesia",
      period: "Apr 2022 – Apr 2024",
      highlights: [
        "Led 2 backend engineers—assigning tasks, conducting code reviews, and authoring onboarding documentation for environment setup and development workflows.",
        "Architected the backend for a no-code data orchestration platform (RESTful APIs, task scheduling, state management) modeled on Apache Airflow, giving business users pause, retry, and resume control over ETL workflows from any node or edge.",
        "Integrated 16+ data sources including AWS S3, Kafka, Hadoop, PostgreSQL, and Salesforce, and shipped one-click transform operations (aggregation, ordering, cleansing, combining, and unioning data) plus custom Python-script injection for technical users.",
        "Delivered an end-to-end ETL solution for a hospital client (RS Harapan Kita), automating financial and customer-behavior data pipelines from Hadoop and PostgreSQL into scheduled reporting insights.",
        "Managed deployments across GCP and AWS using Docker, Docker Compose, and Celery background workers, maintaining strict TDD integration-test discipline throughout.",
      ],
    },
    {
      company: "Delman Data Lab",
      role: "Software Engineer, Backend",
      location: "Jakarta, Indonesia",
      period: "Mar 2019 – Apr 2022",
      highlights: [
        "Built and maintained backend APIs in Flask under strict test-driven development (TDD) practices with Python's unittest framework.",
        "Owned CI/CD pipelines end-to-end—deployment automation, production releases, and ongoing support—maintaining high uptime and executing rapid incident response.",
        "Partnered with Product Managers, Frontend Engineers, and DevOps to define API contracts and deliver seamless third-party integrations.",
      ],
    },
  ],

  professionalProjects: [
    {
      title: "Land Submission Verification & Approval System",
      subtitle: "Backend Engineer",
      role: "Backend Engineer",
      period: "May 2026 – Jun 2026",
      highlights: [
        "Built a role-based (RBAC) land-submission and verification platform in Flask, SQLAlchemy, and MinIO, featuring dynamic forms and views that adapt to each user's role.",
        "Engineered a multi-stage approval and dispute workflow with full activity-log tracking of each submission's progress, automated image compression, and dynamic PDF contract generation between requesters and land providers.",
      ],
    },
    {
      title: "Smart Laundry Enterprise Dashboard",
      subtitle: "Full-Stack Engineer",
      role: "Full-Stack Engineer",
      period: "Feb 2026 – Mar 2026",
      highlights: [
        "Delivered a full-stack laundry management dashboard (Node.js, Express, Next.js, Tailwind CSS) with role-based auth, revenue analytics (daily average, highest revenue, trend, and branch-grouped calendar views), and IoT-ready wash/dry machine management.",
        "Built merchant management and withdrawal systems giving operators real-time financial visibility across branches.",
      ],
    },
  ],

  personalProjects: [
    {
      title: "World Cup 2026 Analytics Dashboard",
      subtitle: "Creator & AI Architect",
      role: "Creator & AI Architect",
      period: "2026",
      highlights: [
        "Shipped a full-stack World Cup 2026 dashboard (Go, React/TypeScript, Tailwind CSS, Docker Compose) covering historical tournament results by year, live group standings and points, scorer leaderboards, and interactive knockout brackets.",
        "Designed a 'Chaos Zone' feature that flags high-intensity group-stage stretches where multiple goals land within a 10-minute window across concurrent matches, plus predictive views for match outcomes, golden boot, and continental winners.",
        "Orchestrated the entire build through an AI-native, no-manual-code pipeline—Telegram to a Hermes orchestrator agent to OpenCode subagents—parallelizing feature development across concurrent git worktrees.",
      ],
    },
  ],

  education: {
    institution: "Diponegoro University",
    period: "2013 – 2018",
    degree: "Bachelor's Degree, Agricultural Economics",
  },

  certifications: [
    { name: "Programming with Google Go Specialization", issuer: "Coursera" },
    { name: "Associate Cloud Engineer", issuer: "Google Cloud" },
    { name: "Full Stack Developer JavaScript", issuer: "Hacktiv8" },
    { name: "EF SET English Certificate (C1 Advanced)", issuer: "EF SET" },
  ],
};

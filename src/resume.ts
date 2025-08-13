import type { Resume } from "./types";

export const resume: Resume = {
  name: "Ilir Dema",
  title: "Professor • Software Engineer • Researcher",
  location: "Mississauga, ON, Canada",
  email: "dema.ilir@gmail.com",
  links: [
    { label: "LinkedIn", url: "https://ca.linkedin.com/in/profdema" },
    { label: "GitHub", url: "https://github.com/ProfDema" },
  ],
  summary:
    "Software engineering leader and educator with 15+ years across industry and academia. Experienced in full‑stack systems (LAMP/MEAN/Rails), cloud (AWS/GCP), distributed architectures (microservices, Kafka/RabbitMQ), CI/CD and DevSecOps. Led large course projects and built autograding infrastructure used at the University of Toronto.",
  skills: [
    // Programming / Languages
    "Java", "Python", "TypeScript", "JavaScript", "C", "C++", "C#", "Scala", "Haskell", "Lisp",
    "Visual Basic", "Bash", "SQL", "HTML", "CSS", "XML", "JSON",
    // Frameworks / Libraries
    "React", "Angular", "Node.js", "Express", "Spring Boot", "Hibernate", "Struts", "Ruby on Rails",
    // Architecture / Platforms
    "Microservices", "MVC", "UML", "Data Modeling", "Algorithm Design",
    // Cloud / DevOps
    "AWS", "Google Cloud", "Docker", "Kubernetes", "OpenShift", "CI/CD", "DevSecOps",
    // Messaging / Streaming
    "Kafka", "RabbitMQ",
    // Databases
    "Oracle PL/SQL", "PostgreSQL", "MongoDB", "Neo4j", "MySQL", "Redis",
    // Legacy / Multivalue DBs
    "Pick/Multivalue (Universe, Unidata, System Builder)", "IDS",
    // OS
    "Linux", "Unix", "Windows", "macOS", "IBM MVS/390",
    // Other
    "Electronic Data Interchange (EDI)", "Agile/Scrum", "Rapid Prototyping",
  ],
  experience: [
    {
      company: "McMaster University",
      role: "Professor",
      start: "Jan 2024",
      end: "Present",
      bullets: [
        "Teach and mentor students in software engineering and computing.",
        "Guide industry‑aligned projects with modern cloud and DevOps stacks.",
      ],
      tech: ["TypeScript", "React", "Node.js", "Docker", "Kubernetes", "AWS"],
    },
    {
      company: "York University",
      role: "Professor",
      start: "Jan 2022",
      end: "Present",
      bullets: [
        "Course instruction across programming, software engineering, and health informatics.",
      ],
      tech: ["Java", "Python", "PostgreSQL", "React"],
    },
    {
      company: "University of Toronto — MCS Department",
      role: "Programmer",
      start: "Sep 2022",
      end: "Aug 2023",
      bullets: [
        "Developed and maintained autograding systems; contributed to Universal Automarker and MarkUs.",
        "Improved reliability and throughput of grading pipelines with containerization and messaging queues.",
      ],
      tech: ["Python", "Node.js", "Docker", "RabbitMQ", "Redis"],
    },
    {
      company: "University of Toronto — MCS Department",
      role: "Assistant Professor",
      start: "Sep 2017",
      end: "Aug 2022",
      bullets: [
        "Directed 20+ software projects per semester (2016–2022), emphasizing Agile, CI/CD, microservices, and cloud.",
        "Led curriculum on distributed systems, APIs, and data modeling; supervised capstone teams.",
      ],
      tech: [
        "Node.js", "React", "Vue", "Angular", "Java", "Python", "Docker", "Kubernetes", "AWS", "Azure",
        "PostgreSQL", "Oracle", "MongoDB", "Neo4j", "Kafka", "RabbitMQ",
      ],
    },
    {
      company: "George Brown College — ICET Department",
      role: "Professor (Full‑Time)",
      start: "Jan 2015",
      end: "Aug 2017",
      bullets: [
        "Delivered courses in programming and software engineering; built industry partnerships.",
      ],
      tech: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      company: "Centennial College — ICET/SETAS",
      role: "Professor (Part‑Time)",
      start: "Jan 2011",
      end: "Present",
      bullets: [
        "Part‑time instruction in adult education settings across CS topics.",
      ],
      tech: ["Java", "Python", "C", "C++"],
    },
    {
      company: "Asynchron Systems Inc.",
      role: "Programmer/Analyst (Full‑Time)",
      start: "Feb 2000",
      end: "Dec 2014",
      bullets: [
        "Designed, deployed, and maintained manufacturing/accounting/warehousing systems.",
        "Implemented secure XML interfaces and EDI integrations; ensured data integrity and access control.",
      ],
      tech: ["Java", "Oracle PL/SQL", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "CI/CD"],
    },
    {
      company: "Oxford Learning Centre, Toronto",
      role: "Mathematics Tutor (Part‑Time)",
      start: "Sep 2004",
      end: "May 2010",
      bullets: ["Tutored mathematics to adult and secondary students."],
    },
    {
      company: "L/W Media Services Inc., Markham",
      role: "Programmer/Analyst",
      start: "Jul 1999",
      end: "Feb 2000",
      bullets: ["Developed software components and data interfaces for media workflows."],
    },
    {
      company: "Ministry of Agriculture, Tirana, Albania",
      role: "IT Manager",
      start: "Jan 1988",
      end: "Jun 1999",
      bullets: ["Led IT operations and application development for ministry systems."],
    },
    {
      company: "University of Tirana — Dept. of Mathematics",
      role: "Assistant Professor",
      start: "Sep 1990",
      end: "Dec 1991",
      bullets: ["Taught undergraduate mathematics; contributed to departmental initiatives."],
    },
    {
      company: "Agricultural University, Tirana",
      role: "Computer Programming Instructor (Part‑Time); Programmer (Full‑Time)",
      start: "Sep 1987",
      end: "Aug 1990",
      bullets: [
        "Taught programming and built software tools supporting university operations.",
      ],
    },
  ],
  projects: [
    {
      name: "Autograding Systems (Universal Automarker / MarkUs contributions)",
      summary:
        "Developed assignment autograding infrastructure; improved throughput and reliability for large CS courses.",
      links: [],
      tech: ["Python", "Node.js", "Docker", "RabbitMQ", "Redis"],
    },
    {
      name: "Manufacturing/Accounting/Warehousing Platforms",
      summary:
        "Full‑stack design and deployment for enterprise resource workflows, including EDI and XML web interfaces.",
      tech: ["Java", "Oracle PL/SQL", "PostgreSQL", "Redis", "XML", "EDI"],
    },
    {
      name: "SQL Automarker (Research)",
      summary:
        "Co‑authored work on building a better SQL automarker for database courses (Koli Calling).",
      tech: ["PostgreSQL", "SQL", "Education Technology"],
    },
    {
      name: "Celer — Smart Fleet Management (Research)",
      summary:
        "Co‑authored work on optimizing traffic flow in NYC (ACM Technical Symposium on CS Education).",
      tech: ["Data Engineering", "Optimization"],
    },
  ],
  education: [
    {
      school: "University of Toronto",
      program: "PhD, Mathematics (ongoing)",
      start: "2015",
      end: "Present",
    },
    {
      school: "University of Toronto",
      program: "MSc, Mathematics",
      start: "2010",
      end: "2013",
    },
    {
      school: "Centennial College",
      program: "Teacher/Trainer of Adults Certificate (Honours)",
      start: "2011",
      end: "2012",
    },
    {
      school: "University of Tirana, Albania",
      program: "BSc, Mathematics",
      start: "1982",
      end: "1987",
    },
  ],
};

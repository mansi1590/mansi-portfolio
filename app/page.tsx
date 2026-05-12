"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const skills = [
    {
      title: "Backend Development",
      items: [
        "C#",
        "ASP.NET",
        "ASP.NET Core",
        "Web API",
        "Entity Framework",
        "REST API Design",
      ],
    },
    {
      title: "Database & Reporting",
      items: [
        "SQL Server",
        "Stored Procedures",
        "Query Optimization",
        "Crystal Reports",
        "Reporting Systems",
      ],
    },
    {
      title: "Frontend Technologies",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Cloud & Deployment",
      items: [
        "Azure App Services",
        "IIS Hosting",
        "GitHub",
        "Vercel Deployment",
        "Production Support",
      ],
    },
    {
      title: "Enterprise Systems",
      items: [
        "ERP Systems",
        "HRMS",
        "Payroll Systems",
        "Attendance Management",
        "RFID Integration",
        "Reporting Automation",
      ],
    },
    {
      title: "Leadership & Workflow",
      items: [
        "Team Mentoring",
        "Task Management",
        "Client Communication",
        "Debugging",
        "Performance Optimization",
      ],
    },
  ];

  const projects = [
    {
      title: "HRMS Attendance System",
      category: "Enterprise HRMS",
      desc: "Built attendance management features covering employee in/out punches, late mark rules, leave impact, monthly summaries and branch-wise attendance reports.",
      tech: ["C#", "ASP.NET", "SQL Server", "JavaScript"],
    },
    {
      title: "Payroll & Increment Management System",
      category: "HR & Payroll Automation",
      desc: "Developed payroll and increment workflows based on attendance, leave records, salary structure, employee grade, designation, performance score, staff scale and yearly increment rules.",
      tech: ["C#", "ASP.NET", "SQL Server", "Stored Procedures"],
    },
    {
      title: "Holter Monitoring Management System",
      category: "Healthcare Application",
      desc: "Developed healthcare workflow features for Holter monitoring operations including patient registration, transferring patient data to external servers using third-party APIs and automated report delivery to patients.",
      tech: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Web API",
        "Third-Party API",
      ],
    },
    {
      title: "Sales & E-Invoicing Management System",
      category: "Enterprise Business Application",
      desc: "Developed sales management workflows for invoices, proforma invoices, courier tracking and government API integrations for automated e-invoice and e-way bill generation.",
      tech: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Government API",
        "E-Invoice",
      ],
    },
    {
      title: "Service & Warranty Tracking System",
      category: "Service Management",
      desc: "Developed a system to track machines received for servicing, monitor fault history, analyse issues and resolutions and manage warranty tracking.",
      tech: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Workflow Management",
      ],
    },
    {
      title: "Audit & Compliance Management System",
      category: "Medical Device Compliance",
      desc: "Developed audit and compliance workflows including major/minor NC tracking, documentation management, firmware tracking and revision control.",
      tech: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Audit Tracking",
      ],
    },
    {
      title: "Distributed RFID Attendance Sync",
      category: "Integration System",
      desc: "Worked on offline attendance capture using RFID devices and local database storage synced with the central server through APIs.",
      tech: ["C#", "API", "SQL Server"],
    },

    {
      title: "Employee Management API",
      category: "Modern Web API",
      desc: "Built ASP.NET Core Web API with CRUD operations, Entity Framework Core and Swagger documentation.",
      tech: ["ASP.NET Core", "EF Core", "SQL Server"],
    },
    {
      title: "Next.js Portfolio Website",
      category: "Frontend Portfolio",
      desc: "Designed and developed a responsive personal portfolio using Next.js, Tailwind CSS and TypeScript.",
      tech: ["Next.js", "React", "Tailwind CSS"],
    },
  ];

  return (
    <main
      className={`min-h-screen scroll-smooth transition duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-b from-white via-cyan-50 to-gray-100 text-black"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 flex justify-between items-center px-8 md:px-16 py-6 backdrop-blur border-b ${
          darkMode
            ? "bg-slate-950/80 border-slate-800"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <h1 className="text-2xl font-bold text-cyan-500">
          Mansi Shah
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="hover:text-cyan-500 transition duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-5 py-2 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition duration-300"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="/mansi.png"
          alt="Mansi Shah"
          className="w-48 h-48 rounded-full border-4 border-cyan-500 shadow-[0_0_45px_rgba(34,211,238,0.35)] mb-8 object-cover hover:scale-105 transition duration-300"
        />

        <p className="text-cyan-500 uppercase tracking-widest mb-4 font-semibold">
          Full Stack .NET Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-cyan-500">Mansi Shah</span>
        </h1>

        <p
          className={`mt-8 text-lg max-w-3xl leading-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Full Stack Developer with 10+ years of experience building
          enterprise ERP, HRMS, healthcare, compliance and enterprise
          business applications using C#, ASP.NET, ASP.NET Core,
          SQL Server and JavaScript.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {[
            ["View Projects", "#projects"],
            ["Contact Me", "#contact"],
            [
              "LinkedIn",
              "https://www.linkedin.com/in/mansi-shah-8631b2223/",
            ],
            ["GitHub", "https://github.com/mansi1590"],
            ["Download Resume", "/resume.pdf"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              download={
                label === "Download Resume" ? true : undefined
              }
              className="min-w-[190px] text-center px-7 py-4 rounded-2xl bg-cyan-500 text-white font-semibold shadow-md hover:bg-cyan-400 hover:scale-105 transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-16 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold tracking-widest uppercase">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technical Skills & Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`p-8 rounded-3xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300 ${
                darkMode ? "bg-slate-900" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">
                {skill.title}
              </h3>

              <ul
                className={`space-y-4 text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {skill.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-16 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold tracking-widest uppercase">
            Projects
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`p-8 rounded-3xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300 ${
                darkMode ? "bg-slate-900" : "bg-white"
              }`}
            >
              <p className="text-cyan-500 font-semibold text-sm uppercase">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold mt-3 mb-4">
                {project.title}
              </h3>

              <p
                className={`leading-7 mb-6 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 md:px-16 py-24 text-center"
      >
        <h2 className="text-4xl font-bold text-cyan-500 mb-10">
          Contact Me
        </h2>

        <div
          className={`space-y-4 text-lg ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <p>
            Email:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shah.mansi49@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline"
            >
              shah.mansi49@gmail.com
            </a>
          </p>

          <p>Royal Leamington Spa, United Kingdom</p>

          <p>Open to Remote and Hybrid Opportunities</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t py-8 text-center ${
          darkMode
            ? "border-slate-800 text-gray-400"
            : "border-gray-300 text-gray-500"
        }`}
      >
        <p>© 2026 Mansi Shah</p>

        <p className="mt-2">
          Built with Next.js, Tailwind CSS and TypeScript
        </p>
      </footer>
    </main>
  );
}
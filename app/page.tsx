export default function Home() {
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
      items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
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
      title: "Leave Management Workflow",
      category: "Approval System",
      desc: "Implemented employee leave application, approval workflow, leave balance tracking and integration with attendance and payroll modules.",
      tech: ["ASP.NET", "C#", "SQL Server"],
    },
    {
      title: "Holter Monitoring Management System",
      category: "Healthcare Application",
      desc: "Developed healthcare workflow features for Holter monitoring operations including patient registration, medical data management, transferring patient data to external servers using third-party APIs and automated report delivery to patients after medical analysis completion.",
      tech: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Web API",
        "Third-Party API",
        "Email Automation",
      ],
    },
    {
      title: "Sales & E-Invoicing Management System",
      category: "Enterprise Business Application",
      desc: "Developed sales management workflows for invoice generation, proforma invoices, sales tracking and courier tracking. Implemented government API integrations for automated e-invoice and e-way bill generation.",
      tech: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Government API",
        "E-Invoice",
        "E-Way Bill",
      ],
    },
    {
      title: "Service & Warranty Tracking System",
      category: "Service Management",
      desc: "Developed a system to track machines received for servicing, monitor fault history, analyse issues and resolutions, manage repair workflows and maintain warranty tracking.",
      tech: ["C#", "ASP.NET", "SQL Server", "Reporting", "Workflow Management"],
    },
    {
      title: "Audit & Compliance Management System",
      category: "Medical Device Compliance",
      desc: "Developed an audit and compliance tracking system for medical device production, including major/minor NC management, documentation workflows, firmware tracking and revision control.",
      tech: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Audit Tracking",
        "Revision Control",
      ],
    },
    {
      title: "Distributed RFID Attendance Sync",
      category: "Integration System",
      desc: "Worked on offline attendance capture using RFID devices and local database storage, later synced with the central server through APIs.",
      tech: ["C#", "API", "SQL Server", "Access DB"],
    },
    {
      title: "Dynamic Web Form Generator",
      category: "Runtime Configuration",
      desc: "Built dynamic runtime form generation based on master configuration, supporting flexible business forms and client change requests.",
      tech: ["ASP.NET", "C#", "SQL Server", "JavaScript"],
    },
    {
      title: "ERP Recovery & Re-hosting",
      category: "Production Recovery",
      desc: "Recovered and rebuilt critical ERP functionality after a security incident by analysing backups, restoring missing components and verifying business flows.",
      tech: ["ASP.NET", "SQL Server", "IIS"],
    },
    {
      title: "Employee Management API",
      category: "Modern Web API",
      desc: "Built ASP.NET Core Web API with CRUD operations, SQL Server integration, Entity Framework Core and Swagger documentation.",
      tech: ["ASP.NET Core", "EF Core", "SQL Server", "Swagger"],
    },
    {
      title: "Next.js Portfolio Website",
      category: "Frontend Portfolio",
      desc: "Designed and developed a responsive personal portfolio using Next.js, Tailwind CSS and TypeScript as part of frontend internship work.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
  ];

  const experiences = [
    {
      company: "London Success Academy",
      role: "Frontend Development Intern",
      points: [
        "Working on modern frontend development using Next.js, responsive UI design, portfolio development and deployment workflows.",
        "Building practical experience with React components, Tailwind CSS, GitHub and Vercel deployment.",
      ],
    },
    {
      company: "Nasan Medical Electronics Pvt. Ltd.",
      role: "Senior Full Stack Developer",
      points: [
        "Designed, developed and maintained enterprise ERP and HRMS applications using C#, ASP.NET, SQL Server and JavaScript.",
        "Worked on attendance management, payroll processing, leave workflows, employee lifecycle management, reporting systems and production support.",
        "Led developers and testers by assigning tasks, reviewing implementation approaches and ensuring timely delivery of features.",
        "Mentored junior developers in debugging, SQL query optimization, ASP.NET development and production issue resolution.",
        "Collaborated directly with clients and stakeholders to understand requirements, provide technical solutions and support live deployments.",
      ],
    },
    {
      company: "Nasan Medical Electronics",
      role: "Junior Software Engineer",
      points: [
        "Developed internal software modules using ASP.NET, C#, JavaScript, SQL Server and Crystal Reports.",
        "Worked on MFMS software, NasanERP features, reports, database queries and business process automation.",
      ],
    },
    {
      company: "Extreme Digital Solutions Pvt. Ltd.",
      role: "Software Developer",
      points: [
        "Worked on client-based web application development using ASP.NET, C#, SQL Server and JavaScript.",
        "Contributed to dynamic form generation, business workflows, change requests and client requirement implementation.",
      ],
    },
    {
      company: "Intrack Inc.",
      role: "Junior Software Engineer",
      points: [
        "Started my career supporting senior developers in building full-stack .NET applications using C#, ASP.NET and SQL Server.",
        "Worked on audit trail functionality, activity logging, localisation and enterprise application support.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-cyan-50 to-gray-100 text-black scroll-smooth">
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 md:px-16 py-6 bg-white/85 backdrop-blur border-b border-gray-200">
        <h1 className="text-2xl font-bold text-cyan-600">Mansi Shah</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-700">
          {["Home","About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
  key={item}
  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
  className="hover:text-cyan-600 transition duration-300"
>
  {item}
</a>
            )
          )}
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="/mansi.png"
          alt="Mansi Shah"
          className="w-48 h-48 rounded-full border-4 border-cyan-500 shadow-[0_0_45px_rgba(34,211,238,0.35)] mb-8 object-cover hover:scale-105 transition duration-300"
        />

        <p className="text-cyan-600 uppercase tracking-widest mb-4 font-semibold">
          Full Stack .NET Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Hi, I&apos;m <span className="text-cyan-600">Mansi Shah</span>
        </h1>

        <p className="mt-8 text-gray-700 text-lg max-w-3xl leading-8">
          Full Stack Developer with 10+ years of experience building enterprise
          ERP, HRMS, attendance, payroll, reporting, healthcare, service and
          compliance systems using C#, ASP.NET, ASP.NET Core, SQL Server and
          JavaScript.
        </p>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl leading-8">
          Currently expanding frontend expertise through React, Next.js,
          Tailwind CSS and modern deployment workflows as an intern at London
          Success Academy.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {[
            ["View Projects", "#projects"],
            ["Contact Me", "#contact"],
            ["LinkedIn", "https://www.linkedin.com/in/mansi-shah-8631b2223/"],
            ["GitHub", "https://github.com/mansi1590"],
            ["Download Resume", "/resume.pdf"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={label === "Download Resume" ? true : undefined}
              className="min-w-[190px] text-center px-7 py-4 rounded-2xl bg-cyan-500 text-white font-semibold shadow-md hover:bg-cyan-400 hover:scale-105 transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 md:px-16 pb-20 max-w-7xl mx-auto">
        {[
          ["10+", "Years Experience"],
          ["25+", "Business Modules"],
          ["10+", "Developers Mentored"],
          ["1000+", "Users Supported"],
        ].map(([number, label]) => (
          <div
            key={label}
            className="bg-white p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-4xl font-bold text-cyan-600">{number}</h3>
            <p className="text-gray-700 mt-2">{label}</p>
          </div>
        ))}
      </section>

      <section id="about" className="px-8 md:px-16 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-600 mb-10">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-gray-700 leading-8 text-lg">
            I am a Full Stack .NET Developer based in Royal Leamington Spa,
            UK. I have strong experience in enterprise software development,
            backend systems, SQL databases, API integrations, production support
            and technical leadership.
          </p>

          <p className="text-gray-700 leading-8 text-lg">
            I enjoy solving real business problems, improving system
            performance, debugging complex issues and building reliable
            applications that support daily business operations across HR,
            healthcare, sales, service and compliance domains.
          </p>
        </div>
      </section>

      <section id="skills" className="px-8 md:px-16 py-24 bg-cyan-50">
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold tracking-widest uppercase">
            Skills
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Technical Skills & Tools
          </h2>

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Technologies and tools I use to build scalable enterprise
            applications and modern web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {skill.title}
              </h3>

              <ul className="space-y-4 text-gray-700 text-lg">
                {skill.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-cyan-600 text-lg font-medium mt-16">
          Always learning. Always building.
        </p>
      </section>

      <section id="projects" className="bg-white px-8 md:px-16 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold tracking-widest uppercase">
            Projects
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Real-world enterprise applications, integrations and modern web
            projects I have worked on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold mt-3 mb-4 text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-700 leading-7 mb-6">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="px-8 md:px-16 py-24 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-cyan-600 mb-12">
          Professional Experience & Internship
        </h2>

        <div className="space-y-8">
          {experiences.map((job) => (
            <div
              key={job.company}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {job.company}
              </h3>

              <p className="text-cyan-600 mt-2 font-medium">{job.role}</p>

              <ul className="mt-5 space-y-3 text-gray-700 leading-8 list-disc pl-6">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-8 md:px-16 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cyan-600 mb-8">
            Key Achievements
          </h2>

          <ul className="text-gray-700 leading-8 text-lg text-left max-w-4xl mx-auto list-disc pl-6 space-y-4">
            <li>
              Successfully recovered and rebuilt critical ERP functionality
              after a security incident by analysing backups, restoring missing
              application components, verifying business flows and supporting
              successful re-hosting.
            </li>

            <li>
              Converted manual Excel-based business processes into automated
              ERP workflows, improving operational efficiency and reporting
              accuracy.
            </li>

            <li>
              Supported enterprise applications used across multiple branches,
              including attendance, payroll, sales, service and compliance
              workflows.
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="px-8 md:px-16 py-24 text-center">
        <h2 className="text-4xl font-bold text-cyan-600 mb-10">Contact Me</h2>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            Email:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shah.mansi49@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              shah.mansi49@gmail.com
            </a>
          </p>

          <p>Location: Royal Leamington Spa, United Kingdom</p>
          <p>Open to Remote and Hybrid Opportunities</p>
        </div>
      </section>

      <footer className="border-t border-gray-300 py-8 text-center text-gray-500">
        <p>© 2026 Mansi Shah</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS and TypeScript</p>
      </footer>
    </main>
  );
}
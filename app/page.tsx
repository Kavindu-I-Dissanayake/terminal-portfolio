import Terminal from "@/components/Terminal";
import ScrollToTopOnLoad from "@/components/ScrollToTopOnLoad";

<main className="min-h-screen bg-zinc-950 text-zinc-100">
  <ScrollToTopOnLoad />
  ...
</main>

const projects = [
  {
    title: "Fake Attendance Detector",
    desc: "Mobile + backend system using computer vision to detect fake attendance attempts.",
    tags: ["React Native", "FastAPI", "YOLO", "OpenCV"],
    link: "https://github.com/Kavindu-I-Dissanayake/Fake-Attendance-Detector",
    highlight: "Computer Vision + Security Use-case",
  },
  {
    title: "Transport Management System",
    desc: "Management system to handle transportation operations with database + CRUD workflows.",
    tags: ["Full Stack", "Database", "CRUD"],
    link: "https://github.com/Kavindu-I-Dissanayake/MSI_Project",
    highlight: "System Design + Data Handling",
  },
  {
    title: "URL Shortener",
    desc: "Shorten links, store them, and redirect efficiently with clean routing logic.",
    tags: ["Backend", "Routing", "DB"],
    link: "https://github.com/Kavindu-I-Dissanayake/CodeAlpha_URL_Shortener",
    highlight: "Clean API + Routing",
  },
];

const skillGroups = [
  {
    title: "Networking",
    items: ["CCNA (studying)", "TCP/IP", "Subnetting", "Routing basics", "Packet analysis basics"],
  },
  {
    title: "Cybersecurity",
    items: ["Security mindset", "OWASP concepts", "Secure API basics", "Auth/Authorization basics"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Spring Boot", "Node.js/Express", "REST APIs", "MongoDB / MySQL"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "HTML/CSS", "JavaScript", "Responsive UI"],
  },
];

const quickStats = [
  { label: "Focus", value: "Networking + Security + Full Stack" },
  { label: "Stack", value: "MERN • Spring Boot • FastAPI" },
  { label: "Location", value: "Sri Lanka • Open to Remote" },
  { label: "Special", value: "Computer Vision Projects" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16,185,129,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.25) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 50% 15%, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 15%, black 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-14 space-y-16">
        {/* Top bar */}
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl border border-emerald-500/30 bg-black/40 overflow-hidden transition duration-200 hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">
              <img
                src="/me.jpg"
                alt="Kavindu Dissanayake"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-base sm:text-lg text-zinc-1200 font-semibold leading-tight">
                Kavindu Dissanayake
              </p>
              <p className="text-xs text-zinc-400">Network • Cybersecurity • Full Stack</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <a className="rounded-xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900" href="#about">
              About
            </a>
            <a className="rounded-xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900" href="#skills">
              Skills
            </a>
            <a className="rounded-xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900" href="#projects">
              Projects
            </a>
            <a className="rounded-xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero */}
        <header className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="text-sm text-zinc-400">Sri Lanka • Open to Remote</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Building secure, practical systems.</h1>
            <p className="text-lg text-zinc-300 max-w-xl">
              I’m a networking & cybersecurity student who builds full-stack applications (MERN + Spring Boot) and
              enjoys projects that combine security + automation + clean backend design.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-emerald-400/90 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-emerald-300"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="rounded-xl border border-emerald-500/30 bg-black/30 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
              >
                Explore About
              </a>
              <a
                href="https://github.com/Kavindu-I-Dissanayake"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kavindu-induwara-dissanayake-43b181242"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold hover:bg-zinc-900"
              >
                LinkedIn
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {quickStats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-zinc-800 bg-black/30 p-4 backdrop-blur">
                  <p className="text-xs text-zinc-500">{s.label}</p>
                  <p className="mt-1 text-sm text-zinc-200">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side featured card */}
          <div className="rounded-3xl border border-emerald-500/20 bg-black/30 p-6 backdrop-blur">
            <p className="text-sm text-emerald-300 font-mono">$ status --now</p>
            <div className="mt-4 space-y-3 text-zinc-200">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p>
                  Studying <span className="text-zinc-100 font-semibold">CCNA</span> and strengthening networking fundamentals.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p>
                  Building with <span className="text-zinc-100 font-semibold">MERN</span>,{" "}
                  <span className="text-zinc-100 font-semibold">Spring Boot</span>, and{" "}
                  <span className="text-zinc-100 font-semibold">FastAPI</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p>
                  Interested in <span className="text-zinc-100 font-semibold">secure APIs</span>, auth systems, and practical security projects.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/40 p-4">
              <p className="text-xs text-zinc-500">Featured highlight</p>
              <p className="mt-1 text-sm text-zinc-200">Fake Attendance Detector — Computer Vision applied to prevent fraud.</p>
              <a
                className="mt-3 inline-block text-sm text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                href="https://github.com/Kavindu-I-Dissanayake/Fake-Attendance-Detector"
                target="_blank"
                rel="noreferrer"
              >
                Open on GitHub →
              </a>
            </div>
          </div>
        </header>

        {/* About */}
        <section id="about" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-bold">
              <span className="text-emerald-300">#</span> About
            </h2>
            <p className="text-sm text-zinc-400">Explore my profile interactively</p>
          </div>

          {/* NOTE: Changed to lg:grid-cols-12 and adjusted spans so Terminal area is wider */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Left column (narrower) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-zinc-100">Quick summary</p>
                <p className="mt-2 text-sm text-zinc-300">
                  Sri Lanka-based student focused on networking and cybersecurity, pursuing CCNA while building full-stack apps with MERN, Spring Boot, and FastAPI.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5 backdrop-blur text-zinc-300 leading-relaxed">
                <p>
                  I like clean backend architecture, secure authentication flows, and systems that feel “real-world”:
                  roles, validation, logging, and reliability.
                </p>
                <p className="mt-3">
                  The interactive terminal is a quick way to explore my portfolio type commands and navigate like you would in Linux.
                </p>
              </div>
            </div>

            {/* Right column (wider) */}
            <div className="lg:col-span-9 space-y-4">
              {/* Sub heading above terminal row */}
              <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-zinc-100">Interactive Terminal</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Browse my skills, projects, and latest GitHub repositories — Linux shell style.
                </p>
              </div>

              {/* Terminal + Guide row */}
              <div className="grid gap-6 lg:grid-cols-12 items-stretch">
                {/* Terminal (WIDER) */}
                <div className="lg:col-span-8 rounded-2xl border border-emerald-500/20 bg-black/30 backdrop-blur">
                  <Terminal />
                </div>

                {/* Guide (RIGHT side, match height) */}
                <div className="lg:col-span-4 rounded-2xl border border-emerald-500/20 bg-black/30 p-5 backdrop-blur h-full min-h-[260px] md:min-h-[320px] flex flex-col">
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">Terminal Guide</p>
                    <p className="mt-2 text-sm text-zinc-300">
                      Quick commands you can use:
                    </p>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm text-zinc-300">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-emerald-300">help</span>
                      <span className="text-zinc-500">show commands</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-emerald-300">about</span>
                      <span className="text-zinc-500">my summary</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-emerald-300">skills</span>
                      <span className="text-zinc-500">my skills</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-emerald-300">projects</span>
                      <span className="text-zinc-500">featured work</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-emerald-300">repos</span>
                      <span className="text-zinc-500">latest repos</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-emerald-300">project fake-attendance</span>
                      <span className="text-zinc-500">open project</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 text-xs text-zinc-500">
                    Tip: press <span className="font-mono text-zinc-300">Tab</span> to autocomplete.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-bold">
            <span className="text-emerald-300">#</span> Skills
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-zinc-800 bg-black/30 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-zinc-100">{g.title}</p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-300">
                  {g.items.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-bold">
              <span className="text-emerald-300">#</span> Projects
            </h2>
            <a
              className="text-sm text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              href="https://github.com/Kavindu-I-Dissanayake"
              target="_blank"
              rel="noreferrer"
            >
              View all on GitHub →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-zinc-800 bg-black/30 p-5 backdrop-blur hover:border-emerald-500/30"
              >
                <p className="text-xs text-emerald-300">{p.highlight}</p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-100">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200">Open project →</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6">
          <h2 className="text-2xl font-bold">
            <span className="text-emerald-300">#</span> Contact
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
  <ContactCard
    title="Email"
    value="kavinduinduwara0460@gmail.com"
    href="mailto:kavinduinduwara0460@gmail.com"
    icon="email"
  />
  <ContactCard
    title="GitHub"
    value="Kavindu-I-Dissanayake"
    href="https://github.com/Kavindu-I-Dissanayake"
    icon="github"
  />
  <ContactCard
    title="LinkedIn"
    value="kavindu-induwara-dissanayake"
    href="https://linkedin.com/in/kavindu-induwara-dissanayake-43b181242"
    icon="linkedin"
  />
</div>

          <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5 text-sm text-zinc-300">
            If you’re looking for a motivated junior developer who’s serious about networking + security fundamentals,
            I’d love to connect.
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Kavindu Dissanayake • Built with Next.js
        </footer>
      </div>
    </main>
  );
}

function ContactCard({
  title,
  value,
  href,
  icon,
}: {
  title: string;
  value: string;
  href: string;
  icon: "email" | "github" | "linkedin";
}) {
  const isHttp = href.startsWith("http");

  return (
    <a
      href={href}
      target={isHttp ? "_blank" : undefined}
      rel={isHttp ? "noreferrer" : undefined}
      className="group rounded-2xl border border-zinc-800 bg-black/30 p-5 backdrop-blur hover:border-emerald-500/30"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-zinc-800 bg-black/40 p-2 text-emerald-300 group-hover:border-emerald-500/30">
          <Icon name={icon} />
        </div>

        <div className="min-w-0">
          <p className="text-xs text-zinc-500">{title}</p>
          <p className="mt-2 text-sm text-zinc-200 underline underline-offset-4 break-words">
            {value}
          </p>
        </div>
      </div>
    </a>
  );
}

function Icon({ name }: { name: "email" | "github" | "linkedin" }) {
  const common = "h-5 w-5";

  if (name === "email") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16v12H4V6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 7l7.5 6 7.5-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.17-3.35-1.17-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.21-.25-4.53-1.11-4.53-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.55 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // linkedin
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 9.5H4.5V19.5H6.5V9.5Z"
        fill="currentColor"
      />
      <path
        d="M5.5 8.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
        fill="currentColor"
      />
      <path
        d="M10 9.5h-2v10h2v-5.2c0-2.9 3.5-3.1 3.5 0v5.2h2v-6c0-4.6-4.9-4.4-5.5-2.2V9.5Z"
        fill="currentColor"
      />
      <path
        d="M20 4.5H4a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 4 19.5h16a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 20 4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

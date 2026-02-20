"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Line =
  | { kind: "text"; text: string }
  | { kind: "link"; label: string; href: string }
  | { kind: "divider" }
  | { kind: "cmd"; text: string };

const profile = {
  name: "Kavindu Dissanayake",
  title: "Network & Cybersecurity Student • Full-Stack Developer",
  location: "Sri Lanka • Open to Remote",
  email: "kavinduinduwara0460@gmail.com",
  githubUser: "Kavindu-I-Dissanayake",
  github: "https://github.com/Kavindu-I-Dissanayake",
  linkedin: "https://linkedin.com/in/kavindu-induwara-dissanayake-43b181242",
};

const projects = [
  {
    id: "fake-attendance",
    name: "Fake Attendance Detector",
    desc: "Mobile app + backend using computer vision to detect fake attendance attempts.",
    github: "https://github.com/Kavindu-I-Dissanayake/Fake-Attendance-Detector",
  },
  {
    id: "transport",
    name: "Transport Management System",
    desc: "Transport management system with database + CRUD features.",
    github: "https://github.com/Kavindu-I-Dissanayake/MSI_Project",
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    desc: "URL shortening service with redirects + stored links.",
    github: "https://github.com/Kavindu-I-Dissanayake/CodeAlpha_URL_Shortener",
  },
];

const COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "project",
  "repos",
  "github",
  "linkedin",
  "email",
  "clear",
];

function promptText() {
  return "kavindu@portfolio:~$";
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { kind: "text", text: "KavinduOS — Terminal Portfolio" },
    { kind: "text", text: "Type `help` to see commands." },
    { kind: "divider", text: "" } as any, // (kept output format consistent below)
    { kind: "text", text: `${profile.name} — ${profile.title}` },
    { kind: "text", text: profile.location },
    { kind: "divider", text: "" } as any,
  ]);

  const [reposCache, setReposCache] = useState<any[] | null>(null);

  const boxRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight });
  }, [lines]);

 useEffect(() => {
  (inputRef.current as any)?.focus?.({ preventScroll: true });
}, []);

  const suggestions = useMemo(() => {
    const t = input.trim().toLowerCase();
    if (!t) return COMMANDS;
    const [cmd] = t.split(/\s+/);
    return COMMANDS.filter((c) => c.startsWith(cmd));
  }, [input]);

  function add(...l: Line[]) {
    setLines((prev) => [...prev, ...l]);
  }

  async function fetchRepos() {
    const res = await fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`
    );
    if (!res.ok) throw new Error("GitHub API error / rate limit");
    const data = (await res.json()) as any[];
    return data.filter((r) => !r.fork).slice(0, 8);
  }

  function runCommand(raw: string) {
    const cmdLine = raw.trim();
    add({ kind: "cmd", text: `${promptText()} ${cmdLine}` });
    if (!cmdLine) return;

    const [cmd, ...args] = cmdLine.split(/\s+/);
    const c = cmd.toLowerCase();

    if (c === "help") {
      add(
        { kind: "text", text: "Commands:" },
        { kind: "text", text: "  help        about     skills     projects" },
        { kind: "text", text: "  project <id> repos     github     linkedin" },
        { kind: "text", text: "  email       clear" },
        { kind: "divider" }
      );
      return;
    }

    if (c === "clear") {
      setLines([{ kind: "text", text: "Terminal cleared. Type `help`." }, { kind: "divider" }]);
      return;
    }

    if (c === "about") {
      add(
        { kind: "text", text: "About:" },
        { kind: "text", text: "  Studying CCNA • MERN • Spring Boot" },
        { kind: "text", text: "  Interested in networking, cybersecurity, and secure backend systems." },
        { kind: "divider" }
      );
      return;
    }

    if (c === "skills") {
      add(
        { kind: "text", text: "Skills:" },
        { kind: "text", text: "  Networking: CCNA (studying), TCP/IP, subnetting" },
        { kind: "text", text: "  Backend: FastAPI, Spring Boot, Node/Express, REST APIs" },
        { kind: "text", text: "  Frontend: React, React Native, HTML/CSS, JS" },
        { kind: "divider" }
      );
      return;
    }

    if (c === "projects") {
      add(
        { kind: "text", text: "Projects:" },
        ...projects.map((p) => ({ kind: "text", text: `  ${p.id} — ${p.name}` }) as Line),
        { kind: "text", text: "Tip: `project fake-attendance`" },
        { kind: "divider" }
      );
      return;
    }

    if (c === "project") {
      const id = (args[0] || "").toLowerCase();
      const p = projects.find((x) => x.id === id);
      if (!p) {
        add({ kind: "text", text: "Project not found. Use `projects` to see ids." }, { kind: "divider" });
        return;
      }
      add(
        { kind: "text", text: p.name },
        { kind: "text", text: `  ${p.desc}` },
        { kind: "link", label: "Open GitHub →", href: p.github },
        { kind: "divider" }
      );
      return;
    }

    if (c === "github") {
      add({ kind: "link", label: "GitHub Profile →", href: profile.github }, { kind: "divider" });
      return;
    }

    if (c === "linkedin") {
      add({ kind: "link", label: "LinkedIn Profile →", href: profile.linkedin }, { kind: "divider" });
      return;
    }

    if (c === "email") {
      add({ kind: "link", label: profile.email, href: `mailto:${profile.email}` }, { kind: "divider" });
      return;
    }

    if (c === "repos") {
      add({ kind: "text", text: "Fetching latest repos..." });
      (async () => {
        try {
          const repos = reposCache ?? (await fetchRepos());
          setReposCache(repos);

          add({ kind: "text", text: "Latest repos:" });
          repos.forEach((r) => {
            add({
              kind: "link",
              label: `${r.name}${r.language ? ` • ${r.language}` : ""} ★${r.stargazers_count ?? 0}`,
              href: r.html_url,
            });
            if (r.description) add({ kind: "text", text: `  ${r.description}` });
          });
          add({ kind: "divider" });
        } catch {
          add({ kind: "text", text: "Failed to fetch repos (rate limit). Try later." }, { kind: "divider" });
        }
      })();
      return;
    }

    add({ kind: "text", text: `Command not found: ${cmd}. Type help.` }, { kind: "divider" });
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const v = input;
      setInput("");
      runCommand(v);
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      if (suggestions.length === 1) setInput(suggestions[0] + " ");
    }
  }

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-emerald-500/20 bg-black/50 overflow-hidden w-full">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-emerald-500/10 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>
          <p className="text-xs text-zinc-400">terminal — kavindu</p>
        </div>

        {/* Terminal content */}
        <div
  ref={boxRef}
  className="h-[260px] md:h-[320px] overflow-y-auto px-4 py-3 font-mono text-sm text-emerald-300"
>

          {lines.map((l, i) => {
            if (l.kind === "divider") return <div key={i} className="my-3 border-t border-emerald-500/10" />;
            if (l.kind === "cmd") return <div key={i} className="text-zinc-300">{l.text}</div>;
            if (l.kind === "link") {
              return (
                <div key={i} className="my-1">
                  <a
                    className="text-emerald-300 underline hover:text-emerald-200"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                </div>
              );
            }
            return <div key={i} className="my-1 whitespace-pre-wrap">{(l as any).text}</div>;
          })}

          <div className="mt-3 flex items-center gap-2">
            <span className="text-emerald-300">{promptText()}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="flex-1 bg-transparent outline-none"
              placeholder="help"
              spellCheck={false}
            />
          </div>

          <div className="mt-2 text-xs text-zinc-600">
            Suggestions: {suggestions.slice(0, 6).join(", ")} (Tab to autocomplete)
          </div>
        </div>
      </div>
    </div>
  );
}

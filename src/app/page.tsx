import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Code2, Terminal, GraduationCap, Sparkles, ExternalLink, Menu, Braces, Layers3, BrainCircuit } from "lucide-react";

const github = "https://github.com/Yeshrat-Zerin-Yera";
const linkedin = "https://www.linkedin.com/in/yeshrat-zerin-yera/";
const email = "yeshratzerinyera@gmail.com";
// Replace the two featured project entries below with the exact project names/descriptions from LinkedIn.
// Repository links are kept editable and intentionally point to the owner's public GitHub profile by default.
const projects = [
  {
    number: "01", name: "🎓 SkillWizard — Online Learning Platform",
    description: " SkillWizard is a responsive online learning platform website designed to showcase courses, instructors, student experiences, and educational resources through a modern and user-friendly interface. https://yeshrat-zerin-yera.github.io/SkillWizard-Bootstrap/",
    stack: ["Project details", "Implementation", "Problem solving"],
    repo: github, visual: "01", symbol: "⌘"
  },
  {
    number: "02", name: "🏥 Best Care — Healthcare Service Platform",
    description: " Best Care is a modern healthcare service platform built with React, Tailwind CSS, and DaisyUI. The application allows users to explore healthcare treatments, authenticate securely, and interact with a responsive and user-friendly interface. https://best-care-58ee6.web.app/",
    stack: ["Development", "Learning", "Iteration"],
    repo: github, visual: "02", symbol: "{ }"
  }
];
const skillGroups = [
  { icon: Code2, title: "Languages & fundamentals", skills: ["C", "C++", "JavaScript", "HTML", "CSS", "Problem solving"] },
  { icon: Layers3, title: "Web development", skills: ["React", "Next.js", "Tailwind CSS", "Responsive UI", "Git & GitHub"] },
  { icon: BrainCircuit, title: "How I work", skills: ["Logical thinking", "Debugging", "Continuous learning", "Team collaboration"] }
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090b10]/85 backdrop-blur-xl">
        <nav className="container-wide flex h-[74px] items-center justify-between" aria-label="Main navigation">
          <Link href="#home" className="flex items-center gap-2 font-bold tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 text-sm font-black text-black">Y.</span><span>Yeshrat<span className="text-lime-300">.</span></span></Link>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link className="hover:text-lime-300" href="#about">About</Link><Link className="hover:text-lime-300" href="#skills">Skills</Link><Link className="hover:text-lime-300" href="#projects">Projects</Link><Link className="hover:text-lime-300" href="#education">Education</Link>
          </div>
          <Link href="#contact" className="btn btn-sm btn-accent rounded-full px-5">Let&apos;s talk <ArrowUpRight size={15}/></Link>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 top-12 h-96 w-96 rounded-full bg-lime-300/10 blur-[120px]"/>
        <div className="container-wide grid min-h-[calc(100vh-74px)] items-center gap-12 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-4 py-2 text-xs text-lime-200"><span className="h-2 w-2 rounded-full bg-lime-300"/> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="eyebrow mb-5">Developer · Problem solver · Lifelong learner</p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-[-.065em] sm:text-6xl lg:text-[5.4rem]">Turning ideas<br/>into <span className="accent-text">digital</span><br/>experiences<span className="text-lime-300">.</span></h1>
            <p className="muted mt-7 max-w-xl text-base leading-8 sm:text-lg">Hi, I&apos;m <strong className="text-white">Yeshrat Zerin Yera</strong>. I&apos;m strengthening my software development foundations and building projects that help me learn by doing—one thoughtful solution at a time.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="#projects" className="btn btn-accent rounded-full px-6">Explore my work <ArrowDownRight size={17}/></Link><a href={linkedin} target="_blank" rel="noreferrer" className="btn btn-outline rounded-full border-white/15 px-6 text-white hover:border-lime-300 hover:bg-lime-300/10">Connect on LinkedIn <ArrowUpRight size={16}/></a></div>
            <div className="mt-12 flex flex-wrap items-center gap-5 text-sm text-slate-400"><a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-lime-300"><Github size={17}/> GitHub</a><span className="h-1 w-1 rounded-full bg-slate-600"/><a href={`mailto:${email}`} className="inline-flex items-center gap-2 hover:text-lime-300"><Mail size={17}/> Email me</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-4 rounded-[2rem] border border-lime-300/15 rotate-3"/>
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#12151d] p-3 shadow-2xl shadow-black/40">
              <div className="grid-dots relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#202b23] via-[#171b22] to-[#0d0f15]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent"/>
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs text-slate-300 backdrop-blur">PORTFOLIO / 2026</div>
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-7 text-center">
                  <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full border-2 border-lime-300/70 bg-[#252b27] shadow-xl shadow-lime-300/10 sm:h-56 sm:w-56">
                    <Image src="/IMG_6866.PNG" alt="Portrait of Yeshrat Zerin Yera" fill sizes="(max-width: 640px) 192px, 224px" className="object-cover" priority unoptimized onError={undefined}/>
                  </div>
                  <p className="text-xl font-bold">Yeshrat Zerin Yera</p><p className="mt-2 text-sm text-slate-400">Learning. Building. Improving.</p>
                  <div className="mt-6 flex gap-2"><span className="tag">Curious mind</span><span className="tag">Builder</span></div>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-4 text-xs text-slate-400"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime-300"/> Always learning</span><span>01 / INTRO</span></div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#151922] p-4 shadow-xl sm:block"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300/10 text-lime-300"><Braces size={20}/></span><div><p className="text-sm font-semibold">Build with purpose</p><p className="mt-1 text-xs text-slate-400">One commit at a time</p></div></div></div>
          </div>
        </div>
      </section>

      <section id="about" className="section border-t border-white/5">
        <div className="container-wide grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow mb-4">01 / A little about me</p><h2 className="section-title">Curiosity is where<br/>good code begins.</h2></div>
          <div><p className="text-lg leading-8 text-slate-300">I&apos;m a developer in progress who enjoys understanding how things work—not just making them work. My journey combines programming fundamentals, practical web development, and a growing interest in building useful digital products.</p><p className="muted mt-5 leading-8">I believe strong developers keep asking questions, learn from debugging, and improve through consistent practice. I&apos;m focused on growing my technical depth, documenting what I build, and connecting with people who enjoy solving meaningful problems.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3"><div className="glass rounded-2xl p-4"><Terminal className="mb-4 text-lime-300" size={21}/><p className="font-semibold">Fundamentals</p><p className="mt-2 text-sm text-slate-400">Build understanding from the ground up.</p></div><div className="glass rounded-2xl p-4"><Code2 className="mb-4 text-lime-300" size={21}/><p className="font-semibold">Hands-on</p><p className="mt-2 text-sm text-slate-400">Turn learning into real projects.</p></div><div className="glass rounded-2xl p-4"><Sparkles className="mb-4 text-lime-300" size={21}/><p className="font-semibold">Growth mindset</p><p className="mt-2 text-sm text-slate-400">Stay curious and keep improving.</p></div></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section bg-[#0d1016]">
        <div className="container-wide"><p className="eyebrow mb-4">02 / My toolkit</p><div className="mb-12 flex flex-wrap items-end justify-between gap-5"><h2 className="section-title">Technical skills</h2><p className="muted max-w-md leading-7">A snapshot of the tools and foundations I&apos;m developing. This list is intentionally easy to update as my experience grows.</p></div>
          <div className="grid gap-4 md:grid-cols-3">{skillGroups.map((group) => { const Icon = group.icon; return <article key={group.title} className="glass rounded-3xl p-6 sm:p-7"><div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-lime-300/10 text-lime-300"><Icon size={23}/></div><h3 className="mb-5 text-lg font-bold">{group.title}</h3><div className="flex flex-wrap gap-2">{group.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></article>})}</div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container-wide"><p className="eyebrow mb-4">03 / Selected work</p><div className="mb-12 flex flex-wrap items-end justify-between gap-5"><h2 className="section-title">Projects that move<br/>me forward<span className="accent-text">.</span></h2><a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-lime-300 hover:text-lime-200">Browse GitHub <ArrowUpRight size={16}/></a></div>
          <div className="grid gap-5 md:grid-cols-2">{projects.map(project => <article key={project.number} className="project-card glass overflow-hidden rounded-3xl"><div className="grid-dots relative flex h-52 items-center justify-between overflow-hidden border-b border-white/5 bg-gradient-to-br from-[#1b2920] to-[#11141c] px-8"><span className="absolute -right-8 -top-16 h-56 w-56 rounded-full border border-lime-300/15"/><span className="absolute -right-1 -top-8 h-40 w-40 rounded-full border border-lime-300/15"/><span className="relative text-xs tracking-[.2em] text-slate-400">SELECTED WORK / {project.number}</span><span className="relative grid h-20 w-20 place-items-center rounded-2xl border border-lime-300/25 bg-lime-300/10 text-3xl text-lime-300">{project.symbol}</span></div><div className="p-7 sm:p-8"><div className="mb-4 flex items-center justify-between"><span className="eyebrow">Project {project.number}</span><a aria-label={`Open ${project.name} on GitHub`} href={project.repo} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-slate-300 hover:text-lime-300"><ExternalLink size={16}/></a></div><h3 className="text-2xl font-bold tracking-tight">{project.name}</h3><p className="muted mt-4 min-h-20 leading-7">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="tag">{item}</span>)}</div><a href={project.repo} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 hover:text-lime-200">View source <ArrowUpRight size={16}/></a></div></article>)}</div>
          <p className="mt-5 text-xs leading-6 text-slate-500">Before publishing, replace the two example project titles and descriptions with the exact projects from LinkedIn and link each card directly to its repository or live demo.</p>
        </div>
      </section>

      <section id="education" className="section border-y border-white/5 bg-[#0d1016]">
        <div className="container-wide grid gap-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow mb-4">04 / Education</p><h2 className="section-title">Learning is<br/>part of the work.</h2></div><div className="glass flex gap-5 rounded-3xl p-6 sm:p-8"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lime-300/10 text-lime-300"><GraduationCap size={27}/></div><div><h3 className="text-xl font-bold">Rabindra Maitree University</h3><p className="mt-2 text-slate-300">Bachelor of Science - BS</p><p className="muted mt-3 leading-7">Academic learning alongside independent practice in programming and software development.</p><p className="mt-4 text-xs text-slate-500">Grade: 3.95</p></div></div></div>
      </section>

      <section id="contact" className="section">
        <div className="container-wide"><div className="relative overflow-hidden rounded-[2rem] border border-lime-300/15 bg-gradient-to-br from-[#1a2519] via-[#11151b] to-[#101219] p-8 sm:p-14"><div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-lime-300/10 blur-[90px]"/><div className="relative z-10 max-w-3xl"><p className="eyebrow mb-5">05 / Start a conversation</p><h2 className="section-title text-4xl sm:text-6xl">Have an idea?<br/>Let&apos;s connect<span className="accent-text">.</span></h2><p className="muted mt-6 max-w-xl text-lg leading-8">I&apos;m happy to connect with developers, exchange ideas, and explore opportunities to learn and build together.</p><div className="mt-9 flex flex-wrap gap-3"><a href={`mailto:${email}`} className="btn btn-accent rounded-full px-6"><Mail size={17}/> Send me an email</a><a href={linkedin} target="_blank" rel="noreferrer" className="btn btn-outline rounded-full border-white/15 px-6 text-white hover:border-lime-300"><Linkedin size={17}/> LinkedIn</a><a href={github} target="_blank" rel="noreferrer" className="btn btn-outline rounded-full border-white/15 px-6 text-white hover:border-lime-300"><Github size={17}/> GitHub</a></div><p className="mt-6 text-sm text-slate-400">{email}</p></div></div></div>
      </section>

      <footer className="border-t border-white/5 py-7"><div className="container-wide flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row"><Link href="#home" className="font-bold text-slate-300">Yeshrat<span className="text-lime-300">.</span></Link><p>Designed with intention · Built with Next.js & Tailwind CSS</p><div className="flex gap-4"><a href={github} aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-lime-300"><Github size={18}/></a><a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hover:text-lime-300"><Linkedin size={18}/></a><a href={`mailto:${email}`} aria-label="Email" className="hover:text-lime-300"><Mail size={18}/></a></div></div></footer>
    </main>
  );
}

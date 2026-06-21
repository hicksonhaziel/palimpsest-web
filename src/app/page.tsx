"use client";

import Image from "next/image";
import { Manrope } from "next/font/google";
import { useEffect, type ReactNode } from "react";

const appIconUrl = "/icon.png";
const downloadUrl = "https://github.com/hicksonhaziel/Palimpsest/blob/main/BUILD.md";
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
const smallIconUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5MyoOWOznCXlf6O_XYBBJYhVy_Q000fu3dhZY69UvYWaT2lF9aKHb7yjfkc9eLeMqk-orc7j_8Bs2qdEMfLpRsrhGC8RkIqafAS071_9nJkkZbqcsBhhkpIPYjjo30baLuJiWTSlRemSSnfbUvilOf-m3DhIjDNWiGtA9Lehpilvtnd3kE4K2FJgPUNhiYsyE64DvwD-reiuvKxzed3nbjbmj3hVsDNvUR1jp5_yKvxXTMLxre1Kw_eI3NrKdCb2_Og";
const centerNodeUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDaLLp57xI3iaGvF1ma7gVFk0VfQEVDGAY1ZqjgoratoTtXE-JvgmgYEGtWVbebTA8lmBRmKw829lsbrTGBGfgquM9-bKjcwaXW7bR0HtzwtVCw3f9m3hs0XRMUz9-8ISeIiQ2bWqWNnpzOglP6SdzP_M3ESRK4UMZLwUY1nmWYNBZ5nylysA5IhrGd9iTasNkBUUcR92qXX1uVadS5fczs2D6cuwI1vBemiHN8IkQjy-kS8aW9Pm5moMK8R7J7QoKldg";

type IconName =
  | "cloud_off"
  | "description"
  | "expand_more"
  | "fact_check"
  | "folder_open"
  | "grain"
  | "history_edu"
  | "hub"
  | "laptop_mac"
  | "psychology"
  | "search"
  | "security"
  | "sticky_note_2"
  | "tab"
  | "terminal"
  | "window";

function Icon({ className = "", name }: { className?: string; name: IconName }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <main className={`${manrope.variable} ${manrope.className} min-h-screen bg-[#f5f7fb] text-on-surface dark:bg-background`}>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/40 bg-[#f5f7fb]/85 backdrop-blur-xl dark:bg-surface/80">
        <div className="mx-auto flex w-full max-w-max-width items-center justify-between gap-4 px-margin-desktop py-3 sm:py-4">
          <div className="flex items-center gap-3">
            <Image
              alt="Palimpsest Logo"
              className="h-9 w-9 rounded-lg sm:h-11 sm:w-11"
              height={44}
              src={appIconUrl}
              width={44}
            />
            <span className="font-headline-lg text-[18px] tracking-tighter text-on-surface sm:text-[20px]">
              Palimpsest
            </span>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <a
              className="font-body-md text-body-md text-on-surface-variant/80 transition-colors duration-300 hover:text-primary"
              href="#process"
            >
              Process
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant/80 transition-colors duration-300 hover:text-primary"
              href="#features"
            >
              Features
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant/80 transition-colors duration-300 hover:text-primary"
              href="#stack"
            >
              Stack
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant/80 transition-colors duration-300 hover:text-primary"
              href="#faq"
            >
              FAQ
            </a>
          </div>
          <a
            className="shrink-0 rounded-md bg-primary px-4 py-2.5 font-body-md text-xs font-bold text-on-primary transition-all hover:opacity-90 active:opacity-80 sm:px-6 sm:text-sm"
            href={downloadUrl}
            rel="noreferrer"
            target="_blank"
          >
            Download Beta
          </a>
        </div>
      </nav>

      <header className="relative mx-auto max-w-[1000px] px-margin-desktop pb-20 pt-36 text-center sm:pb-24 sm:pt-44 md:pb-32 md:pt-48">
        <h1 className="mb-6 font-display-lg text-[clamp(2.35rem,11vw,3rem)] leading-[1.05] text-on-surface sm:mb-8 md:text-display-lg">
          Your private memory, searchable <br className="hidden md:block" /> on your own
          machine.
        </h1>
        <p className="mx-auto mb-10 max-w-[720px] font-body-md text-base leading-relaxed text-on-surface-variant sm:mb-12 sm:text-lg md:text-[20px]">
          Palimpsest captures your notes, files, screenshots, audio, and video, then turns
          them into a local AI memory you can search, question, and map without sending your
          data to the cloud.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            className="w-full rounded-md bg-primary px-8 py-4 font-body-md font-bold text-on-primary transition-all hover:opacity-90 active:opacity-80 sm:w-auto sm:px-10"
            href={downloadUrl}
            rel="noreferrer"
            target="_blank"
          >
            Download Beta
          </a>
          <a
            className="w-full rounded-md bg-on-surface/5 px-8 py-4 font-body-md text-on-surface backdrop-blur-md transition-all hover:bg-on-surface/10 active:bg-on-surface/15 sm:w-auto sm:px-10"
            href="#process"
          >
            See how it works
          </a>
        </div>

        <div className="relative mt-16 sm:mt-20 md:mt-24">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#f5f7fb] via-transparent to-transparent dark:from-background" />
          <div className="glass-panel flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border-outline-variant/40 p-2 sm:aspect-[16/9] sm:p-4">
            <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-surface-container">
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="constellation-line absolute left-0 top-1/4 w-full" />
                <div className="constellation-line absolute left-0 top-2/4 w-full" />
                <div className="constellation-line absolute left-0 top-3/4 w-full" />
              </div>
              <div className="z-20 text-center">
                <Icon className="mb-4 text-6xl text-primary/40" name="security" />
                <p className="font-label-mono uppercase tracking-widest text-on-surface-variant">
                  Encrypted Local Vault
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#eef2f7] px-margin-desktop py-20 dark:bg-surface-container-lowest md:py-32">
        <div className="mx-auto flex max-w-max-width flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="mb-5 font-headline-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg md:mb-6">
              Context is scattered. <br />
              <span className="text-primary">Memory is finite.</span>
            </h2>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              We live our lives across a dozen apps, hundreds of browser tabs, and thousands
              of files. When you need to find that specific insight from a meeting three
              months ago or a PDF you skimmed last Tuesday, traditional search fails you.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:w-1/2">
            <MetricCard icon="tab" label="SCATTERED" text="60+ browser tabs open weekly" />
            <MetricCard
              colorClass="text-primary"
              icon="folder_open"
              label="LOST"
              text="4.5 hours/week searching files"
            />
            <MetricCard
              colorClass="text-primary"
              icon="cloud_off"
              label="EXPOSED"
              text="Privacy traded for utility"
            />
            <MetricCard
              colorClass="text-primary"
              icon="grain"
              label="RECALL"
              text="90% of information forgotten"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-max-width px-margin-desktop py-20 md:py-32" id="process">
        <div className="mb-16 text-center md:mb-24">
          <h2 className="mb-4 font-headline-lg text-headline-lg-mobile sm:text-headline-lg">
            Architecture of Remembrance
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
        </div>
        <div className="relative">
          <div className="absolute bottom-0 left-7 top-0 w-px bg-outline-variant/40 md:hidden" />
          <div className="space-y-14 md:space-y-24">
            <ProcessStep
              accent="primary"
              body="Seamlessly ingest notes, PDF documents, screen recordings, and audio files. Palimpsest acts as a silent observer, indexing the layers of your digital life."
              number="01"
              title="Capture Everything"
            />
            <ProcessStep
              accent="secondary-container"
              body="Your machine does the heavy lifting. Using on-device LLMs and embedding models, every byte is analyzed and indexed without leaving your hardware."
              number="02"
              reverse
              title="Process Locally"
            />
            <ProcessStep
              accent="tertiary"
              body="Data is saved in a highly optimized, encrypted local database. You own the keys, you own the storage, you own the memory."
              number="03"
              title="Store Privately"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f7] px-margin-desktop py-20 dark:bg-surface-container-low md:py-32" id="features">
        <div className="mx-auto max-w-max-width">
          <h2 className="mb-12 text-center font-headline-lg text-headline-lg-mobile sm:text-headline-lg md:mb-16">
            Intelligence Built for Privacy
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="glass-panel flex flex-col justify-between rounded-2xl p-6 sm:p-8 md:col-span-2 md:p-10">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="text-primary" name="psychology" />
                </div>
                <h3 className="mb-4 font-headline-lg text-2xl">Memory Agent</h3>
                <p className="mb-8 font-body-md text-on-surface-variant">
                  A context-aware assistant that understands the relationship between your
                  files. It doesn&apos;t just search keywords; it understands the intent of
                  your research.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-outline-variant/35 pt-6 sm:gap-4">
                <span className="rounded bg-surface px-3 py-1 font-label-mono text-[10px] uppercase tracking-widest">
                  Semantic
                </span>
                <span className="rounded bg-surface px-3 py-1 font-label-mono text-[10px] uppercase tracking-widest">
                  On-Device
                </span>
              </div>
            </div>

            <FeatureCard
              borderClass="border-primary/10"
              icon="hub"
              iconBg="bg-primary/10"
              iconText="text-primary"
              text="Visualise how ideas connect across different media types and timestamps."
              title="Constellation Graph"
            />
            <FeatureCard
              icon="history_edu"
              iconBg="bg-primary/10"
              iconText="text-primary"
              text="Complete transparency. Every AI action is logged and verifiable by you."
              title="Audit Logs"
            />

            <div className="glass-panel flex flex-col items-stretch gap-8 rounded-2xl p-6 sm:p-8 md:col-span-2 md:flex-row md:items-center md:gap-10 md:p-10">
              <div className="flex-1">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="text-primary" name="fact_check" />
                </div>
                <h3 className="mb-4 font-headline-lg text-2xl">Citations</h3>
                <p className="font-body-md text-on-surface-variant">
                  Never trust a hallucination. Every answer provided by Palimpsest includes
                  direct links to the source files on your hard drive.
                </p>
              </div>
              <div className="w-full flex-1 rounded-xl border border-outline-variant/35 bg-surface-dim p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-label-mono text-[10px]">VERIFIED SOURCE</span>
                </div>
                <div className="mb-2 h-2 w-3/4 rounded bg-on-surface/10" />
                <div className="h-2 w-1/2 rounded bg-on-surface/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-margin-desktop py-20 md:py-32">
        <div className="mb-12 text-center md:mb-16">
          <span className="font-label-mono text-sm uppercase tracking-widest text-primary">
            Query Simulation
          </span>
          <h2 className="mt-4 font-headline-lg text-headline-lg-mobile sm:text-headline-lg">
            Ask your memory.
          </h2>
        </div>
        <div className="glass-panel overflow-hidden rounded-2xl">
          <div className="flex items-start gap-3 border-b border-outline-variant/35 bg-on-surface/5 p-4 sm:items-center sm:gap-4 sm:p-6">
            <Icon className="text-primary/60" name="search" />
            <p className="font-body-md text-on-surface">
              What have I been exploring about creativity and constraints?
            </p>
          </div>
          <div className="space-y-6 p-5 sm:p-8">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-primary/20">
                <Image
                  alt="Icon"
                  className="h-5 w-5 opacity-80"
                  height={20}
                  src={smallIconUrl}
                  unoptimized
                  width={20}
                />
              </div>
              <div className="space-y-4 font-body-md leading-relaxed text-on-surface-variant">
                <p>
                  Based on your notes from{" "}
                  <span className="cursor-help border-b border-primary/30 font-bold text-primary">
                    Stravinsky&apos;s Lecture
                  </span>{" "}
                  and last week&apos;s{" "}
                  <span className="cursor-help border-b border-primary/30 font-bold text-primary">
                    Design Sync
                  </span>
                  , you&apos;ve been focusing on &quot;Liberating Limitations&quot;.
                </p>
                <p>
                  You noted that &quot;the more constraints one imposes, the more one frees
                  one&apos;s self.&quot; This was specifically linked to your project on
                  &apos;Local-First UX&apos; where hardware limitations forced more efficient
                  data structures.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 border-t border-outline-variant/35 pt-6 sm:grid-cols-2">
              <SourceCard
                icon="description"
                meta={
                  <>
                    Page 24 &bull; Highlighted 2d ago
                  </>
                }
                title="Poetics_of_Music.pdf"
              />
              <SourceCard
                icon="sticky_note_2"
                meta={
                  <>
                    Obsidian &bull; 5 references
                  </>
                }
                title="Meeting Notes - July 12"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-dim py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20%" cy="30%" fill="#00e3fd" r="2" />
            <circle cx="80%" cy="40%" fill="#00e3fd" r="2" />
            <circle cx="50%" cy="60%" fill="#00e3fd" r="3" />
            <circle cx="30%" cy="80%" fill="#00e3fd" r="2" />
            <line stroke="currentColor" strokeWidth="0.5" x1="20%" x2="50%" y1="30%" y2="60%" />
            <line stroke="currentColor" strokeWidth="0.5" x1="80%" x2="50%" y1="40%" y2="60%" />
            <line stroke="currentColor" strokeWidth="0.5" x1="30%" x2="50%" y1="80%" y2="60%" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-max-width px-margin-desktop text-center">
          <h2 className="mb-6 font-headline-lg text-headline-lg-mobile sm:text-headline-lg">
            See the invisible threads.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl font-body-md text-on-surface-variant">
            Palimpsest reveals how your thoughts evolve over time. The Constellation Graph
            maps non-obvious connections between disparate files, building a spatial map of
            your expertise.
          </p>
          <div className="flex h-48 items-center justify-center sm:h-64">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 animate-ping rounded-full border border-primary/20" />
              <div className="absolute inset-4 animate-pulse rounded-full border border-primary/20" />
              <div className="glass-panel relative flex h-full w-full items-center justify-center rounded-full">
                <Image
                  alt="Center Node"
                  className="h-16 w-16 opacity-90"
                  height={64}
                  src={centerNodeUrl}
                  unoptimized
                  width={64}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-outline-variant/35 bg-[#eef2f7] px-margin-desktop py-20 dark:bg-surface-container-lowest md:py-24"
        id="stack"
      >
        <div className="mx-auto max-w-max-width">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end md:gap-8">
            <div>
              <span className="mb-4 block font-label-mono text-xs uppercase text-on-surface-variant">
                The Engine Room
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg">
                Deep-tech architecture.
              </h2>
            </div>
            <p className="max-w-sm font-body-md text-on-surface-variant">
              Built for speed, reliability, and extreme data density.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {["Tauri", "React", "Sidecar", "QVAC SDK", "LanceDB", "SQLite"].map(
              (name, index) => (
                <div
                  className="group rounded border border-outline-variant/35 bg-on-surface/5 p-5 transition-colors hover:bg-on-surface/10 sm:p-6"
                  key={name}
                >
                  <p className="mb-2 font-label-mono text-primary transition-transform group-hover:scale-110">
                    {name}
                  </p>
                  <p className="font-body-sm text-xs opacity-50">
                    {
                      [
                        "Rust Runtime",
                        "UI Layer",
                        "Node Runtime",
                        "Local Intelligence",
                        "Vector Store",
                        "Relational Core",
                      ][index]
                    }
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-margin-desktop py-20 md:py-32" id="faq">
        <h2 className="mb-12 text-center font-headline-lg text-headline-lg-mobile sm:text-headline-lg md:mb-16">
          Frequently Asked
        </h2>
        <div className="space-y-4">
          <FaqItem
            answer="Yes. Palimpsest is local-first. We do not have servers that store your data. All indexing, vector storage, and inference happens on your CPU/GPU."
            open
            question="Is my data really private?"
          />
          <FaqItem
            answer="While it runs on most modern machines, we recommend at least 16GB of RAM and an Apple Silicon (M1/M2/M3) or NVIDIA GPU for the best performance."
            question="What hardware do I need?"
          />
          <FaqItem
            answer="As long as the drive is mounted and accessible by your user account, Palimpsest can index it. It follows standard OS-level permissions."
            question="Can it index encrypted drives?"
          />
        </div>

        <div className="glass-panel relative mt-20 overflow-hidden rounded-2xl border-primary/20 p-6 text-center sm:p-10 md:mt-32 md:rounded-3xl md:p-12">
          <h2 className="mb-6 font-display-lg text-2xl sm:text-3xl">
            Ready to reclaim your focus?
          </h2>
          <p className="mx-auto mb-10 max-w-lg font-body-md text-on-surface-variant">
            Join the private beta and start building your personal memory graph today.
            Available for macOS, Windows, and Linux.
          </p>
          <a
            className="mb-8 inline-block w-full rounded-md bg-primary px-8 py-4 font-body-md font-bold text-on-primary transition-all hover:opacity-90 active:opacity-80 sm:w-auto sm:px-12"
            href={downloadUrl}
            rel="noreferrer"
            target="_blank"
          >
            Download Beta
          </a>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 opacity-40 sm:gap-x-8">
            <Platform icon="laptop_mac" name="macOS" />
            <Platform icon="window" name="Windows" />
            <Platform icon="terminal" name="Linux" />
          </div>
        </div>
      </section>

      <footer className="flex w-full flex-col items-center gap-8 border-t border-outline-variant/35 bg-[#eef2f7] px-margin-desktop py-12 dark:bg-surface-container-lowest sm:py-16">
        <div className="flex items-center gap-3">
          <Image
            alt="Palimpsest Logo"
            className="h-6 w-6 grayscale opacity-50"
            height={24}
            src={appIconUrl}
            width={24}
          />
          <span className="font-headline-lg text-lg tracking-tighter text-on-surface-variant">
            Palimpsest
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {["macOS", "Windows", "Linux", "Privacy", "Security", "Documentation"].map(
            (item) => (
              <a
                className="font-label-mono text-label-mono text-on-surface-variant transition-colors hover:text-primary"
                href="#"
                key={item}
              >
                {item}
              </a>
            ),
          )}
        </div>
        <p className="mt-4 text-center font-label-mono text-label-mono opacity-40 sm:mt-8">
          &copy; 2026 Palimpsest. Local intelligence.
        </p>
      </footer>
    </main>
  );
}

function MetricCard({
  colorClass = "text-primary",
  icon,
  label,
  text,
}: {
  colorClass?: string;
  icon: IconName;
  label: string;
  text: string;
}) {
  return (
    <div className="glass-panel rounded-xl border-outline-variant/35 p-5 sm:p-6">
      <Icon className={`mb-3 ${colorClass}`} name={icon} />
      <p className="mb-1 font-label-mono text-xs opacity-50">{label}</p>
      <p className="font-body-md text-sm">{text}</p>
    </div>
  );
}

function ProcessStep({
  accent,
  body,
  number,
  reverse = false,
  title,
}: {
  accent: "primary" | "secondary-container" | "tertiary";
  body: string;
  number: string;
  reverse?: boolean;
  title: string;
}) {
  const textClass = {
    primary: "text-primary",
    "secondary-container": "text-primary",
    tertiary: "text-primary",
  }[accent];
  const borderClass = {
    primary: "border-primary/30",
    "secondary-container": "border-primary/30",
    tertiary: "border-primary/30",
  }[accent];
  const gradientClass = reverse
    ? "bg-gradient-to-l from-primary/40 to-transparent"
    : accent === "primary"
      ? "bg-gradient-to-r from-primary/40 to-transparent"
      : "bg-gradient-to-r from-primary/40 to-transparent";

  return (
    <div
      className={`scroll-reveal flex items-start gap-5 md:items-center md:gap-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`glass-panel z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 ${borderClass}`}
      >
        <span className={`font-label-mono text-lg sm:text-xl ${textClass}`}>{number}</span>
      </div>
      <div className={`flex-1 ${reverse ? "md:text-right" : ""}`}>
        <h3 className="mb-3 font-headline-lg text-xl sm:mb-4 sm:text-2xl">{title}</h3>
        <p className="font-body-md text-on-surface-variant">{body}</p>
      </div>
      <div className="hidden flex-1 md:block">
        <div className={`h-px w-full ${gradientClass}`} />
      </div>
    </div>
  );
}

function FeatureCard({
  borderClass = "",
  icon,
  iconBg,
  iconText,
  text,
  title,
}: {
  borderClass?: string;
  icon: IconName;
  iconBg: string;
  iconText: string;
  text: string;
  title: string;
}) {
  return (
    <div className={`glass-panel rounded-2xl p-6 sm:p-8 md:p-10 ${borderClass}`}>
      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={iconText} name={icon} />
      </div>
      <h3 className="mb-4 font-headline-lg text-xl sm:text-2xl">{title}</h3>
      <p className="font-body-md text-on-surface-variant">{text}</p>
    </div>
  );
}

function SourceCard({ icon, meta, title }: { icon: IconName; meta: ReactNode; title: string }) {
  return (
    <div className="group flex min-w-0 cursor-pointer items-start gap-3 rounded-lg border border-outline-variant/35 bg-surface-container p-4 transition-colors hover:border-primary/30">
      <Icon className="mt-1 text-sm text-primary" name={icon} />
      <div className="min-w-0">
        <p className="mb-1 break-words font-body-md text-sm text-on-surface transition-colors group-hover:text-primary">
          {title}
        </p>
        <p className="break-words font-label-mono text-[10px] text-on-surface-variant">
          {meta}
        </p>
      </div>
    </div>
  );
}

function FaqItem({
  answer,
  open = false,
  question,
}: {
  answer: string;
  open?: boolean;
  question: string;
}) {
  return (
    <details className="glass-panel group rounded-xl" open={open}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-headline-lg text-base transition-colors group-open:text-primary sm:p-6 sm:text-lg">
        <span>{question}</span>
        <Icon
          className="shrink-0 transition-transform group-open:rotate-180"
          name="expand_more"
        />
      </summary>
      <div className="px-5 pb-5 font-body-md text-on-surface-variant sm:px-6 sm:pb-6">
        {answer}
      </div>
    </details>
  );
}

function Platform({ icon, name }: { icon: IconName; name: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-sm" name={icon} />
      <span className="font-label-mono text-[10px]">{name}</span>
    </div>
  );
}
import React from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
];

const projects = [
  {
    number: "01",
    type: "IOT / EMBEDDED SYSTEMS",
    title: "Automated Plant Watering System",
    description:
      "Engineered a smart irrigation prototype using real-time soil moisture data to autonomously regulate water flow, conserve 30% of water, and send instant GSM-based SMS alerts.",
    tags: ["Raspberry Pi", "Arduino", "GSM Alerts"],
    accent: "lime",
    highlights: [
      "Live soil-moisture loop decides when to water, not a timer.",
      "Cut water use by about 30% versus manual irrigation.",
      "GSM SMS alerts for dry soil and tank events.",
    ],
  },
  {
    number: "02",
    type: "DEEP LEARNING / SECURITY",
    title: "Quantum-Inspired DL for Cryptography",
    description:
      "Architected a hybrid anomaly detection model simulating Quantum Key Distribution environments and identified network intrusions with 91% accuracy in breach simulations.",
    tags: ["TensorFlow", "Keras", "Anomaly Detection"],
    accent: "orange",
    highlights: [
      "Hybrid model trained on QKD-style network traces.",
      "91% accuracy spotting simulated intrusion patterns.",
      "Built to flag anomalies before a key exchange is compromised.",
    ],
  },
  {
    number: "03",
    type: "COMPUTER VISION / IOT",
    title: "Real-Time Facial Recognition Attendance",
    description:
      "Deployed a Haar Cascade-based attendance pipeline that reduced manual entry time by 70% for 50+ students, with instant MySQL logging at 15 FPS.",
    tags: ["Raspberry Pi", "OpenCV", "MySQL"],
    accent: "blue",
    highlights: [
      "On-device recognition at 15 FPS on Raspberry Pi.",
      "Attendance for 50+ students, logged straight into MySQL.",
      "Cut roll-call time by about 70%.",
    ],
  },
];

const skills = [
  ["Python", "Advanced · data, automation & ML"],
  ["Languages", "Java · C · SQL · JavaScript"],
  ["ML / Deep Learning", "TensorFlow · Keras · PyTorch"],
  ["Data Analysis", "Pandas · NumPy · Scikit-learn"],
  ["Computer Vision", "OpenCV · image intelligence"],
  ["Databases", "MongoDB · MySQL · SQLite"],
  ["Web Foundations", "HTML5 · CSS3 · responsive UI"],
  ["Systems & Tools", "Git · Linux · Jupyter · Raspberry Pi"],
];

const education = [
  ["2022 — 2026", "B.Tech (AI & ML)", "University of Engineering & Management, Kolkata · CGPA 8.45"],
  ["2020 — 2022", "Higher Secondary", "Paranchak Siksha Niketan"],
  ["2019 — 2020", "Secondary", "Vivekananda Mission Asram Sikshayatan"],
];

const neuralNodes = [
  { id: "a", label: "ingest", className: "node-a" },
  { id: "b", label: "clean", className: "node-b" },
  { id: "c", label: "train", className: "node-c" },
  { id: "d", label: "eval", className: "node-d" },
  { id: "e", label: "deploy", className: "node-e" },
  { id: "f", label: "monitor", className: "node-f" },
];

const resumeUrl = `${import.meta.env.BASE_URL}Sibam_Das_resume_p.pdf`;

function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

function useActiveSection(ids) {
  const [active, setActive] = React.useState(ids[0]);

  React.useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function usePointerGlow() {
  const glowRef = React.useRef(null);

  React.useEffect(() => {
    const glow = glowRef.current;
    if (!glow || window.matchMedia("(pointer: coarse)").matches) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const onMove = (event) => {
      glow.style.transform = `translate(${event.clientX - 140}px, ${event.clientY - 140}px)`;
      glow.classList.add("is-on");
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return glowRef;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openProject, setOpenProject] = React.useState(null);
  const [activeNode, setActiveNode] = React.useState("c");
  const [copied, setCopied] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", idea: "" });
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const artRef = React.useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const progress = useScrollProgress();
  const activeSection = useActiveSection(["work", "about", "journey", "skills", "contact"]);
  const glowRef = usePointerGlow();

  React.useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpenProject(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onHeroMove = (event) => {
    const box = artRef.current?.getBoundingClientRect();
    if (!box) return;
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    setTilt({ x, y });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sibamdas452@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:sibamdas452@gmail.com";
    }
  };

  const sendIdea = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name || "the portfolio"}`);
    const body = encodeURIComponent(
      `${form.idea || "I have an idea I'd like to talk through."}\n\n— ${form.name || ""}`.trim()
    );
    window.location.href = `mailto:sibamdas452@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <div className="pointer-glow" ref={glowRef} aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <header className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu}>
          SD<span>.</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className={`nav-contact ${activeSection === "contact" ? "is-active" : ""}`} href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="status-dot" /> B.TECH (AI &amp; ML) · UEM KOLKATA
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
              I turn data into <em>direction.</em>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }}>
              AI &amp; ML undergraduate and aspiring data scientist with a CGPA
              of 8.45, building production-ready models and embedded systems
              that solve real-world inefficiencies.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}>
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-resume" href={resumeUrl} target="_blank" rel="noreferrer">View CV <ArrowUpRight size={15} /></a>
              <a className="text-link" href="mailto:sibamdas452@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
            </motion.div>
          </div>
          <motion.div
            className="hero-art"
            ref={artRef}
            aria-label="Interactive neural network. Hover nodes to see the pipeline."
            initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            onPointerMove={onHeroMove}
            onPointerLeave={() => setTilt({ x: 0, y: 0 })}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="data-card card-top">
              <span>MODEL / 04</span>
              <strong>0.91</strong>
              <small>confidence</small>
            </div>
            <div
              className="neural-map"
              style={{ transform: `translate(${tilt.x * 18}px, ${tilt.y * 14}px)` }}
            >
              {neuralNodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className={`node ${node.className} ${activeNode === node.id ? "is-live" : ""}`}
                  aria-label={`Pipeline step: ${node.label}`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onFocus={() => setActiveNode(node.id)}
                  onClick={() => setActiveNode(node.id)}
                />
              ))}
              <i className="line line-1" /><i className="line line-2" /><i className="line line-3" /><i className="line line-4" /><i className="line line-5" />
              <div className="core" style={{ transform: `translate(${tilt.x * -10}px, ${tilt.y * -8}px)` }}>
                <BrainCircuit size={42} strokeWidth={1.3} />
                <span>{neuralNodes.find((node) => node.id === activeNode)?.label}<br />/ iterate</span>
              </div>
            </div>
            <div className="data-card card-bottom">
              <span>DATA POINTS</span>
              <strong>∞</strong>
              <small>questions to ask</small>
            </div>
          </motion.div>
          <div className="hero-foot"><span>SCROLL TO DISCOVER</span><div className="scroll-line" /><span>2026</span></div>
        </section>

        <section id="work" className="work-section section-grid">
          <motion.div className="section-heading" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow">SELECTED WORK / 03</p>
            <h2>Built to <em>understand.</em></h2>
            <p>Projects where machine learning, computer vision, IoT, and security meet measurable real-world outcomes — the work behind my CV. Click a card to open the story.</p>
          </motion.div>
          <div className="project-list">
            {projects.map((project, index) => {
              const isOpen = openProject === project.number;
              return (
                <motion.article
                  className={`project-card ${project.accent} ${isOpen ? "is-open" : ""}`}
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <button
                    type="button"
                    className="project-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenProject(isOpen ? null : project.number)}
                  >
                    <div className="project-top">
                      <span className="project-number">{project.number}</span>
                      <span className="project-type">{project.type}</span>
                      <motion.span className="project-arrow" animate={{ rotate: isOpen ? 45 : 0 }}>
                        <ArrowUpRight size={20} />
                      </motion.span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        className="project-highlights"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        {project.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="journey" className="journey-section section-grid">
          <div className="section-heading">
            <p className="eyebrow">EXPERIENCE / EDUCATION</p>
            <h2>The path so<br /><em>far.</em></h2>
          </div>
          <motion.div className="journey-content" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <div className="experience-block">
              <div className="journey-label">EXPERIENCE</div>
              <div className="timeline-item is-interactive">
                <span className="timeline-date">MAR 2025 — APR 2025</span>
                <h3>Data Science Intern (Virtual) <small>· CodSoft</small></h3>
                <p>Processed a 2,000+ customer feedback dataset with Python and Scikit-learn text preprocessing, improving sentiment analysis accuracy by 12%. Used Git-based version control and presented weekly performance dashboards to a cross-functional team.</p>
              </div>
            </div>
            <div className="education-block">
              <div className="journey-label">EDUCATION</div>
              {education.map(([date, title, school]) => (
                <div className="education-item is-interactive" key={title}>
                  <span className="timeline-date">{date}</span>
                  <div><h3>{title}</h3><p>{school}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="about" className="about-section section-grid">
          <motion.div
            className="about-stamp"
            initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
            whileInView={{ opacity: 1, rotate: -12, scale: 1 }}
            whileHover={{ rotate: 8, scale: 1.06 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <Sparkles size={19} /><span>CURIOUS<br />BY DEFAULT</span>
          </motion.div>
          <motion.div className="about-copy" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Still learning.<br /><em>Always building.</em></h2>
            <p className="large-copy">I&apos;m an AI &amp; ML undergraduate passionate about building production-ready models and embedded systems that solve real-world inefficiencies through automation, security, and data analytics.</p>
            <p>Beyond coursework, I&apos;ve led a four-member capstone team, managed Agile sprints, and kept milestones on track while continuing to explore the core areas of machine learning.</p>
            <a className="text-link" href="https://github.com/SibamDas" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a>
          </motion.div>
          <motion.div className="about-aside" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div><strong>01</strong><span>Ask better<br />questions</span></div>
            <div><strong>02</strong><span>Learn from<br />the data</span></div>
            <div><strong>03</strong><span>Make it<br />useful</span></div>
          </motion.div>
        </section>

        <section className="recognition-section section-grid">
          <div className="section-heading"><p className="eyebrow">BEYOND THE CODE</p><h2>Work with<br /><em>purpose.</em></h2></div>
          <div className="recognition-grid">
            <div><strong>01</strong><h3>Student Project Lead</h3><p>Led a 4-member capstone team, delegated tasks, and achieved 100% milestone adherence through Agile sprints.</p></div>
            <div><strong>02</strong><h3>Top 10% of Cohort</h3><p>Recognized among the top 10% of the B.Tech cohort in first year.</p></div>
            <div><strong>03</strong><h3>Best Project Award</h3><p>Awarded Best Project for the IoT irrigation system at a departmental hackathon.</p></div>
            <div><strong>04</strong><h3>Certificate of Excellence</h3><p>Completed the CodSoft internship and presented two AI/ML prototypes at the University Tech Exhibition.</p></div>
          </div>
        </section>

        <section id="skills" className="skills-section section-grid">
          <motion.div className="section-heading" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}><p className="eyebrow">THE TOOLKIT</p><h2>Curiosity, with<br /><em>technical range.</em></h2></motion.div>
          <div className="skills-grid">
            {skills.map(([name, detail], index) => (
              <motion.div
                className="skill-item"
                key={name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 8 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <span className="skill-index">0{index + 1}</span>
                <div><h3>{name}</h3><p>{detail}</p></div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">HAVE A QUESTION / AN IDEA?</p>
            <h2>Let&apos;s make sense<br />of <em>something.</em></h2>
            <div className="contact-row">
              <a className="contact-email" href="mailto:sibamdas452@gmail.com">sibamdas452@gmail.com <ArrowUpRight size={22} /></a>
              <button type="button" className="copy-email" onClick={copyEmail}>
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <form className="idea-form" onSubmit={sendIdea}>
              <label>
                Your name
                <input
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="How should I address you?"
                />
              </label>
              <label>
                The idea
                <textarea
                  rows={3}
                  value={form.idea}
                  onChange={(event) => setForm((prev) => ({ ...prev, idea: event.target.value }))}
                  placeholder="A sentence about what you want to build or discuss."
                />
              </label>
              <button className="button button-primary" type="submit">
                Open in email <ArrowUpRight size={15} />
              </button>
            </form>
            <div className="contact-meta"><span><MapPin size={15} /> India</span><a href="tel:7679823331">7679823331</a><span>English · Hindi · Bengali</span></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Sibam Das</span>
        <span className="footer-note">Built with intent, not noise.</span>
        <div className="socials">
          <a href="https://github.com/SibamDas" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href="mailto:sibamdas452@gmail.com" aria-label="Email"><Mail size={17} /></a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

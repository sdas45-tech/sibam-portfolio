import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    type: "IOT / EMBEDDED SYSTEMS",
    title: "Automated Plant Watering System",
    description:
      "Engineered a smart irrigation prototype using real-time soil moisture data to autonomously regulate water flow, conserve 30% of water, and send instant GSM-based SMS alerts.",
    tags: ["Raspberry Pi", "Arduino", "GSM Alerts"],
    accent: "lime",
  },
  {
    number: "02",
    type: "DEEP LEARNING / SECURITY",
    title: "Quantum-Inspired DL for Cryptography",
    description:
      "Architected a hybrid anomaly detection model simulating Quantum Key Distribution environments and identified network intrusions with 91% accuracy in breach simulations.",
    tags: ["TensorFlow", "Keras", "Anomaly Detection"],
    accent: "orange",
  },
  {
    number: "03",
    type: "COMPUTER VISION / IOT",
    title: "Real-Time Facial Recognition Attendance",
    description:
      "Deployed a Haar Cascade-based attendance pipeline that reduced manual entry time by 70% for 50+ students, with instant MySQL logging at 15 FPS.",
    tags: ["Raspberry Pi", "OpenCV", "MySQL"],
    accent: "blue",
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

const resumeUrl = `${import.meta.env.BASE_URL}Sibam_Das_resume_p.pdf`;

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu}>
          SD<span>.</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
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
          <motion.div className="hero-art" aria-label="Abstract neural network illustration" initial={{ opacity: 0, scale: 0.88, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="data-card card-top"><span>MODEL / 04</span><strong>0.91</strong><small>confidence</small></div>
            <div className="neural-map">
              <span className="node node-a" /><span className="node node-b" /><span className="node node-c" />
              <span className="node node-d" /><span className="node node-e" /><span className="node node-f" />
              <i className="line line-1" /><i className="line line-2" /><i className="line line-3" /><i className="line line-4" /><i className="line line-5" />
              <div className="core"><BrainCircuit size={42} strokeWidth={1.3} /><span>learn<br />/ iterate</span></div>
            </div>
            <div className="data-card card-bottom"><span>DATA POINTS</span><strong>∞</strong><small>questions to ask</small></div>
          </motion.div>
          <div className="hero-foot"><span>SCROLL TO DISCOVER</span><div className="scroll-line" /><span>2026</span></div>
        </section>

        <section id="work" className="work-section section-grid">
          <motion.div className="section-heading" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow">SELECTED WORK / 03</p>
            <h2>Built to <em>understand.</em></h2>
            <p>Projects where machine learning, computer vision, IoT, and security meet measurable real-world outcomes — the work behind my CV.</p>
          </motion.div>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article className={`project-card ${project.accent}`} key={project.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><ArrowUpRight className="project-arrow" size={20} /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </motion.article>
            ))}
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
              <div className="timeline-item">
                <span className="timeline-date">MAR 2025 — APR 2025</span>
                <h3>Data Science Intern (Virtual) <small>· CodSoft</small></h3>
                <p>Processed a 2,000+ customer feedback dataset with Python and Scikit-learn text preprocessing, improving sentiment analysis accuracy by 12%. Used Git-based version control and presented weekly performance dashboards to a cross-functional team.</p>
              </div>
            </div>
            <div className="education-block">
              <div className="journey-label">EDUCATION</div>
              {education.map(([date, title, school]) => (
                <div className="education-item" key={title}>
                  <span className="timeline-date">{date}</span>
                  <div><h3>{title}</h3><p>{school}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="about" className="about-section section-grid">
          <motion.div className="about-stamp" initial={{ opacity: 0, rotate: -35, scale: 0.7 }} whileInView={{ opacity: 1, rotate: -12, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 12 }}><Sparkles size={19} /><span>CURIOUS<br />BY DEFAULT</span></motion.div>
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
          <div className="skills-grid">{skills.map(([name, detail], index) => <motion.div className="skill-item" key={name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45, delay: index * 0.07 }}><span className="skill-index">0{index + 1}</span><div><h3>{name}</h3><p>{detail}</p></div></motion.div>)}</div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <p className="eyebrow">HAVE A QUESTION / AN IDEA?</p>
            <h2>Let&apos;s make sense<br />of <em>something.</em></h2>
            <a className="contact-email" href="mailto:sibamdas452@gmail.com">sibamdas452@gmail.com <ArrowUpRight size={22} /></a>
            <div className="contact-meta"><span><MapPin size={15} /> India</span><a href="tel:7679823331">7679823331</a><span>English · Hindi · Bengali</span></div>
          </div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Sibam Das</span><span className="footer-note">Built with intent, not noise.</span><div className="socials"><a href="https://github.com/SibamDas" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a><a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17} /></a><a href="mailto:sibamdas452@gmail.com" aria-label="Email"><Mail size={17} /></a></div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

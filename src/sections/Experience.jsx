const experiences = [
  {
    period: "Avril 2025 — Présent",
    role: "Développeur Full-Stack (Alternance)",
    company: "Volkeno Groupe",
    description:
      "• Développement du projet Red Product (gestion d'hôtel)\n• Frontend : React.js avec Tailwind CSS - Interface utilisateur responsive\n• Backend : Laravel et Node.js avec authentification JWT\n• Déploiement : Frontend sur Vercel, Backend sur Railway et Render\n• Collaboration avec l'équipe pour les fonctionnalités clés",
    technologies: ["React", "Tailwind CSS", "Laravel", "Node.js", "JWT", "Vercel", "Railway", "Render"],
    current: true,
    project: "Red Product",
  },
  {
    period: "2025",
    role: "Formation Full-Stack",
    company: "Bakeli School of Technology",
    description:
      "• Projet Bakeli Work : Refonte de maquette avec HTML/CSS et Bootstrap\n• Projet Sen-emploi : Collaboration sur GitHub - Intégration du site Sen-emploi (travail en équipe)\n• Projet EasyMemberShip (Master) : Frontend d'application gestion d'association (HTML/CSS/JS/Bootstrap)\n• Projet EbuyApp (Master) : Site e-commerce (HTML/CSS/Tailwind/JS) avec localStorage pour utilisateurs",
    technologies: ["HTML/CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js", "Node.js", "Firebase", "Laravel", "Git/GitHub"],
    current: false,
    projects: ["Bakeli Work", "Sen-emploi", "EasyMemberShip", "EbuyApp"],
  },
  {
    period: "2024",
    role: "Formation Développement Web",
    company: "10HTech",
    description:
      "• Apprentissage des langages de programmation fondamentaux\n• Technologies maîtrisées : HTML, CSS, JavaScript, PHP, Laravel, MySQL, Angular\n• Réalisation de projets pratiques tout au long de la formation\n• Acquisition des bases solides pour le développement web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL", "Angular"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Parcours Professionnel
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Mon parcours{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              de développeur.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            De 10HTech à Bakeli School, en passant par mon alternance chez Volkeno Groupe,
            un parcours riche en apprentissages et en projets concrets.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 ${
                      exp.current ? "border-primary/60" : ""
                    }`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                    {exp.project && (
                      <p className="text-primary text-sm mt-1">
                         Projet principal : {exp.project}
                      </p>
                    )}
                    {exp.projects && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exp.projects.map((proj, i) => (
                          <span key={i} className="text-primary text-xs">
                            #{proj}{i < exp.projects.length - 1 ? ' • ' : ''}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
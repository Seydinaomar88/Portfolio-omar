import { ArrowUpRight } from "lucide-react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Site web de Sen Empoi",
    description:
      "C'est le site web de Sen emploi",
    image: "/projets/Sen-emploi.png",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
    link: "https://fayecodeur.github.io/Sen-Emploi/",
    github: "https://github.com/Fayecodeur/Sen-Emploi",
    demo: true,
  },
  {
    title: "Application de gestion d'association",
    description:
      "Application de gestion d'association pour aider les association sur la gestion de leurs associations",
    image: "/projets/EasyMemberShip.png",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
    link: "https://seydinaomar88.github.io/ProjetEasyMemberShip/",
    github: "https://github.com/Seydinaomar88/ProjetEasyMemberShip",
    demo: true,
  },
  {
    title: "Application de gestion de tache",
    description:
      "Plateforme pour la gestion de taches et des projets ",
    image: "/projets/TodoApp.png",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
    link: "https://seydinaomar88.github.io/TodoApp/",
    github: "https://github.com/omar/ecommerce-artisans",
    demo: true,
  },
  {
    title: "Application e-commerce",
    description:
      "Application e-commerce pour aider les vendeurs a mettre leurs produits les clients pourront voir les produits et l'admin gere la relation",
    image: "/projets/EbuyApp.png",
    tags: ["HTML", "CSS", "Tailwindcss", "Javascript"],
    link: "https://seydinaomar88.github.io/EbuyApp/",
    github: "https://github.com/Seydinaomar88/EbuyApp",
    demo: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Mes Réalisations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projets qui
            <span className="font-serif italic font-normal text-white">
              {" "}
              font la différence.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Une sélection de mes projets récents, des applications web complètes 
            aux solutions mobiles innovantes qui résolvent des problèmes concrets.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400/1a1a2e/20B2A6?text=Projet+Omar";
                  }}
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demo && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="Voir le projet en ligne"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="Voir le code source"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>

                {/* Badge Demo si disponible */}
                {project.demo && project.link !== "#" && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white text-xs rounded-full backdrop-blur-sm">
                    Demo en ligne
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            Voir tous les projets
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
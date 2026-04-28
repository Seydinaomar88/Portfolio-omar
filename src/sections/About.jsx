import { Code2, Lightbulb, Rocket, Smartphone, Database, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Code Propre",
    description:
      "J'écris un code maintenable et scalable qui résiste à l'épreuve du temps.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "J'optimise la vitesse pour offrir des expériences utilisateur ultra-rapides.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    description:
      "Je développe des applications responsives qui fonctionnent parfaitement sur tous les appareils.",
  },
  {
    icon: Database,
    title: "Full-Stack",
    description:
      "Maîtrise du front-end et back-end pour des applications complètes et robustes.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                À Propos de Moi
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Je transforme les idées
              <span className="font-serif italic font-normal text-white">
                {" "}
                en applications web & mobile.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Je suis Omar Cisse, un développeur full-stack junior passionné par la
                création d'applications web et mobiles qui font la différence.
                Mon parcours a commencé avec une curiosité pour la technologie,
                et aujourd'hui je maîtrise les outils modernes pour donner vie
                à des projets innovants.
              </p>
              <p>
                Je travaille avec des technologies comme React,Tailwindcss,
                Node.js,pour construire des applications
                complètes, du front-end au back-end. Mon approche allie
                excellence technique et souci du détail pour une expérience
                utilisateur optimale.
              </p>
              <p>
                En dehors du code, j'aime apprendre de nouvelles technologies,
                relever des défis techniques, et collaborer avec d'autres
                développeurs pour créer des solutions qui ont un impact réel.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Ma mission est de créer des expériences numériques qui ne sont
                pas seulement fonctionnelles, mais véritablement agréables —
                des applications que les utilisateurs adorent et que les
                développeurs aiment maintenir."
              </p>
              <div className="flex items-center gap-2 mt-4 text-primary">
                <Heart className="w-4 h-4 fill-primary" />
                <span className="text-sm">Omar - Full-Stack Developer</span>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    label: "Office of multiple\ninterest content",
    title: "Colaborative & partnership",
  },
  {
    label: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    label: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <svg className="absolute right-0 top-0 w-1/3 h-48 pointer-events-none" viewBox="0 0 400 200" fill="none">
        <path d="M0 100 Q100 20, 200 80 Q300 140, 400 60" stroke="hsl(var(--accent-coral))" strokeWidth="2" fill="none" opacity="0.4" />
      </svg>

      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-16 animate-fade-up ${isVisible ? "visible" : ""}`}>
          What we{" "}
          <span className="relative inline-block">
            <span className="bg-highlight-green px-2 py-1 rounded-md">can</span>
          </span>
          <br />
          <span className="relative inline-block">
            offer
            <span className="absolute -bottom-1 left-0 w-full">
              <svg viewBox="0 0 150 8" className="w-full">
                <path d="M0 4 Q40 1, 75 4 Q110 7, 150 3" stroke="hsl(var(--highlight-yellow))" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </span>{" "}
          you!
        </h2>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border group cursor-pointer hover:bg-muted/30 hover:px-6 transition-all duration-300 px-2 md:px-4 animate-fade-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms" }}
            >
              <p className="text-xs md:text-sm text-muted-foreground whitespace-pre-line mb-3 md:mb-0 md:w-1/4">
                {s.label}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl flex-1 group-hover:translate-x-2 transition-transform duration-300">
                {s.title}
              </h3>
              <ArrowRight className="w-6 h-6 mt-3 md:mt-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

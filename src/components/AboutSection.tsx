import meeting from "@/assets/meeting.jpg";
import working from "@/assets/working.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: topRef, isVisible: topVisible } = useScrollAnimation();
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation();

  return (
    <section id="studio" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <svg className="absolute right-0 top-0 w-1/2 h-full pointer-events-none" viewBox="0 0 600 800" fill="none" preserveAspectRatio="none">
        <path d="M600 0 Q400 200, 500 400 Q600 600, 400 800" stroke="hsl(var(--accent-coral))" strokeWidth="2" fill="none" opacity="0.4" />
      </svg>

      {/* Top row */}
      <div ref={topRef} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className={`animate-fade-left ${topVisible ? "visible" : ""}`}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Tomorrow should
            <br />
            be better than{" "}
            <span className="relative inline-block">
              <span className="bg-highlight-green px-2 py-1 rounded-md">today</span>
            </span>
          </h2>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#" className="inline-flex items-center mt-6 text-sm font-medium group">
            Read more
            <span className="ml-3 w-12 h-px bg-foreground group-hover:w-16 transition-all" />
            <span className="text-xs">→</span>
          </a>
        </div>

        <div className={`relative flex justify-center animate-fade-right ${topVisible ? "visible" : ""}`}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 circle-image-hover">
            <img src={meeting} alt="Team meeting" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-coral rotate-12 z-0" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
        </div>
      </div>

      <div ref={bottomRef} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-16 md:mt-24">
        <div className={`relative flex justify-center order-2 md:order-1 animate-fade-left delay-100 ${bottomVisible ? "visible" : ""}`}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 circle-image-hover">
            <img src={working} alt="Working" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-4 right-8 w-14 h-14 bg-accent-coral" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
        </div>

        <div className={`order-1 md:order-2 animate-fade-right delay-100 ${bottomVisible ? "visible" : ""}`}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            <span className="relative inline-block">
              <span className="border-2 border-highlight-yellow px-2">See</span>
            </span>{" "}
            how we can
            <br />
            help you{" "}
            <span className="relative inline-block">
              progress
              <span className="absolute -bottom-1 left-0 w-full">
                <svg viewBox="0 0 200 8" className="w-full">
                  <path d="M0 4 Q50 1, 100 4 Q150 7, 200 3" stroke="hsl(var(--highlight-yellow))" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </span>
          </h2>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="inline-flex items-center mt-6 text-sm font-medium group">
            Read more
            <span className="ml-3 w-12 h-px bg-foreground group-hover:w-16 transition-all" />
            <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";
import person5 from "@/assets/person5.jpg";
import person6 from "@/assets/person6.jpg";
import person7 from "@/assets/person7.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CircleImage = ({
  src,
  alt,
  size,
  className = "",
  delay = "",
}: {
  src: string;
  alt: string;
  size: string;
  className?: string;
  delay?: string;
}) => (
  <div
    className={`rounded-full overflow-hidden bg-muted flex-shrink-0 circle-image-hover animate-scale-up ${delay} ${className}`}
    style={{ width: size, height: size }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
  </div>
);

const HeroSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: photosRef, isVisible: photosVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-16 md:pb-24">

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 120 300" fill="none" className="absolute left-0 top-0 w-32 h-full opacity-60">
          <path d="M60 0 Q20 80, 60 150 Q100 220, 40 300" stroke="hsl(var(--accent-coral))" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M80 0 Q40 80, 80 150 Q120 220, 60 300" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" opacity="0.3" />
        </svg>
      </div>


      <div className="absolute right-12 top-40 hidden lg:block">
        <div className="w-24 h-12 bg-accent-purple rounded-t-full" />
      </div>

      <div
        ref={titleRef}
        className={`max-w-5xl mx-auto text-center px-6 pt-8 md:pt-12 animate-fade-up ${titleVisible ? "visible" : ""}`}
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
          The{" "}
          <span className="relative inline-block">
            thinkers
            <span className="absolute -bottom-1 left-0 w-full">
              <svg viewBox="0 0 200 12" className="w-full">
                <path d="M0 8 Q50 2, 100 6 Q150 10, 200 4" stroke="hsl(var(--highlight-yellow))" strokeWidth="3" fill="none" />
                <path d="M0 10 Q50 4, 100 8 Q150 12, 200 6" stroke="hsl(var(--highlight-yellow))" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </span>{" "}
          and
          <br className="hidden sm:block" />
          doers were{" "}
          <span className="relative inline-block">
            changing
            <span className="absolute -bottom-1 -right-1 top-0 -left-1 bg-highlight-pink rounded-lg -z-10 opacity-60" />
          </span>
          <br className="hidden sm:block" />
          the{" "}
          <span className="relative inline-block">
            <span className="bg-highlight-green px-3 py-1 rounded-md">status</span>
          </span>{" "}
          Quo with
        </h1>

        <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          We are a team of strategists, designers communicators, Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      {/* Team photos grid */}
      <div ref={photosRef} className="mt-12 md:mt-16 relative max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-center gap-4 md:gap-6">
          <CircleImage src={person7} alt="Team member" size="100px" className={`hidden lg:block ${photosVisible ? "visible" : ""}`} delay="delay-100" />
          <CircleImage src={person1} alt="Team member" size="140px" className={`hidden md:block ${photosVisible ? "visible" : ""}`} delay="delay-200" />
          <CircleImage src={person2} alt="Team member" size="120px" className={photosVisible ? "visible" : ""} delay="delay-100" />
          <CircleImage src={person3} alt="Team member" size="160px" className={photosVisible ? "visible" : ""} delay="delay-200" />
          <CircleImage src={person4} alt="Team member" size="100px" className={photosVisible ? "visible" : ""} delay="delay-300" />
          <CircleImage src={person5} alt="Team member" size="140px" className={photosVisible ? "visible" : ""} delay="delay-400" />
          <CircleImage src={person6} alt="Team member" size="100px" className={`hidden lg:block ${photosVisible ? "visible" : ""}`} delay="delay-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

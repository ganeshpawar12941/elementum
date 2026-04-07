import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NewsletterSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-footer-bg py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="absolute left-1/3 top-8 pointer-events-none hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 5 Q20 25, 30 45 M25 40 L30 48 L35 40" stroke="hsl(var(--accent-coral))" strokeWidth="2" fill="none" />
          <path d="M40 5 Q30 25, 40 45 M35 40 L40 48 L45 40" stroke="hsl(var(--accent-coral))" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="absolute right-12 top-1/3 hidden lg:block">
        <div className="w-20 h-28 bg-accent-purple rounded-tl-full rounded-bl-full" />
      </div>

      <div ref={ref} className={`max-w-3xl mx-auto text-center relative z-10 animate-fade-up ${isVisible ? "visible" : ""}`}>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="mt-6 text-sm md:text-base text-muted-foreground">
          To make your stay special and even more memorable
        </p>
        <button className="mt-8 bg-foreground text-background px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200">
          Subscribe Now
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;

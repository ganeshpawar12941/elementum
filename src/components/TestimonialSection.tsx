import testimonial1 from "@/assets/testimonial1.jpg";
import testimonial2 from "@/assets/testimonial2.jpg";
import testimonial3 from "@/assets/testimonial3.jpg";
import testimonial4 from "@/assets/testimonial4.jpg";
import testimonial5 from "@/assets/testimonial5.jpg";
import testimonial6 from "@/assets/testimonial6.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const floatingImages = [
  { src: testimonial3, size: "60px", top: "5%", left: "8%" },
  { src: testimonial5, size: "50px", top: "8%", right: "12%" },
  { src: testimonial6, size: "55px", top: "35%", right: "15%" },
  { src: testimonial4, size: "45px", top: "60%", left: "5%" },
  { src: testimonial3, size: "50px", top: "75%", left: "10%" },
];

const TestimonialSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faqs" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto relative">
        {floatingImages.map((img, i) => (
          <div
            key={i}
            className={`absolute rounded-full overflow-hidden hidden lg:block circle-image-hover animate-scale-up ${isVisible ? "visible" : ""}`}
            style={{
              width: img.size,
              height: img.size,
              top: img.top,
              left: img.left,
              right: img.right,
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}

        <div className={`absolute left-16 top-1/3 w-32 h-32 rounded-full overflow-hidden hidden lg:block circle-image-hover animate-scale-up delay-300 ${isVisible ? "visible" : ""}`}>
          <img src={testimonial1} alt="Reviewer" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className={`absolute right-8 bottom-8 w-36 h-36 rounded-full overflow-hidden hidden lg:block circle-image-hover animate-scale-up delay-400 ${isVisible ? "visible" : ""}`}>
          <img src={testimonial2} alt="Reviewer" className="w-full h-full object-cover" loading="lazy" />
        </div>

        <div className={`text-center animate-fade-up ${isVisible ? "visible" : ""}`}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            <span className="relative inline-block">
              <span className="bg-highlight-green px-2 py-1 rounded-md">What</span>
            </span>{" "}
            our customer
            <br />
            says{" "}
            <span className="relative inline-block">
              About Us
              <span className="absolute -bottom-1 left-0 w-full">
                <svg viewBox="0 0 200 8" className="w-full">
                  <path d="M0 4 Q50 1, 100 4 Q150 7, 200 3" stroke="hsl(var(--highlight-yellow))" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </span>
          </h2>

          <div className={`mt-10 md:mt-14 max-w-lg mx-auto bg-accent/40 rounded-2xl p-8 md:p-10 relative animate-fade-up delay-200 ${isVisible ? "visible" : ""}`}>
            <span className="text-5xl font-serif text-muted-foreground/40 absolute top-4 left-6">"</span>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-6">
              Elementum delivered the site with in the timeline
              as they requested. In the end, the client found a 50%
              increase in traffic with in days since its launch. They
              also had an impressive ability to use technologies that
              the company hasn't used, which have also proved to
              be easy to use and reliable
            </p>
            <span className="text-5xl font-serif text-muted-foreground/40 absolute bottom-4 right-6">"</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

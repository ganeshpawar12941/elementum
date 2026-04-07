import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const footerCols = [
  {
    title: "Company",
    links: ["Home", "Studio", "Service", "Blog"],
  },
  {
    title: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
];

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer id="contact" className="bg-footer-bg px-6 md:px-12 lg:px-20 pb-8">
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 40" className="w-full" preserveAspectRatio="none">
          <path d="M0 20 Q150 0, 300 20 Q450 40, 600 20 Q750 0, 900 20 Q1050 40, 1200 20" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" opacity="0.15" />
        </svg>
      </div>

      <div ref={ref} className={`max-w-6xl mx-auto border-t border-foreground/10 pt-10 animate-fade-up ${isVisible ? "visible" : ""}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-base md:text-lg mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:pl-1 transition-all duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-serif text-base md:text-lg mb-4">Terms & Policies</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>1498w Fluton ste, STE<br />2D Chicago, IL 63867.</p>
              <p>(123) 456789000</p>
              <p>info@elementum.com</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-12 pt-8 border-t border-foreground/10">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Studio", "Services", "Contact", "FAQs"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <span className="font-serif text-xl md:text-2xl tracking-tight hover:opacity-70 transition-opacity cursor-pointer">
        Elementum
      </span>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navLinks.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="relative py-1 transition-colors hover:text-foreground/70 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden p-1 hover:bg-muted rounded-md transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute top-full left-0 w-full bg-background border-b shadow-lg md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-b-0 shadow-none"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4 text-sm font-medium">
          {navLinks.map((l, i) => (
            <li
              key={l}
              className="transition-all duration-300"
              style={{
                transitionDelay: open ? `${i * 50}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-10px)",
              }}
            >
              <a
                href={`#${l.toLowerCase()}`}
                className="block py-2 hover:pl-2 transition-all"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

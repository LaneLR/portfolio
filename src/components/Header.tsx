"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("home");
  const isResaleIQ = pathname.startsWith("/projects/resale-iq");

  useEffect(() => {
    if (pathname !== "/") return;

    const observerOptions = {
      root: null, 
      rootMargin: "-40% 0px -40% 0px", 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "experience", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="header">
      <Link className="header__icon-link" href="/#home">
        <img className="header__icon" src="/images/resaleiq-portfolio-icon.png" alt="Logo" />
      </Link>

      <div className={`header__links ${isResaleIQ ? "header__links--resale-iq" : "header__links--generic"}`}>
        {NAV_LINKS.map((link) => {
          const isCurrent = pathname === "/" && activeHash === link.id;

          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className="header__link-wrapper"
              onClick={() => setActiveHash(link.id)} 
            >
              {link.name}
              {isCurrent && (
                <motion.div
                  layoutId="underline"
                  className="header__underline"
                  transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
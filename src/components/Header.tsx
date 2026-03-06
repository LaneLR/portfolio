"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  // { name: "Experience", href: "/experience" },
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const prefix = '/portfolio';

export default function Header() {
  const pathname = usePathname();

  // Determine accent color based on path
  const isResaleIQ = pathname.startsWith("/projects/resale-iq");
  // const iconSrc = isResaleIQ ? `${prefix}/images/resaleiq-portfolio-icon.png` : `${prefix}/images/generic-icon.png`;
  const iconSrc = `${prefix}/images/resaleiq-portfolio-icon.png`;
  const colorClass = isResaleIQ ? "header__links--resale-iq" : "header__links--generic";

  return (
    <nav className="header">
      <Link className="header__icon-link" href="/">
        <img className="header__icon" src={iconSrc} alt="Logo" />
      </Link>

      <div className={`header__links ${colorClass}`}>
        {NAV_LINKS.map((link) => {
          const isCurrent = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className="header__link-wrapper">
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
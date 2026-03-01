"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  let iconSrc = "";
  let color = "";

  switch (pathname) {
    case "/projects/resale-iq":
      iconSrc = "/images/resaleiq-portfolio-icon.png";
      color = "header__links--resale-iq";
      break;
    case "/projects":
      iconSrc = "/images/generic-icon.png";
      color = "header__links--generic";
      break;
    case "/about":
      iconSrc = "/images/generic-icon.png";
      color = "header__links--generic";
      break;
    case "/contact":
      iconSrc = "/images/generic-icon.png";
      color = "header__links--generic";
      break;
    default:
      iconSrc = "/images/generic-icon.png";
      color = "header__links--generic";
  }

  return (
    <div className="header">
      <Link href="/">
        <img
          className={"header__icon"} 
          src={iconSrc}
          alt="Portfolio Navigation Icon"
        />
      </Link>

      <div className={`header__links ${color}`}>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

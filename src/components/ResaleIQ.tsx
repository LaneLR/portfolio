import React from "react";
import {
  Check,
  PlayCircle,
  ShieldCheck,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const prefix = '/portfolio';

export default function ResaleIQComponent() {
  const features = {
    basic: [
      "5 Scans per day.",
      "1 Image per scan.",
      "Basic price estimates.",
      "Access to your scan history.",
    ],
    hobby: [
      "50 scans per day.",
      "2 Images per scan.",
      "Improved accuracy and price estimates.",
      "Access to your scan history.",
      "Profitability grading on appraised items.",
      "Access to Profit Calculator.",
    ],
    pro: [
      "100 scans per day.",
      "3 Images per scan.",
      "High accuracy price estimates.",
      "Access to your scan history.",
      "Profitability grading on appraised items.",
      "Access to Profit Calculator.",
      "Access to SEO Generator to create SEO-optimized listing details.",
      "Unlimited access to Photo Studio to automatically create listing photos.",
    ],
    business: [
      "250 scans per day.",
      "3 Images per scan.",
      "High accuracy price estimates.",
      "Access to your scan history.",
      "Profitability grading on appraised items.",
      "Access to Profit Calculator.",
      "Access to SEO Generator to create SEO-optimized listing details.",
      "Unlimited access to Photo Studio to automatically create listing photos.",
      "Access to Inventory Manager for tracking and managing items.",
      "CSV download of inventory and listings for bulk uploading.",
    ],
  };

  const text1 = `"Wait, what's this?"`;
  const text2 = "Sold for $200.";
  return (
    <div className="web">
      {/* Hero Section */}
      <section className="web__hero">
        <div className="web__container">
          <div className="web__heroContent">
            <span className="web__tag">
              <Sparkles size={14} style={{ marginRight: "8px" }} />
              Item Reselling AI Companion
            </span>
            <h1 className="web__title">
              <p>Turn</p>
              <p className="web__titleSecondary">{text1}</p>
              <p>into</p>
              <span className="web__titleHighlight">{text2}</span>
            </h1>
            <p className="web__subtitle">
              Scan items instantly. Analyze market value. Resell and flip with confidence.
              The most powerful tool for resellers and thrifters.
            </p>
            <div className="web__actions">
              <Link href={"/login"}>
                <button className="web__btn web__btnPrimary">
                  Start For Free
                </button>
              </Link>

              {/* <button className="web__btn web__btnText">
                <PlayCircle size={20} /> Watch Demo
              </button> */}
            </div>
          </div>

          <div className="web__heroVisual">
            <div className="web__imageWrapper">
              <div className="web__phoneFrame">
                <div className="web__phoneNotch"></div>
                <div className="web__placeholderImg">
                  <img
                    src={`${prefix}/images/AppDisplay.png`}
                    alt="ResaleIQ App Interface"
                  />
                </div>
                <div className="web__phoneButton volume"></div>
                <div className="web__phoneButton power"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="web__how">
        <div className="web__container">
          <div className="web__sectionHeader">
            <h2 className="web__sectionTitleWhite">The 3-Second Workflow</h2>
            <p className="web__sectionParagraphWhite">
              From the shelf to your bank account in three steps.
            </p>
          </div>

          <div className="web__steps">
            <div className="stepItem">
              <div className="stepItem__number">
                <Zap size={20} />
              </div>
              <h3 className="stepItem__title">Point & Scan</h3>
              <p className="stepItem__text">
                Our AI identifies the item, brand, and condition in an instant
                using your camera.
              </p>
            </div>
            <div className="stepItem">
              <div className="stepItem__number">
                <Globe size={20} />
              </div>
              <h3 className="stepItem__title">Real-Time Data</h3>
              <p className="stepItem__text">
                Instantly see live sold listings and current comps from eBay and
                Poshmark.
              </p>
            </div>
            <div className="stepItem">
              <div className="stepItem__number">
                <ShieldCheck size={20} />
              </div>
              <h3 className="stepItem__title">Instant Logic</h3>
              <p className="stepItem__text">
                We factor in shipping and platform fees to show your true net
                profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="web__pricing">
        <div className="web__container">
          <div className="web__sectionHeader">
            <h2 className="web__sectionTitleBlack">Affordable Pricing</h2>
            <p className="web__sectionParagraphBlack">
              From the shelf to your bank account in three steps.
            </p>
          </div>
          <div className="web__pricingWrapper">
            <div className="planCard">
              <h3 className="planCard__name">Basic</h3>
              <div className="planCard__price">
                0<span>/ mo</span>
              </div>
              <ul className="planCard__list">
                {features.basic.map((f, i) => (
                  <li key={i}>
                    <Check size={18} /> {f}
                  </li>
                ))}
              </ul>
              <Link href={"/login"}>
                <button className="planCard__btn">Create Account</button>
              </Link>
            </div>

            <div className="planCard planCardPro">
              <h3 className="planCard__name">Hobby</h3>
              <div className="planCard__price">
                12.99<span>/ mo</span>
              </div>
              <ul className="planCard__list">
                {features.hobby.map((f, i) => (
                  <li key={i}>
                    <Check size={18} /> {f}
                  </li>
                ))}
              </ul>
              <Link href={"/login"}>
                <button className="planCard__btn planCard__btnHighlight">
                  Upgrade to Hobby Plan
                </button>
              </Link>
            </div>

            <div className="planCard planCardPro">
              {/* <div className="planCard__badge">Recommended</div> */}
              <h3 className="planCard__name">Pro</h3>
              <div className="planCard__price">
                24.99<span>/ mo</span>
              </div>
              <ul className="planCard__list">
                {features.pro.map((f, i) => (
                  <li key={i}>
                    <Check size={18} /> {f}
                  </li>
                ))}
              </ul>
              <Link href={"/login"}>
                <button className="planCard__btn planCard__btnHighlight">
                  Upgrade to Pro Plan
                </button>
              </Link>
            </div>

            <div className="planCard planCardPro">
              {/* <div className="planCard__badge">Recommended</div> */}
              <h3 className="planCard__name">Elite</h3>
              <div className="planCard__price">
                59.99<span>/ mo</span>
              </div>
              <ul className="planCard__list">
                {features.business.map((f, i) => (
                  <li key={i}>
                    <Check size={18} /> {f}
                  </li>
                ))}
              </ul>
              <Link href={"/login"}>
                <button className="planCard__btn planCard__btnHighlight">
                  Upgrade to Elite Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import {
  IconArrowNarrowRight,
  IconArrowUpRight,
  IconBarbell,
  IconCar,
  IconCurrencyDollar,
  IconHome,
  IconLuggage,
  IconMenu2,
  IconPlayerPause,
  IconPlane,
  IconPlayerPlayFilled,
  IconStarFilled,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const images = {
  hero: "https://images.pexels.com/photos/8002076/pexels-photo-8002076.jpeg",
  logo: "https://cdn.builder.io/api/v1/image/assets%2Fb1c10343f3c34e5daef59b68c7caf5d4%2Fbccf444ce7864fe6af391ae291d07501?format=webp&width=800&height=1200",
  hikers: "https://images.pexels.com/photos/6395044/pexels-photo-6395044.jpeg",
  tokyo: "https://images.pexels.com/photos/38947971/pexels-photo-38947971.jpeg",
  venice: "https://images.pexels.com/photos/38097201/pexels-photo-38097201.jpeg",
  dubai: "https://images.pexels.com/photos/36260008/pexels-photo-36260008.jpeg",
  summit: "https://images.pexels.com/photos/7448931/pexels-photo-7448931.jpeg",
  couple: "https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg",
  cabins: "https://images.pexels.com/photos/16698322/pexels-photo-16698322.jpeg",
};

const journeyGallery = [
  ["Street market in Rishikesh", "https://images.pexels.com/photos/12936634/pexels-photo-12936634.jpeg"],
  ["Travelers in a colorful market", "https://images.pexels.com/photos/19516119/pexels-photo-19516119.jpeg"],
  ["Adventure traveler outdoors", "https://images.pexels.com/photos/19516119/pexels-photo-19516119.jpeg"],
  ["Hikers on a forest trail", "https://images.pexels.com/photos/29999954/pexels-photo-29999954.jpeg"],
  ["Colorful carousel by the sea", "https://images.pexels.com/photos/9652921/pexels-photo-9652921.jpeg"],
  ["Travelers above the clouds", "https://images.pexels.com/photos/6395044/pexels-photo-6395044.jpeg"],
  ["Remote mountain retreat", "https://images.pexels.com/photos/16698322/pexels-photo-16698322.jpeg"],
] as const;

const arrowButton = (label: string, dark = false, href = "#contact") => (
  <a
    href={href}
    className={`tourvia-arrow-button ${dark ? "tourvia-arrow-button--blue" : ""}`}
  >
    <span>{label}</span>
    <span className="tourvia-arrow-icon" aria-hidden="true">
      <IconArrowUpRight size={18} stroke={2} />
    </span>
  </a>
);

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`tourvia-label ${dark ? "tourvia-label--dark" : ""}`}>
      <span className="tourvia-label-line" aria-hidden="true" />
      {children}
    </span>
  );
}

function ImageCard({
  image,
  country,
  title,
  places,
}: {
  image: string;
  country: string;
  title: string;
  places: string;
}) {
  return (
    <article className="tourvia-destination-card">
      <img src={image} alt={`${title}, ${country}`} loading="lazy" />
      <div className="tourvia-destination-shade" />
      <span className="tourvia-country-pill">{country}</span>
      <div className="tourvia-destination-copy">
        <h3>{title}</h3>
        <span>{places}</span>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const journeySectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = journeySectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setJourneyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tourvia-page">
      <header className={`tourvia-navbar ${menuOpen ? "tourvia-navbar--open" : ""}`}>
        <div className="tourvia-navbar-grid">
          <div className="tourvia-navbar-left">
            <button
              className="tourvia-menu-trigger"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="tourvia-menu-round" aria-hidden="true">
                {menuOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
              </span>
              <span className="tourvia-menu-label"><span>Menu</span><span>Close</span></span>
            </button>
          </div>

          <a className="tourvia-logo" href="#top" aria-label="Georgia home">
            <img className="tourvia-logo-image" src={images.logo} alt="Georgia" />
          </a>

          <div className="tourvia-nav-actions">
            <a className="tourvia-plan-button" href="#contact">
              <span>Plan a Trip</span>
              <span className="tourvia-plan-icon" aria-hidden="true"><IconArrowUpRight size={16} /></span>
            </a>
          </div>
        </div>

        <div className="tourvia-menu-panel" aria-hidden={!menuOpen}>
          <div className="tourvia-menu-panel-inner">
            <div className="tourvia-menu-links">
              <div>
                <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
                <a href="/destination" onClick={() => setMenuOpen(false)}>Destinations</a>
                <a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a>
              </div>
              <div>
                <a href="#testimonials" onClick={() => setMenuOpen(false)}>Traveler Stories</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                <a href="#blog" onClick={() => setMenuOpen(false)}>Journal</a>
                <a href="#footer" onClick={() => setMenuOpen(false)}>Privacy Policy</a>
              </div>
            </div>
            <div className="tourvia-menu-footer">
              <a href="mailto:support@georgia.travel">support@georgia.travel</a>
              <a href="tel:+12025550147">+1 (202) 555 0147</a>
              <div className="tourvia-menu-socials"><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a><a href="#contact">Facebook</a></div>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="tourvia-hero">
          <img className="tourvia-hero-image" src={images.hero} alt="Campers beneath a mountain sky at sunrise" />
          <div className="tourvia-hero-overlay" />
          <div className="tourvia-georgia-backdrop" aria-hidden="true">
            <img src={images.cabins} alt="" />
          </div>
          <div className="tourvia-hero-wordmark" aria-hidden="true">{"GEORGIA".split("").map((letter, index) => <span className="tourvia-hero-letter" key={`${letter}-${index}`}>{letter}</span>)}</div>
          <div className="tourvia-container tourvia-hero-content">
            <div className="tourvia-hero-intro">
              <SectionLabel dark>Welcome to Georgia</SectionLabel>
              <h1>Explore beyond the map <span>With Georgia</span></h1>
              {arrowButton("Explore destination", true, "/destination")}
            </div>
            <div className="tourvia-video-card">
              <div className="tourvia-video-frame">
                <img src={images.cabins} alt="A quiet mountain retreat" />
                <button className="tourvia-play-button" type="button" onClick={() => setVideoPlaying((playing) => !playing)} aria-label={videoPlaying ? "Pause video" : "Play video"}>
                  {videoPlaying ? <IconPlayerPause size={16} /> : <IconPlayerPlayFilled size={15} />}
                </button>
              </div>
              <span><i /> Watch the Video</span>
            </div>
          </div>
        </section>

        <section id="about" className="tourvia-section tourvia-about-section">
          <div className="tourvia-container tourvia-about-heading">
            <SectionLabel>Who We Are</SectionLabel>
            <h2>Founded in 2010, our journey began with a single vision to redefine meaningful exploration. Today, we&apos;re a trusted name in curated luxury expeditions worldwide.</h2>
            {arrowButton("More About Us", true)}
          </div>
          <div className="tourvia-container tourvia-about-grid">
            <article className="tourvia-stat-card">
              <div className="tourvia-stat-image"><img src={images.hero} alt="Travelers at a mountain campsite" loading="lazy" /></div>
              <div className="tourvia-stat-number">25<span>k+</span></div>
              <div className="tourvia-stat-label">Our Happy Travelers</div>
            </article>
            <div className="tourvia-about-feature"><img src={images.hikers} alt="Hikers on a mountain ridge" loading="lazy" /></div>
            <article className="tourvia-stat-card tourvia-stat-card--reverse">
              <div className="tourvia-stat-image"><img src={images.summit} alt="Traveler photographing a mountain view" loading="lazy" /></div>
              <div className="tourvia-stat-number">98<span>%</span></div>
              <div className="tourvia-stat-label">Customer Satisfaction</div>
            </article>
          </div>
        </section>

        <section id="destination" className="tourvia-section tourvia-destination-section">
          <div className="tourvia-container">
            <div className="tourvia-section-heading-row">
              <div>
                <SectionLabel>Destination</SectionLabel>
                <h2>Most Popular destination</h2>
              </div>
              {arrowButton("View all destination", false, "/destination")}
            </div>
            <div className="tourvia-destination-grid">
              <ImageCard image={images.tokyo} country="Japan" title="Imperial Tokyo" places="05 Visited Place" />
              <ImageCard image={images.hikers} country="Canada" title="Kananaskis Country" places="03 Visited Place" />
              <ImageCard image={images.dubai} country="Dubai" title="Burj Khalifa" places="02 Visited Place" />
            </div>
          </div>
        </section>

        <section className="tourvia-section tourvia-why-section">
          <div className="tourvia-container tourvia-why-grid">
            <div className="tourvia-why-image">
              <img src={images.summit} alt="Hikers overlooking a mountain landscape" loading="lazy" />
              <div className="tourvia-review-float">
                <div className="tourvia-stars">{Array.from({ length: 5 }).map((_, index) => <IconStarFilled key={index} size={19} />)}</div>
                <p>“We thought we knew what luxury meant. Then Georgia took us to Antarctica.”</p>
                <span>Rosa Steven <b>— Tokyo, Japan</b></span>
              </div>
            </div>
            <div className="tourvia-why-copy">
              <SectionLabel>Why choose us</SectionLabel>
              <h2>Choose The Right Partner for Curated And Seamless Travel</h2>
              <div className="tourvia-benefits">
                <article><span className="tourvia-benefit-icon"><IconPlane size={27} /></span><div><h3>Seamless Booking</h3><p>Enjoy a secure and streamlined reservation process designed for efficiency and privacy.</p></div></article>
                <article><span className="tourvia-benefit-icon"><IconCar size={27} /></span><div><h3>Arrival &amp; Departure Service</h3><p>Enjoy seamless arrival and departure with our private, professionally managed transfer services.</p></div></article>
                <article><span className="tourvia-benefit-icon"><IconBarbell size={27} /></span><div><h3>Professional Guides</h3><p>Our expeditions are led by highly trained experts with deep regional knowledge and years of field experience.</p></div></article>
                <article><span className="tourvia-benefit-icon"><IconCurrencyDollar size={27} /></span><div><h3>Transparent Pricing</h3><p>Our pricing is thoughtfully structured to reflect the precision, safety, and exclusivity behind every expedition.</p></div></article>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="tourvia-section tourvia-packages-section">
          <div className="tourvia-container">
            <div className="tourvia-section-heading-row">
              <div>
                <SectionLabel>Tour package</SectionLabel>
                <h2>Our Exclusive tour packages</h2>
              </div>
              {arrowButton("Explore all package")}
            </div>
            <div className="tourvia-package-grid">
              <article className="tourvia-package-card">
                <div className="tourvia-package-image"><img src={images.dubai} alt="Singapore skyline and waterfront" loading="lazy" /></div>
                <div className="tourvia-package-meta"><span>Sky Park, Singapore</span><span>Start From $60 - $100</span><span>5 Days</span></div>
                <h3>Merlion Park</h3>
                <a href="#contact" className="tourvia-detail-link">View package details <IconArrowNarrowRight size={18} /></a>
              </article>
              <article className="tourvia-package-card">
                <div className="tourvia-package-image"><img src={images.venice} alt="Gondola on Venice&apos;s Grand Canal" loading="lazy" /></div>
                <div className="tourvia-package-meta"><span>Venice, Italy</span><span>Start From $20 - $80</span><span>2 Days</span></div>
                <h3>Grand Canal</h3>
                <a href="#contact" className="tourvia-detail-link">View package details <IconArrowNarrowRight size={18} /></a>
              </article>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          ref={journeySectionRef}
          className={`tourvia-journey-section ${journeyVisible ? "tourvia-journey-section--visible" : ""}`}
        >
          <div className="tourvia-container tourvia-journey-content">
            <div className="tourvia-journey-stats">
              <article className="tourvia-journey-stat">
                <div className="tourvia-journey-value-wrap">
                  <div className="tourvia-journey-value"><span>60</span><b>+</b></div>
                  <span className="tourvia-journey-badge tourvia-journey-badge--pink">Unique Tour Packages</span>
                </div>
                <div className="tourvia-journey-divider" />
                <p>From budget adventures to private luxury escapes</p>
              </article>
              <article className="tourvia-journey-stat">
                <div className="tourvia-journey-value-wrap">
                  <div className="tourvia-journey-value"><span>15</span><b>+</b></div>
                  <span className="tourvia-journey-badge tourvia-journey-badge--peach">Years of Experience</span>
                </div>
                <div className="tourvia-journey-divider" />
                <p>Perfecting meaningful travel experiences since 2009</p>
              </article>
              <article className="tourvia-journey-stat">
                <div className="tourvia-journey-value-wrap">
                  <div className="tourvia-journey-value"><span>98</span><b>%</b></div>
                  <span className="tourvia-journey-badge tourvia-journey-badge--blue">Repeat Booking Rate</span>
                </div>
                <div className="tourvia-journey-divider" />
                <p>Most travelers come back to plan their next trip</p>
              </article>
            </div>
          </div>
          <div className="tourvia-journey-marquee" aria-label="Travel experiences">
            <div className="tourvia-journey-track">
              {[0, 1].map((copy) => (
                <div className="tourvia-journey-list" aria-hidden={copy === 1} key={copy}>
                  {journeyGallery.map(([alt, image], index) => (
                    <img className="tourvia-journey-image" src={image} alt={alt} loading="lazy" key={`${copy}-${index}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="tourvia-journey-fade" aria-hidden="true" />
        </section>

        <section className="tourvia-section tourvia-activities-section">
          <div className="tourvia-container tourvia-activities-heading">
            <SectionLabel>Tour Activities</SectionLabel>
            <h2>Crafted Experiences for The Discerning Travelers</h2>
          </div>
          <div className="tourvia-container tourvia-activities-grid">
            <img src={images.couple} alt="Couple enjoying a mountain camp" loading="lazy" />
            <div className="tourvia-activity-shade" />
            <div className="tourvia-activity-cards">
              <article><span><IconHome size={28} /></span><h3>Exclusive Residences</h3><p>Our accommodations are thoughtfully selected to combine remote beauty.</p></article>
              <article><span><IconCar size={28} /></span><h3>Free Transportation</h3><p>Enjoy seamless arrival and departure with our complimentary private transfer service.</p></article>
              <article><span><IconBarbell size={28} /></span><h3>Chef-Curated Meals</h3><p>Every journey includes thoughtfully curated meals, crafted to reflect the destination.</p></article>
              <article><span><IconLuggage size={28} /></span><h3>Exceptional Packages</h3><p>Our journeys are thoughtfully structured to deliver exceptional experiences.</p></article>
            </div>
          </div>
        </section>

        <section id="contact" className="tourvia-cta-section">
          <img src={images.hero} alt="Mountain range beneath a glowing sky" />
          <div className="tourvia-cta-overlay" />
          <button className="tourvia-cta-play" type="button" onClick={() => setVideoPlaying((playing) => !playing)} aria-label={videoPlaying ? "Pause video" : "Play video"}>
            {videoPlaying ? <IconPlayerPause size={20} /> : <IconPlayerPlayFilled size={18} />}
          </button>
          <a className="tourvia-marquee" href="#contact"><span>EXPLORE NOW&nbsp;&nbsp;&nbsp; EXPLORE NOW&nbsp;&nbsp;&nbsp; EXPLORE NOW&nbsp;&nbsp;&nbsp; EXPLORE NOW&nbsp;&nbsp;&nbsp; </span><span aria-hidden="true">EXPLORE NOW&nbsp;&nbsp;&nbsp; EXPLORE NOW&nbsp;&nbsp;&nbsp; EXPLORE NOW&nbsp;&nbsp;&nbsp; EXPLORE NOW&nbsp;&nbsp;&nbsp; </span></a>
        </section>

        <section id="blog" className="tourvia-section tourvia-blog-section">
          <div className="tourvia-container">
            <div className="tourvia-section-heading-row">
              <div>
                <SectionLabel>Our blog</SectionLabel>
                <h2>Explore Our Recent Blogs</h2>
              </div>
              {arrowButton("View all blogs")}
            </div>
            <div className="tourvia-blog-grid">
              <article><div className="tourvia-blog-image"><img src={images.hikers} alt="Travelers studying a map on a mountain" loading="lazy" /></div><span>Traveling</span><h3>The Precision Behind High-Mountain Expeditions</h3></article>
              <article><div className="tourvia-blog-image"><img src={images.couple} alt="Couple hiking at sunset" loading="lazy" /></div><span>Adventure</span><h3>What It Truly Takes to Explore Antarctica in Comfort</h3></article>
              <article><div className="tourvia-blog-image"><img src={images.cabins} alt="A remote mountain travel retreat" loading="lazy" /></div><span>Journey</span><h3>Access, Ethics, and Exceptional Encounters</h3></article>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="tourvia-footer">
        <div className="tourvia-footer-overlay" />
        <div className="tourvia-container tourvia-footer-content">
          <div className="tourvia-footer-grid">
            <div className="tourvia-footer-links"><h3>Quick link</h3><a href="#top">Home</a><a href="#about">About us</a><a href="#destination">Destination</a><a href="#contact">Contact</a></div>
            <div className="tourvia-footer-center"><h2>Expedition Expertise at Your Service</h2>{arrowButton("Begin Your Journey", true)}</div>
            <div className="tourvia-footer-links"><h3>Social Media</h3><a href="#contact">Instagram</a><a href="#contact">Linkedin</a><a href="#contact">Twitter / X</a><a href="#contact">Facebook</a></div>
          </div>
          <div className="tourvia-footer-bottom"><span>© 2026 Tourvia. All Rights Reserved.</span><div><a href="#top">Style Guide</a><a href="#top">Licenses</a><a href="#top">Changelog</a></div></div>
          <div className="tourvia-footer-wordmark">georgia</div>
        </div>
      </footer>
    </div>
  );
}
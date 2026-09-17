"use client";

import {
  IconArrowUpRight,
  IconChevronDown,
  IconChevronUp,
  IconMenu2,
  IconPlayerPause,
  IconPlayerPlayFilled,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import type { ReactNode } from "react";

const destinationImages = {
  hero: "https://images.pexels.com/photos/7210016/pexels-photo-7210016.jpeg",
  tokyo: "https://images.pexels.com/photos/38947971/pexels-photo-38947971.jpeg",
  canada: "https://images.pexels.com/photos/6395044/pexels-photo-6395044.jpeg",
  dubai: "https://images.pexels.com/photos/36260008/pexels-photo-36260008.jpeg",
  rio: "https://images.pexels.com/photos/29894754/pexels-photo-29894754.jpeg",
  gili: "https://images.pexels.com/photos/36956255/pexels-photo-36956255.jpeg",
  costa: "https://images.pexels.com/photos/29837765/pexels-photo-29837765.jpeg",
  maldives: "https://images.pexels.com/photos/17329322/pexels-photo-17329322.jpeg",
  pyramids: "https://images.pexels.com/photos/15127201/pexels-photo-15127201.jpeg",
  norway: "https://images.pexels.com/photos/33564869/pexels-photo-33564869.jpeg",
  offers: "https://images.pexels.com/photos/12627773/pexels-photo-12627773.jpeg",
  footer: "https://images.pexels.com/photos/8002076/pexels-photo-8002076.jpeg",
  logo: "https://cdn.builder.io/api/v1/image/assets%2Fb1c10343f3c34e5daef59b68c7caf5d4%2Fbccf444ce7864fe6af391ae291d07501?format=webp&width=800&height=1200",
};

const destinations = [
  ["Japan", "Imperial Tokyo", "05 Visited Place", destinationImages.tokyo],
  ["Canada", "Kananaskis Country", "03 Visited Place", destinationImages.canada],
  ["Dubai", "Burj Khalifa", "02 Visited Place", destinationImages.dubai],
  ["Brazil", "Rio de Janeiro", "04 Visited Place", destinationImages.rio],
  ["Indonesia", "Gili Islands", "03 Visited Place", destinationImages.gili],
  ["Spain", "Costa Brava", "02 Visited Place", destinationImages.costa],
  ["Maldives", "Vaadhoo Island", "08 Visited Place", destinationImages.maldives],
  ["Egypt", "Pyramids of Giza", "04 Visited Place", destinationImages.pyramids],
  ["Norway", "Trolltunga", "03 Visited Place", destinationImages.norway],
] as const;

const faqs = [
  [
    "Q. Are Your Trips Suitable for First-time Adventurers?",
    "Many of our journeys are designed for travelers new to remote exploration, with full guidance and preparation support. Our experts walk you through every stage, from physical readiness to destination briefings.",
  ],
  [
    "Q. Are Accommodations Luxurious In Remote Areas?",
    "Even in remote destinations, we partner with carefully selected lodges and camps that offer comfort, privacy, and thoughtful design, ensuring a refined stay while staying closely connected to nature.",
  ],
  [
    "Q. How Physically Demanding Are Your Trips?",
    "Our journeys vary in activity level, and each itinerary clearly outlines what to expect. Whether relaxed exploration or more active adventures, we help match the experience to your comfort and pace.",
  ],
  [
    "Q. What Happens In Case Of Unexpected Weather?",
    "Weather can occasionally change in remote regions. Our team closely monitors conditions and adjusts plans when needed, ensuring safety while keeping the overall journey smooth and enjoyable.",
  ],
  [
    "Q. How Do I Begin Planning My Journey?",
    "Getting started is simple. Share your travel interests, preferred destinations, and schedule with our team, and we&apos;ll design a personalized itinerary tailored to your goals and travel style.",
  ],
] as const;

function Caption({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`destination-caption ${light ? "destination-caption--light" : ""}`}><i />{children}</span>;
}

function ActionButton({ children, blue = false }: { children: ReactNode; blue?: boolean }) {
  return <a href="#offers" className={`destination-action ${blue ? "destination-action--blue" : ""}`}><span>{children}</span><b><IconArrowUpRight size={17} /></b></a>;
}

export default function DestinationPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [playing, setPlaying] = useState(true);

  return (
    <div className="destination-page">
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

          <a className="tourvia-logo" href="/" aria-label="Georgia home">
            <img className="tourvia-logo-image" src={destinationImages.logo} alt="Georgia" />
          </a>

          <div className="tourvia-nav-actions">
            <a className="tourvia-plan-button" href="/#contact">
              <span>Plan a Trip</span>
              <span className="tourvia-plan-icon" aria-hidden="true"><IconArrowUpRight size={16} /></span>
            </a>
          </div>
        </div>

        <div className="tourvia-menu-panel" aria-hidden={!menuOpen}>
          <div className="tourvia-menu-panel-inner">
            <div className="tourvia-menu-links">
              <div>
                <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="/#about" onClick={() => setMenuOpen(false)}>About Us</a>
                <a href="/destination" onClick={() => setMenuOpen(false)}>Destinations</a>
                <a href="/#packages" onClick={() => setMenuOpen(false)}>Packages</a>
              </div>
              <div>
                <a href="/#testimonials" onClick={() => setMenuOpen(false)}>Traveler Stories</a>
                <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                <a href="/#blog" onClick={() => setMenuOpen(false)}>Journal</a>
                <a href="/#footer" onClick={() => setMenuOpen(false)}>Privacy Policy</a>
              </div>
            </div>
            <div className="tourvia-menu-footer">
              <a href="mailto:support@georgia.travel">support@georgia.travel</a>
              <a href="tel:+12025550147">+1 (202) 555 0147</a>
              <div className="tourvia-menu-socials"><a href="/#contact">Instagram</a><a href="/#contact">LinkedIn</a><a href="/#contact">Facebook</a></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="destination-intro destination-container">
          <Caption>Destination</Caption>
          <h1>Most Popular destination</h1>
          <div className="destination-hero-image"><img src={destinationImages.hero} alt="Modern glass room beside a lush waterfall" /></div>
        </section>

        <section className="destination-grid-section destination-container">
          <div className="destination-grid">
            {destinations.map(([country, name, visited, image]) => (
              <a className="destination-card" href="/destination" key={name} aria-label={`Visit destination page for ${name}`}>
                <img src={image} alt={`${name}, ${country}`} loading="lazy" />
                <div className="destination-card-gradient" />
                <div className="destination-card-content"><span>{country}</span><div><h2>{name}</h2><p>{visited}</p></div></div>
              </a>
            ))}
          </div>
        </section>

        <section id="offers" className="destination-offer destination-container">
          <div className="destination-offer-media"><img src={destinationImages.offers} alt="A bright beach coastline" /><div /></div>
          <div className="destination-offer-content"><div><Caption light>Offers</Caption><h2>40% off your dream adventure</h2><p>Traveling the world doesn’t have stretching your budget. We design thoughtfully plan journeys experiences.</p><ActionButton blue>Book Now</ActionButton></div></div>
          <button className="destination-video-toggle" type="button" aria-label={playing ? "Pause offer video" : "Play offer video"} onClick={() => setPlaying((value) => !value)}>{playing ? <IconPlayerPause size={15} /> : <IconPlayerPlayFilled size={15} />}</button>
        </section>

        <section className="destination-faq destination-container">
          <div className="destination-faq-heading"><Caption>FAQs</Caption><h2>Frequently Asked Questions</h2></div>
          <div className="destination-faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return <div className={`destination-faq-item ${isOpen ? "destination-faq-item--open" : ""}`} key={question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{question}</span><b>{isOpen ? <IconChevronUp size={17} /> : <IconChevronDown size={17} />}</b></button><div className="destination-faq-answer"><p>{answer}</p></div></div>;
            })}
          </div>
        </section>
      </main>

      <footer className="destination-footer">
        <div className="destination-footer-image" style={{ backgroundImage: `url(${destinationImages.footer})` }} />
        <div className="destination-footer-inner destination-container">
          <div className="destination-footer-grid">
            <div className="destination-footer-links"><h3>Quick link</h3><a href="/">Home</a><a href="/#about">About us</a><a href="/destination">Destination</a><a href="/#contact">Contact</a></div>
            <div className="destination-footer-center"><h2>Expedition Expertise at Your Service</h2><ActionButton>Begin Your Journey</ActionButton></div>
            <div className="destination-footer-links"><h3>Social Media</h3><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Linkedin</a><a href="https://x.com/" target="_blank" rel="noreferrer">Twitter / X</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></div>
          </div>
          <div className="destination-footer-bottom"><span>© 2026 Georgia. All Rights Reserved.</span><div><a href="/">Style Guide</a><a href="/">Licenses</a><a href="/">Changelog</a></div></div>
          <div className="destination-footer-wordmark">georgia</div>
        </div>
      </footer>
    </div>
  );
}
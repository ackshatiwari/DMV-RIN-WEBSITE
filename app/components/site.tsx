import Image from "next/image";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
};

type WireframeImageProps = {
  alt: string;
  height: number;
  label: string;
  src?: string;
  width: number;
  className?: string;
};

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Button({ children, href }: ButtonProps) {
  return (
    <a className="btn" href={href}>
      {children}
    </a>
  );
}

export function WireframeImage({
  alt,
  height,
  label,
  src,
  width,
  className = "",
}: WireframeImageProps) {
  return (
    <div
      className={`image-placeholder ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 820px) 100vw, 50vw"
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section className={className} id={id}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function Header() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <a className="logo" href="#">
            <span className="logo-mark" aria-hidden="true" />
            DMV River Intelligence Network
          </a>
          <ul className="nav-links">
            <li>
              <a href="#dashboards">Dashboards</a>
            </li>
            <li>
              <a href="#classes">Classes</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#lead">Lead a chapter</a>
            </li>
          </ul>
          <Button href="https://dmv-river-intelligence-network.vercel.app">
            Open dashboards
          </Button>
        </nav>
      </div>
    </header>
  );
}

export function SponsorMarquee() {
  const sponsors = [
    {
      src: "/hack_club_transparent.png",
      alt: "Hack Club",
    },
    {
      src: "/soaring_eagle_alliance_black_transparent.png",
      alt: "Soaring Eagle Alliance",
    },
  ];

  return (
    <div className="sponsors">
      <div className="wrap sponsor-row">
        <div className="sponsor-label">Sponsored and Supported by</div>
        <div className="marquee">
          <div className="track">
            {[0, 1].map((setIndex) => (
              <div
                className="sponsor-set"
                key={setIndex === 0 ? "first-set" : "duplicate-set"}
              >
                {sponsors.map((sponsor) => (
                  <WireframeImage
                    key={`${setIndex}-${sponsor.src}`}
                    alt={sponsor.alt}
                    height={56}
                    label={sponsor.alt}
                    src={sponsor.src}
                    width={160}
                    className="logo-placeholder"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-content">
        <div>DMV River Intelligence Network</div>
        <div>
          <a href="mailto:dmv.rivernetwork@gmail.com">
            dmv.rivernetwork@gmail.com
          </a>
          <span aria-hidden="true">&nbsp;|&nbsp;</span>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

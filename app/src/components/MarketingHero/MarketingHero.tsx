import React from "react";
import "./MarketingHero.css";

interface HeroProps extends React.PropsWithChildren {
  backgroundImage: string;
}

export default function MarketingHero({ backgroundImage }: HeroProps) {
  return (
    <section
      className="marketing-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container">
        {/* 48px == 24px == 1.5rem */}
        <h1>New Games & Accessories</h1>

        {/* 110px == 55px == 3.4375rem */}
        <h2>
          Monthly packages.
          <br />
          Excitement delivered daily.
        </h2>
        {/* 40px == 20px == 1.25rem */}
        <p>
          What's the best way to shop for the latest video games and
          peripherals? How about never shopping at all? You'll get new stuff on
          your doorstep — every month.
        </p>
        <button>Get Started</button>
      </div>
    </section>
  );
}

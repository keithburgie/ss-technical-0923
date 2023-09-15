import React from "react";
import "./MarketingHero.css";

interface HeroProps extends React.PropsWithChildren {
  backgroundImage: string;
}

export default function MarketingHero({
  backgroundImage,
  children,
}: HeroProps) {
  return (
    <section
      className="marketing-hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container">{children}</div>
    </section>
  );
}

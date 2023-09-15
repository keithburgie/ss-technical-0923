import backgroundImage from "./assets/images/photo-couch.jpg";
import StepsDisplay from "./components/StepsDisplay";
import MarketingHero from "./components/MarketingHero";
import PageHeader from "./components/PageHeader/";
import Logo from "./components/Logo.tsx/index.ts";

function App() {
  return (
    <>
      <PageHeader>
        <Logo title="Endless Logo" className="logo" />
      </PageHeader>

      <MarketingHero backgroundImage={backgroundImage}>
        <h1>New Games & Accessories</h1>
        <h2>
          Monthly packages.
          <br />
          Excitement delivered daily.
        </h2>
        <p>
          What's the best way to shop for the latest video games and
          peripherals? How about never shopping at all? You'll get new stuff on
          your doorstep — every month.
        </p>
        <button>Get Started</button>
      </MarketingHero>

      <StepsDisplay />
    </>
  );
}

export default App;

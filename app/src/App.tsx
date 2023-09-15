import backgroundImage from "./assets/images/photo-couch.jpg";
// import Logo from "./components/Logo/";
import StepsDisplay from "./components/StepsDisplay";
import MarketingHero from "./components/MarketingHero";
import PageHeader from "./components/PageHeader/";
import Logo from "./components/Logo.tsx/index.ts";

function App() {
  return (
    <>
      {/* Total height == 104px == 54px == 3.375rem */}
      <PageHeader>
        <Logo title="Endless Logo" className="logo" />
      </PageHeader>

      <MarketingHero backgroundImage={backgroundImage} />

      <StepsDisplay />
    </>
  );
}

export default App;

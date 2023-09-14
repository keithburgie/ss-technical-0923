import { Logo } from "./components/Logo";
import backgroundImage from "./assets/photo-couch.jpg";
import { useEffect, useState } from "react";

function App() {
  type VersionContent = {
    title: string;
    body: string;
    effectiveDate: string;
  };

  type StepData = {
    id: string;
    stepNumber: string;
    versionContent: VersionContent;
  };

  const [steps, setSteps] = useState<StepData[]>([]);

  useEffect(() => {
    fetch(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    )
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort(
          (a: StepData, b: StepData) =>
            parseInt(a.stepNumber) - parseInt(b.stepNumber)
        );

        console.log(sortedData);

        /**
         * TODO: Versioned content not working correctly
         */

        const versionedData = sortedData.map((item: StepData) => {
          // Directly getting the newest version since we're assuming that the outside sorting already took care of that
          const newestVersion = item.versionContent;
          return {
            ...item,
            versionContent: newestVersion,
          };
        });

        console.log(versionedData);

        setSteps(versionedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <nav style={{ backgroundColor: "#222222" }}>
        <div className="container">
          <div className="logo" style={{ maxWidth: "18rem" }}>
            <a href="/">
              <Logo title="Endless Logo" fill="#50e3c2" />
            </a>
          </div>
        </div>
      </nav>

      <section
        className="hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div
            className="hero-content"
            style={{ textAlign: "left", color: "white", maxWidth: "40rem" }}
          >
            <h1>New Games & Accessories</h1>
            <h2>
              Monthly packages.
              <br />
              Excitement delivered daily.
            </h2>
            <p>
              What's the best way to shop for the latest video games and
              peripherals? How about never shopping at all? You'll get new stuff
              on your doorstep — every month.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h3>How It Works</h3>
          <ol className="how-it-works">
            {steps.length &&
              steps.map(({ id, stepNumber, versionContent }) => (
                // () => (
                <li key={id}>
                  <p style={{ fontSize: "1.5rem", lineHeight: 1 }}>
                    {stepNumber}
                  </p>
                  <p>
                    <strong>{versionContent.title}</strong>
                  </p>
                  <p>{versionContent.body}</p>
                </li>
              ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default App;

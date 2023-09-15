import { Logo } from "./components/Logo";
import backgroundImage from "./assets/photo-couch.jpg";
import { useEffect, useState } from "react";

type VersionContent = {
  title: string;
  body: string;
  effectiveDate: string;
};

type StepData = {
  id: string;
  stepNumber: string;
  versionContent: VersionContent[];
};

type ProcessedStepData = {
  id: string;
  stepNumber: string;
  versionContent: VersionContent;
};

function sortByStepNumber(data: StepData[]): StepData[] {
  return data.sort(
    (a: StepData, b: StepData) =>
      parseInt(a.stepNumber) - parseInt(b.stepNumber)
  );
}

function removeOldVersions(data: StepData): ProcessedStepData {
  const versionContent = data.versionContent;
  const newestVersion = versionContent.sort(
    (a, b) =>
      new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime()
  )[0];
  return {
    ...data,
    versionContent: newestVersion,
  };
}

function processStepsData(stepsData: StepData[]): ProcessedStepData[] {
  const sortedData = sortByStepNumber(stepsData);
  const processedData = sortedData.map(removeOldVersions);

  return processedData;
}

function App() {
  const [steps, setSteps] = useState<ProcessedStepData[]>([]);

  useEffect(() => {
    fetch(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    )
      .then((response) => response.json())
      .then((data) => {
        setSteps(processStepsData(data));
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

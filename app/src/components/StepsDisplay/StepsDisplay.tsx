import { useEffect, useState } from "react";
import { StepDataLocal } from "./StepsDisplay.types";
import { processStepsData } from "./StepsDisplay.utils";
import StepDisplay from "./StepDisplay";
import "./StepsDisplay.css";

export default function StepsDisplay() {
  const stepsApi =
    "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge";

  const [steps, setSteps] = useState<StepDataLocal[]>([]);

  useEffect(() => {
    fetch(stepsApi)
      .then((response) => response.json())
      .then((data) => {
        setSteps(processStepsData(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="steps-display">
      <div className="container" style={{ textAlign: "center" }}>
        <h3>How It Works</h3>
        <ol className="how-it-works">
          {steps.length &&
            steps.map((step) => <StepDisplay key={step.id} step={step} />)}
        </ol>
      </div>
    </section>
  );
}

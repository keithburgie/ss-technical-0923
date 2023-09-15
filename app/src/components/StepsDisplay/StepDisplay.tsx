import React from "react";
import { StepDataLocal } from "./StepsDisplay.types";

interface StepDisplayProps extends React.PropsWithChildren {
  step: StepDataLocal;
}

function formatStepNumber(stepNumber: string) {
  return parseInt(stepNumber) < 10 ? `0${stepNumber}` : stepNumber;
}

export default function StepDisplay({ step }: StepDisplayProps) {
  return (
    <li>
      <p className="step-number">{formatStepNumber(step.stepNumber)}</p>
      <h4 className="step-name">
        <strong>{step.versionContent.title}</strong>
      </h4>
      <p className="step-description">{step.versionContent.body}</p>
    </li>
  );
}

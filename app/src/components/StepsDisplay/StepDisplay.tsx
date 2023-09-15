import React from "react";
import { StepDataLocal } from "./StepsDisplay.types";

interface StepDisplayProps extends React.PropsWithChildren {
  step: StepDataLocal;
}

const stepStyles = {
  fontSize: "1.5rem",
  lineHeight: 1,
};
export default function StepDisplay({ step }: StepDisplayProps) {
  return (
    <li>
      {/* 120px */}
      <p style={stepStyles}>{step.stepNumber}</p>
      {/* 32px */}
      <p>
        <strong>{step.versionContent.title}</strong>
      </p>
      {/* 32px... so probably 1rem and cut everything else in half */}
      <p>{step.versionContent.body}</p>
    </li>
  );
}

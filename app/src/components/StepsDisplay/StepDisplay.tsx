import React from "react";
import { StepDataLocal } from "./StepsDisplay.types";

interface StepDisplayProps extends React.PropsWithChildren {
  step: StepDataLocal;
}

const stepStyles = {
  fontSize: "1.5rem",
  lineHeight: 1,
};
const StepDisplay = ({ step }: StepDisplayProps) => {
  return (
    <li>
      <p style={stepStyles}>{step.stepNumber}</p>
      <p>
        <strong>{step.versionContent.title}</strong>
      </p>
      <p>{step.versionContent.body}</p>
    </li>
  );
};

export default StepDisplay;

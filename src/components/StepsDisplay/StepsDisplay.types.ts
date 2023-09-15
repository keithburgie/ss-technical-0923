// Types for StepsDisplay components

export type StepVersionContent = {
  title: string;
  body: string;
  effectiveDate: string;
};

export type StepDataApi = {
  id: string;
  stepNumber: string;
  versionContent: StepVersionContent[];
};

export type StepDataLocal = {
  id: string;
  stepNumber: string;
  versionContent: StepVersionContent;
};

import { StepDataLocal, StepDataApi } from "./StepsDisplay.types";

export function sortByStepNumber(data: StepDataApi[]): StepDataApi[] {
  return data.sort(
    (a: StepDataApi, b: StepDataApi) =>
      parseInt(a.stepNumber) - parseInt(b.stepNumber)
  );
}

export function removeOldVersions(data: StepDataApi): StepDataLocal {
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

export function processStepsData(stepsData: StepDataApi[]): StepDataLocal[] {
  const sortedData = sortByStepNumber(stepsData);
  const processedData = sortedData.map(removeOldVersions);

  return processedData;
}

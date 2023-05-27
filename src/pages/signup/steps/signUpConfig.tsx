import { AccountStep } from "./Account";
import { CVStep } from "./CV";

export enum ESignUpStep {
  ACCOUNT = "account",
  CV = "cv",
}

export const signUpConfig = {
  [ESignUpStep.ACCOUNT]: <AccountStep />,
  [ESignUpStep.CV]: <CVStep />
}

export const stepBySteps = [ESignUpStep.CV, ESignUpStep.ACCOUNT];

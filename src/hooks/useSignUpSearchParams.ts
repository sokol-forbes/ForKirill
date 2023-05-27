import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { TFormSchema } from "../pages/signup/SignUpProvider";
import { ESignUpStep, stepBySteps } from "../pages/signup/steps/signUpConfig";

interface IUseSignUpSearchParamsProps {
  checkFormStep: (step: keyof TFormSchema) => boolean;
}

export const useSignUpSearchParams = ({ checkFormStep }: IUseSignUpSearchParamsProps) => {
  const [step, setStep] = useState<ESignUpStep>(stepBySteps[0]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlQueryParams = new URLSearchParams(location.search);

    const step: ESignUpStep = urlQueryParams.get("step")! as ESignUpStep;

    if (Object.values(ESignUpStep).includes(step) && checkFormStep(step)) {
      setStep(step);
      return;
    }

    urlQueryParams.set("step", stepBySteps[0]);
    navigate({ search: urlQueryParams.toString() });
  }, []);

  const nextStep = useCallback(() => {
    if (checkFormStep(step)) {
      const index = stepBySteps.findIndex((value) => value === step);
      if (index + 1 >= stepBySteps.length) {
        return;
      }
      const urlQueryParams = new URLSearchParams(location.search);

      const newStep = stepBySteps[index + 1];

      urlQueryParams.set("step", newStep);
      setStep(newStep);

      navigate({ search: urlQueryParams.toString() });
    }
  }, [step, location.search]);

  const prevStep = useCallback(() => {
    const index = stepBySteps.findIndex((value) => value === step);

    if (index - 1 < 0) {
      return;
    }
    const urlQueryParams = new URLSearchParams(location.search);

    const newStep = stepBySteps[index - 1];

    urlQueryParams.set("step", newStep);
    setStep(newStep);
    navigate({ search: urlQueryParams.toString() });
  }, [step, location.search]);

  return {
    step,
    nextStep,
    prevStep,
  };
};

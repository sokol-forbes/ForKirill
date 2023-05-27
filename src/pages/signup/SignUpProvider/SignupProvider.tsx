import { ReactNode, createContext, useContext, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";

import { accountDto, cvDto } from "./dto";
import { useSignUpSearchParams } from "../../../hooks";
import { ESignUpStep } from "../steps/signUpConfig";

interface ISignUpState {
  step: ESignUpStep;
  nextStep: () => void, 
  prevStep: () => void,
  isStepIsDirty: boolean
}

const signUpContext = createContext<ISignUpState | undefined>(undefined);

interface ISignUpProviderProps {
  children: ReactNode;
}

const formSchema = z.object({
  account: accountDto,
  cv: cvDto
})

export type TFormSchema = z.infer<typeof formSchema>;

export const SignUpProvider = ({ children }: ISignUpProviderProps) => {
  const {
    handleSubmit,
    register,
    watch,
    getFieldState,
    formState,
    getValues,
    setValue,
    setError,
    control,
    clearErrors,
    reset,
    trigger,
  } = useForm<TFormSchema>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(formSchema),
  });

  const checkFormStep = (step: keyof TFormSchema): boolean => {
    return (
      !!getValues(step) &&
      formSchema
        .partial()
        .pick({ [step]: true })
        .safeParse(getValues()).success
    );
  };

  const { step, nextStep, prevStep } = useSignUpSearchParams({ checkFormStep })

  const isStepIsDirty = useMemo<boolean>(() => {
    return (
      !!getValues(step) &&
      formSchema
        .partial()
        .pick({ [step]: true })
        .safeParse(getValues()).success
    );
  }, [step, watch(step)]);

  return <signUpContext.Provider value={{ step, nextStep, prevStep, isStepIsDirty }}>{children}</signUpContext.Provider>;
};

export const useSignUpContext = () => {
  const context = useContext(signUpContext);

  if (!context) {
    throw new Error("SignUpContext should be used only with SignUpProvider");
  }

  return context;
};

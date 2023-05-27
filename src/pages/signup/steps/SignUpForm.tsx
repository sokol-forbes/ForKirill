import { useSignUpContext } from "../SignUpProvider";
import { signUpConfig } from "./signUpConfig";

export const SignUpForm = () => {
  const { step } = useSignUpContext();

  return <form>{signUpConfig[step]}</form>;
};

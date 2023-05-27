import { SignUpProvider } from "./SignUpProvider";
import { SignUpForm } from "./steps";

const SignUpPage = () => {
  return (
    <SignUpProvider>
      <SignUpForm />
    </SignUpProvider>
  );
};

export default SignUpPage;

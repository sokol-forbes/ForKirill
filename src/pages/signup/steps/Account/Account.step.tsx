import { useSignUpContext } from "../../SignUpProvider";

export const AccountStep = () => {
  const { prevStep, nextStep } = useSignUpContext();
  return (
    <div>
      <span>account</span>
      <button type={'button'} onClick={prevStep}>{'<'}</button>
      <button type={'button'} onClick={nextStep}>{'>'}</button>
    </div>
  );
};

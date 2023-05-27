import { Button, Input, Skeleton, Spinner } from "../../../../components";
import { useSignUpContext } from "../../SignUpProvider";

export const CVStep = () => {
  const { prevStep, nextStep } = useSignUpContext();

  return (
    <div>
      <span>cv</span> 
      <button type={'button'} onClick={prevStep}>{"<"}</button>
      <button type={'button'} onClick={nextStep}>{">"}</button>
      <Button>common</Button>
      <Button loading={true}>loading</Button>
      <Button disabled={true}>disabled</Button>
      <Button buttonType="success">success</Button>
      <Button buttonType="success" disabled>success disabled</Button>
      <Button buttonType="warning">warning</Button>
      <Button buttonType="warning" disabled>warning disabled</Button>
      <Button buttonType="error">error</Button>
      <Button buttonType="error" disabled>error disabled</Button>
      <Spinner />
      <Skeleton />
      <Input />
      <Input title={'123'} />
      <Input error="123" />
      <Input skipError value={'skipError'} />
      <Input isLoading value={'is loading'} />
      <input />
    </div>
  );
};

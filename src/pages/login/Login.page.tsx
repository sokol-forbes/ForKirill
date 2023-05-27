import { Button, Input } from "../../components";

import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLogin, loginDto } from "./dto";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ERoute } from "../../routes";

const LoginPage = () => {
  const { register, handleSubmit, formState, setError } = useForm<TLogin>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(loginDto),
  });

  const onLogin = ({ username, password }: TLogin) => {
    console.log(username, password);
    const rand = Math.random();

    if (rand > 0.5) {
      toast(`Welcome, ${username}`, { type: "success" });
    } else {
      toast(`Invalid username or password`, { type: "error" });
      setError("username", { message: "invalid" });
      setError("password", { message: "invalid" });
    }
  };

  return (
    <div className={styles.login__image}>
      <div className={styles.login__form}>
        <h1 className={styles.form__title}>Log In</h1>
        <form className={styles.form} onSubmit={handleSubmit(onLogin)}>
          <Input {...register("username")} error={formState.errors.username?.message} title={"Username"} />
          <Input
            {...register("password")}
            error={formState.errors.password?.message}
            type={"password"}
            title={"Password"}
          />
          <div className={styles.form__actions}>
            <Link className={styles.form__link} to={ERoute.SIGNUP}>Do not have an account? Sign up</Link>
            <Button type={"submit"} className={styles.form__button}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

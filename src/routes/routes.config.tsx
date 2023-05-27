import { LazyExoticComponent, ReactElement, ReactNode, lazy } from "react"

export enum ERoute {
  SIGNUP = "signup",
  LOGIN = "login",
}

export interface IRoute {
  element: ReactElement,
}

const SignupPage = lazy(() => import('../pages/signup'));
const LoginPage = lazy(() => import('../pages/login'));


export const publicRoutes: Record<ERoute, IRoute> = {
  [ERoute.LOGIN]: {
    element: <LoginPage />,
  },
  [ERoute.SIGNUP]: {
    element: <SignupPage />,
  },
}

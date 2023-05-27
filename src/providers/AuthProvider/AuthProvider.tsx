import { ReactNode, createContext, useContext } from "react";

interface IAuthState {}

const authContext = createContext<IAuthState | undefined>(undefined);

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('AuthContext should be used only with AuthProvider')
  }

  return context;
}

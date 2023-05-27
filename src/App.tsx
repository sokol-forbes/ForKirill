import { BrowserRouter } from "react-router-dom";

import { Navigation } from "./routes";
import { AuthProvider } from "./providers";

import './styles/global.scss';
import './styles/constants.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </BrowserRouter>
  );
};

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Navigation } from "./routes";
import { AuthProvider } from "./providers";

import "./styles/global.scss";
import "./styles/constants.scss";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

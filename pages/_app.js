import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ContextProvider from "../context/contextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <main className={"dark"}>
      <ContextProvider>
        <Navbar />
        <ToastContainer position="bottom-right" pauseOnHover={false} />
        <Component {...pageProps} />
      </ContextProvider>
    </main>
  );
};

export default MyApp;

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ContextProvider from "../context/contextProvider";
import GetInTouch from '../components/GetInTouch';
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <main className={"dark"}>
      <ContextProvider>
        <Navbar />
        <ToastContainer position="bottom-right" pauseOnHover={false} />
        <Component {...pageProps} />
        <GetInTouch />
        <Footer />
      </ContextProvider>
    </main>
  );
};

export default MyApp;

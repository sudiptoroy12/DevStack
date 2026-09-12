
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import type { ITechnology } from "./types/techonologiesType";
import { Suspense } from "react";
import Techonologies from "./components/techonologies/Techonologies";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const techonologiesFetch = async (): Promise<ITechnology[]> => {
  {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  }
};

function App() {
  const techonologiesPromise = techonologiesFetch();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Techonologies techonologiesPromise={techonologiesPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

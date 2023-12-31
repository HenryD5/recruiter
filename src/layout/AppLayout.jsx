import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bg-dark-light mt-20">{children}</div>
      <Footer />
    </>
  );
};

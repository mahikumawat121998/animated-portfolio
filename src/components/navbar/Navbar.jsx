import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          DOTENV
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook.png" />
          </a>
          <a href="https://www.instagram.com/deadofwrite_aksit/">
            <img src="/instagram.png" alt="instagram.png" />
          </a>
          <a href="https://www.quora.com/profile/Mahesh-Kumawat-178">
            <img src="/quora.png" alt="quora.png" />
          </a>
          <a href="https://www.linkedin.com/in/mahesh-kumawat-68b0aa190/">
            <img src="/linkdin.png" alt="linkdin.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

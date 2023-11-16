import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marketing & Consultancy</h2>
          <p>
            In a dynamic business landscape, strategic marketing is pivotal for
            brand visibility and growth. Our consultancy services tailor
            strategies to align with your unique business objectives and
            challenges. Through comprehensive market analysis, we identify
            opportunities that maximize your competitive advantage.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Creating Website</h2>
          <p>
            We specialize in creating bespoke websites that seamlessly align
            with your brand identity and business objectives. Our web
            development process begins with a thorough understanding of your
            unique requirements and target audience. User-centric design
            principles guide our development, ensuring an intuitive and engaging
            user experience. Responsive design is integral, guaranteeing that
            your website functions flawlessly across all devices and screen
            sizes.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database Management</h2>
          <p>
            Our database management services are designed to streamline your
            data operations, ensuring efficiency and reliability. We begin by
            conducting a comprehensive analysis of your data needs to create a
            tailored database solution. Data security is our top priority, and
            we implement robust measures to protect your sensitive information
            against unauthorized access. Our expertise spans various database
            management systems, allowing us to choose the optimal solution for
            your specific requirements.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

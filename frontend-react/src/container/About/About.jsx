import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        "Solving the <span>problem, </span> Then writing the{" "}
        <span>code." </span>
      </h2>

      <h2
        className=""
        style={{
          marginTop: 30,
          marginBottom: 30,
          fontSize: 18,
          lineHeight: 2.2,
          textAlign: "center",
        }}
      >
        With over 7 years of experience, I've worked on 120+ projects and earned
        35+ certifications, transforming ideas into impactful digital solutions.
        From websites to applications and beyond, I've collaborated with
        agencies, startups, and dynamic teams to build tools that deliver
        exceptional results for businesses and consumers alike. I'm passionate
        about blending creativity and technical expertise to craft solutions
        that don't just work - they stand out. Whether it's solving complex
        problems or delivering seamless user experiences, l'm all about turning
        visions into functional, elegant realities. I thrive in collaborative
        environments, adapt quickly to new challenges, and am always up for
        pushing boundaries to create something exceptional. Let's connect and
        build something amazing
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

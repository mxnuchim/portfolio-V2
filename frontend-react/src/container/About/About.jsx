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
        className="head-text"
        style={{ marginTop: 30, fontSize: 16, lineHeight: 2 }}
      >
        I'm a full stack developer based in <span>Lagos, Nigeria</span> with 3+
        years of experience building scalable solutions using a host of tools
        and technologies. My core strengths are Frontend development{" "}
        <span>(React/React Native)</span>, Backend Development{" "}
        <span>(Node.js)</span>, cloud computing services <span>(AWS)</span> and
        I'm also learning IOS development with <span>Swift.</span> <br />
        Ok, if you're not here for that, you can find me having fun on Twitter
        or networking badly on LinkedIn
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

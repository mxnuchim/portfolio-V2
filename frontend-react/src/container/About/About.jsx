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
        "Solving the <span>problem. </span> Then writing the{" "}
        <span>code." </span>
      </h2>

      <h2
        className="head-text"
        style={{ marginTop: 30, fontSize: 16, lineHeight: 2 }}
      >
        I'm a full stack developer based in <span>Lagos, Nigeria</span> with 3+
        years of experience specializing in <span>JavaScript</span> and{" "}
        <span>TypeScript</span> and my core strengths are Frontend development{" "}
        <span>(React/React Native)</span>, Backend Development{" "}
        <span>(Node.js)</span>, cloud coputing services <span>(AWS)</span> and
        IOS development <span>(SwiftUI)</span> <br />
        I've done remote work for agencies, consulted for startups, and
        collaborated with very talented people to create digital products for
        both business and consumer use. I'm quietly confident, naturally
        curious, and constantly working on improving my skills, one problem at a
        time.
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

import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👨🏾‍💻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi, I'm</p>
              <h1 className="head-text">Manuchim</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Web/Mobile Engineer</p>
            <p className="p-text">iOS Engineer</p>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1yoQvHi9C2Z-MsC7NXiSC24pSEvp54XWk/view?usp=sharing"
          >
            <button type="button" className="p-text1">
              Résumé/CV
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.me2} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");

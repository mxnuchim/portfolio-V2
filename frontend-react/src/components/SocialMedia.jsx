import React from "react";
import {
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsEnvelopeFill,
} from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target="_blank" rel="noreferrer" href="https://github.com/mxnuchim">
        <BsGithub />{" "}
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/manuchim_ix"
      >
        <BsTwitter />{" "}
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:manuchimoliver779@gmail.com"
      >
        <BsEnvelopeFill />{" "}
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/manuchimoliver"
      >
        <BsLinkedin />{" "}
      </a>
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.medium.com/@manuchimoliver779"
      >
        <BsMedium />{" "}
      </a>
    </div>
  </div>
);

export default SocialMedia;

import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin, BsMedium, BsEnvelopeFill } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='mailto:manuchimoliver779@gmail.com'><BsEnvelopeFill /> </a>
    </div>
    <div>
      <a href='https://twitter.com/manuchim_ix'><BsTwitter /> </a>
    </div>
    <div>
      <a href='https://github.com/mxnuchim'><BsGithub /> </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/manuchimoliver'><BsLinkedin /> </a>
    </div>
    <div>
      <a href='https://www.medium.com/@manuchimoliver779'><BsMedium /> </a>
    </div>
  </div>
);

export default SocialMedia;


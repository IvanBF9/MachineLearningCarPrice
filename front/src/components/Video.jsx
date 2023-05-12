import React from "react";
import BgVideo from "../assets/bg.mp4";

const Video = () => {
  return (
    <div className="z-10 w-full absolute top-[-120px] overflow-hidden">
      <video autoPlay loop muted width="100%">
        <source src={BgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;

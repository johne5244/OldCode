import React, { useState } from "react";
import Video from "../../videos/vision.mp4";
// import { Button } from "../ButtonElements";
// import TransitionsModal from "../ModalComponents/Modal";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1></HeroH1>
          <HeroP></HeroP>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;

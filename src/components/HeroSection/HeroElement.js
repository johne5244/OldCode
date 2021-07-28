import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md";
import {Link} from "react-router-dom";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24x;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  } ;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroButton = styled(Link)`
  background: ${({primary}) => (primary ? "#EFAD28" : "#fff")};
  border-radius: 50px;
  white-space: nowrap;
  padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
  color: ${({dark}) => (dark ? "#010606" : " black")};
  font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: point;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? "#fff" : "#EFAD28")};
    font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
    color: ${({dark}) => (dark ? "white" : " #fff")};
    cursor: pointer;
  }
`;

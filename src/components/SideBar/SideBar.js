import React from "react";
import { Link } from "react-router-dom";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <Link to="/ui" style={{ textDecoration: "none" }}>
              <SidebarLink onClick={toggle}>Meet Designers</SidebarLink>
            </Link>
            <Link to="/mobile" style={{ textDecoration: "none" }}>
              <SidebarLink onClick={toggle}>Meet Mobile Devs</SidebarLink>
            </Link>
            <Link to="/web_devs" style={{ textDecoration: "none" }}>
              <SidebarLink onClick={toggle}>Meet Web Devs</SidebarLink>
            </Link>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;

import React from "react";
import MobileDevModal from "./Mobile/MobileDevModal";
import {ImageUploader} from "./Pix";
import UI_UXMODAL from "./UI/UX/UI_UXModal";
import WebDev from "./web/WebButton";
import WebModal from "./web/WebModal";
import img from "./main.gif";
import img1 from "./data.gif";
import Developers from "./Developers";
import "./style.css";
import {Link} from "react-router-dom";
import Reason from "../Reason/Reason";

function Body() {
  return (
    <div>
      <center>
        <div
          style={{
            marginTop: "50px",
            textTransform: "uppercase",
            letterSpacing: "1.5",
            fontWeight: "bold",
            color: "#D94B78",
            fontSize: "20px",
          }}
        >
          Talents are evenly distributed so should, Opportunities
        </div>
        <div
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          What Stack are you
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 10px",
            // backgroundColor: "red",
          }}
        >
          <WebModal />
          <MobileDevModal />
          <UI_UXMODAL />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {" "}
          <div style={{width: "400px", height: "300px"}}>
            <img
              src={img}
              style={{width: "100%", height: "100%", objectFit: "contain"}}
            />
          </div>
          <div
            style={{
              width: "400px",
              height: "200px",
              paddingLeft: "20px",
            }}
            className="bodyP1"
          >
            <p style={{textAlign: "left"}}>
              <h3>Why Data</h3>
              Any community, state or country that is dead serious about
              development and want the development to be evenly distributed,
              such a community wouldn't play with data.
            </p>
          </div>
        </div>
        <Developers />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {" "}
          <div
            style={{
              width: "400px",
              height: "200px",
              // background: "red",
            }}
            className="bodyP1"
          >
            <p
              style={{
                textAlign: "left",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <h3>Why Data</h3>
              In today's world, RIO is everything. <br />
              <br /> You don't invest based on GUT feelings and investors don't
              get attracted to you based on GUT feelings as well, let data do
              the speaking <br /> <br />
              ...Your job, is to gather data and share it.
            </p>
          </div>
          <div style={{width: "400px", height: "300px", marginTop: "20px"}}>
            <img
              src={img1}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <Reason />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 10px",
            // backgroundColor: "red",
          }}
        >
          <WebModal />
          <MobileDevModal />
          <UI_UXMODAL />
        </div>
      </center>
    </div>
  );
}

export default Body;

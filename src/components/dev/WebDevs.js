import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import {app}  from "../../base";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import "./webstyle.css";

const db = app.firestore();
function WebDevs() {
  const [developers, setDevelopers] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getData = async () =>
    await db
      .collection("AjegunleDevelopers")
      .orderBy("devW")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setDevelopers(items);
      });
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div style={{ marginTop: "80px" }}>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} style={{ top: "50px" }} />
      </div>
      <center>
        <div
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "20px",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          {" "}
          Web Devs in Ajegunle
        </div>
      </center>
      <div className="web">
        {developers.map(
          ({
            avatar,
            name,
            email,
            backend,
            database,
            clientStack,
            location,
            devStack,
            clientStackW,
            clientStackM,
            clientStackU,
            phone,
          }) => (
            <div className="webContent">
              <img className="webImage" src={avatar} />
              <div className="web__textHolder">
                <h3
                  style={{
                    margin: "0",
                    textTransform: "uppercase",
                    lineHeight: "1",
                    paddingTop: "10px",
                  }}
                >
                  {" "}
                  {name}
                </h3>
                <div>Tel: {phone}</div>
                <div>
                  {" "}
                  Location:{" "}
                  {location === 0
                    ? "Boundary"
                    : location === 25
                    ? "Ojo Road"
                    : location === 50
                    ? "Orige"
                    : location === 75
                    ? "Tolu"
                    : location === 100
                    ? "Wilma"
                    : ""}
                </div>
                <div>Email: {email}</div>
                <div>
                  Backend :{" "}
                  {backend === 0
                    ? "Null"
                    : backend === 50
                    ? "PHP"
                    : backend === 100
                    ? "NodeJS"
                    : ""}
                </div>
                <div>
                  DataBase:{" "}
                  {database === 0
                    ? "Null"
                    : database === 25
                    ? "GraphQL"
                    : database === 50
                    ? "MySQL"
                    : database === 75
                    ? "MongoDB"
                    : database === 100
                    ? "Postgra"
                    : ""}
                </div>

                <div>
                  FrontEnd:{" "}
                  {clientStackW === 0
                    ? "Null"
                    : clientStackW === 25
                    ? "Angular"
                    : clientStackW === 50
                    ? "Django"
                    : clientStackW === 75
                    ? "HTML"
                    : clientStackW === 80
                    ? "React JS"
                    : clientStackW === 100
                    ? "Vue JS"
                    : clientStackM === 0
                    ? "Null"
                    : clientStackM === 25
                    ? "Flutter"
                    : clientStackM === 50
                    ? "Iconic"
                    : clientStackM === 75
                    ? "React Native"
                    : clientStackM === 80
                    ? "Xamarin"
                    : clientStackU === 0
                    ? "Null"
                    : clientStackU === 33.33
                    ? "Abode XD"
                    : clientStackU === 66.66
                    ? "Figma"
                    : clientStackU === 99.99
                    ? "Sketch"
                    : ""}
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: "5px",
                    textTransform: "uppercase",
                  }}
                >
                  {devStack}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}
export default WebDevs;

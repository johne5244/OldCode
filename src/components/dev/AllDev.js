import React, { useState, useEffect } from "react";
import { app } from "../../base";
import NavBar from "../NavBar/NavBar"
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/";
import img from "../Body/img.svg";

const db = app.firestore();
function AllDev() {
  const [developer, setDeveloper] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getData = async () => {
    await db
      .collection("AjegunleDevelopers")
      .orderBy("date", "desc")

      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setDeveloper(items);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div style={{ marginTop: "80px" }}>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} style={{ top: "50px" }} />
      </div>
      <div style={{ height: "100vh" }}>
        <div
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "25px",
            marginTop: "30px",
          }}
        >
          <center>Meet Developers across Ajegunle</center>
        </div>
        <div className="developers">
          {developer.map(
            ({
              avatar,
              name,
              dev,
              back,
              data,
              email,
              clientStackW,
              clientStackM,
              clientStackU,
              devStack,
            }) => (
              <div className="developersWrapper">
                <h3>{name}</h3>
                <img src={avatar ? avatar : img} />
                <h3>
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
                </h3>

                <p>{devStack ? devStack : "Learner"}</p>
              </div>
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AllDev;

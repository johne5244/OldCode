import React, { useState, useEffect } from "react";
import { app } from "../../base";
import "./developer.css";
import img from "../Body/img.svg";
import { Link } from "react-router-dom";

const db = app.firestore();
function Developers() {
  const [developer, setDeveloper] = useState([]);
  const getData = async () => {
    await db
      .collection("AjegunleDevelopers")
      .orderBy("date", "desc")
      .limit(6)
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
      <div
        style={{
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: "25px",
          marginTop: "30px",
        }}
      >
        Meet Developers across Ajegunle
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
      <Link to="/alldev">
        <div className="devButton">
          {" "}
          <button>See them All</button>{" "}
        </div>{" "}
      </Link>
    </div>
  );
}

export default Developers;

// {clientStackM
//   ?

//   clientStackM === 0
//   ? "Null"
//   : clientStackM === 25
//   ? "Angular"
//   : clientStackM === 50
//   ? "Django"
//   : clientStackM === 75
//   ? "HTML"
//   : clientStackM === 100
//   ? "React JS"
//   : "Learner"

//   : clientStackW
//   ?  clientStackW === 0
//   ? "Null"
//   : clientStackW === 25
//   ? "Angular"
//   : clientStackW === 50
//   ? "Django"
//   : clientStackW === 75
//   ? "HTML"
//   : clientStackW === 100
//   ? "React JS"
//   : "Learner"

//   : clientStackU
//   ? clientStackU === 0
//   ? "Null"
//   : clientStackU === 33.33
//   ? "Figma"
//   : clientStackU === 66.66
//   ? "Adobe XD"
//   : clientStackU === 99.99
//   ? "Sketch"

//   : ""

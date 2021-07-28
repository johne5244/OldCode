import React from "react";
import "./reason.css";
import data from "./reason.json";

function Reason() {
  return (
    <div style={{marginTop: "50px"}}>
      <div
        style={{
          fontSize: "30px",
          textTransform: "uppercase",
          fontWeight: "bold",
          borderBottom: "1px solid lightred",
          width: "300px",
        }}
      >
        The Reasons
        <hr />
      </div>
      <div className="reason">
        {data.map(({name, img, desc}) => (
          <div className="reasonWrapper">
            <h3
              style={{
                margin: "0",
                backgroundColor: "lightgray",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                boxShadow: "0 5px 7px -7px rgba(0.8,0,0,0.25)",
              }}
            >
              {name}
            </h3>
            <img src={img} alt="P" />
            <p
              style={{
                marginTop: "20px",
                width: "290px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reason;

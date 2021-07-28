import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { app } from "../../../base";
import { Icon } from "@material-ui/core";
import { Alert, Loader, Uploader } from "rsuite";
import { useHistory } from "react-router-dom";

const db = app.firestore();

export function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const styles = {
  width: 200,
  height: 150,
  borderRadius: "5px",
  border: "1px solid lightgray",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 380,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0",
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function WebDev() {
  const history = useHistory();
  const classes = useStyles();

  const [dev] = useState("Web Developer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fileWUrl, setFileWUrl] = useState(null);
  const [loc, setLoc] = useState("");
  const [back, setBack] = useState("");
  const [dataD, setDataD] = useState("");
  const [front, setFront] = useState("");
  const [tel, setTel] = useState("");
  // const [date] = useState(Date.now());
  const [developer, setDeveloper] = useState([]);

  const HandleLocation = (e, newLoc) => {
    setLoc(newLoc);
  };
  const HandleBack = (e, newBack) => {
    setBack(newBack);
  };
  const HandleFront = (e, newFront) => {
    setFront(newFront);
  };
  const HandleData = (e, newData) => {
    setDataD(newData);
  };

  const location = [
    {
      value: 0,
      label: "Boundary",
    },
    {
      value: 25,
      label: "Ojo Road",
    },
    {
      value: 50,
      label: "Orige",
    },
    {
      value: 75,
      label: "Tolu",
    },
    {
      value: 100,
      label: "Wilma",
    },
  ];
  const BackEnd = [
    {
      value: 0,
      label: "Null",
    },
    {
      value: 50,
      label: "PHP",
    },
    {
      value: 100,
      label: "Node JS",
    },
  ];
  const DataBase = [
    {
      value: 0,
      label: "Null",
    },
    {
      value: 20,
      label: "GraphQL",
    },
    {
      value: 40,
      label: "MySQL",
    },
    {
      value: 60,
      label: "MongoDB",
    },
    {
      value: 80,
      label: "Postgraph",
    },
    {
      value: 100,
      label: "SQLite",
    },
  ];
  const DataBase1 = [
    {
      value: 0,
      label: "Null",
    },
    {
      value: 25,
      label: "GraphQL",
    },
    {
      value: 50,
      label: "MySQL",
    },
    {
      value: 75,
      label: "MongoDB",
    },
    {
      value: 100,
      label: "Postgra",
    },
  ];

  const ClientStack = [
    {
      value: 0,
      label: "Null",
    },
    {
      value: 20,
      label: "Angular",
    },
    {
      value: 40,
      label: "Django",
    },
    {
      value: 60,
      label: "HTML",
    },
    {
      value: 80,
      label: "React JS",
    },
    {
      value: 100,
      label: "Vue JS",
    },
  ];

  // const classes = useStyles();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileWUrl(await fileRef.getDownloadURL());
  };

  const postData = async () => {
    await db.collection("AjegunleDevelopers").doc().set({
      name: name,
      email: email,
      avatar: await fileWUrl,
      location: loc,
      database: dataD,
      clientStackW: front,
      backend: back,
      date: Date.now(),
      devStack: dev,
      devW: dev,
      phone: tel,
    });
    window.location.reload(false);
  };

  const getData = async () => {
    await db.collection("AjegunleDevelopers").onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDeveloper(items);
    });
  };
  console.log(fileWUrl);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "50px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "lightblue",
          padding: "0 10px",
        }}
      >
        <input type="file" onChange={uploadImage} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 20px",
          height: "30px",
          alignItems: "center",
        }}
      >
        <label
          style={{
            margin: "0px 20px",
            fontSize: "13px",
          }}
        >
          What is your Name:
        </label>
        <div
          style={{
            width: "200px",
            height: "30px",
          }}
        >
          <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "5px",
              border: "1px solid lightgray",
              outline: "lightblue",
              padding: "0 10px",
            }}
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 20px",
          height: "30px",
          alignItems: "center",
        }}
      >
        <label
          style={{
            margin: "0px 20px",
            fontSize: "13px",
          }}
        >
          What is your Email:
        </label>
        <div
          style={{
            width: "200px",
            height: "30px",
          }}
        >
          <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "5px",
              border: "1px solid lightgray",
              outline: "lightblue",
              padding: "0 10px",
            }}
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 20px",
          height: "30px",
          alignItems: "center",
        }}
      >
        <label
          style={{
            margin: "0px 20px",
            fontSize: "13px",
          }}
        >
          What is your Phone Number:
        </label>
        <div
          style={{
            width: "200px",
            height: "30px",
          }}
        >
          <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "5px",
              border: "1px solid lightgray",
              outline: "lightblue",
              padding: "0 10px",
            }}
            placeholder="Enter your Phone Number"
            value={tel}
            type="Number"
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={classes.root}>
        <Typography
          gutterBottom
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Location
        </Typography>
        <IOSSlider
          aria-label="ios slider"
          defaultValue={0}
          // marks={marks}
          // valueLabelDisplay="on"
          step={25}
          marks={location}
          min={0}
          max={100}
          onChange={HandleLocation}
        />{" "}
        <div>
          <p>
            Your Location is:{" "}
            {loc === 0
              ? "Boundary"
              : loc === 25
              ? "Ojo Road"
              : loc === 50
              ? "Orige"
              : loc === 75
              ? "Tolu"
              : loc === 100
              ? "Wilma"
              : ""}
          </p>
        </div>
        <div className={classes.margin} />
        <Typography
          gutterBottom
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Backend Stack
        </Typography>
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          valueLabelDisplay="auto"
          aria-label="airbnb"
          // defaultValue={20}
          step={50}
          marks={BackEnd}
          min={0}
          max={100}
          onChange={HandleBack}
        />
        <p>
          Your Backend Stack is:{" "}
          {back === 0
            ? "Null"
            : back === 50
            ? "PHP"
            : back === 100
            ? "Node JS"
            : ""}
        </p>
        <div className={classes.margin} />
        <Typography
          gutterBottom
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Your DataBase Stack
        </Typography>
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          valueLabelDisplay="auto"
          aria-label="airbnb"
          // defaultValue={20}
          step={25}
          marks={DataBase1}
          min={0}
          max={100}
          onChange={HandleData}
        />
        <p>
          Your DataBase Stack is :{" "}
          {dataD === 0
            ? "Null"
            : dataD === 20
            ? "GraphQL"
            : dataD === 40
            ? "MySQL"
            : dataD === 60
            ? "MongoDB"
            : dataD === 80
            ? "Postgraph"
            : dataD === 100
            ? "SQLite"
            : ""}
        </p>
        <div className={classes.margin} />
        <Typography
          gutterBottom
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Your Client Stack
        </Typography>
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          valueLabelDisplay="auto"
          aria-label="airbnb"
          // defaultValue={20}
          step={20}
          marks={ClientStack}
          min={0}
          max={100}
          onChange={HandleFront}
        />
        <p>
          Your Client Stack is:{" "}
          {front === 0
            ? "Null"
            : front === 20
            ? "Angular"
            : front === 40
            ? "Django"
            : front === 60
            ? "HTML"
            : front === 80
            ? "React JS"
            : front === 100
            ? "Vue JS"
            : ""}
        </p>
      </div>
      <center>
        <div style={{ width: "150px", height: "40px" }}>
          <button
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              marginBottom: "20px",
              fontFamily: "Poppins",
            }}
            // onSubmit={}
            onClick={() => {
              // history.push("/");
              postData();
            }}
          >
            Submit
          </button>
        </div>
      </center>
    </>
  );
}

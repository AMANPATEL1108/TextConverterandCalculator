import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //text="new text"//Wrong Way
  //   setText = "New Updated Text"; //right wat TO Change a text
  return (
    <>
      {" "}
      <div className="container mt-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            placeholder="Enter Your Text"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Conver to UperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Conver to LowerCse
        </button>
        <div className="container my-3">
          <h2>Your text Summery</h2>
          <p>
            {text.split(" ").length} and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length}Minites read</p>
          <h2>Previre</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

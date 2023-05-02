import React, { useRef, useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setText("Text Copied");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  // state variable
  const [text, setText] = useState("");
  // wrong way to change the state
  //    text = "new text";

  //   correct way to change the state
  // setText("New text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>

          <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleCopyClick}
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
      <div className="container my - 3 ">
        <h2>Your Text summery</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

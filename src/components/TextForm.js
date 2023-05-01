import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  // state variable
  const [text, setText] = useState("Enter text here");
  // wrong way to change the state
  //    text = "new text";

  //   correct way to change the state
  // setText("New text");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>

        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}

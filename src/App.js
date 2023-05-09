import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // whether dark mode is enabled or not
  const [colormode, setColorMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (colormode === "light") {
      setColorMode("dark");
      document.body.style.backgroundColor = "rgb(37 47 56)";
      showAlert("Dark mode has been enabled", "success");
      // changing title dynamically
      // document.title = "Text Analyzer - Dark Mode"

      // how to be a scammer lol

      // setInterval(() => {
      //   document.title = "Text analysis is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Text analysis install";
      // }, 1500);
    } else {
      setColorMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Text Analyzer - Light Mode"
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      {/* passing props */}
      <Router>
        <Navbar
          title="Text Analyzer"
          about="About Us"
          mode={colormode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={colormode}
                />
              }
            ></Route>
          </Routes>
          <About />
        </div>
      </Router>
    </>
  );
}

export default App;

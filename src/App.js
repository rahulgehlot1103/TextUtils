// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  // whether dark mode is enabled or not
  const [colormode, setColorMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
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
    } else {
      setColorMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };


  return (
    <>
      {/* <Navbar/> */}
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={colormode}
        toggleMode={toggleMode}
      />
      <Alert alert = {alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={colormode} showAlert = {showAlert}  />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

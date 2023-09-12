import  React,{ useState } from "react";
import Navbar from "./Components/Navbar";
// import About from "./components/About";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 15000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212a3a";
      showAlert("Darkmode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textform heading="Enter Text here" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App

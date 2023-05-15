import "./App.css";
import HomePage from "./components/HomePage";
import { useState } from "react";
import { EditContext, ColourContext } from "./helper/Context";
import { useEffect } from "react";

function App() {
  const [canEdit, setCanEdit] = useState(false);
  const [colourMode, setColourMode] = useState(null);
  useEffect(() => {
    const savedColour = localStorage.getItem("colourMode");
    if (savedColour === null || savedColour === "") {
      localStorage.setItem("colourMode", "tangerine");
    }
  }, []);

  return (
    <ColourContext.Provider value={{ colourMode, setColourMode }}>
      <EditContext.Provider value={{ canEdit, setCanEdit }}>
        <HomePage />
      </EditContext.Provider>
    </ColourContext.Provider>
  );
}

export default App;

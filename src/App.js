import "./App.css";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
import { EditContext } from "./helper/Context";

function App() {
  const [canEdit, setCanEdit] = useState(false);

  return (
    <EditContext.Provider value={{ canEdit, setCanEdit }}>
      <HomePage />
    </EditContext.Provider>
  );
}

export default App;

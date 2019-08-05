import React from "react";
import Renderer from "./components/Renderer";
import Store from "./components/Store";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Store>
        <Renderer />
      </Store>
    </div>
  );
};

export default App;

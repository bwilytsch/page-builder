import React from "react";
import Renderer from "./components/Renderer";
import Store from "./components/Store";
import Controls from "./components/BuilderUI/Controls";
import Header from "./components/BuilderUI/Header";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Store>
        <Header />
        <Renderer />
        <Controls />
      </Store>
    </div>
  );
};

export default App;

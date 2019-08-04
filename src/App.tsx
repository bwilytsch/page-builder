import React from "react";
import Renderer from "./components/Renderer";
import Store from "./components/Store";
import Header from "./components/BuilderUI/Header";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Store>
        <Header />
        <Renderer />
      </Store>
    </div>
  );
};

export default App;

import React from "react";
import Renderer from "./components/Renderer";
import Store from "./components/Store";
import Controls from "./components/BuilderUI/Controls";

const App: React.FC = () => {
  return (
    <div className="App">
      <Store>
        <Renderer />
        <Controls />
      </Store>
    </div>
  );
};

export default App;

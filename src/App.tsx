import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import Renderer from "./components/Renderer";
import Builder from "./core/Builder";

import ExamplePage from "./pages/ExamplePage";
import Page from "./core/Page";

interface AppState {
  page: Page | null;
}

const initialState: AppState = {
  page: null
};

function reducer(state: AppState, action: any): AppState {
  switch (action.type) {
    case "ADD_IMAGE":
      Builder.addText();
      return {
        ...state,
        page: Builder.getCurrentPage()
      };
    case "ADD_TEXT":
      Builder.addText();
      return {
        ...state,
        page: Builder.getCurrentPage()
      };
    case "LOAD_PAGE":
      return {
        ...state,
        page: Builder.getCurrentPage()
      };
    default:
      throw new Error();
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    // Loading the example page
    Builder.loadPage(ExamplePage).then(page => {
      dispatch({ type: "LOAD_PAGE" });
      setLoadingState(false);
    });
  }, [state, isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <div>... Loading</div>
      ) : (
        <>
          <Renderer page={state.page} />
          <button onClick={Builder.addText}>Add Text</button>
          <button onClick={Builder.addImage}>Add Image</button>
        </>
      )}
    </div>
  );
};

export default App;

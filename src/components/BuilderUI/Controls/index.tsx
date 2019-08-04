import React, { FC, useContext } from "react";
import BuilderContext from "../../../context/BuilderContext";

const Controls: FC<{}> = props => {
  const context = useContext(BuilderContext);
  return (
    <div>
      <button onClick={() => context.dispatch({ type: "ADD_TEXT" })}>
        Add Text
      </button>
      <button onClick={() => context.dispatch({ type: "ADD_IMAGE" })}>
        Add Image
      </button>
    </div>
  );
};

export default Controls;

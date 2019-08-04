import React, { FC, useContext } from "react";
import BuilderContext from "../../../context/BuilderContext";
import Button from "../Button";

const Controls: FC<{}> = props => {
  const context = useContext(BuilderContext);
  return (
    <div className="builder-ui-controls">
      <Button
        onClick={() =>
          context.dispatch({
            type: "ADD_TEXT",
            payload: "Type here..."
          })
        }
      >
        Add Text
      </Button>
      <Button
        onClick={() =>
          context.dispatch({
            type: "OPEN_MODAL",
            payload: {
              type: "Image"
            }
          })
        }
      >
        Add Image
      </Button>
    </div>
  );
};

export default Controls;

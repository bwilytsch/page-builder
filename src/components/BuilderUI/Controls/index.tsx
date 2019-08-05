import React, { FC, useContext, useState, useEffect, createRef } from "react";
import BuilderContext from "../../../context/BuilderContext";
import Button from "../Button";
import { TweenMax } from "gsap";
import "./Controls.scss";

import { ReactComponent as ImageIcon } from "../../../assets/icon-add-image.svg";
import { ReactComponent as TextIcon } from "../../../assets/icon-add-text.svg";

const Controls: FC = props => {
  const context = useContext(BuilderContext);
  const [state, setState] = useState(false);

  const menu = createRef<HTMLDivElement>();

  useEffect(() => {
    if (menu.current) {
      TweenMax.to(menu.current, 0, { y: 24, opacity: 0 });
      TweenMax.to(menu.current, 0.32, { y: 0, opacity: 1 });
    }
  }, []);

  return (
    <div
      className={`builder-ui-controls ${state ? "is-active" : ""}`}
      ref={menu}
      onClick={() => {
        setState(!state);
      }}
    >
      <div className="menu-icon" />
      <div className="controls-tooltip">
        <Button
          onClick={() => {
            setState(!state);
            context.dispatch({
              type: "ADD_TEXT",
              payload: "Type here..."
            });
          }}
        >
          <TextIcon className="icon" />
        </Button>
        <Button
          onClick={() => {
            setState(!state);
            context.dispatch({
              type: "OPEN_MODAL",
              payload: {
                type: "Image"
              }
            });
          }}
        >
          <ImageIcon className="icon" />
        </Button>
      </div>
    </div>
  );
};

export default Controls;

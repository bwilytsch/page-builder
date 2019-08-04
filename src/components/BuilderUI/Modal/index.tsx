import React, { FC, useContext, useEffect } from "react";
import "./Modal.scss";
import BuilderContext from "../../../context/BuilderContext";
import AddTextForm from "../AddTextForm";
import AddImageForm from "../AddImageForm";
import { ContentTypes } from "../../../core/Page";
import { TweenMax } from "gsap";

const Modal: FC = props => {
  const {
    state: { modal }
  } = useContext(BuilderContext);

  useEffect(() => {
    TweenMax.fromTo(
      ".modal",
      0.32,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0
      }
    );
  }, []);

  const getForm = (type: ContentTypes) => {
    switch (type.toString()) {
      case "Text":
        return <AddTextForm />;
      case "Image":
        return <AddImageForm />;
      default:
        new Error("No Modal assigned");
    }
  };

  return (
    <div className="modal-container">
      <div className="modal">
        {modal.isOpen && !!modal.type ? getForm(modal.type) : null}
      </div>
    </div>
  );
};

export default Modal;

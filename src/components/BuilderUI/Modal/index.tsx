import React, { FC, useContext } from "react";
import "./Modal.scss";
import BuilderContext from "../../../context/BuilderContext";
import AddTextForm from "../AddTextForm";
import AddImageForm from "../AddImageForm";
import { ContentTypes } from "../../../core/Page";

const Modal: FC = props => {
  const {
    state: { modal }
  } = useContext(BuilderContext);

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

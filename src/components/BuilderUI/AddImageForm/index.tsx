import React, { FC, useContext, useState } from "react";
import Input from "../Input";
import BuilderContext from "../../../context/BuilderContext";
import Button from "../Button";
import { TweenMax } from "gsap";

import "./AddImageForm.scss";

const AddImageForm: FC<{}> = props => {
  const { dispatch } = useContext(BuilderContext);
  const [url, setURL] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // Do something
    e.preventDefault();
    dispatch({ type: "ADD_IMAGE", payload: url });
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleCancel = (e: React.MouseEvent) => {
    // Do something
    e.preventDefault();
    TweenMax.to(".modal", 0.24, {
      opacity: 0,
      y: 24,
      onComplete: () => {
        dispatch({ type: "CLOSE_MODAL" });
      }
    });
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input placeholder="Image URL" value={url} onChange={handleUrlChange} />
      <div className="form-controls">
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddImageForm;

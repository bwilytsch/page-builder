import React, { FC, useContext, useState } from "react";
import Input from "../Input";
import BuilderContext from "../../../context/BuilderContext";
import Button from "../Button";

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
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Image URL" value={url} onChange={handleUrlChange} />
      <div>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddImageForm;

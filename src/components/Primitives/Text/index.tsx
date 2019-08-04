import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export interface Props {
  content?: string;
}

export interface DefaultProps {
  content: string;
}

const Text: React.FunctionComponent<Props> = props => {
  const [state, setState] = useState(props.content);

  useEffect(() => {}, [props.content]);

  return <ReactQuill value={state} onChange={setState} theme="bubble" />;
};

const defaultProps: DefaultProps = {
  content: "Hello World from React"
};

Text.defaultProps = defaultProps;

export default Text;

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export interface Props {
  content?: string;
}

export interface DefaultProps {
  content: string;
}

// // Contains react-quill
// export default class Text extends React.Component<WithDefaultProps, {}> {
//   public static defaultProps: DefaultProps = {
//     content: "Hello World v2"
//   };

//   public render() {
//     const { content } = this.props;
//     return <ReactQuill value={content}/>;
//   }
// }

const Text: React.FunctionComponent<Props> = props => {
  const [state, setState] = useState(props.content);

  return <ReactQuill value={state} onChange={setState} theme="bubble" />;
};

const defaultProps: DefaultProps = {
  content: "Hello World from React"
};

Text.defaultProps = defaultProps;

export default Text;

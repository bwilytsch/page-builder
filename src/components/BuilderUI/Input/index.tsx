import React, { FC } from "react";
import "./Input.scss";

export type InputType = "range" | "text" | "number";

export interface Props {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: InputType;
  required?: boolean;
}

export interface DefaultProps {
  type: InputType;
  required: boolean;
}

const Input: FC<Props> = props => {
  return (
    <input
      className="input"
      onChange={props.onChange}
      value={props.value}
      {...props}
    />
  );
};

const defaultProps: DefaultProps = {
  type: "text",
  required: false
};

Input.defaultProps = defaultProps;

export default Input;

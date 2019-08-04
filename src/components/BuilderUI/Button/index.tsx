import React, { FC } from "react";
import "./Button.scss";

export type ButtonVariants = "primary" | "secondary" | "default";
export type ButtonType = "submit" | "button";

export interface Props {
  onClick?: (e: React.MouseEvent) => void;
  type?: ButtonType;
  variant?: ButtonVariants;
}

export interface DefaultProps {
  variant: ButtonVariants;
  type: ButtonType;
  onClick: (e: React.MouseEvent) => void;
}

export type WithDefaultProps = Props & DefaultProps;

const Button: FC<Props> = props => {
  const { variant } = props;

  return (
    <button className={`btn btn-${variant}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const defaultProps: DefaultProps = {
  variant: "default",
  type: "button",
  onClick: (e: React.MouseEvent) => {}
};

Button.defaultProps = defaultProps;

export default Button;

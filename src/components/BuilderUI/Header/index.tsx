import React, { FC, useContext } from "react";
import BuilderContext from "../../../context/BuilderContext";
import "./Header.scss";

const Header: FC<{}> = props => {
  const {
    state: { page }
  } = useContext(BuilderContext);
  return (
    <div className="header-hitbox">
      <header>{!!page ? page.name : ""}</header>
    </div>
  );
};

export default Header;

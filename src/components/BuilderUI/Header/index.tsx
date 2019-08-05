import React, { FC, useContext, useState } from "react";
import BuilderContext from "../../../context/BuilderContext";
import "./Header.scss";

const Header: FC<{}> = props => {
  const [headerState, setHeaderState] = useState(true);
  const {
    state: { page }
  } = useContext(BuilderContext);
  return (
    <div className="header" onClick={() => setHeaderState(!headerState)}>
      <div
        className={`hamburger hamburger--arrow ${
          headerState ? "" : "is-active"
        }`}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, createRef } from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";

import "./Loader.scss";

const Loader: React.FC = props => {
  return (
    <div className="logo-container">
      <div className="logo-wrapper">
        <Logo className="logo" />
        <div className="loading-bar-outer">
          <div className="loading-bar-inner" />
        </div>
      </div>
    </div>
  );
};

export default Loader;

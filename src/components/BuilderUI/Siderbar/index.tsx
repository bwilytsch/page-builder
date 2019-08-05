import React, { FC, useContext } from "react";
import BuilderContext from "../../../context/BuilderContext";
import "./Sidebar.scss";

const Sidebar: FC = props => {
  const { state } = useContext(BuilderContext);
  return (
    <div className="sidebar">
      <ul>{!!state.page && state.page.content.map(c => <li>{c.type}</li>)}</ul>
    </div>
  );
};

export default Sidebar;

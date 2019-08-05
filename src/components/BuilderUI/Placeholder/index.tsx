import React from "react";

import "./Placeholder.scss";

const Placeholder: React.FC = props => {
  return (
    <div className="placeholder-container">
      <div className="placeholder-content">{props.children}</div>
    </div>
  );
};

export default Placeholder;

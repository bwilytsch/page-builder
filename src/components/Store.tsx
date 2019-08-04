import React, { FC, useReducer } from "react";
import BuilderContext, { initialState } from "../context/BuilderContext";
import builderReducer from "../reducers/builderReducer";

const Store: FC<any> = props => {
  const [ctx, dispatch] = useReducer(builderReducer, initialState);

  return (
    <BuilderContext.Provider value={{ state: ctx.state, dispatch }}>
      {props.children}
    </BuilderContext.Provider>
  );
};

export default Store;

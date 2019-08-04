import React, { useEffect, useState, useContext } from "react";
import PageComponent from "../Page";
import Page from "../../core/Page";
import Builder from "../../core/Builder";
import BuilderContext from "../../context/BuilderContext";

import ExamplePage from "../../pages/ExamplePage";
import Loader from "../../components/BuilderUI/Loader";

import "./Renderer.scss";
import Modal from "../BuilderUI/Modal";

const Renderer: React.FunctionComponent = props => {
  const [isLoading, setLoadingState] = useState(true);
  const {
    dispatch,
    state: { page, modal }
  } = useContext(BuilderContext);

  useEffect(() => {
    Builder.loadPage(ExamplePage).then(page => {
      dispatch({ type: "LOAD_PAGE", payload: page });
      setLoadingState(false);
    });
  }, [page, dispatch, isLoading]);

  return (
    <div className="viewer">
      {isLoading ? (
        <Loader />
      ) : page instanceof Page ? (
        <>
          <PageComponent {...page} />
          {modal.isOpen ? <Modal /> : null}
        </>
      ) : null}
    </div>
  );
};

export default Renderer;

import React, { useEffect, useState, useContext } from "react";
import PageComponent from "../Page";
import Page from "../../core/Page";
import Builder from "../../core/Builder";
import BuilderContext from "../../context/BuilderContext";

import BlankPage from "../../pages/BlankPage";
import Loader from "../../components/BuilderUI/Loader";

import "./Renderer.scss";
import Modal from "../BuilderUI/Modal";
import Controls from "../BuilderUI/Controls";
import { TweenMax } from "gsap";
import Placeholder from "../BuilderUI/Placeholder";

const Renderer: React.FunctionComponent = props => {
  const [isLoading, setLoadingState] = useState(true);
  const {
    dispatch,
    state: { page, modal }
  } = useContext(BuilderContext);

  useEffect(() => {
    Builder.loadPage(BlankPage).then(page => {
      TweenMax.to(".logo-container", 0.48, {
        opacity: 0,
        onComplete: () => {
          dispatch({ type: "LOAD_PAGE", payload: page });
          setLoadingState(false);
        }
      });
    });
  }, [page, dispatch, isLoading]);

  return (
    <div className="viewer">
      {isLoading ? (
        <Loader />
      ) : page instanceof Page ? (
        <>
          {page.content.length === 0 ? (
            <Placeholder>Add content by pressing "+" below.</Placeholder>
          ) : (
            <PageComponent {...page} />
          )}
          <Controls />
          {modal.isOpen ? <Modal /> : null}
        </>
      ) : null}
    </div>
  );
};

export default Renderer;

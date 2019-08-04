import React from "react";
import Page from "../core/Page";
import PageComponent from "../components/Page";

const Renderer: React.FunctionComponent<{ page: Page | null }> = props => {
  return props.page === null ? (
    <div>No Page Found</div>
  ) : (
    <PageComponent {...props.page} />
  );
};

export default Renderer;

import React from "react";
import Page from "../core/Page";
import PageComponent from "../components/Page";
import Builder from "../core/Builder";

const Renderer: React.FunctionComponent<{}> = props => {
  const renderPage = (page: Page) => (
    <PageComponent
      content={page.content}
      name="Hello World Page"
      layout={{ grid: { columns: 4 }, baseline: 14 }}
    />
  );

  return <>{renderPage(Builder.getCurrentPage())}</>;
};

export default Renderer;

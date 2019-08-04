import React, { FunctionComponent } from "react";
import { ContentTypes, IPage } from "../../core/Page";

// Content Components
import Image from "../Primitives/Image";
import Text from "../Primitives/Text";

type ContentComponents = Image | Text;

const getComponent = (type: string): ContentComponents => {
  let content = null;
  switch (type) {
    case "Text":
      content = Text;
      break;
    case "Image":
      content = Image;
      break;
    default:
    // Do nothing
  }

  return content;
};

const Page: FunctionComponent<IPage> = props => {
  const renderContent = (content: ContentTypes[]) =>
    content.map((data: ContentTypes, key: number) => {
      const Comp = getComponent(data.type);
      return <Comp content={data.content} key={key} />;
    });

  return <div className="page-container">{renderContent(props.content)}</div>;
};

export default Page;

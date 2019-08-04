// import Image from "./primitives/Image";
import Text from "./primitives/Text";

export type GridTypes = {
  columns: 4 | 6 | 8 | 12;
};

export type ContentTypes = Text;

export interface IPage {
  name: string;
  layout: {
    grid: GridTypes;
    baseline: number;
  };
  content: ContentTypes[];
}

const placeholderCopy =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default class Page implements IPage {
  public content: ContentTypes[];
  public name: string;
  public layout: {
    grid: GridTypes;
    baseline: number;
  };
  constructor(name: string, options: any = {}) {
    this.name = name;
    this.content = [new Text(placeholderCopy), new Text(placeholderCopy)];
    this.layout = options.layout;
  }
  public addContent = (prim: ContentTypes): void => {
    this.content.push(prim);
  };
}

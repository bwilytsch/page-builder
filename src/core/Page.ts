import Text from "./primitives/Text";
import Image from "./primitives/Image";

export type GridTypes = {
  columns: 4 | 6 | 8 | 12;
};

export type ContentTypes = Text | Image;

const ContentFactory = {
  createContent(type: string, payload: any): ContentTypes | null {
    switch (type) {
      case "Text":
        return new Text(payload);
      case "Image":
        return new Image(payload);
      default:
        return null;
    }
  }
};

export interface IPage {
  name: string;
  layout: {
    grid: GridTypes;
    baseline: number;
  };
  content: ContentTypes[];
}

export default class Page implements IPage {
  public content: ContentTypes[];
  public name: string;
  public layout: {
    grid: GridTypes;
    baseline: number;
  };
  constructor(name: string, options: any = {}) {
    this.name = name;
    this.content = [];
    this.layout = options.layout;
  }
  public addContent = (opts: { type: string; payload: any }): Page => {
    const { type, payload } = opts;
    const c = ContentFactory.createContent(type, payload);

    if (c !== null) {
      this.content.push(c);
    }

    return this;
  };
  public removeContent = (prim: ContentTypes): Page => {
    this.content = this.content.filter(p => p.id !== prim.id);
    return this;
  };
}

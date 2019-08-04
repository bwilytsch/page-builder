import Image from "../components/Image";
import Text from "../components/Text";

type GridTypes = {
  columns: 4 | 6 | 8 | 12;
};

type ContentTypes = Image | Text;

export interface IPage {
  name: string;
  layout: {
    grid: GridTypes;
    baseline: number;
  };
  content: ContentTypes[];
}

const defaultPage = {};

const page: IPage = {
  name: "Page Name",
  layout: {
    grid: {
      columns: 4
    },
    baseline: 12
  },
  content: []
};

export default class Page {
  constructor(name: string, options: any = {}) {}
}

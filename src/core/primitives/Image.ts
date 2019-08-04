import { fallbackProperty } from "../Utils";
import Content from "../Content";

export default class Image extends Content {
  constructor(uri: string, name?: string) {
    super(uri, fallbackProperty<string>(name, "Image"), "Image");
  }
}

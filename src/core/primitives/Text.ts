import { fallbackProperty } from "../Utils";
import Content from "../Content";

export default class Text extends Content {
  constructor(text: string, name?: string) {
    super(text, fallbackProperty(name, "Text"), "Text");
  }
}

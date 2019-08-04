export default class Text {
  public content: string;
  public name: string;
  public type: string;
  constructor(text: string) {
    this.content = text;
    this.name = "Text";
    this.type = "Text";
  }
}

// import { v1 } from "node-uuid";

export default abstract class Content {
  public content: string;
  public name: string;
  public type: string;
  public id: string;
  constructor(content: string, name: string, type: string) {
    this.content = content;
    this.name = name;
    this.type = type;
    this.id = "";
  }
}

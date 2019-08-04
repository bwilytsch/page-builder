import Command from "../Command";
import Builder from "../Builder";

export default class RemoveTextCommand extends Command {
  constructor(builder: any, name?: string) {
    super(builder, name === undefined ? "Remove Text" : name);
    this.type = this;
  }
  public execute = (): void => {
    this.builder.removeText();
  };
  public undo = (): void => {
    this.builder.addText();
  };
}

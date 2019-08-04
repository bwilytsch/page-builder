import Command from "../Command";
import Builder from "../Builder";

export default class AddTextCommand extends Command {
  constructor(builder: Builder, name?: string) {
    super(builder, name === undefined ? "Add Text" : name);
    this.type = this;
  }
  public execute = (): void => {
    this.builder.addText();
  };

  public undo = (): void => {
    this.builder.removeText();
  };
}

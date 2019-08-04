import Command from "../Command";

export class AddTextCommand extends Command {
  constructor(builder: any, value: string, name?: string) {
    super(builder, name === undefined ? "Add Text" : name);
    this.value = value;
    this.type = this;
  }
  public execute = (): void => {
    this.builder.addText(this.value);
  };

  public undo = (): void => {
    this.builder.removeText();
  };
}

export class RemoveTextCommand extends Command {
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

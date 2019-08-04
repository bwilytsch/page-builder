import Command from "../Command";

export class AddImageCommand extends Command {
  constructor(builder: any, name?: string) {
    super(builder, name === undefined ? "Add Image" : name);
    this.type = this;
  }
  public execute = (): void => {
    this.builder.addImage();
  };

  public undo = (): void => {
    this.builder.removeImage();
  };
}

export class RemoveImageCommand extends Command {
  constructor(builder: any, name?: string) {
    super(builder, name === undefined ? "Remove Image" : name);
    this.type = this;
  }
  public execute = (): void => {
    this.builder.removeText();
  };
  public undo = (): void => {
    this.builder.removeImage();
  };
}

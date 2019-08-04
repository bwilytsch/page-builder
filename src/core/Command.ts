import Builder from "./Builder";
import AddTextCommand from "./commands/AddTextCommand";
import RemoveTextCommand from "./commands/RemoveTextCommand";

export type CommandTypes = AddTextCommand | RemoveTextCommand;

export interface ICommand {
  execute: (...args: any[]) => any;
  undo: (...args: any[]) => any;
  builder: Builder;
  name: string;
  type: CommandTypes | null;
}

export default abstract class Command implements ICommand {
  public builder: Builder;
  public name: string;
  public type: CommandTypes | null;

  constructor(builder: Builder, name: string) {
    this.builder = builder;
    this.name = name;
    this.type = null;
  }

  public abstract execute = () => {};

  public abstract undo = () => {};
}

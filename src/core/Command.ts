import { AddTextCommand, RemoveTextCommand } from "./commands/TextCommands";
import { AddImageCommand, RemoveImageCommand } from "./commands/ImageCommands";

export type CommandTypes =
  | AddTextCommand
  | RemoveTextCommand
  | AddImageCommand
  | RemoveImageCommand;

export interface ICommand {
  execute: (...args: any[]) => any;
  undo: (...args: any[]) => any;
  builder: any;
  name: string;
  value: any;
  type: CommandTypes | null;
}

export default abstract class Command implements ICommand {
  public builder: any;
  public name: string;
  public value: any;
  public type: CommandTypes | null;

  constructor(builder: any, name: string) {
    this.builder = builder;
    this.name = name;
    this.type = null;
  }

  public abstract execute = () => {};

  public abstract undo = () => {};
}

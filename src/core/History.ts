import Command from "./Command";

export interface IHistory {
  undoCMDs: Command[];
  redoCMDs: Command[];
}

export default class History implements IHistory {
  public undoCMDs: Command[];
  public redoCMDs: Command[];
  public currentCMD: Command | null;

  constructor() {
    this.redoCMDs = [];
    this.undoCMDs = [];
    this.currentCMD = null;
  }

  public execute = (cmd: Command, name?: string): void => {
    // Clear all previously caches commands
    this.redoCMDs = [];

    this.currentCMD = cmd;
    this.currentCMD.name = name === undefined ? cmd.name : name;

    // Execute current CMD
    this.currentCMD.execute();
    this.undoCMDs.push(this.currentCMD);
  };

  public redo = (): void => {
    const cmd = this.redoCMDs.pop();
    if (cmd) {
      cmd.execute();
      this.undoCMDs.push(cmd);
    }
  };

  public undo = (): void => {
    const cmd = this.undoCMDs.pop();
    if (cmd) {
      cmd.undo();
      this.redoCMDs.push(cmd);
    }
  };

  public clear = (): void => {
    this.redoCMDs = [];
    this.undoCMDs = [];
    this.currentCMD = null;
  };
}

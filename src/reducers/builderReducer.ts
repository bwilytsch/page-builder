import Builder from "../core/Builder";
import { IAppContext } from "../context/BuilderContext";
import { AddTextCommand } from "../core/commands/TextCommands";
import { AddImageCommand } from "../core/commands/ImageCommands";

export default function reducer(ctx: IAppContext, action: any): IAppContext {
  switch (action.type) {
    case "ADD_IMAGE":
      ctx.state.history.execute(new AddImageCommand(Builder));
      return {
        ...ctx,
        state: {
          ...ctx.state,
          page: Builder.getCurrentPage()
        }
      };
    case "ADD_TEXT":
      ctx.state.history.execute(new AddTextCommand(Builder));
      return {
        ...ctx,
        state: {
          ...ctx.state,
          page: Builder.getCurrentPage()
        }
      };
    case "LOAD_PAGE":
      return {
        ...ctx,
        state: {
          ...ctx.state,
          page: Builder.getCurrentPage()
        }
      };
    default:
      throw new Error();
  }
}

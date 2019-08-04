import { createContext, Dispatch } from "react";
import Page from "../core/Page";

import History from "../core/History";

export interface AppState {
  page: Page | null;
  history: History;
}

export interface IAppContext {
  state: AppState;
  dispatch: Dispatch<any>;
}

export const initialState: IAppContext = {
  state: {
    page: null,
    history: new History()
  },
  dispatch: () => {}
};

const BuilderContext = createContext(initialState);

export default BuilderContext;

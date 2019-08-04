import { createContext, Dispatch } from "react";
import Page, { ContentTypes } from "../core/Page";

import History from "../core/History";

export interface AppState {
  page: Page | null;
  modal: {
    isOpen: boolean;
    type: ContentTypes | null;
  };
  history: History;
}

export interface IAppContext {
  state: AppState;
  dispatch: Dispatch<any>;
}

export const initialState: IAppContext = {
  state: {
    page: null,
    modal: {
      isOpen: false,
      type: null
    },
    history: new History()
  },
  dispatch: () => {}
};

const BuilderContext = createContext(initialState);

export default BuilderContext;

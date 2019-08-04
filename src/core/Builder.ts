import Page from "./Page";
import Text from "../core/primitives/Text";

interface Pages {
  collection: { [key: string]: Page };
}

export const Context: Pages = {
  collection: {
    startPage: new Page("Hello World")
  }
};

// Load a defaultPage
let currentPage: Page = new Page("Hello World");

const getCurrentPage = (): Page => {
  return currentPage;
};

const setCurrentPage = (page: Page) => {
  currentPage = page;
};

const createPage = (page?: Page): void => {};
const duplicatePage = (page: Page): void => {};
const loadPage = (page: Page): void => {
  setCurrentPage(page);
};
const addText = (): void => {
  // Add text
  const text = new Text("Text");
  currentPage.content.push(text);
};

const removeText = (): void => {
  // Remove text
};

const addImage = (): void => {
  // Add Image
};

const removeImage = (): void => {
  // Remove Image
};

const savePage = (): void => {
  // Make API Call
};

// Namespace Export
const Builder = {
  getCurrentPage,
  createPage,
  duplicatePage,
  loadPage,
  savePage,
  addText,
  removeText,
  addImage,
  removeImage,
  setCurrentPage
};

export default Builder;

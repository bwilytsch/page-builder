import Page from "./Page";
import PBText from "../core/primitives/Text";
import PBImage from "../core/primitives/Image";
import { fallbackProperty } from "./Utils";

enum Viewports {
  desktop = 0,
  tablet = 1,
  mobile = 2
}

interface IBuilder {
  collection: { [key: string]: Page };
  viewport: Viewports;
}

// Default Page
let currentPage: Page = new Page("Hello World");

const getCurrentPage = (): Page => {
  return currentPage;
};

const setCurrentPage = (page: Page) => {
  currentPage = page;
};

const createPage = (page?: Page): void => {};
const duplicatePage = (page: Page): void => {};
const loadPage = (page: Page): Promise<Page> => {
  setCurrentPage(page);

  return new Promise((resolve, reject) => {
    // Fake delay
    setTimeout(() => {
      resolve(currentPage);
    }, 1000);
  });
};
const addText = (txt?: string): void => {
  // Add text
  const text = new PBText(fallbackProperty(txt, "Text"));
  currentPage.content.push(text);
};

const removeText = (): void => {
  // Remove text
};

const addImage = (url?: string): void => {
  // Add Image
  const image = new PBImage(fallbackProperty(url, ""));
  currentPage.content.push(image);
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

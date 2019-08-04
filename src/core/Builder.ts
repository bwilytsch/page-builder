import Page from "./Page";

// Builder Module
export default class Builder {
  constructor() {}
  public createPage = (page?: Page): void => {
    const tmpPage = new Page("Hello World");
  };
  public duplicatePage = (page: Page): void => {};
  public loadPage = (page: Page): void => {
    // Load a page
  };
  public addText = (): void => {
    // Add text
  };

  public removeText = (): void => {
    // Remove text
  };

  public addImage = (): void => {
    // Add Image
  };

  public removeImage = (): void => {
    // Remove Image
  };
}

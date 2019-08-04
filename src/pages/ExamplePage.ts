import Page from "../core/Page";

// First Example Page describing the date model
const startPage = new Page("startPage");

const placeholderText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

startPage
  .addContent({
    type: "Text",
    payload: placeholderText
  })
  .addContent({
    type: "Text",
    payload: "Another text"
  })
  .addContent({
    type: "Image",
    payload:
      "https://img.fnatic.io/prod%2Fuploads%2Ffff361de-3b9f-4c9a-99da-a1b83f7d252c%2F48382008616_7c994af8cb_k.jpg?w=1600&fit=crop&q=75&s=39b72ef1b338988537ff90a72cadaab4"
  });

// Logging server data strucutre
console.log(startPage);

export default startPage;

const express = require("express");
const app = express();

const db = {
  books: [],
};
app.get("/api/v1/books", (req, res) => {
  return res.json([...db.books]);
});

app.post("/api/v1/books", (req, res) => {
  db.books.append({ name: req.body.book.name });
});

app.listen(9000, () => {
  console.log("listening on 9000");
});

const express = require("express");
const productosRouter = require('./routes/productos');
const app = express();

const server = app.listen(8080, () => console.log("server up"));

app.set("views", "./viewsPug");
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

app.get("/form", (req, res) => {
  res.redirect("/");
});

app.use('/productos', productosRouter)
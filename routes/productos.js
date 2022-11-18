const express = require("express");
const router = express.Router();

const productos = [];

router.get("/", (req, res) => {
  let hay = productos.length>0;
  res.render("productos", {productos, hay});
});

router.post("/", (req, res) => {
    const {nombre, precio, img} = req.body;
    if(nombre.trim() !== '' && precio.trim() !== '' && img.trim() !== ''){
        productos.push(req.body);
    }
    res.redirect("form");
})

module.exports = router;

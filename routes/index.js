const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.render("index", {
    css: "homeStyle"
  });
});

module.exports = router;

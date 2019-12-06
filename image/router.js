const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", (request, response, next) => {
  Image.findAll()
    .then(images => response.send(images))
    .catch(error => next(error));
});

module.exports = router;

const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", (request, response, next) => {
  Image.findAll()
    .then(images => response.send(images))
    .catch(error => next(error));
});

router.post("/image", (request, response, next) => {
  Image.create(request.body)
    .then(image => response.send(image))
    .catch(error => next(error));
});

module.exports = router;

var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({
    todos: [
      {
        name: "laundry",
      },
      {
        name: "cancel membership",
      },
    ],
  });
});

module.exports = router;

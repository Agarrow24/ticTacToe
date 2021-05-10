"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express.default)();
server.listen(8080);
server.get("/setPseudo", (req, res) => {
  console.log(req.query.pseudo);
});
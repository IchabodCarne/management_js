var express = require("express");
var router = express.Router();
var userCtrl = require("../controller/user");

/* 注册用户 */
router.post("/regiup", userCtrl.signup);

module.exports = router;

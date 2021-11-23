const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");
const permissionControl = require("../middlewares/permissionControl");

const sauceCtrl = require("../controllers/sauce");

router.get("/", auth, sauceCtrl.getAllSauces);
router.post("/", auth, multer, sauceCtrl.createSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.put("/:id", auth, permissionControl, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, permissionControl, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, multer, sauceCtrl.handleLike);

module.exports = router;

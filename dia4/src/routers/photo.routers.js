const { Router } = require("express");
const router = Router();
const photoCtrl = require("../controller/photo.controller");

router.get("/photo", photoCtrl.getByUser);
router.post("/photo", photoCtrl.newPhoto);
router.put("/photo", photoCtrl.modPhoto); 
router.delete("/photo", photoCtrl.delPhoto);
router.delete("/", photoCtrl.delAll); 

module.exports = router; 

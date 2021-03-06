const router = require("express").Router();
const ProjectCtrl = require("../controllers/Project");

router.post("/create", ProjectCtrl.create);

router.patch("/update/:id", ProjectCtrl.update);

router.get("/fetchMany", ProjectCtrl.fetchMany);

router.get("/fetchOne/:id", ProjectCtrl.fetchOne);

router.post("/delete", ProjectCtrl.delete);

module.exports = router;

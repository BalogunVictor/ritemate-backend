const { Router } = require("express");
const {
  saveIndividual,
  saveGroup,
  saveHomepage,
} = require("../controllers/ritemateController");

const router = Router();

router.post("/saveindividual", saveIndividual);
router.post("/savegroup", saveGroup);
router.post("/savehomepage", saveHomepage);

module.exports = router;

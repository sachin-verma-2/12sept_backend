const express = require("express");


const router = express.Router();
router.get("/", (req, res) => {
    console.log("down")
    res.download("./resume.pdf")
    
  });
module.exports = router;
const express = require("express");
const { read, create, update ,deletes} = require("../Controllers/blogController");
const router = express.Router()

//blogController router
router.get("/blog" , read)
router.post("/blog" , create)
router.put("/blog" , update)
router.delete("/blog" , deletes)

module.exports = router ;
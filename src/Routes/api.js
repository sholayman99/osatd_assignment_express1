const express = require("express");
const { readBlog, createBlog, updateBlog, deleteBlog } = require("../Controllers/blogController");
const { readBlogDet, createBlogDet, updateBlogDet, deleteBlogDet } = require("../Controllers/blogDetailsController");
const { readComment, createComment, updateComment, deleteComment } = require("../Controllers/commentController");
const { readMsg, createMsg, updateMsg, deleteMsg } = require("../Controllers/messageController");
const { readTitle, createTitle, updateTitle, deleteTitle } = require("../Controllers/titleController");
const { deleteService, updateService, createService, readService } = require("../Controllers/serviceController");
const { readProject, createProject, updateProject, deleteProject } = require("../Controllers/projectContoller");
const { readProfit, createProfit, updateProfit, deleteProfit } = require("../Controllers/profitController");
const { readProduct, createProduct, updateProduct, deleteProduct } = require("../Controllers/productContoller");
const { readPortfolio, createPortfolio, updatePortfolio, deletePortfolio } = require("../Controllers/portfolioController");


const router = express.Router()

//blogController routes
router.get("/blog" , readBlog)
router.post("/blog" , createBlog)
router.put("/blog" , updateBlog)
router.delete("/blog" , deleteBlog)

//blogDetails routes

router.get("/blog-det" , readBlogDet)
router.post("/blog-det" , createBlogDet)
router.put("/blog-det" , updateBlogDet)
router.delete("/blog-det" , deleteBlogDet)

//commentController routes
router.get("/comment" , readComment)
router.post("/comment" , createComment)
router.put("/comment" , updateComment)
router.delete("/comment" , deleteComment)

//messageController routes
router.get("/message" , readMsg)
router.post("/message" , createMsg)
router.put("/message" , updateMsg)
router.delete("/message" , deleteMsg)

//portfolioController routes

router.get("/portfolio" , readPortfolio)
router.post("/portfolio" , createPortfolio)
router.put("/portfolio" , updatePortfolio)
router.delete("/portfolio" , deletePortfolio)

//productController routes
router.get("/product" , readProduct)
router.post("/product" , createProduct)
router.put("/product" , updateProduct)
router.delete("/product" , deleteProduct)

//profitController Routes
router.get("/profit" , readProfit)
router.post("/profit" , createProfit)
router.put("/profit" , updateProfit)
router.delete("/profit" , deleteProfit)

//projectController routes
router.get("/project" , readProject)
router.post("/project" , createProject)
router.put("/project" , updateProject)
router.delete("/project" , deleteProject)


//serviceController routes
router.get("/service" , readService)
router.post("/service" , createService)
router.put("/service" , updateService)
router.delete("/service" , deleteService)

//titleController routes
router.get("/title" , readTitle)
router.post("/title" , createTitle)
router.put("/title" , updateTitle)
router.delete("/title" , deleteTitle)










module.exports = router ;
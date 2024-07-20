import express from "express";
import { approveArticle, articlePost, getArticles, login,register, validateToken  } from "../controller/authController.js";

const router = express.Router();

router.post("/login",login);
router.post("/register",register);
router.post("/validateToken",validateToken)
router.post("/articlePost",articlePost);
router.post("/getArticle",getArticles)  ;
router.post("/approveArticle",approveArticle)  ;

export default router;
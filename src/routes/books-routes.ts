import express, { Router, Response } from "express";
import { getRawBooks } from "../controllers/books-controller.js"; 

const router = Router();

router.get("/books", getRawBooks);

export default router;
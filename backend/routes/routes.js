import express from "express";

import { getItem, getItemById, createItem, updateItem, deleteItem } from "../controllers/Item.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "Selamat Datang di API V1." });
});

// Item Route
router.get('/item', getItem);
router.get('/item/:id', getItemById);
router.post('/item', createItem);
router.put('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

export default router;
import express from "express";

// import { getIndex } from "../controllers/Controllers.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "success": true,
    });
});
// router.get('/get', getIndex);

export default router;
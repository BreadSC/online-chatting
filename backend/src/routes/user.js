import express from "express";
const router = express.Router();
router.get("/", function(req, res){
    res.json({"message": "this is user page"});
    
});
export default router;
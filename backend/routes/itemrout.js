import express from "express";
import { additem, listitem, removeitem,  shoeslistitem, dresslistitem, watcheslistitem, getItemById, shoesItemUpload, removeshoesitem, removedressitem, removemenitem, dressItemUpload, menItemUpload, } from "../controller/itemcontroller.js";
import multer from "multer"

const itemRouter = express.Router();


const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage:storage})

itemRouter.post("/add", upload.single("image"), additem);
itemRouter.post("/addshoes", upload.single("image"), shoesItemUpload);
itemRouter.post("/dressItemUpload", upload.single("image"), dressItemUpload);
itemRouter.post("/menItemUpload", upload.single("image"), menItemUpload);
itemRouter.get("/list", listitem);
itemRouter.get("/shoeslist", shoeslistitem);
itemRouter.get("/dresslistitem", dresslistitem);
itemRouter.get("/watcheslistitem", watcheslistitem);
itemRouter.get("/:id", getItemById); 
itemRouter.post("/remove", removeitem); 
itemRouter.post("/removeshoesitem", removeshoesitem); 
itemRouter.post("/removedressitem", removedressitem); 
itemRouter.post("/removemenitem", removemenitem); 

export default itemRouter;
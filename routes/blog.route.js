import express from "express";
const blogrouter = express.Router();

import {createblog, editblog,getblog,deleteblog ,getallblog} from "../controller/blog.controller"

blogrouter.post("/create-blog", createblog);
blogrouter.put("/edit-blog/:id", editblog);
blogrouter.get("/get-blog/:id", getblog);
blogrouter.get("/get-all-blog", getallblog);
blogrouter.delete("/delete-blog/:id", deleteblog);



export default blogrouter;
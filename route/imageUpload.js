import { Router } from "express";
import { imageUpload } from "../controller/imageUpload.js";

const r = Router();

r.post('/upload', imageUpload.uploadFile)

export default r
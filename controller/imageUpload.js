import path, { dirname } from "path";
import { v4 } from "uuid";
import { __dirname } from "../index.js";

export const imageUpload = {
    uploadFile:
        (req, res) => {
            let extName = path.extname(req.files.img.name);
            req.files.img.mv(__dirname + "/images/" + v4() + extName)
            console.log("Request File", req.body);
            res.send('OK')
        }
}
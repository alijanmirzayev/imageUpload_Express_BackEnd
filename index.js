import express from 'express'
import fileUpload from 'express-fileupload';
import path, { dirname } from "path";
import uploadRoute from './route/imageUpload.js';
import { fileURLToPath } from 'url';

// Configuration
const app = express()

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(fileUpload());

// Route
app.use('/api', uploadRoute)

// Server
app.listen(5050, () => {
    console.log('Server is run')
})

import { Router } from "express";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
})
const upload = multer({ storage });
router.post('/upload', upload.fields([{ name: 'profileImage' }, { name: 'img' }]), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.redirect('/')
})

router.get('/', (req, res) => {
    res.render('home');
})

export default router;
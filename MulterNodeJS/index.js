import express from 'express';
import { PORT } from './config.js';
import router from './routes/route.js';
import path from 'path';

//nodejs multer
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);

app.set('views', path.resolve('./views'));
app.set('view engine', 'ejs');



app.listen(PORT, (req, res) => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
})

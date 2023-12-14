import express from "express";
import cors from 'cors';
import router from './routes/homepageRoutes';
import dotenv from 'dotenv';
import connectToMongoDB from './config/connect';

const app: express.Express = express();
const port: number = parseInt(process.env.PORT || '8000', 10);

app.use(express.json());
app.use(cors());

connectToMongoDB();

//all pages routes --->
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// *** important notes *** =======>
//npm run dev (to run the server) **************************
//npm run build or tsc (to convert it from ts to javascript)
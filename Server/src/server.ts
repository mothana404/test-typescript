import express from "express";
import router from './routes/homepageRoutes';
import sequelize from './config/sequelize';
import {StudentMap} from './models/userModel';
import cors from 'cors';

const app: express.Express = express();
const port: number = 8000;
app.use(express.json());
app.use(cors());

StudentMap(sequelize);
app.use(router);

sequelize.sync().then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
}).catch((error:Error) => {
    console.error('Error syncing database:', error);
});

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
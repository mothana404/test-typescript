"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const homepageRoutes_1 = __importDefault(require("./routes/homepageRoutes"));
const db = require('./models');
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use(homepageRoutes_1.default);
db.sequelize.sync().then(() => {
    console.log('Database synchronized');
    app.listen(port, () => {
        console.log(`App is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Error syncing database:', error);
});
// sequelize.sync().then(() => {
//     console.log('Database synchronized');
// }).catch((error) => {
//     console.error('Error syncing database:', error);
// });
// sequelize.then(() => {
// app.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// });
// });

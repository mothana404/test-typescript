import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    username: "postgres",
    password: "359157",
    database: "test",
    host: "localhost",
    dialect: "postgres",
});

export default sequelize;
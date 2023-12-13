import { Model, Sequelize, DataTypes } from 'sequelize';

class Student extends Model {
  public id?: number;
  public name!: string;
  public age?: number;
  public major?: string;
  public average?: number;
}

export const StudentMap = (sequelize: Sequelize) => {
  Student.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255)
    },
    age: {
      type: DataTypes.INTEGER
    },
    major: {
      type: DataTypes.STRING(100)
    },
    average: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    tableName: 'students',
    timestamps: false
  });

  return Student; // Return the initialized model
};

export default Student;


// import { Model, Sequelize, DataTypes } from 'sequelize';
// export default class User extends Model {
//   public id?: number;
//   public name!: string;
//   public birthdate?: Date;
//   public country?: string;
// }
// export const UserMap = (sequelize: Sequelize) => {
//   User.init({
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING(255)
//     },
//     birthdate: {
//       type: DataTypes.DATE,
//       allowNull: true
//     },
//     country: {
//       type: DataTypes.STRING(100),
//       allowNull: true
//     }
//   }, {
//     sequelize,
//     tableName: 'users',
//     timestamps: false
//   });
//   User.sync();
// }
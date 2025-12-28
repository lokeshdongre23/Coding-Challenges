import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class Feedback extends Model {
  public id!: number;
  public customerName!: string;
  public rating!: number;
  public comments!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Feedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Feedback",
    tableName: "feedbacks",
  }
);

export default Feedback;

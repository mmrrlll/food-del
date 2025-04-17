import { FoodModel } from "../model/food.js";
export const createFood = async (req, res) => {
  const { foodName,price,ingredients,image } = req.body;
  try {
    const food = await FoodModel.create({
      foodName: foodName,
      price:price,
      ingredients:ingredients,
      image:image,
    });
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
export const getFood = async (_, res) => {
  try {
    const food = await FoodModel.find();
    return res
      .status(200)
      .send({
        success: true,
        food:food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
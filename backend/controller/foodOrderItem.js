import { FoodOrderItemModel } from "../model/foodOrderItem.js";
export const createFoodOrderItem = async (req, res) => {
  const { quantity } = req.body;
  try {
    const foodOrderItem = await FoodOrderItemModel.create({
        quantity:quantity
    });
    return res
      .status(200)
      .send({
        success: true,
        foodOrderItem: foodOrderItem,
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
export const getFoodOrderItem = async (_, res) => {
  try {
    const foodOrderItem = await FoodOrderItemModel.find();
    return res
      .status(200)
      .send({
        success: true,
        foodOrderItem:foodOrderItem,
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
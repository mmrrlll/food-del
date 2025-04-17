import { FoodOrderModel } from "../model/foodOrder.js";
export const createFoodOrder = async (req, res) => {
  const { quantity } = req.body;
  try {
    const foodOrder = await FoodOrderModel.create({
        quantity:quantity
    });
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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
export const getFoodOrder = async (_, res) => {
  try {
    const foodOrder = await FoodOrderModel.find();
    return res
      .status(200)
      .send({
        success: true,
        foodOrder:foodOrder,
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
import { FoodOrderModel } from "../model/foodOrder.js";
export const createFoodOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems } = req.body;
  try {
    const foodOrder = await FoodOrderModel.create({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
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
export const getFoodOrder = async (req, res) => {
  try {
    const foodOrder = await FoodOrderModel.find();
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

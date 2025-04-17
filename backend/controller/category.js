import { CategoryModel } from "../model/category.js";
export const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await CategoryModel.create({
        categoryName: categoryName
    });
    return res
      .status(200)
      .send({
        success: true,
        category: category,
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
export const getCategory = async (_, res) => {
  try {
    const category = await CategoryModel.find();
    return res
      .status(200)
      .send({
        success: true,
        category: category,
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
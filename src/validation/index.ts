import { IInputValdiation } from "../interfaces/index";
/**
 *
 * @param product {IInputValdiation}
 * @returns  Object
 */
export const productValidation = (product: IInputValdiation) => {
  const errors = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  };
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageUrl);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product Title must be between 10 and 80 chracters!";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product Description must be between 10 and 900 chracters!";
  }

  if (!product.imageUrl.trim() || !validUrl) {
    errors.imageUrl = "Valid image URL is required";
  }

  if (!product.price.trim() || isNaN(+product.price)) {
    errors.price = "Valid price is required";
  }
  return errors;
};

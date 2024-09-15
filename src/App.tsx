import { useState, ChangeEvent, FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import Input from "./components/ui/Input";
import { productList } from "./data/index";
import { formInputList } from "./data/index";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const productInitalValue = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  };

  const errorInitialValue = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  };

  const [product, setProduct] = useState<IProduct>(productInitalValue);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState(errorInitialValue);
  const { title, description, imageUrl, price } = product;

  const closeModal = () => {
    setIsOpen(false);
    setProduct(productInitalValue);
    setErrors(errorInitialValue);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(name, value);

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
    // const errorMessages = productValidation({
    //   title: title,
    //   description: description,
    //   imageUrl: imageUrl,
    //   price: price,
    // });
    // console.log(product);

    // setErrors((prevVal) => ({
    //   ...prevVal,
    //   [name]:
    //     errorMessages[name as "title" | "description" | "imageUrl" | "price"],
    // }));
  };

  const hanldeSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errorMessages = productValidation({
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    });
    setErrors(errorMessages);

    const hasErrorMsg = Object.values(errors).some((value) => value !== "");
    console.log(hasErrorMsg);

    if (hasErrorMsg) {
      return;
    }

    console.log("add data to server");
  };

  const renderFormInputs = () =>
    formInputList.map((input) => {
      const { id, label, name, type } = input;
      return (
        <div key={id} className="flex flex-col">
          <label
            className="text-gray-700 font-medium text-sm mb-[2px]"
            htmlFor={id}
          >
            {label}
          </label>
          <Input
            id={id}
            name={name}
            type={type}
            value={product[input["name"]]}
            onChange={onChangeHandler}
          />
          <ErrorMessage message={errors[input["name"]]} />
        </div>
      );
    });

  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return (
    <main className="container">
      <Button className="bg-black mb-4" onClick={openModal}>
        Add product
      </Button>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3" onSubmit={hanldeSubmit}>
          {renderFormInputs()}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-900">
              Submit
            </Button>
            <Button
              type="button"
              className="bg-gray-700 hover:bg-gray-950"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;

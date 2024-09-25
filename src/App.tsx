import { useState, ChangeEvent, FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import Input from "./components/ui/Input";
import { productList, COLORS, formInputList, categories } from "./data/index";
import { ProductNameTypes } from "./types/index";
import { ICategory, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColors from "./components/CircleColors";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import toast, { Toaster } from "react-hot-toast";

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
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(productInitalValue);
  const [editIndex, setEditIndex] = useState<number>(0);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] =
    useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [errors, setErrors] = useState(errorInitialValue);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0]
  );

  const { title, description, imageUrl, price } = product;

  const closeModal = () => {
    setIsOpen(false);
    setProduct(productInitalValue);
    setErrors(errorInitialValue);
    setTempColors([]);
  };
  const closeEditModal = () => {
    setIsOpenEditModal(false);
    setErrors(errorInitialValue);
  };

  const openEditModal = () => setIsOpenEditModal(true);
  const openConfirmModal = () => setIsOpenConfirmDialog(true);

  console.log(tempColors);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeConfirmModal = () => {
    setIsOpenConfirmDialog(false);
  };

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(name, value);

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
    const { title, description, imageUrl, price } = product;
    const errorData = {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    };
    const errorMessages = productValidation({
      ...errorData,
      [name]: value,
    });
    console.log(product);

    setErrors((prevVal) => ({
      ...prevVal,
      [name]: errorMessages[name as ProductNameTypes],
    }));
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
    const errorData = {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    };
    const errorMessages = productValidation({
      ...errorData,
      [name]: value,
    });
    console.log(product);

    setErrors((prevVal) => ({
      ...prevVal,
      [name]: errorMessages[name as ProductNameTypes],
    }));
  };

  const handleColorSelection = (color: string) => {
    if (tempColors.includes(color)) {
      setTempColors((prev) => prev.filter((item) => item !== color));
      return;
    }
    setTempColors((prev) => [...prev, color]);
  };
  console.log(tempColors);

  const handelProductEdit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageUrl, price } = productToEdit;
    const errorMessages = productValidation({
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    });
    setErrors((prev) => ({ ...prev, ...errorMessages }));
    console.log(errors);

    const hasErrorMsg = Object.values(errorMessages).some(
      (value) => value !== ""
    );
    console.log(hasErrorMsg);

    if (hasErrorMsg) {
      return;
    }

    console.log("add data to server");
    const updatedProducts = [...products];
    updatedProducts[editIndex] = productToEdit;
    updatedProducts[editIndex].colors = tempColors;
    setProducts(updatedProducts);
    console.log(products);

    closeEditModal();
  };

  const hanldeSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errorMessages = productValidation({
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    });
    setErrors((prev) => ({ ...prev, ...errorMessages }));
    console.log(errors);

    const hasErrorMsg = Object.values(errorMessages).some(
      (value) => value !== ""
    );
    console.log(hasErrorMsg);

    if (hasErrorMsg) {
      return;
    }

    console.log("add data to server");

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: {
          imageUrl: selectedCategory.imageUrl,
          name: selectedCategory.name,
        },
      },
      ...prev,
    ]);
    console.log(products);
    closeModal();
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

  const renderProductList = products.map((product, index) => (
    <ProductCard
      product={product}
      key={product.id}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      indx={index}
      setEditIndex={setEditIndex}
      setTempColors={setTempColors}
      openConfirmDialog={openConfirmModal}
    />
  ));

  const renderProductColors = COLORS.map((color) => (
    <CircleColors
      color={color}
      key={color}
      onClick={() => handleColorSelection(color)}
    />
  ));

  const renderSlectedColors = tempColors.map((color) => (
    <span
      className="rounded-md text-white px-2"
      key={color}
      style={{ backgroundColor: color }}
    >
      {color}
    </span>
  ));

  const handelDeleteProduct = () => {
    const udpatedProducts = products.filter(
      (product) => product.id !== productToEdit.id
    );

    setProducts(udpatedProducts);
    closeConfirmModal();
    toast.error("Product has successfuly deleted", {
      style: { backgroundColor: "red", color: "white" },
    });
  };
  const renderProductEdit = (
    id: string,
    label: string,
    type: string,
    name: ProductNameTypes
  ) => {
    return (
      <div className="flex flex-col">
        <label
          className="text-gray-700 font-medium text-sm mb-[2px]"
          htmlFor="title"
        >
          {label}
        </label>
        <Input
          id={id}
          name={name}
          type={type}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage message={errors[name]} />
      </div>
    );
  };
  console.log(selectedCategory);
  console.log(productToEdit);

  return (
    <main className="container">
      <Button
        className="block mb-3 bg-black max-w-sm mx-auto"
        onClick={openModal}
      >
        Add product
      </Button>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
        {renderProductList}
      </div>

      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="Edit This Product"
      >
        <form className="space-y-3" onSubmit={handelProductEdit}>
          {renderProductEdit("title", "Product Title", "text", "title")}
          {renderProductEdit(
            "description",
            "Product description",
            "text",
            "description"
          )}
          {renderProductEdit(
            "imageUrl",
            "Product imageUrl",
            "text",
            "imageUrl"
          )}
          {renderProductEdit("price", "Product price", "text", "price")}

          <div className="flex gap-2 flex-wrap ">
            {tempColors.map((color) => (
              <span
                className="rounded-md text-white px-2"
                key={color}
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex  items-center my-4 space-x-2 mt-auto">
            {renderProductColors}
          </div>
          <Select
            categries={categories}
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-900">Edit</Button>
            <Button
              type="button"
              className="bg-gray-700 hover:bg-gray-950"
              onClick={closeEditModal}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3" onSubmit={hanldeSubmit}>
          {renderFormInputs()}

          <Select
            categries={categories}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

          {tempColors.length > 0 && (
            <div className="flex gap-2 flex-wrap ">{renderSlectedColors}</div>
          )}
          <div className="flex  items-center my-4 space-x-2 mt-auto">
            {renderProductColors}
          </div>
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

      <Modal
        isOpen={isOpenConfirmDialog}
        closeModal={closeConfirmModal}
        title="are you sure you want to deleete this product"
        discription=" deletete will be perminantly be carful"
      >
        <div className="flex  space-x-3">
          <Button className="bg-[#c2344d]" onClick={handelDeleteProduct}>
            yes,Rremove
          </Button>
          <Button
            className="bg-[#f5f5fa] text-black"
            onClick={closeConfirmModal}
          >
            cancel
          </Button>
        </div>
      </Modal>
      <Toaster />
    </main>
  );
};

export default App;

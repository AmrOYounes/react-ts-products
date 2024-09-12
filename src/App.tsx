import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import Input from "./components/ui/Input";
import { productList } from "./data/index";
import { formInputList } from "./data/index";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const renderFormInputs = () =>
    formInputList.map(({ id, name, label, type }) => (
      <div key={id} className="flex flex-col">
        <label
          className="text-gray-700 font-medium text-sm mb-[2px]"
          htmlFor={id}
        >
          {label}
        </label>
        <Input id={id} name={name} type={type} />
      </div>
    ));

  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return (
    <main className="container">
      <Button className="bg-black" onClick={openModal}>
        Add product
      </Button>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <div className="space-y-3">
          {renderFormInputs()}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-900">
              Submit
            </Button>
            <Button
              className="bg-gray-700 hover:bg-gray-950"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default App;

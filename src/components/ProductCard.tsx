import Image from "./Image";
import Button from "./ui/Button";
import { IProduct } from "../interfaces/index";
import { textSlicer } from "../utils/functions";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { description, title, imageUrl, category } = product;
  return (
    <div className="container max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col">
      <Image
        imageUrl={imageUrl}
        alt="product image"
        className="rounded-md mb-2 h-72 object-cover"
      />
      <h3>{title}</h3>
      <p className="mb-4">{textSlicer(description)}</p>

      <div className="flex  my-4 space-x-2 mt-auto">
        <span className="w-5 h-5 bg-indigo-600 rounded-full  cursor-pointer "></span>
        <span className="w-5 h-5 bg-yellow-500 rounded-full  cursor-pointer"></span>
        <span className="w-5 h-5 bg-red-800 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-green-600 rounded-full cursor-pointer"></span>
      </div>
      <div className="flex items-center justify-between">
        <span>$500,000</span>

        <Image
          imageUrl={category.imageUrl}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex space-x-10 mt-5">
        <Button
          width="w-full"
          className="bg-indigo-400"
          onClick={() => console.log("ddd")}
        >
          Edit
        </Button>

        <Button width="w-full" className="bg-red-700">
          Destroy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

import Image from "./Image";
import Button from "./ui/Button";
import { IProduct } from "../interfaces/index";
import { textSlicer } from "../utils/functions";
import CircleColors from "./CircleColors";
interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  indx: number;
  setEditIndex: (value: number) => void;
  setTempColors: (value: string[]) => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  indx,
  setEditIndex,
  setTempColors,
}: IProps) => {
  const { description, title, imageUrl, category, colors, price } = product;

  const onEdit = () => {
    openEditModal();
    setProductToEdit(product);
    setEditIndex(indx);
    setTempColors(colors);
  };
  return (
    <div className="container max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col">
      <Image
        imageUrl={imageUrl}
        alt="product image"
        className="rounded-md mb-2 h-72 object-cover"
      />
      <h3 className="font-bold">{title}</h3>
      <p className="mb-4">{textSlicer(description)}</p>

      <div className="flex  my-4 space-x-2 mt-auto">
        {colors.map((color) => (
          <CircleColors color={color} key={color} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span>{price}$</span>
        <div className="flex items-center gap-3">
          <span>{category.name}</span>
          <Image
            imageUrl={category.imageUrl}
            alt={category.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex space-x-10 mt-5">
        <Button width="w-full" className="bg-indigo-400" onClick={onEdit}>
          Edit
        </Button>

        <Button width="w-full" className="bg-red-700">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

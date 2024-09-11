import ProductCard from "./components/ProductCard";
import { productList } from "./data/index";

const App = () => {
  const renderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  return (
    <main className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;

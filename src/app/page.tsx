import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:16 xl:32 2xl:64">
        <div className="text-3xl font-bold text-center">Featured Products</div>
        <ProductList />
      </div>{" "}
      <div className="mt-24">
        <div className="px-4 md:px-8 lg:16 xl:32 2xl:64 text-center font-bold text-3xl mb-12">Categories</div>
        <CategoryList />
      </div>{" "}
      <div className="mt-24 px-4 md:px-8 lg:16 xl:32 2xl:64">
        <div className="text-3xl font-bold text-center">New Products</div>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;

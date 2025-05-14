import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:64 relative flex flex-col lg:flex-row gap-16 mt-12">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          repellendus sit optio dolores, aut ad officiis, odit provident
          voluptatibus ipsa tempore totam illum itaque nisi nam vero dolorem
          voluptate ex.
        </p>
        <div className="h-[2px] bg-gray-100 " />
        <div className="flex items-center gap-2">
          <h3 className="text-xl text-red-400 line-through">$59</h3>
          <h2 className="font-[500] text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100 " />
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100 " />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            earum numquam iste magni, expedita dolore similique nobis, dolorum
            delectus qui eveniet, fugiat eos est sed. Eaque placeat quae tenetur
            consequuntur.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            earum numquam iste magni, expedita dolore similique nobis, dolorum
            delectus qui eveniet, fugiat eos est sed. Eaque placeat quae tenetur
            consequuntur.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            earum numquam iste magni, expedita dolore similique nobis, dolorum
            delectus qui eveniet, fugiat eos est sed. Eaque placeat quae tenetur
            consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

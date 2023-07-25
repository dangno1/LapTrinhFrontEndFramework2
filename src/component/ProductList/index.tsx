import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../action/product";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: any) => state.products);
  // console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(addProduct({ name: "Product New" }))}>
        Add
      </button>
      {products?.map((item: any) => (
        <div className="flex" key={item.id}>
          <p className="p-2">{item.name}</p>
          <button className="p-2 text-blue-500"
            onClick={() =>
              dispatch(
                updateProduct({ name: "Product Updated", id: item.id })
              )
            }
          >
            Update
          </button>
          <button className="p-2 text-red-500" onClick={() => dispatch(deleteProduct({ id: item.id }))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

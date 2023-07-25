import { produce } from "immer";

const initalState = {
  products: [] as any,
  loading: false as boolean,
  error: "" as string,
};

const productReducer = (state = initalState, action: any) => {
  return produce(state, (setState) => {
    switch (action.type) {
      case "GET":
        setState.products = action.payload;
        break;
      case "ADD":
        setState.products.push(action.payload);
        break;
      case "PUT":
        setState.products = state.products.map((item: any) =>
          item.id == action.payload.id ? action.payload : item
        );
        break;
      case "DELETE":
        setState.products = state.products.filter(
          (item: any) => item.id != action.payload.id
        );
        break;
      default:
        return state;
    }
  });
};

export default productReducer;

import "./App.css";
import Counter from "./component/Counter";
import ProductList from "./component/ProductList";

function App() {
  return (
    <>
      <ProductList/>
      <h1>Counter</h1>
      <Counter/>
    </>
  );
}

export default App;

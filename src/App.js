import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isVisibleCartBlock = useSelector((state) => state.ui.isVisibleCart);
  return (
    <Layout>
      {isVisibleCartBlock && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

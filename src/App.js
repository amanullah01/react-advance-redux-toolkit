import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isVisibleCartBlock = useSelector((state) => state.ui.isVisibleCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("use effect work");
    console.log(cart);
    fetch(
      "https://react-http-request-test-12f89-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {isVisibleCartBlock && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

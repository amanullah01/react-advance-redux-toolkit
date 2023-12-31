import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { sendCartRequest, fetchCartRequest } from "./store/cart-action";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isVisibleCartBlock = useSelector((state) => state.ui.isVisibleCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.isChanged) {
      dispatch(sendCartRequest(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isVisibleCartBlock && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

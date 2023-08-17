import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { uiAction } from "./store/ui-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isVisibleCartBlock = useSelector((state) => state.ui.isVisibleCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    console.log("use effect work");
    console.log(cart);

    const sendCartData = async () => {
      dispatch(
        uiAction.showNotification({
          status: "Pending",
          title: "Sending...",
          message: "Sending cart data.",
        })
      );
      const response = await fetch(
        "https://react-http-request-test-12f89-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart failed.");
      }

      dispatch(
        uiAction.showNotification({
          status: "Success",
          title: "Success",
          message: "Cart data save successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiAction.showNotification({
          status: "Failed",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    });
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

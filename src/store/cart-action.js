import { uiAction } from "./ui-slice";

export const sendCartRequest = (cart) => {
  console.log(cart);
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-request-test-12f89-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data save successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

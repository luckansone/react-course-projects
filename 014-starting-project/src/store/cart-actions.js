import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://cart-app-df933-default-rtdb.firebaseio.com/cart.json"
        );

        if (!response.ok) {
          throw new Error("Sending cart data is failed");
        }

        const data = await response.json();

        return data;
      };

      const cart = await fetchData();
      dispatch(cartActions.replaceCart(cart));
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data is failed.",
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://cart-app-df933-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartData.items,
            totalAmount: cartData.totalAmount,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data is failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data is failed.",
        })
      );
    }
  };
};

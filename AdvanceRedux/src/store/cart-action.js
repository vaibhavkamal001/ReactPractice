import { uiAction } from "./Ui-slice";
import { cartAction } from "./cart-slice";

export const fetchCartDetails = () => {
  return async (dispatch) => {
    const fetchDate = async () => {
      const response = await fetch(
        "https://react-demo-73944-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchDate();

      dispatch(
        cartAction.replaceCart({
          item: cartData.item || [],
          totalQantity: cartData.totalQantity,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-demo-73944-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            item: cart.item,
            totalQantity: cart.totalQantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    sendRequest();

    try {
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

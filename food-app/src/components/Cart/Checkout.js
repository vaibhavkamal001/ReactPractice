import { useReducer, useRef, useState } from "react";
import CheckoutInput from "./CheckoutInput";
import classes from "./Cart.module.css";
import useFetchApi from "../../fetch/useFetchApi";

const validateCheckoutFormReducer = (state, action) => {
  switch (action.type) {
    case "YOUR_NAME": {
      const valid = action.val.trim() !== "";
      return {
        isYourNameValid: valid,
        isStreetValid: state.isStreetValid,
        isPostalCodeValid: state.isPostalCodeValid,
        isCityValid: state.isCityValid,
      };
    }
    case "STREET": {
      const valid = action.val.trim() !== "";
      return {
        isYourNameValid: state.isYourNameValid,
        isStreetValid: valid,
        isPostalCodeValid: state.isPostalCodeValid,
        isCityValid: state.isCityValid,
      };
    }
    case "POSTAL_CODE": {
      const valid = action.val.length === 6;
      return {
        isYourNameValid: state.isYourNameValid,
        isStreetValid: state.isStreetValid,
        isPostalCodeValid: valid,
        isCityValid: state.isCityValid,
      };
    }
    case "CITY": {
      const valid = action.val.trim() !== "";
      return {
        isYourNameValid: state.isYourNameValid,
        isStreetValid: state.isStreetValid,
        isPostalCodeValid: state.isPostalCodeValid,
        isCityValid: valid,
      };
    }
    default: {
    }
  }
};

const Checkout = (props) => {
  const yourNameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const [yourName, setYourName] = useState(false);
  const [street, setStreet] = useState(false);
  const [postalCode, setPostalCode] = useState(false);
  const [city, setCity] = useState(false);

  const onBlurYourName = () => {
    setYourName(true);
    onChangeYourName();
  };
  const onBlurStreet = () => {
    setStreet(true);
    onChangeStreet();
  };
  const onBlurPostalCode = () => {
    setPostalCode(true);
    onChangePostalCode();
  };
  const onBlurCity = () => {
    setCity(true);
    onChangeCity();
  };

  const [validInput, dispatchValid] = useReducer(validateCheckoutFormReducer, {
    isYourNameValid: true,
    isStreetValid: true,
    isPostalCodeValid: true,
    isCityValid: true,
  });

  const onChangeYourName = () => {
    setYourName(true);
    dispatchValid({
      type: "YOUR_NAME",
      val: yourNameInputRef.current.value,
    });
  };
  const onChangeStreet = () => {
    setStreet(true);
    dispatchValid({
      type: "STREET",
      val: streetInputRef.current.value,
    });
  };
  const onChangePostalCode = () => {
    setPostalCode(true);
    dispatchValid({
      type: "POSTAL_CODE",
      val: postalCodeInputRef.current.value,
    });
  };
  const onChangeCity = () => {
    setCity(true);
    dispatchValid({
      type: "CITY",
      val: cityInputRef.current.value,
    });
  };

  const { fetchFun } = useFetchApi();

  const onClickConfirm = (event) => {
    event.preventDefault();
    const isFormValid =
      validInput.isYourNameValid &&
      validInput.isStreetValid &&
      validInput.isPostalCodeValid &&
      validInput.isCityValid &&
      yourName &&
      street &&
      city &&
      postalCode;

    if (isFormValid) {
      const body = {
        order: { ...props.cartItems },
        user: {
          name: yourNameInputRef.current.value,
          postalCode: postalCodeInputRef.current.value,
          city: cityInputRef.current.value,
          street: streetInputRef.current.value,
        },
      };
      fetchFun(
        {
          url: "https://react-demo-73944-default-rtdb.firebaseio.com/orders.json",

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        },
        (data) => {
          props.onSubmit();
          console.log("Ordered Id : " + data.name);
        }
      );
    } else {
      if (!validInput.isYourNameValid || !yourName) {
        yourNameInputRef.current.focus();
      } else if (!validInput.isStreetValid || !street) {
        streetInputRef.current.focus();
      } else if (!validInput.isPostalCodeValid || !postalCode) {
        postalCodeInputRef.current.focus();
      } else if (!validInput.isCityValid || !city) {
        cityInputRef.current.focus();
      }
    }
  };

  const form = (
    <form onSubmit={props.onSubmit}>
      <CheckoutInput
        onChange={onChangeYourName}
        onBlur={onBlurYourName}
        ref={yourNameInputRef}
        valid={validInput.isYourNameValid}
        label="Your Name"
        input={{
          id: Math.random(1, 100),
          type: "text",
        }}
      />
      <CheckoutInput
        onChange={onChangeStreet}
        onBlur={onBlurStreet}
        valid={validInput.isStreetValid}
        ref={streetInputRef}
        label="Street"
        input={{
          id: Math.random(1, 100),
          type: "text",
        }}
      />
      <CheckoutInput
        onChange={onChangePostalCode}
        onBlur={onBlurPostalCode}
        valid={validInput.isPostalCodeValid}
        ref={postalCodeInputRef}
        label="Postal Code"
        input={{
          id: Math.random(1, 100),
          type: "Number",
        }}
      />
      <CheckoutInput
        onChange={onChangeCity}
        onBlur={onBlurCity}
        valid={validInput.isCityValid}
        ref={cityInputRef}
        label="City"
        input={{
          id: Math.random(1, 100),
          type: "text",
        }}
      />
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={onClickConfirm}>
          confirm
        </button>
      </div>
    </form>
  );
  return form;
};

export default Checkout;

import axios from "axios";
import { config } from "../services/bearerToken";

export const createPaymentIntent = (authtoken, coupon) =>
  axios.post(
    `${process.env.REACT_APP_API}/create-payment-intent`,
    { couponApplied: coupon },
    config(authtoken)
  );

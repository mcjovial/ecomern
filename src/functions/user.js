import axios from 'axios';
import { config } from '../services/bearerToken';

export const userCart = async (cart, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    config(authtoken)
  );

export const getUserCart = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`, config(authtoken));

export const emptyUserCart = async (authtoken) =>
  await axios.delete(
    `${process.env.REACT_APP_API}/user/cart`,
    config(authtoken)
  );

export const saveUserAddress = async (authtoken, address) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/address`,
    { address },
    config(authtoken)
  );

export const applyCoupon = async (authtoken, coupon) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart/coupon`,
    { coupon },
    config(authtoken)
  );

export const createOrder = async (stripeResponse, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/order`,
    { stripeResponse },
    config(authtoken)
  );

export const getUserOrders = async (authtoken) =>
  await axios.get(
    `${process.env.REACT_APP_API}/user/orders`,
    config(authtoken)
  );

export const getWishlist = async (authtoken) =>
  await axios.get(
    `${process.env.REACT_APP_API}/user/wishlist`,
    config(authtoken)
  );

export const removeWishlist = async (productId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/user/wishlist/${productId}`,
    {},
    config(authtoken)
  );

export const addToWishlist = async (productId, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/wishlist`,
    { productId },
    config(authtoken)
  );

export const createCashOrderForUser = async (
  authtoken,
  COD,
  couponTrueOrFalse
) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cash-order`,
    { couponApplied: couponTrueOrFalse, COD },
    config(authtoken)
  );

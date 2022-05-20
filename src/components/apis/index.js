import { api } from "./Config";
import axios from "axios";

export function getProduct() {
  return axios.get(api.products.product_all_get);
}

/**
 * @typedef {Object} objProduct
 * @property {String} name name product
 * @property {String} description description product
 * @property {Number} price price product
 * @property {Number} stock stock product
 */

/**
 * Method post product
 * @param {objProduct} data data  product to store
 * @returns {import("axios").AxiosResponse} returns the response of the request
 */
export function postProduct(data) {
  return axios.post(api.products.register_product_post, data);
}

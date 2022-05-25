const back = "http://127.0.0.1:3333/";
const products = "products/";
const id = "products/:id";

export const api = {
  products: {
    // login_post: `${back} ${}`,
    product_all_get: back + products,

    register_product_post: back + products,

    delete_product: back + products + id,
  },
};

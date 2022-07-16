import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

import Product from "App/Models/Product";

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    const product = await Product.query().select("*").from("products");
    return response.status(200).json(product);
  }

  public async show({ response, params }: HttpContextContract) {
    const products = await Database.from("products")
      .where("id", params.id)
      .firstOrFail();
    return response.json({ products });
  }
  public async store({ response, request }: HttpContextContract) {
    const { name, description, price, stock, status, marcs_id } =
      request.body();
    if (
      name === null ||
      name === "" ||
      description === null ||
      description === "" ||
      price === null ||
      price === "" ||
      stock === null ||
      stock === "" ||
      status === null ||
      status === "" ||
      marcs_id === null ||
      marcs_id === ""
    ) {
      return response.json({ message: "datos Incorrectos" });
    }

    try {
      const product = await Product.create({
        name: name,
        description: description,
        price: price,
        stock: stock,
        status: status,
        marcs_id: marcs_id,
      });
      if (product == null) {
        return response.json("Datos incorrectos");
      } else {
        return response.json("los datos se han  Ingresado correctamente  ");
      }
    } catch (error) {
      return response.json(error);
    }
  }
  public async update({ params, request, response }: HttpContextContract) {
    const products = await Product.find(params.id);
    const data = request.only([
      "name",
      "descriptio",
      "price",
      "stock",
      "status",
    ]);

    if (products) {
      products.merge(data);
      products.save();
      return response.status(200).json(products);
    } else {
      return { message: `el curso id=${params.id} no existe` };
    }
  }
  public async delete({ response, params }: HttpContextContract) {
    const products = await Database.from("products")
      .where("id", params.id)
      .delete();
    return response.json({ products });
  }
  public async product_cate({ response }: HttpContextContract) {
    const products = await Product.query().preload("category");
    console.log(products);
  }
}

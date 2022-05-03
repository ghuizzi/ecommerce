import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    // Lookup user manually
    const user = await User.query().where("email", email).firstOrFail();
   
    // Verify password
    if (user.password !== password) {
      return response.badRequest("Invalid credentials");
    }

    
    const token = await auth.use("api").generate(user);
    
    response.json(token)
    // const email = request.input("email");
    // const password = request.input("password");

    // try {
    //   const token = await auth.use("api").generate(email, password);
    //   return token;
    // } catch {
    //   return response.badRequest("invalids credentials");
    // }
  }
}

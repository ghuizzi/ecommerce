/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }

})
// rutas de marcas 
Route.get('/marcs', 'MarcsController.index')
Route.get('/marcs/:id', 'MarcsController.show')
Route.post('/marcs', 'MarcsController.store')
Route.delete('/marcs/:1', 'MarcsController.destroy')

// rutas de categorias
Route.resource('/categories', 'CategoriesController' )

// rutas de usuarios
Route.get('/users', 'UsersController')
Route.post('/users', 'UsersController.store')
Route.put('/forgotpass/:id','UsersController.forgotpassword')
//rutas de productos
Route.get('/products', 'ProductsController.index')
Route.get('/products/:id', 'ProductsController.show')
Route.post('/products', 'ProductsController.store')
Route.put('/products/:id', 'ProductsController.update')
Route.delete('/products/:id', 'ProductsController.delete')
//rutas de metodos
Route.post('/payM', 'PayMethodsController.store')

Route.post('/login','AuthController.login')

Route.get('/product_cate', 'ProductsController.product_cate')
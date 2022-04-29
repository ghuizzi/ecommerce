
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'

export default class ItemUserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await User.createMany([
      {
          fullname: 'Gabriela Huizzi',

          email: 'huizzi2910@gmail.com',

          password: 'gabriela2910',

          details_user: 'vive en Guanare' ,
    },
    {
      fullname: 'Sarai Linares',

          email: 'Sarai2910@gmail.com',

          password: 'Sarai2910',

          details_user: 'vive en Guanare',
    },
    {
      fullname: 'Sarai ',

          email: 'Sarai@gmail.com',

          password: 'Sarai29',

          details_user: 'vive en Guanare',
    }
  ])
  }
}

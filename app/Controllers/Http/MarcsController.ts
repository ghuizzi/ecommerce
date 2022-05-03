import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


// import { response } from "@adonisjs/core/build/standalone";
import Marc from "App/Models/Marc";
// import Marcs from "Database/migrations/1651173428104_create_marc_tables";

export default class MarcsController {
    public async index({response}:HttpContextContract){
        const marcs = await Marc.query().select('*').from( 'marcs')
        return response.status(200).json(marcs)
    }
    public async store({request, response}:HttpContextContract){
        const name = request.input('name');
        const marcs = await Database.insertQuery().table('marcs').insert({name})
        return response.json(marcs)
    }
    public async show({response, params}:HttpContextContract){
        const marcs = await Database.from('marcs').where('id', params.id).firstOrFail()
        return response.json({marcs})
    }
    public async update({params, request, response}:HttpContextContract){
       
        const marcs = await Marc.findOrFail(params.id)
        await marcs.merge(request.body())
        await marcs.save()
        return response.status(200).json(marcs)
       
       
    }
    public async destroy({params,response}:HttpContextContract){
        const marcs= await Database.from('marcs').where('id', params.id).delete();
        return response.json({marcs})
    }
}

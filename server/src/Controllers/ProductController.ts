import { Request, Response } from 'express';
import DB from "../database/database";


const ProductController = {
    async index( request: Request, response : Response) {
      const products = await DB.select(
          'id',
          'name',
          'image',
          'cost',
          'description'
          ).table('product')
      const seriarizePhotos = products.map(product=>{
        return{
          ...product,
          image_url: `http://localhost:3333/api/uploads/${product.image}`
        }
      })
          return response.json(seriarizePhotos)
    },
    async show(request: Request, response : Response){
        const  id = request.params
        //  console.log(id);
        const products = await DB.table('product').select(
            'id',
            'name',
            'image',
            'cost',
            'description'
        ).where( id)
        const product= products[0]
        if(!product){
           return response.json({mensagem:'produto nao existe'})
        }
        const seriarizePhoto= {
            ...product,
           image_url: `http://localhost:3333/api/uploads/${product.image}`
        }
       return response.json(seriarizePhoto)
    },
    async create( request:Request,response:Response){
        const{
            name,
            description,
            cost,
        }=request.body
        const {filename} = request.file
        const product= await DB.table('product').insert({
            name,
            image: filename,
            description,
            cost
        });
        const image_url = `http://127.0.0.1:3333/api/uploads/${filename}`
        const data={ id:product[0],  imagem: filename, description, image_url }
        return response.json({ data })
    },
    async update( request:Request,response:Response){
        const{
            name,
            description,
            cost,
        }=request.body
        const {filename} = request.file
        const id = request.params
        const image_url = `http://127.0.0.1:3333/api/uploads/${filename}`
       const user = await DB.table('product').update({
            name,
            image: filename,
            description,
            cost
        }).where(id)
  

        const date={
            name,
            image: filename,
            description,
            cost,
            image_url
        }

        return response.json(date)
    },
    async destroy(request:Request,response:Response){

        const {id} = request.params

        await DB.table('product').where({id}).del()
    
        return response.json({mensagem: "postagem deletada com sucesso"})
      }

}

export default ProductController
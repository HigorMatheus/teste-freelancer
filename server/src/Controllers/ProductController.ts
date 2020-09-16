import { Request, Response } from 'express';
import DB from "../database/database";


const ProductController = {
    async index( request: Request, response : Response) {
        // const product = await DB.table('product')
        return response.json({oi: 'como vai'})
    },
    async create( request:Request,response:Response){
    //    try {
        const{
            name,
            description,
            cost,
            image
        }=request.query
        // const image = request.file

        console.log(image);
        
        
        
        
        return response.json({ oi:'chequei'})
    //     // const image = request.file
    //    } catch (error) {
    //        console.error(error);
    //    }

        
        
    }
}

export default ProductController
import React, { useEffect, useState } from 'react';
import './style.css'
import api from '../../services/api';

interface Iproducts{
    id: Number,
    name: String,
    image: String,
    description:String,
    cost: String,
    image_url: string

}
// import './Product.css';
const Product = ()=>{
    const [product, setProduct] = useState([])

    useEffect(()=>{
     api.get('/product').then( response=>{
        const products =response.data;
        // console.log(photos);
         setProduct(products)
     })
    },[])
    return(
        <div className="Product d-flex flex-row bd-highlight mb-3">
                     {product.map((prod :Iproducts)=>{
                         return(
                            <div className="  d-flex card col-6" >
                            <img src={prod.image_url} className="card-img-top" alt="..."/>
                            <div className="card-body">
                         <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text">{prod.description}</p>
                         <p className= "card-text">{prod.cost}</p>
                            
                            </div>
                        </div>
                         )
                     })}
                
        </div>
    )
}

// class Product extends Component {
//     state={
//         products:[]
//     }
    
//     componentDidMount(){
//         this.loadProducs()
//       }
      
//       loadProducs = async( )=>{
//         const response = await api.get(`/product`)
//         const { products, ...productInfo}= response.data
//         this.setState({products, productInfo})
//       }

//     render(){
//         const {products} = this.state
//           return (

//             <div className="Product">
//                 {products.map()}
//             <img src="" alt=""/>
//             <p>descricao</p>
//             </div>
//         );
//     }

// }

export default Product;
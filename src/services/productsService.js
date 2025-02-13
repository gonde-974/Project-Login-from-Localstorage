import axios from "axios";


class ProductService {
    static getProducts = () => axios.get('/products') 
      
}

export default ProductService;
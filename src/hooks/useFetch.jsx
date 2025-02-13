import React, { use, useEffect, useState } from 'react'
import ProductService from '../services/productsService';

function useFetch() {

    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

  useEffect(()=>{
    ProductService.getProducts()
      .then((res)=>{
        setData(res.data.products)
        setIsLoading(true)
      })
      .catch((err)=>console.log(err))
  },[])

  return ({data,isLoading}//Skratena verzija od {data:data,isLoading:isLoading}
                          //Ova se mozi zatoa sto property imaat isti key i value

    
  )
}

export default useFetch
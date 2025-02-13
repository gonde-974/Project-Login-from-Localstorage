import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import ProductService from '../services/productsService';

function ProductsPage() {

    const {data , isLoading} = useFetch();

  return (
    <div>
        {isLoading ? (
            <>
              {data.map((el,i)=>{
                return <div key={i}>
                    {el.title}
                </div>
              })}
            </>
        ):(
            <h2>/Loading...</h2>
        )}
       
    </div>
  )
}

export default ProductsPage
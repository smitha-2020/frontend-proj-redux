import React,{useState} from 'react'
import Category from '../components/Category'

const Products = () => {
  const [selCategory,setSelCategory]=useState<string[]>([]);
  return (
   <>
      <Category setSelCategory={setSelCategory} selCategory={selCategory} />
   </>
  )
}

export default Products
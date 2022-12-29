import React,{useEffect, useState} from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList';
import { Product } from '../common/Common';
import { useAppSelector,useAppDispatch } from '../hooks/reduxHook'
import { ascendingOrder, fetchAllProducts, getSingleProduct,fetchAllProductsbyCategory, filterCatgories,sortByPrice } from '../redux/reducers/ProductReducers'

const Products = () => {
  const [selCategory,setSelCategory]=useState<number[]>([]);
  // const [productsSelected,setProductSelected] = useState<Product[]>([])

  const products = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch();
  useEffect(()=> {
    dispatch(fetchAllProducts())

  },[]);

  
  // useEffect(()=> {
  //   console.log("Newcategory clicked!!"+selCategory)
    //dispatch(sortByPrice("hightolow"))
    //dispatch(filterCatgories(selCategory))
    // dispatch(ascendingOrder("desc"))
    

    // if(selCategory.length>0){
    //   selCategory.map((ele) => {
    //     dispatch(fetchAllProductsbyCategory(ele))
    //   })
    // }else{
    //   dispatch(fetchAllProductsbyCategory(0)) 
    // }
  // },[selCategory])
  return (
   <>
      <Category setSelCategory={setSelCategory} selCategory={selCategory} />
      <ProductList products={products} selCategory={selCategory}/>
   </>
  )
}

export default Products
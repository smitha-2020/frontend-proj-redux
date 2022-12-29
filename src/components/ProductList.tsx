import React,{useEffect} from 'react'
import { useAppSelector,useAppDispatch } from '../hooks/reduxHook'
import { Product } from '../common/Common' 
import { filterCatgories } from '../redux/reducers/ProductReducers'

const ProductList = ({products,selCategory}:{products:Product[],selCategory:number[]}) => {

  const pro = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch();


  useEffect(()=> {
    console.log("Newcategory clicked!!"+selCategory)
    dispatch(filterCatgories(selCategory)) //Notworking Code

  },[selCategory])
   
   
    //console.log(products)
  return (
    <>
     <div>ProductList</div>
     {products.length}
     {products.map(element => <p key={element.id}>{element.title}</p>)}
    </>
   
   
  )
}

export default ProductList
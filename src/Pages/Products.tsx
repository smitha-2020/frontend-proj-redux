import React, {  useState } from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList';
import { Product } from '../common/Common';
import { useAppSelector } from '../hooks/reduxHook'
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { RootState } from '../redux/store';


const Products = () => {

  const AnatherBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    margin: "100px 0 0 0",
    padding: "50px 0 0 50px"
  })
  const CategoryBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "200px",
  })
  const [selCategory, setSelCategory] = useState<number[]>([]);
  const displayNewProducts = (state:RootState) => {
    let data;
    let totalData:Product[] =[];
    let dataAppended:Product[] =[];;
    console.log(selCategory)
    if(selCategory.length > 0){

      for(let i=0;i<selCategory.length;i++){
        [...data] = state.productReducer.filter((product) => {return product.category.id === selCategory[i]})
        totalData.push(...data)
      }
      return totalData;
      // return [{ id: 123,
      //   title: "Handmade",
      //   price: 123,
      //   description: "Handmade",
      //   category: {  id: 123,
      //     name: "string",
      //     image: "string"},
      //   images: []}];
    }else{
      return state.productReducer;
    }
   
  }
  const products = useAppSelector(state => {return displayNewProducts(state)})
  return (
    <>
      <AnatherBox>
        <CategoryBox>
          <Category setSelCategory={setSelCategory} selCategory={selCategory} />
        </CategoryBox>
        <ProductList products={products} selCategory={selCategory} />
      </AnatherBox>
    </>
  )
}

export default Products
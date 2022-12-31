import React, { useState } from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList';
import { Product } from '../common/Common';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import { ascendingOrder, sortByPrice } from '../redux/reducers/ProductReducers';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import styled from '@emotion/styled';
import { RootState } from '../redux/store';
import { useParams } from 'react-router-dom';
import IndividualProduct from './IndividualProduct';


const Products = () => {
  const {id} = useParams();
  const AnatherBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    margin: "100px 0 0 0",
    padding: "50px 0 0 50px"
  })
  const AnatherInputLabel = styled(InputLabel)({
    fontSize: "10px"
  })
  const AnatherSelect = styled(Select)({
    width: "200px",
    float: "right",
    fontSize: "10px",
    height: "40px"
  })
  const AnatherMenuItem = styled(MenuItem)({
    fontSize: "12px"
  })
  const CategoryBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "200px",
  })
  const OuterBox = styled(Box)({
    width: "100%",
    position: "relative",
    height: "100px"
  })
  const SelectBox = styled(Box)({
    position: "absolute",
    right: "40px",
    top: "100px"

  })
  const [selCategory, setSelCategory] = useState<number[]>([]);
  const displayNewProducts = (state: RootState) => {
    let data;
    let filteredData: Product[] = [];
    //console.log(selCategory)
    if (selCategory.length > 0) {
      for (let i = 0; i < selCategory.length; i++) {
        [...data] = state.productReducer.filter((product) => { return product.category.id === selCategory[i] })
        filteredData.push(...data)
        // console.log(filteredData)
      }
      return filteredData;
      // return [{ id: 123,
      //   title: "Handmade",
      //   price: 123,
      //   description: "Handmade",
      //   category: {  id: 123,
      //     name: "string",
      //     image: "string"},
      //   images: []}];
    } else {
      return state.productReducer;
    }

  }
  const products = useAppSelector(state => { return displayNewProducts(state) })
  const dispatch = useAppDispatch();
  const handleChange = (e: SelectChangeEvent<unknown>) => {
    if (e.target.value === "a-z") {
      dispatch(ascendingOrder("asc"))
    } else if (e.target.value === "z-a") {
      dispatch(ascendingOrder("desc"))
    }
    else if (e.target.value === "hightolow") {
      dispatch(sortByPrice("hightolow"))
    }
    else {
      dispatch(sortByPrice("lowtohigh"))
    }
  }
  if(id){
    return(
      <>
        <IndividualProduct/>
      </>
    )
  
  }else{
  return (
    <>
      <OuterBox>
        <SelectBox>
          <FormControl fullWidth>
            <AnatherInputLabel id="demo-simple-select-label">Sorting</AnatherInputLabel>
            <AnatherSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Sorting"
              onChange={(e) => handleChange(e)}
            >
              <AnatherMenuItem value="a-z">a-z</AnatherMenuItem>
              <AnatherMenuItem value="z-a">z-a</AnatherMenuItem>
              <AnatherMenuItem value="hightolow">Price(High to Low)</AnatherMenuItem>
              <AnatherMenuItem value="lowtohigh">Price(Low to High)</AnatherMenuItem>
            </AnatherSelect>
          </FormControl>
        </SelectBox>


      </OuterBox>

      <AnatherBox>
        <CategoryBox>
          <Category setSelCategory={setSelCategory} selCategory={selCategory} />
        </CategoryBox>
        <ProductList products={products} selCategory={selCategory} />
      </AnatherBox>
    </>
  )
  }
}

export default Products
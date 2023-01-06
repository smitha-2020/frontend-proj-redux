import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import {ascendingOrder, fetchAllProducts, fetchProductsByPagination, sortByPrice } from '../redux/reducers/ProductReducers';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Grid, TextField, Pagination } from '@mui/material';
import styled from '@emotion/styled';
import { RootState } from '../redux/store';
import { useParams } from 'react-router-dom';
import { Product } from '../common/Common';
import IndividualProduct from './IndividualProduct';
import Footer from '../components/Footer';
//import { ascendingOrder, fetchAllProducts, fetchProductsByPagination, sortByPrice } from '../redux/reducers/experimentReducer';

const Products = () => {
  const { id } = useParams();
  const AnatherBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    margin: "30px 0 0 0",
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
    fontSize: "12px"
  })
  const OuterBox = styled(Box)({
    marginBottom: "20px"
  })
  const ProductBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
  })
  const [selCategory, setSelCategory] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(240);
  const [search, setSearch] = useState("");
  let totalPagess = 0;

  // useEffect(() => {
  //   dispatch(fetchAllProducts())
  // }, [])

  useEffect(() => {
    setTotalPages(products.length)
  }, [selCategory])
  useEffect(() => {
    dispatch(fetchProductsByPagination(currentPage))
  }, [currentPage])
  const dispatch = useAppDispatch();
  const displayNewProducts = (state: RootState) => {
    let data;
    let filteredData: Product[] = [];
    if (selCategory.length > 0) {
      for (let i = 0; i < selCategory.length; i++) {
        [...data] = state.productReducer.product.filter((product) => { return product.category.id === selCategory[i] })
        filteredData.push(...data)
      }
      return filteredData;
    } else {
      return state.productReducer.product;
    }
  }
  const products = useAppSelector(state => { return displayNewProducts(state) })
  console.log(products)
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
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  if (id) {
    return (
      <>
        <IndividualProduct products={products} />
      </>
    )
  } else {
    return (
      <>
        <AnatherBox>
          <CategoryBox>
            <Category setSelCategory={setSelCategory} selCategory={selCategory} />
            <Box>
              <TextField type="email" variant="outlined" placeholder="Search" margin="normal" value={search} />
            </Box>
          </CategoryBox>
          <ProductBox>
            <OuterBox>
              <Grid container spacing={2}>
                <Grid item xs={5}></Grid>
                {/* <Grid item xs={5}>{products.length} products displayed</Grid> */}
                <Grid item xs={5}></Grid>
                <Grid item xs={2}>
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
                      <AnatherMenuItem value="hightolow">Price(Low to High)</AnatherMenuItem>
                      <AnatherMenuItem value="lowtohigh">Price(High to Low)</AnatherMenuItem>
                    </AnatherSelect>
                  </FormControl>
                </Grid>
              </Grid>
            </OuterBox>
            <Box>
              <ProductList products={products} />
            </Box>
          </ProductBox>
        </AnatherBox>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '1vh', minWidth: '100vw', marginTop: '20px' }}>
          <Pagination count={(totalPages<12)?(240/cardsPerPage): 1} onChange={handlePageChange} />
        </Grid>
      </>
    )
  }
}

export default Products
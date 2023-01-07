import React, { useState } from 'react'
import Category from '../components/Category'
import ProductList from '../components/ProductList';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import { ascendingOrder, sortByPrice } from '../redux/reducers/ProductReducers';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Grid, Pagination } from '@mui/material';
import styled from '@emotion/styled';
import { RootState } from '../redux/store';
import { useParams } from 'react-router-dom';
import { Product } from '../common/Common';
import IndividualProduct from './IndividualProduct';
import Footer from '../components/Footer';
import { usePagination } from "../hooks/pagination"

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
  const [numbofPages, setNumbofPages] = useState(12);
  const [search, setSearch] = useState({ search: "" });
  const dispatch = useAppDispatch();
  const displayNewProducts = (state: RootState) => {
    let data;
    let filteredData: Product[] = [];
    if (selCategory.length > 0) {
      for (let i = 0; i < selCategory.length; i++) {
        [...data] = state.productReducer.product.filter((product) => { return product.category.id === selCategory[i] && product.title.includes(search.search) })
        filteredData.push(...data)
      }
      return filteredData;
    } else if (search.search !== "") {
      [...data] = state.productReducer.product.filter((product) => { return product.title.includes(search.search) })
      filteredData.push(...data)
      return filteredData;
    } else {
      return state.productReducer.product;
    }
  }
  const products = useAppSelector(state => { return displayNewProducts(state) })
  const searchText = (field: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setSearch((prevVal) => ({ ...prevVal, [field]: e.target.value }));
  }
  //pagination change event.
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value)
    setCurrentPage(value);
    dataPaginated.gotoPage(value)
  };
  const handleNumbSelect = (e: SelectChangeEvent<unknown>) => {
    console.log(e.target.value)
    setNumbofPages(Number(e.target.value))
  }
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
  const dataPaginated = usePagination(numbofPages, products);
  //New products array returned by usePagination hook.
  const newProducts: Product[] = []
  dataPaginated.currentPageData().map((data) => { return newProducts.push(data) })
  //total slots that needs to be displayed
  const totalDisplayed = dataPaginated.totalPages;
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
              <input type="text" placeholder="Search" name="search" value={search.search} onChange={(e) => searchText('search', e)} />
            </Box>
          </CategoryBox>
          <ProductBox>
            <OuterBox>
              <Grid container spacing={2}>
                <Grid item xs={5}></Grid>
                <Grid item xs={3}>{products.length} products displayed</Grid>
                {/* <Grid item xs={5}></Grid> */}
                <Grid item xs={4}>
                  <Grid container spacing={0} display="flex" flexDirection="row">
                    <Grid item xs={6}> <FormControl fullWidth>
                      <AnatherInputLabel id="select-label-sort">Sorting</AnatherInputLabel>
                      <AnatherSelect
                        labelId="select-label-sort"
                        id="select-label-sort"
                        value=""
                        label="Sorting"
                        onChange={(e) => handleChange(e)}
                      >
                        <AnatherMenuItem value="a-z">a-z</AnatherMenuItem>
                        <AnatherMenuItem value="z-a">z-a</AnatherMenuItem>
                        <AnatherMenuItem value="hightolow">Price(Low to High)</AnatherMenuItem>
                        <AnatherMenuItem value="lowtohigh">Price(High to Low)</AnatherMenuItem>
                      </AnatherSelect>
                    </FormControl></Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <AnatherInputLabel id="select-label-sort">Pages</AnatherInputLabel>
                        <AnatherSelect
                          labelId="select-label-sort"
                          id="select-label-sort"
                          value=""
                          label="Pages"
                          onChange={(e) => handleNumbSelect(e)}
                        >
                          <AnatherMenuItem value="12">12</AnatherMenuItem>
                          <AnatherMenuItem value="24">24</AnatherMenuItem>
                          <AnatherMenuItem value="36">36</AnatherMenuItem>
                          <AnatherMenuItem value="48">48</AnatherMenuItem>
                        </AnatherSelect>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </OuterBox>
            <Box>
              <ProductList products={newProducts} />
            </Box>
          </ProductBox>
        </AnatherBox>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '1vh', minWidth: '100vw', marginTop: '20px' }}>
          <Pagination count={totalDisplayed} onChange={handlePageChange} />
        </Grid>
      </>
    )
  }
}

export default Products
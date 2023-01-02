
import React from 'react'
import { useAppSelector } from '../hooks/reduxHook'
import { Checkbox, FormControlLabel, FormGroup,Box } from '@mui/material'
import styled from '@emotion/styled';

const Category = ({ setSelCategory, selCategory }: { setSelCategory: React.Dispatch<React.SetStateAction<string[]>>, selCategory: string[] }) => {

  //const categortList = ["others", "shoes", "furniture","electronics"]

  const categortList =["electronics","jewelery","men's clothing","women's clothing"]
  const categories = useAppSelector(state => state.categoryReducers)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const index =e.target.value
    if (index.length>0) {
      selCategory.some(x => x === e.target.value)? setSelCategory(selCategory.filter((category) => category !== e.target.value)):setSelCategory([...selCategory,e.target.value]);
    }
  }
  // const newcategories = categories.filter((category) => { return (categortList.includes(category.name.toLowerCase())) })
  return (
    <>
      {/* <ul className="categories">
        {newcategories.map((category) => <li key={category.id}> <input type="checkbox" name={category.name} value={category.name} onChange={(e) => selectItem(e, category.id)}></input><a href="#">{category.name}</a></li>)}
      </ul> */}
      <FormGroup>
        <Box>Categories:</Box>
        {categories.map((category) => <FormControlLabel key={category} label={category} control={<Checkbox value={category} checked={selCategory.some(x => x === category)} onChange={handleChange} />}></FormControlLabel>)}
      </FormGroup>
    </>
  )
}

export default Category



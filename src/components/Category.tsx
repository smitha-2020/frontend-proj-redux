
import React from 'react'
import { useAppSelector } from '../hooks/reduxHook'
import { Checkbox, FormControlLabel, FormGroup,Box } from '@mui/material'
import styled from '@emotion/styled';

const Category = ({ setSelCategory, selCategory }: { setSelCategory: React.Dispatch<React.SetStateAction<number[]>>, selCategory: number[] }) => {

  const categortList = ["others", "shoes", "furniture","electronics"]
  const categories = useAppSelector(state => state.categoryReducers)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const index = selCategory.indexOf(Number(e.target.value))
    if (index === -1) {
      setSelCategory([...selCategory, Number(e.target.value)])
     
    } else {
      setSelCategory(selCategory.filter((category) => category !== Number(e.target.value)))
    }
  }

  const newcategories = categories.filter((category) => { return (categortList.includes(category.name.toLowerCase())) })
  return (
    <>
      {/* <ul className="categories">
        {newcategories.map((category) => <li key={category.id}> <input type="checkbox" name={category.name} value={category.name} onChange={(e) => selectItem(e, category.id)}></input><a href="#">{category.name}</a></li>)}
      </ul> */}
      <FormGroup>
        <Box>Categories:</Box>
        {newcategories.map((category) => <FormControlLabel key={category.id} label={category.name} control={<Checkbox value={category.id} checked={selCategory.includes(category.id)} onChange={handleChange} />}></FormControlLabel>)}
      </FormGroup>
    </>
  )
}

export default Category



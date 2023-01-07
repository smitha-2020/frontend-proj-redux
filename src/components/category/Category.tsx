
import React from 'react'
import { useAppSelector } from '../../hooks/reduxHook'

import { Checkbox, FormControlLabel, FormGroup,Box } from '@mui/material'


const Category = ({ setSelCategory, selCategory }: { setSelCategory: React.Dispatch<React.SetStateAction<number[]>>, selCategory: number[] }) => {
  const categories = useAppSelector(state => state.categoryReducers)
  const categortList = ["others", "shoes", "furniture","electronics","nuevo","un nuevo nombre"]
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
    {newcategories.length>0? <FormGroup>
        <Box>Categories:</Box>
        {newcategories.map((category) => <FormControlLabel key={category.id} label={category.name} control={<Checkbox value={category.id} checked={selCategory.includes(category.id)} onChange={handleChange} />}></FormControlLabel>)}
      </FormGroup>:<p>No Categories Listed!!</p>}
     
    </>
  )
}

export default Category



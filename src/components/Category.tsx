import React, { useEffect,useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import  categoryReducers, { fetchAllCategories } from '../redux/reducers/CategoryReducers'

const Category = ({setSelCategory,selCategory}:{setSelCategory:React.Dispatch<React.SetStateAction<string[]>>,selCategory:string[]}) => {
 

  const categories = useAppSelector(state => state.categoryReducers)
  //console.log(categories)
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchAllCategories())
  },[])
  const selectItem = (e:React.MouseEvent<HTMLInputElement, MouseEvent>,selName:string) => {
    //setSelCategory((prevState) =>  [prevState])
  }
  return (
    <>
    <ul className="categories">
      {categories.map((category) => <li key={category.id}> <input type="checkbox"  name={category.name} value={category.name} onClick={(e) => selectItem(e,category.name)}></input><a href="#">{category.name}</a></li>)}
    </ul>
    </>
  )
}

export default Category
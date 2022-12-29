import React, { useEffect,useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHook'
import  categoryReducers, { fetchAllCategories } from '../redux/reducers/CategoryReducers'
import {filterCatgories} from '../redux/reducers/ProductReducers'


const Category = ({setSelCategory,selCategory}:{setSelCategory:React.Dispatch<React.SetStateAction<number[]>>,selCategory:number[]}) => {
 

  const categories = useAppSelector(state => state.categoryReducers)
  //console.log(categories)
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchAllCategories())
  },[])
  const selectItem = (e:React.ChangeEvent<HTMLInputElement>,selName:number) => {
    if(!selCategory.some((category)=> category === selName)){
      setSelCategory((prevState) =>  [...prevState,selName])
      // dispatch(filterCatgories(selCategory))
      
    }else{
      setSelCategory((prevState) =>  prevState.filter((state)=>{return state!==selName}))
    }
   
  }
  return (
    <>
    <ul className="categories">
      {categories.map((category) => <li key={category.id}> <input type="checkbox"  name={category.name} value={category.name}   onChange={(e) => selectItem(e,category.id)}></input><a href="#">{category.name}</a></li>)}
    </ul>
    </>
  )
}

export default Category



import React from 'react'
import { useAppSelector } from '../../hooks/reduxHook'
import { SericesItem, SericesSection } from '../../styledComponent/home'

const Featured = () => {
    const categories = useAppSelector(state => state.categoryReducers)
    const categortList = ["others", "shoes", "furniture", "electronics", "nuevo", "un nuevo nombre"]
    const newcategories = categories.filter((category) => { return (categortList.includes(category.name.toLowerCase())) })
    const slicedArray = newcategories.slice(0, 3);

    // #e6f2ff
    return (
        <>
            <SericesSection sx={{backgroundColor:'gray'}}>
                <SericesItem>
                    
                </SericesItem>
                <SericesItem>
                    
                </SericesItem>
                <SericesItem>
                    
                </SericesItem>
            </SericesSection>

        </>
    )
}

export default Featured
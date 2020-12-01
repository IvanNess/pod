import { useState } from 'react';
import CategoryItem from './category-item';
import SubcategoryItem from './subcategory-item';

const CategorySubcategoryItem = ({formRef}) => {

    const [categoryId, setCategoryId] = useState(null)

    const categoryChanged = async (categoryId)=>{
        console.log('category changed')
        setCategoryId(categoryId)
        formRef.current.setFieldsValue({ subcategoryIds: [] })
    }

    return (
        <>
            <CategoryItem onChange={categoryChanged}/>

            <SubcategoryItem categoryId={categoryId}/>
        </>
    )
}

export default CategorySubcategoryItem

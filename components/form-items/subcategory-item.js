import React, { useState, useEffect } from 'react'
import { getSubcategoriesByCategoryId } from '../../utils/graphql-utils'
import { Select, Form } from 'antd'
import useSWR from 'swr'

const { Option } = Select

const SubcategoryItem = ({categoryId}) => {

    const {data: items, error} = useSWR(`getSubcategoriesByCategoryId/${categoryId}`,
        ()=>getSubcategoriesByCategoryId(categoryId)
    )

    return (
        <Form.Item 
            name="subcategoryIds"
            label="Subcategory"
            rules={[ { required: true, message: "Please choose a subcategory" }]}
        >
            <Select
                mode="multiple"
                loading={!items  && !error}
                disabled={!categoryId}
                //onChange={handleChange}
            >
                {items && items.map(item=><Option key={item.id} value={item.id}>{item.name}</Option>)}
            </Select>
        </Form.Item>
    )
}

export default SubcategoryItem

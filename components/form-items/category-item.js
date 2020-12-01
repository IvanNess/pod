import React, { useEffect, useState } from 'react'
import { getCategories } from '../../utils/graphql-utils'
import { Form, Select } from 'antd'
import useSWR from 'swr'

const CategoryItem = ({onChange})=>{

    const {data: items, isValidating, error} = useSWR('getCategories', getCategories)

    const onFocus = (e)=>{
        e.target.style.width="100%"
    }

    const onBlur = (e)=>{
        e.target.style.width="0%"
    }

    const onClick = (e)=>{
        // console.log('click', e.target)
        //e.target.style.width="0%"
    }

    return (
        <Form.Item 
            name="categoryId"
            label="Category"
            rules={[ { required: true, message: "Please choose a category" }]}
        >
            <Select onChange={onChange} showSearch 
                loading={!items && !error}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
            >
                {items && items.map(item=><Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)}
            </Select>
        </Form.Item>
    )
}

export default CategoryItem

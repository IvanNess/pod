import React, { useEffect, useState } from 'react'
import { getRegions } from '../../utils/graphql-utils'
import { Form, Select } from 'antd'

const RegionItem = ({onChange})=>{

    const [{items, isLoading, err}, setItems] = useState({items: [], isLoading: true, err: null})

    const fetch = async()=>{
        try{
            const items = await getRegions()
            setItems({items, isLoading: false, err: null}) 
        } catch(err){
            setItems({items: [], isLoading: false, err})
        }
    }

    useEffect(()=>{
        fetch() 
    }, [])

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
            name="wojewodstwoId"
            label="Województwo"
            rules={[ { required: true, message: "Please input a region" }]}
        >
            <Select onChange={onChange} loading={isLoading} showSearch
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
            >
                {items.map(item=><Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)}
            </Select>
        </Form.Item>
    )
}

export default RegionItem

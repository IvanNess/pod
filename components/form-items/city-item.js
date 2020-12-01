import React, { useEffect, useState } from 'react'
import { getCitiesByRegionId } from '../../utils/graphql-utils'
import { Form, Select } from 'antd'

const CityItem = ({regionId = null, onChangeCb})=>{

    const [{items, isLoading, err}, setItems] = useState({items: [], isLoading: true, err: null})

    const fetch = async()=>{
        try{
            const items = await getCitiesByRegionId(regionId)
            console.log(items)
            setItems({items, isLoading: false, err: null}) 
        } catch(err){
            console.log(err)
            setItems({items: [], isLoading: false, err})
        }
    }

    useEffect(()=>{
        fetch() 
    }, [regionId])

    // const [$input, set$input] = useState(null)

    const onChange = (value)=>{
        const regionId = items.find(item=>item.id===value).region.id
        onChangeCb(regionId)
    }

    const onFocus = (e)=>{
        e.target.style.width="100%"
        // set$input(e.target)
    }

    const onBlur = (e)=>{
        e.target.style.width="0%"
    }

    // const onClick = (e)=>{
    //     console.log('click')
    //     console.log($input)
    //     if(e.target===$input){
    //         $input.style.width="0%"
    //     }
    // }

    return (
        <Form.Item 
            name="miastoId"
            label="Miasto"
            rules={[ { required: true, message: "Please input a city" }]}
        >
            <Select onChange={onChange} loading={isLoading} showSearch
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onFocus={onFocus}
                onBlur={onBlur}
                // onClick={onClick}
            >
                {items.map(item=><Select.Option readOnly={true} value={item.id} key={item.id}>{item.name}</Select.Option>)}
            </Select>
        </Form.Item>
    )
}

export default CityItem

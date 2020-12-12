import React, { useEffect, useState } from 'react'
import { getCitiesByRegionId, getCitiesByRegionName } from '../../utils/graphql-utils'
import { Form, Select } from 'antd'

const CityItem = ({regionName = null, onChangeCb})=>{

    const [{items, isLoading, err}, setItems] = useState({items: [], isLoading: true, err: null})

    const fetch = async()=>{
        try{
            const items = await getCitiesByRegionName(regionName)
            console.log(items)
            setItems({items, isLoading: false, err: null}) 
        } catch(err){
            console.log(err)
            setItems({items: [], isLoading: false, err})
        }
    }

    useEffect(()=>{
        fetch() 
    }, [regionName])

    // const [$input, set$input] = useState(null)

    const onChange = (value)=>{
        const regionName = items.find(item=>item.name===value).region.name
        onChangeCb(regionName)
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
            name="miasto"
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
                {items.map(item=><Select.Option readOnly={true} value={item.name} key={item.id}>{item.name}</Select.Option>)}
            </Select>
        </Form.Item>
    )
}

export default CityItem

import React, { useState, useEffect } from 'react'
import { getNationalities } from '../../utils/graphql-utils'
import { Select, Form } from 'antd'
const { Option, OptGroup } = Select

const NationalityItem = ({name, label, message}) => {

    const [nationalities, setNationalities] = useState([])

    const fetchAndSet = async () => {
        const nationalities = await getNationalities()
        setNationalities(nationalities)
    }

    useEffect(()=>{
        fetchAndSet()
    }, [])

    return (
        <Form.Item name={name} label={label} rules={[ { required: true, message }]}>
            <Select>
                <OptGroup label="Main">
                    {nationalities.filter(nationality=>nationality.isMain).map(nationality=>(
                        <Option value={nationality.id} key={nationality.id}>{nationality.name}</Option>
                    ))}
                </OptGroup>
                <OptGroup label="Common">
                    {nationalities.filter(nationality=>!nationality.isMain).map(nationality=>(
                        <Option value={nationality.id} key={nationality.id}>{nationality.name}</Option>
                    ))}
                </OptGroup>
            </Select>
        </Form.Item>
    )
}

export default NationalityItem

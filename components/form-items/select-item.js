import { Form, Select } from 'antd'

const { Option } = Select;

const SelectItem = ({name, label, message="There is no empty field allowed.", items, onChange=()=>{}, value}) => {

    console.log('value', value)

    return (
        <Form.Item 
            name={name}
            label={label}
            rules={[ { required: true, message }]}
        >
            <Select onChange={onChange} value={value}>
                {items.map(item=><Option value={item.id} key={item.id}>{item.name}</Option>)}
            </Select>
        </Form.Item>
    )
}

export default SelectItem

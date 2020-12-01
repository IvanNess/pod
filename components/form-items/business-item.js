import { Form, Select } from 'antd'

const { Option } = Select;

const BusinessItem = ({onChange}) => {

    const items = [
        {value: "individual", name: "Individual"},
        {value: "company", name: "Company"}
    ]  
    
    return (
        <Form.Item 
            name="isOrganization"
            label="Individual / Company"
            rules={[ { required: true, message: "There is no empty field allowed." }]}
        >
            <Select onChange={onChange}>
                {items.map(item=><Option value={item.value} key={item.value}>{item.name}</Option>)}
            </Select>
        </Form.Item>
    )
}

export default BusinessItem

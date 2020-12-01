import { Form, Input } from 'antd'

const InputItem = ({name, label, message, required=true}) => {
    return (
        <Form.Item
            name={name}
            label={label}
            rules={[{ required: true, message}]}
            hasFeedback
            required={required}
        >
            <Input />
        </Form.Item>
    )
}

export default InputItem

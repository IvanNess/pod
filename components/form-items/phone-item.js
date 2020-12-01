import { Form, Input } from 'antd'

const PhoneItem = ({validateTrigger}) => {
    return (
        <Form.Item
            name="phone_number"
            label="Telephone number"
            rules={[
                {
                    pattern: /^\+{1}[\d]{6,}$/,
                    message: 'The input is not valid mobile number.',
                },
                {
                    required: true,
                    message: 'Please input your mobile number!',
                }
            ]}
            validateTrigger={validateTrigger}
        >
            <Input />
        </Form.Item>
    )
}

export default PhoneItem

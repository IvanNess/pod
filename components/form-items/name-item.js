import { Form, Input } from 'antd'

const NameItem = () => {
    return (
        <>
            <Form.Item
                name="firstName"
                label="First name"
                rules={[{ required: true, message: 'Please input your first name.'}]}
                hasFeedback
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="lastName"
                label="Last name"
                rules={[{ required: true, message: 'Please input your last name.'}]}
                hasFeedback
            >
                <Input />
            </Form.Item>
        </>
    )
}

export default NameItem

import { Form, Input } from 'antd'

const NipItem = ({validateTrigger}) => {
    return (
        <Form.Item
            name="nip"
            label="NIP"
            rules={[
                {
                    pattern: /^[\d]{10}$/,
                    message: 'The input is not valid NIP number.',
                },
                {
                    required: true,
                    message: 'Please input your NIP number.',
                }
            ]}
            validateTrigger={validateTrigger}
        >
            <Input/>
        </Form.Item>
    )
}

export default NipItem

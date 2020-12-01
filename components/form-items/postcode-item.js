import { Form, Input, Select } from 'antd'

const PostcodeItem = ({validateTrigger}) => {
    return (
        <Form.Item
            name="postcode"
            label="Postcode"
            rules={[
                {
                    pattern: /^\d{2}-\d{3,4}$/,
                    message: 'The input is not valid NIP number.',
                },
                {
                    required: true,
                    message: 'Please input post code.',
                }
            ]}
            validateTrigger={validateTrigger}
        >
            <Input/>
        </Form.Item>
    )
}

export default PostcodeItem

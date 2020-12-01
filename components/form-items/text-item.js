import { Form, Input, Select } from 'antd'

const TextItem = () => {
    return (
        <Form.Item
            name="info"
            label="Text Information"
        >
            <Input.TextArea
                placeholder="You could type here..."
                autoSize={{ minRows: 2}}
            />
        </Form.Item>
    )
}

export default TextItem

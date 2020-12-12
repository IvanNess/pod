import { Form, Input } from 'antd'

const TextItem = ({text="You could type here..."}) => {
    return (
        <Form.Item
            name="info"
            label="Text Information"
        >
            <Input.TextArea
                placeholder={text}
                autoSize={{ minRows: 2}}
            />
        </Form.Item>
    )
}

export default TextItem

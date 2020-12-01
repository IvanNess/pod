import { Form, Button } from 'antd'

const ButtonItem = ({title, layout, loading=false}) => {
    return (
        <Form.Item {...layout}>
            <Button type="primary" htmlType="submit" loading={loading}>
                {title}
            </Button>
        </Form.Item>
    )
}

export default ButtonItem

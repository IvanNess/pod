import { Form, Button } from 'antd'

const ButtonItem = ({title, layout ={}, loading=false, disabled=false}) => {
    return (
        <Form.Item {...layout}>
            <Button type="primary" htmlType="submit" loading={loading} disabled={disabled}>
                {title}
            </Button>
        </Form.Item>
    )
}

export default ButtonItem

import { Form, Input } from 'antd'

const PasswordItem = () => {
    return (
        <>
            <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please input your password!'}]}
                hasFeedback
            >
                <Input.Password  autoComplete="new-password"/>
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator: (rule, value) => {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>  
        </>
    )
}

export default PasswordItem

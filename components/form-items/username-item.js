import React from 'react'
import { Input, Form } from 'antd';
import { getUserByUsername } from '../../utils/graphql-utils';

const UsernameItem = ({validateTrigger}) => {
    return (
        <Form.Item
            name="username"
            label="Username"
            hasFeedback
            validateTrigger={validateTrigger}
            rules={[
                {
                    required: true,
                    message: 'This field should be filled',
                },
                {
                    async validator(rule, value) {
                        console.log('async validator')
                        try{
                            const user = await getUserByUsername(value)
                            console.log('username-item username', user && user.username)
                            if (!user) {
                                return Promise.resolve();
                            }
                            return Promise.reject(`The username ${user.username} is already in use`);
                        }catch(err){
                            console.log('async validator err', err)
                        }
                        
                    }
                }
            ]}
        >
            <Input />
        </Form.Item>
    )
}

export default UsernameItem

import InputItem from "../components/form-items/input-item"
import ButtonItem from "../components/form-items/button"
import { Form, Row, Col, Input } from "antd"
import { tailFormItemLayout, formItemLayout } from "../utils/layouts"
import Link from "next/link"
import { getUserByEmail } from "../utils/graphql-utils"
import { Auth } from "aws-amplify"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../redux/actions"


const Login = () => {

    const [form] = Form.useForm()    

    const router = useRouter()

    const dispatch = useDispatch()
    const {data: user, loading} = useSelector(state=>state.user)

    if(user){
        router.push(`/user/${user.username}`)
    }

    if(loading && user===null || user) 
    return (<div className="title-wrapper">
        <p>Loading...</p>
    </div>)

    const onFinish=async ({email, password})=>{
        dispatch(login(email, password))
    }

    return (
        <div>

            <span className="title-wrapper"><h2>Login Page</h2></span>
            
            <Form
                {...formItemLayout}
                form={form}
                name="login"
                onFinish={onFinish}
                scrollToFirstError
                autoComplete="off"
            >

                <InputItem name="email" label="Email" message="There is no empty field allowed."/>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please input your password!'}]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>

                <ButtonItem title="Login" layout={tailFormItemLayout} loading={loading && user===false}/>

            </Form>

            <Row>
                <Col span={4} offset={14}>
                    <span className="text-align-end">
                        <Link href="/create-client"><a>Sign up as client</a></Link>
                        <Link href="/create-service"><a>Sign up as service</a></Link>
                        <Link href="/reset"><a>Forgot a password</a></Link>
                    </span>
                </Col>
            </Row>  

        </div>
    )
}

export default Login
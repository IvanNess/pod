import { Form } from 'antd'
import { Auth } from 'aws-amplify'
import { formItemLayout, tailFormItemLayout } from '../utils/layouts';
import { createCategoryAndGet } from '../utils/graphql-utils';
import InputItem from '../components/form-items/input-item';
import ButtonItem from '../components/form-items/button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/actions';

const CreateCategory = () => {

// const dispatch = useDispatch()

// useEffect(()=>{
//     dispatch(fetchUser())
// }, [dispatch])

// const user = useSelector(state=>state.user)
// console.log('create category user', user)

const [form] = Form.useForm()

const onFinish = async values => {
    console.log('Received values of form: ', values)
    const { name, stringCode } = values
    try {
        const cur = await Auth.currentAuthenticatedUser()
        console.log(cur)
        
        const region = await createCategoryAndGet({name, stringCode})
        const regionId = region.id
        console.log(regionId)
    } catch (error) {
        console.log('region creation error:', error);
    }
}

return (
    <Form
        {...formItemLayout}
        form={form}
        name="create-categoty"
        onFinish={onFinish}
        scrollToFirstError
    >
        Create Category

        <InputItem name="name" label="Name" message="There is no empty field allowed."/>

        <InputItem name="stringCode" label="String Code" message="There is no empty field allowed."/>

        <ButtonItem layout={tailFormItemLayout} title={`Create Category`}/>

    </Form>
);
}

export default CreateCategory
import { Form } from 'antd'
import { Auth } from 'aws-amplify'
import { formItemLayout, tailFormItemLayout } from '../utils/layouts';
import { createRegionAndGet } from '../utils/graphql-utils';
import InputItem from '../components/form-items/input-item';
import ButtonItem from '../components/form-items/button';

const CreateRegion = () => {

const [form] = Form.useForm()

const onFinish = async values => {
    console.log('Received values of form: ', values)
    const { name, stringCode } = values
    try {
        const cur = await Auth.currentAuthenticatedUser()
        console.log(cur)
        
        const regionData = await createRegionAndGet({name, stringCode})
        const adressId = regionData.id
        console.log(adressId)
    } catch (error) {
        console.log('region creation error:', error);
    }
}

return (
    <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
    >

        <InputItem name="name" label="Name" message="There is no empty field allowed."/>

        <InputItem name="stringCode" label="String Code" message="There is no empty field allowed."/>

        <ButtonItem layout={tailFormItemLayout} title={`Create Region`}/>

    </Form>
);
}

export default CreateRegion
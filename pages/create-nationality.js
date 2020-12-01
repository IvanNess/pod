import { Form } from 'antd'
import { Auth } from 'aws-amplify'
import { formItemLayout, tailFormItemLayout } from '../utils/layouts';
import { createNationalityAndGet } from '../utils/graphql-utils';
import InputItem from '../components/form-items/input-item';
import ButtonItem from '../components/form-items/button';
import SelectItem from '../components/form-items/select-item';

const CreateCity = () => {

const [form] = Form.useForm()

const onFinish = async values => {
    console.log('Received values of form: ', values)
    const { name, stringCode, isMain } = values
    try {
        const cur = await Auth.currentAuthenticatedUser()
        console.log(cur)
        
        const data = await createNationalityAndGet({name, stringCode, isMain: isMain==="main"})
        const id = data.id
        console.log(id)
    } catch (error) {
        console.log('creation error:', error);
    }
}

const types = [
    { id: "main", name: "Main" },
    { id: "common", name: "Common" }
]

return (
    <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
    >

        <InputItem name="name" label="Name"/>

        <InputItem name="stringCode" label="String Code"/>

        <SelectItem name="isMain" label="Is main?" items={types}/>

        <ButtonItem layout={tailFormItemLayout} title={`Create Nationality`}/>

    </Form>
)}

export default CreateCity
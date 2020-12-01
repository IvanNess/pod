import { Form } from 'antd'
import { Auth } from 'aws-amplify'
import { formItemLayout, tailFormItemLayout } from '../utils/layouts';
import { getRegions, createCityAndGet } from '../utils/graphql-utils';
import InputItem from '../components/form-items/input-item';
import ButtonItem from '../components/form-items/button';
import SelectItem from '../components/form-items/select-item';
import { useEffect, useState } from 'react';

const CreateCity = () => {

const [form] = Form.useForm()

const [regions, setRegions] = useState([])

const fetchAndSet = async()=>{
    const regions = await getRegions()
    console.log(regions)
    setRegions(regions)
}

useEffect(()=>{ fetchAndSet() }, [])

const onFinish = async values => {
    console.log('Received values of form: ', values)
    const { name, stringCode, regionId } = values
    try {
        const cur = await Auth.currentAuthenticatedUser()
        console.log(cur)
        
        const data = await createCityAndGet({name, stringCode, regionId})
        const id = data.id
        console.log(id)
    } catch (error) {
        console.log('creation error:', error);
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

        <SelectItem name="regionId" label="Region" items={regions}/>

        <ButtonItem layout={tailFormItemLayout} title={`Create City`}/>

    </Form>
)}

export default CreateCity
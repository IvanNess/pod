import { Form } from 'antd'
import { Auth } from 'aws-amplify'
import { formItemLayout, tailFormItemLayout } from '../utils/layouts';
import { getCategories, createSubcategoryAndGet } from '../utils/graphql-utils';
import InputItem from '../components/form-items/input-item';
import ButtonItem from '../components/form-items/button';
import SelectItem from '../components/form-items/select-item';
import { useEffect, useState } from 'react';

const CreateSubCategory = () => {

const [form] = Form.useForm()

const [categories, setCategories] = useState([])

const fetchAndSet = async()=>{
    const categories = await getCategories()
    console.log(categories)
    setCategories(categories)
}

useEffect(()=>{ fetchAndSet() }, [])

const onFinish = async values => {
    console.log('Received values of form: ', values)
    const { name, stringCode, categoryId } = values
    try {
        const cur = await Auth.currentAuthenticatedUser()
        console.log(cur)
        
        const data = await createSubcategoryAndGet({name, stringCode, categoryId})
        const id = data.id
        console.log(id)
    } catch (error) {
        console.log('creation error:', error);
    }
}

return (
    <>
        <h2>Create Subcategory</h2>
        <Form
            {...formItemLayout}
            form={form}
            name="create-category"
            onFinish={onFinish}
            scrollToFirstError
        >

            <InputItem name="name" label="Name" message="There is no empty field allowed."/>

            <InputItem name="stringCode" label="String Code" message="There is no empty field allowed."/>

            <SelectItem name="categoryId" label="Category" items={categories}/>

            <ButtonItem layout={tailFormItemLayout} title={`Create Subcategory`}/>

        </Form>
    </>
    
)}

export default CreateSubCategory
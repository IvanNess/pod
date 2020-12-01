import { Form } from 'antd'
import { useState, useRef } from 'react';
import { API, Auth } from 'aws-amplify'
import { createUser } from '../src/graphql/mutations';
import PasswordItem from './form-items/password-item';
import ButtonItem from './form-items/button';
import EmailItem from './form-items/email-item';
import PhoneItem from './form-items/phone-item';
import TextItem from './form-items/text-item';
import NameItem from './form-items/name-item';
import InputItem from './form-items/input-item';
import NipItem from './form-items/nip-item';
import { formItemLayout, tailFormItemLayout } from '../utils/layouts';
import NationalityItem from './form-items/nationality-item';
import BusinessItem from './form-items/business-item';
import { createAdressAndGetId, signupUserAndGet } from '../utils/graphql-utils';
import AdressItem from './form-items/adress-item';

const CreateUser = ({isClient}) => {

const [form] = Form.useForm();

const onFinish = async values => {
    console.log('Received values of form: ', values)
    setValidateTrigger("onChange")
    const { username, password, email, phone_number, 
        wojewodstwoId: regionId, miastoId: cityId, nip=null, companyName=null, 
        firstName = null, lastName = null, isOrganization, postcode, street, nationalityId 
    } = values
    try {
        await signupUserAndGet({username, password, email, phone_number})
        await Auth.signIn(username, password)        
        const adressId = await createAdressAndGetId({regionId, cityId, postcode, street})
        const userData = await API.graphql({
            query: createUser, 
            variables: {input: {login: username, email, adressId, NIP: nip, companyName, 
                firstName, isOrganization: isOrganization==='company', 
                lastName, mobile: phone_number, username, nationalityId, isClient, isService: !isClient}},
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        console.log(userData)
    } catch (error) {
        console.log('error signing up:', error);
    }
}

const formRef = useRef(null)

const onFinishFailed = values => {
    setValidateTrigger("onChange")
}

const [validateTrigger, setValidateTrigger] = useState("onSubmit")

const [isOrganization, setIsOrganization] = useState(null)

const businessChanged = (value)=>{setIsOrganization(value==='company')}

return (
    <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
            phone_number: '+',
        }}
        scrollToFirstError
        ref={formRef}
        autoComplete="off"
    >

        <BusinessItem onChange={businessChanged}/>

        <EmailItem/>

        <PasswordItem/>

        <PhoneItem validateTrigger={validateTrigger}/>

        {isOrganization && <NipItem validateTrigger={validateTrigger}/>}

        {isOrganization && <InputItem name="companyName" label="Company Name" message= 'Please input your company name.'/>}

        <InputItem name="username" label="Username" message = 'Please input your username.'/>

        <AdressItem formRef={formRef} validateTrigger={validateTrigger}/>

        <NationalityItem name="nationalityId" label="Nationality" message= 'Please input nationality.'/>

        {!isOrganization && isOrganization !== null && <NameItem/>}

        <TextItem/>

        <ButtonItem title="Register" layout={tailFormItemLayout}/>
    </Form>
)}

export default CreateUser
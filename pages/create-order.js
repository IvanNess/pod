import { useEffect, useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import { getUserByUsername, createOrderAndGetId, updateOrderBySubcategoriesAndGet } from '../utils/graphql-utils'
import AdressItem from '../components/form-items/adress-item'
import { Form } from 'antd'
import { formItemLayout, tailFormItemLayout } from '../utils/layouts';
import CategorySubcategoryItem from '../components/form-items/category-subcategory-item'
import InputItem from '../components/form-items/input-item'
import ButtonItem from '../components/form-items/button'
import { useRouter } from 'next/router'

const CreateOrder = ({user, loading}) => {

    const [form] = Form.useForm()
    const formRef = useRef(null)

    const init = (user)=>{
        formRef.current.setFieldsValue({ 
            miastoId: user.adress.cityId,
            wojewodstwoId: user.adress.regionId,
            street: user.adress.street,
            postcode: user.adress.postcode
        })
    }

    const router = useRouter()

    useEffect(()=>{
        console.log('create order use effect', user)

        if(user){
            init(user)
        }
        
    }, [user])

    if(!user && !loading){
        console.log('no user in create order')
        router.push(`/login`)
        console.log('/login not working')
    }

    if(user && !user.isClient){
        router.push(`/user/${user.username}`)
    }

    if(loading || !user)
    return (<div className="title-wrapper">
        <p>Loading...</p>
    </div>)


    const onFinish = async values =>{
        console.log('Received values of form: ', values)
        setValidateTrigger("onChange")
        const { images=[], categoryId, subcategoryIds, miastoId: cityId, title, description } = values
        try {      
            const orderId = await createOrderAndGetId({
                customerId: user.id, serviceId: user.id, isServiced: false, 
                categoryId, adressId: user.adressId, cityId, images, title, description
            })
            console.log('orderid', orderId)
            const order = await updateOrderBySubcategoriesAndGet({orderId, subcategoryIds})
            console.log(order)
        } catch (error) {
            console.log(error);
        }
    } 

    const onFinishFailed = values => {
        setValidateTrigger("onChange")
    }
    
    const [validateTrigger, setValidateTrigger] = useState("onSubmit")   
    
    return (
        <div className="create-order">

            <span className="title-wrapper"><h2>Create Order</h2></span>

            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                scrollToFirstError
                ref={formRef}
                autoComplete="off"
            >
                <CategorySubcategoryItem formRef={formRef}/>

                <InputItem name="title" label="Title" message="There is no empty field allowed."/>

                <InputItem name="description" label="Description" required={false} message="There is no empty field allowed."/>

                <AdressItem formRef={formRef} validateTrigger={validateTrigger}/>

                <ButtonItem title="Create Order" layout={tailFormItemLayout}/>

            </Form>

        </div>
    )
}

export default CreateOrder

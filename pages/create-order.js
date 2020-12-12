import { useEffect, useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import { getCityByCityAndRegionName, createOrderAndGetId, updateOrderBySubcategoriesAndGet,
    getOrderStringCode
} from '../utils/graphql-utils'
import AdressItem from '../components/form-items/adress-item'
import { Form } from 'antd'
import { formItemLayout, tailFormItemLayout } from '../utils/layouts';
import CategorySubcategoryItem from '../components/form-items/category-subcategory-item'
import InputItem from '../components/form-items/input-item'
import ButtonItem from '../components/form-items/button'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { finishLoading } from '../redux/actions'

const CreateOrder = () => {

    const dispatch = useDispatch()
    const {data: user, loading, error} = useSelector(state=>state.user)

    useEffect(()=>{
        dispatch(finishLoading())
    }, [dispatch])

    useEffect(()=>{
        if(user)
            initForm(user)
    }, [user])

    const [form] = Form.useForm()
    const formRef = useRef(null)

    const initForm = (user)=>{
        formRef.current.setFieldsValue({ 
            miasto: user.adress.city.name,
            wojewodstwo: user.adress.region.name,
            street: user.adress.street,
            postcode: user.adress.postcode
        })
    }

    const router = useRouter()

    useEffect(()=>{
        if(user===false){
            console.log('useeffect no user in create order')
            router.push(`/login`)
        }
        if(user && !user.isClient){
            console.log('user is not client', user.isClient)
            router.push(`/user/${user.username}`)
        }    
    }, [user])

    const onFinish = async values =>{
        console.log('Received values of form: ', values)
        setValidateTrigger("onChange")
        const { images=[], categoryId, subcategoryIds, miasto: cityName, title, description, wojewodstwo: regionName } = values
        try {      
            const city = await getCityByCityAndRegionName({cityName, regionName})
            const cityId = city.id
            console.log('create order city id', cityId)
            const orderStringCode = await getOrderStringCode(title)
            console.log('orderStringCode', orderStringCode)
            const orderId = await createOrderAndGetId({
                customerId: user.id, serviceId: user.id, isServiced: false, 
                categoryId, adressId: user.adressId, cityId, images, title, description,
                stringCode: orderStringCode
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
    
    return ( user &&
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

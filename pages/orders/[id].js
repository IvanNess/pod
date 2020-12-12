import useSWR from 'swr'
import {useRouter} from 'next/router'
import { getOrderById, getOrderByStringCode } from '../../utils/graphql-utils'
import ServiceOrderComponent from '../../components/service-order-component'
import CustomerOrderComponent from '../../components/customer-order-component'
import { useSelector } from 'react-redux'

const Order = () => {

    const {data: user, loading} = useSelector(state=>state.user)

    console.log('order user', user)

    const router = useRouter()

    const {data, error} = useSWR(`/api/orders/${router.query.id}`, ()=>getOrderByStringCode(router.query.id))

    if(!data)
        return <p>(Order) Loading...</p>

    const {
        id, images, city, title, category, subCategories, description, isServiced, service, offers, customerId
    } = data

    const isCustomer = user ? customerId === user.id: false
    const isService = user ? user.isService: false

    console.log('offers', offers)
    
    return (
        <div className='order'>
            <div className='title'>{title}</div>
            <div className='city'>{city.name}</div>
            <div className='category'>{category.name}</div>
            <div className='subs'>{subCategories.items.map(item=>{
                return( <div className='sub' key={item.subCategory.id}>{item.subCategory.name}</div> )
            })}</div>
            <div className='description'>{description}</div>

            {!isCustomer && isService && <ServiceOrderComponent order={data}/>}
            {isCustomer && <CustomerOrderComponent order={data}/>}
            <style jsx>{`
                .order{
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                }
            `}</style>
        </div>
    )
}

export default Order

import { useEffect, useState } from 'react'
import OrderOfferComponent from './order-offer-component'
import { useSelector } from 'react-redux'

const CustomerOrderComponent = ({order}) => {

    const {data: user, loading, error} = useSelector(state=>state.user)

    console.log('order user', user)
    console.log('order', order)

    const [offers, setOffers] = useState(null)

    useEffect(()=>{
        if(order && user ){
            setOffers(order.offers.items)
        }
    }, [user, order])
    
    return (
        <>

            {offers===null && <p>Offers are being loaded...</p>}
            {offers && offers.map(offer=>(
                <div key={offer.id} >
                    <OrderOfferComponent offer={offer}/>
                </div>
            ))}
        </>
    )
}

export default CustomerOrderComponent

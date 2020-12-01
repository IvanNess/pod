import { useEffect, useState } from 'react'
import OrderOfferComponent from './order-offer-component'

const CustomerOrderComponent = ({user, order}) => {

    console.log('order user', user)

    const [{offers, loading, err}, setOffers] = useState({
        offers: [], loading: true, err: null
    })

    useEffect(()=>{
        if(order && user ){
            setOffers({offers: order.offers, loading: false, err: null})
        }
    }, [user, order])
    
    return (
        <>

            {loading && <p>Offers are being loaded...</p>}
            {!loading && offers.map(offer=>(
                <div>
                    <OrderOfferComponent offer={offer}/>
                </div>
            ))}
        </>
    )
}

export default CustomerOrderComponent

import { createOfferAndGet, deleteOfferById } from '../utils/graphql-utils'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { getOfferFromOrderByUserId } from '../utils/calcs'

const ServiceOrderComponent = ({user, order}) => {

    console.log('order user', user)

    const [{offer, loading, err}, setOffer] = useState({
        offer: null, loading: false, err: null
    })

    useEffect(()=>{
        if(order && user && offer===null){
            const currentOffer = getOfferFromOrderByUserId(order.offers.items, user.id)
            setOffer({offer: currentOffer, loading: false, err: null})
        }
    }, [user, order, offer])

    const {id, images, city, title, category, subCategories, description, isServiced, service, offers} = order

    console.log('offers', offers)

    const createOffer = async()=>{
        setOffer({offer: undefined, loading: true, err: null})
        try{
            const offer = await createOfferAndGet({orderId: id, candidateId: user.id})
            setOffer({offer, loading: false, err: null})
        } catch(e){
            setOffer({offer: false, loading: false, err: e})
        }
    }

    const removeOffer = async()=>{
        setOffer({offer, loading: true, err: null})
        try {
            await deleteOfferById(offer.id)  
            setOffer({offer: undefined, loading: false, err: null})
        } catch (error) {
            setOffer({offer, loading: false, err: error})            
        }
        
    }
    
    return (
        <>
            {!offer && !loading && <Button className='btn' onClick={createOffer}>
                <p>Create Offer</p>
            </Button>}
            {!offer && loading && <p>When your offer is approved you'll be able to write messagess to the client.</p>}
            {offer && <p>When your offer is approved you'll be able to write messagess to the client.</p>}
            {offer && loading && <p>Your offer is being deleted...</p>}
            {offer && !loading && <a onClick={removeOffer}>Cancel Order</a>}
        </>
    )
}

export default ServiceOrderComponent

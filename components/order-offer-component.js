import React, {useState} from 'react'
import { updateOfferByIsApprovedAndGet } from '../utils/graphql-utils'

const OrderOfferComponent = ({offer: offerProps}) => {

    const [{offer, loading, err}, setOffer] = useState({
        offer: offerProps, loading: false, err: null
    })

    const allowDialogue =async ()=>{
        setOffer({offer: {...offer, isApproved: true}, loading: true, err: null})
        try {
            await updateOfferByIsApprovedAndGet({offerId: offer.id, isApproved: true})
            setOffer({offer, loading: false, err: null})
        } catch (error) {
            setOffer({offer: {...offer, isApproved: false}, loading: false, err: error})
        }
    }

    const disableDialogue = async()=>{
        setOffer({offer: {...offer, isApproved: false}, loading: true, err: null})
        try {
            await updateOfferByIsApprovedAndGet({offerId: offer.id, isApproved: false})
            setOffer({offer, loading: false, err: null})
        } catch (error) {
            setOffer({offer: {...offer, isApproved: true}, loading: false, err: error})
        }
    }

    return (
        <div>
            <p>{offer.candidate.username}</p>
            {!offer.isApproved && <button onClick={allowDialogue}>Allow dialogue</button>}
            {offer.isApproved && <button>Open dialogue</button>}
            {offer.isApproved && <a onClick={disableDialogue}>Disable dialogue</a>}
        </div>
    )
}

export default OrderOfferComponent

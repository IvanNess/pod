import React, {useState, useEffect} from 'react'
import { createDialogAndGet, updateOfferAndGet, getDialogById } from '../utils/graphql-utils'
import { getDialog } from '../src/graphql/queries'
import Dialog from './dialog'
import { useSelector } from 'react-redux'

const OrderOfferComponent = ({offer: offerProps}) => {

    const [{offer, dialog, loading, err}, setOffer] = useState({
        offer: offerProps, dialog: null, loading: false, err: null
    })

    const user = useSelector(state=> state.user.data)

    const useEffectgetDialog = async()=>{
        console.log('useEffectgetDialog')
        const dialog = await getDialogById(offer.dialogId)
        console.log('use effect get dialog', dialog)
        setOffer({offer, loading, err, dialog})
    }

    useEffect(()=>{
        console.log('order-offer-component use effect', offer, dialog, offer.isApproved, dialog===null)
        if(offer.isApproved && dialog===null){
            useEffectgetDialog()
        }
    }, [])

    const allowDialogue =async ()=>{
        let updDialog = dialog
        if(offer.dialogId===null){
            try {
                updDialog = await createDialogAndGet({orderId: offer.orderId, offerId: offer.id, clientId: offer.order.customerId, 
                    candidateId: offer.candidateId, isAllowed: true, 
                    candidateUsername: offer.candidate.username, 
                    clientUsername: offer.order.customer.username, orderStingCode: offer.order.stringCode, 
                    orderTitle: offer.order.title
                }) 
            } catch (error) {
                setOffer({offer, dialog, loading: false, err: error})   
                console.log('Error', error)    
                return
            }
        }
        try {
            const updOffer = await updateOfferAndGet({offerId: offer.id, isApproved: true, dialogId: updDialog.id})
            setOffer({offer: updOffer, dialog: updDialog, loading: false, err: null})            
        } catch (error) {
            setOffer({offer, dialog, loading: false, err: error})   
            console.log('Error', error)              
        }
    }

    const disableDialogue = async()=>{
        setOffer({offer: {...offer, isApproved: false}, loading: true, err: null, dialog})
        try {
            await updateOfferByIsApprovedAndGet({offerId: offer.id, isApproved: false})
            setOffer({offer, loading: false, err: null, dialog})
        } catch (error) {
            setOffer({offer: {...offer, isApproved: true}, loading: false, err: error, dialog})
        }
    }

    return (
        <div>
            <p>{offer.candidate.username}</p>
            {!offer.isApproved && <button onClick={allowDialogue}>Allow dialogue</button>}
            {offer.isApproved && dialog && <Dialog {...dialog} user={user}/>}
            {offer.isApproved && <a onClick={disableDialogue}>Disable dialogue</a>}
        </div>
    )
}

export default OrderOfferComponent

import { createOfferAndGet, deleteOfferById, getDialogById } from '../utils/graphql-utils'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { getOfferFromOrderByUserId } from '../utils/calcs'
import { useSelector } from 'react-redux'
import Dialog from './dialog'

const ServiceOrderComponent = ({ order }) => {

    const {data: user} = useSelector(state=>state.user)
    console.log('order user', user)

    const [{offer, loading, err}, setOffer] = useState({
        offer: null, loading: false, err: null
    })

    const [{dialog, dialogLoading, dialogError}, setDialog] = useState({dialog: null, dialogLoading: false, dialogError: null})

    const getDialog = async(id)=>{
        setDialog({dialog: null, dialogLoading: true, dialogError: null})
        try {
            const dialog = await getDialogById(id)
            setDialog({dialog, dialogLoading: false, dialogError: null})
        } catch (error) {
            setDialog({dialog: false, dialogLoading: false, dialogError: error})            
        }
        
    }

    useEffect(()=>{
        if(order && user && offer===null){
            const currentOffer = getOfferFromOrderByUserId(order.offers.items, user.id)
            setOffer({offer: currentOffer, loading: false, err: null})
            if(currentOffer.dialogId){
                getDialog(currentOffer.dialogId)
            }
        }
    }, [user, order, offer])

    const {id, images, city, title, category, subCategories, description, isServiced, service, offers} = order

    console.log('offer', offer)

    const createOffer = async()=>{
        setOffer({offer: undefined, loading: true, err: null})
        try{
            const offer = await createOfferAndGet({orderId: id, candidateId: user.id})
            console.log('offer', offer)
            setOffer({offer, loading: false, err: null})
        } catch(e){
            console.log('ERROR',e)
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
            {offer && !offer.isApproved && <p>When your offer is approved you'll be able to write messagess to the client.</p>}
            {offer && offer.isApproved && dialogLoading && <p>(Dialog) loading...</p>}            
            {offer && offer.isApproved && dialog && <Dialog {...dialog} user={user}/>}            
            {offer && loading && <p>Your offer is being deleted...</p>}
            {offer && !loading && <a onClick={removeOffer}>Cancel Offer</a>}
        </>
    )
}

export default ServiceOrderComponent

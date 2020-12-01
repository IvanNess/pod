export const getOfferFromOrderByUserId = (offers, userId)=>{
    return offers.find(offer=>offer.candidateId===userId)
}
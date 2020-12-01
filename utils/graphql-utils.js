import { API, Auth, graphqlOperation } from 'aws-amplify'

import { listRegions, listNationalitys, listCitys, listCategorys, listUsers, listSubCategorys, getOrder, listOrders, } from "../src/graphql/queries"
import {createRegion, createCity, createNationality, createAdress, createCategory, createSubCategory, createOrder, createOrderSubCategory, createOffer, deleteOffer} from '../src/graphql/mutations'

export const getCitiesByRegionId = async regionId => {
    let res
    if(regionId===null){
        res = await API.graphql({
            query: listCitys, 
            //authMode: "AMAZON_COGNITO_USER_POOLS"
        })
    }else{
        res = await API.graphql({
            query: listCitys, 
            variables: { filter: {regionId: {eq: regionId}}},
            //authMode: "AMAZON_COGNITO_USER_POOLS"
        })
    }
    return res.data.listCitys.items
}

export const getSubcategoriesByCategoryId = async categoryId => {
    let res
    if(!categoryId){
        res = await API.graphql({
            query: listSubCategorys, 
        })
    }else{
        res = await API.graphql({
            query: listSubCategorys, 
            variables: { filter: {categoryId: {eq: categoryId}}},
        })
    }
    return res.data.listSubCategorys.items
}

export const getRegionByStringCode = async stringCode => await API.graphql({
    query: listRegions, 
    variables: { filter: {stringCode: {eq: stringCode}}},
    //authMode: "AMAZON_COGNITO_USER_POOLS"
})

export const getUserByUsername = async username => {
    const res = await API.graphql({
        query: listUsers, 
        variables: { filter: {username: {eq: username}}},
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listUsers.items[0]
}

export const getUserByEmail = async email => {
    console.log('email', email)
    const res = await API.graphql({
        query: listUsers, 
        variables: { filter: {email: {eq: email}}},
    })
    return res.data.listUsers.items[0]
}


export const getRegionIdByStringCode = async (stringCode) =>{
    const regionData = await getRegionByStringCode(stringCode)
    return regionData.data.listRegions.items[0].id
}

export const getCategories = async () => {
    const res = await API.graphql({
        query: listCategorys, 
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listCategorys.items
}

export const getRegions = async () => {
    const res = await API.graphql({
        query: listRegions, 
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listRegions.items
}

export const getNationalities = async () => {
    const res = await API.graphql({
        query: listNationalitys, 
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listNationalitys.items
}

export const getOrderById = async orderId =>{
    const res = await API.graphql({
        query: getOrder,
        variables: {id: orderId},
    })
    return res.data.getOrder
} 

export const getOrders = async () =>{
    const res = await API.graphql({
        query: listOrders
    })
    return res.data.listOrders.items
} 

export const updateOrderBySubcategoriesAndGet = async ({orderId, subcategoryIds})=>{
    for (const subCategoryId of subcategoryIds) {
        const res = await API.graphql({
            query: createOrderSubCategory,
            variables: {input: {orderId, subCategoryId}},
            auth: "AMAZON_COGNITO_USER_POOLS"
        })
    }
    return await getOrderById(orderId)
}

export const updateOfferByIsApprovedAndGet = async ({offerId, isApproved})=>{
    const res = await API.graphql({
        query: updateOffer,
        variables: {input: {id: offerId, isApproved}},
        auth: "AMAZON_COGNITO_USER_POOLS"
    })
    return await res.data.updateOffer
}

export const createSubcategoryAndGet = async ({name, stringCode, categoryId})=>{
    const res = await API.graphql(graphqlOperation(createSubCategory, {input: {name, stringCode, categoryId}}))
    return res.data.createSubCategory
}

export const createCategoryAndGet = async ({name, stringCode})=>{
    const res = await API.graphql(graphqlOperation(createCategory, {input: {name, stringCode}}))
    return res.data.createCategory
}

export const createRegionAndGet = async ({name, stringCode})=>{
    const res = await API.graphql(graphqlOperation(createRegion, {input: {name, stringCode}}))
    return res.data.createRegion
}

export const createCityAndGet = async ({name, stringCode, regionId})=>{
    const res = await API.graphql(graphqlOperation(createCity, {input: {name, stringCode, regionId}}))
    return res.data.createCity
}

export const createNationalityAndGet = async ({name, stringCode, isMain})=>{
    const res = await API.graphql(graphqlOperation(createNationality, {input: {name, stringCode, isMain}}))
    return res.data.createNationality
}

export const createOfferAndGet = async ({orderId, candidateId})=>{
    const res = await API.graphql({
        query: createOffer,
        variables: {input: {orderId, candidateId, isApproved: false}},
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.createOffer
}

export const createOrderAndGet = async ({
    images=[], customerId, serviceId, categoryId, adressId, cityId, title, description, isServiced
})=>{
    const res = await API.graphql({
        query: createOrder,
        variables: {input: {images, customerId, serviceId, categoryId, adressId, cityId, title, description, isServiced}},
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.createOrder
}

export const createOrderAndGetId = async ({
    images=[], customerId, serviceId, categoryId, adressId, cityId, title, description, isServiced
})=>{
    const order = await createOrderAndGet({
        images, customerId, serviceId, categoryId, adressId, cityId, title, description, isServiced
    })
    return order.id
}

export const createAdressAndGet = async ({regionId, cityId, postcode, street})=>{
    const res = await API.graphql({
        query: createAdress,
        variables: {input: {regionId, cityId, postcode, street}},
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.createAdress
}

export const createAdressAndGetId = async ({regionId, cityId, postcode, street})=>{
    const adress = await createAdressAndGet({regionId, cityId, postcode, street})
    return adress.id
}

export const signupUserAndGet = async ({username, password, email, phone_number})=>{
    const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
            email,          
            phone_number
        }
    })
    return user
}

export const deleteOfferById= async (id)=>{
    const res = await API.graphql({
        query: deleteOffer,
        variables: {input: {id}},
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.deleteOffer
}

import { API, Auth, graphqlOperation } from 'aws-amplify'

import { listRegions, listNationalitys, listCitys, listCategorys, listUsers, listSubCategorys, getOrder, listOrders, listDialogs, } from "../src/graphql/queries"
import {createRegion, createCity, createNationality, createAdress, createCategory, createSubCategory, createOrder, createOrderSubCategory, createOffer, deleteOffer, createDialog, updateOffer, createMessage} from '../src/graphql/mutations'

export const getCitiesByRegionId = async regionId => {
    let res
    if(regionId===undefined){
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

export const getCityByCityAndRegionName = async ({cityName, regionName}) => {
    console.log('getCityByCityAndRegionName', cityName, regionName)
    const res = await API.graphql({
        query: listCitys, 
        variables: { filter: {name: {eq: cityName}, regionName: {eq: regionName}}},
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    console.log('getCityIdByCityAndRegionName res', res)
    return res.data.listCitys.items[0]
}

export const getCitiesByRegionName = async regionName => {
    console.log('getCitiesByRegionName regionName', regionName)
    let res
    if(regionName===null){
        res = await API.graphql({
            query: listCitys, 
            //authMode: "AMAZON_COGNITO_USER_POOLS"
        })
    }else{
        res = await API.graphql({
            query: listCitys, 
            variables: { filter: {regionName: {eq: regionName}}},
            //authMode: "AMAZON_COGNITO_USER_POOLS"
        })
    }
    return res.data.listCitys.items
}

export const getSubcategoriesByCategoryId = async categoryId => {
    let res
    console.log('getSubcategoriesByCategoryId categoryId', categoryId)
    try {
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
    } catch (error) {
        console.log('ERROR', error)
    }
    console.log('getSubcategoriesByCategoryId res', res)
    return res.data.listSubCategorys.items
}

export const getRegionByName = async name => {
    const res = await API.graphql({
        query: listRegions, 
        variables: { filter: {name: {eq: name}}},
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listRegions.items[0]
}

export const getCityByName = async name => {
    const res = await API.graphql({
        query: listCitys, 
        variables: { filter: {name: {eq: name}}},
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listCitys.items[0]
}

export const getRegionById = async id => {
    const res = await API.graphql({
        query: listRegions, 
        variables: { filter: {id: {eq: id}}},
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listRegions.items[0]
}

export const getDialog = async ({orderStingCode, candidateUsername}) => {
    const res = await API.graphql({
        query: listDialogs, 
        variables: { filter: {isAllowed: {eq: true}, orderStingCode: {eq: orderStingCode}, 
            candidateUsername: {eq: candidateUsername}
        }},
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listDialogs.items[0]
}

export const getDialogById = async (id) => {
    const res = await API.graphql({
            query: listDialogs, 
            variables: { filter: {id: {eq: id}}},
        //authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.listDialogs.items[0]
}

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
    console.log('getuserbyemail', res)
    return res.data.listUsers.items[0]
}


export const getRegionIdByStringCode = async (stringCode) =>{
    const region = await getRegionByStringCode(stringCode)
    return region.id
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

export const getOrderByStringCode = async stringCode =>{
    const res = await API.graphql({
        query: listOrders,
        variables: {filter: {stringCode: {eq: stringCode}}},
    })
    return res.data.listOrders.items[0]
} 

export const getOrders = async () =>{
    const res = await API.graphql({
        query: listOrders
    })
    return res.data.listOrders.items
} 

export const getOrdersBySomeIds = async (ids) =>{
    if(!ids)
        return getOrders()
    let filterVariables = {}
    for (const key in ids) {
        if (object.hasOwnProperty(key)) {
            filterVariables = {...filterVariables, key: {eq: object[key]}}
        }
    }
    const res = await API.graphql({
        query: listOrders,
        variables: {filter: filterVariables}
    })
    return res.data.listOrders.items
} 

export const getOrderStringCode = async orderTitle =>{
    const initStringCode = orderTitle.replace(' ', '')

    async function checkStringCodeAndGetNewOne(stringCode){
        console.log('stringcode', stringCode)

        async function getOrders(stringCode){
            const res = await API.graphql({
                query: listOrders,
                variables: {filter: {stringCode: {contains: stringCode}}},
            })
            return res.data.listOrders.items
        }

        const orders = await getOrders(stringCode)
        console.log('orders', orders)
        if(orders.length === 0){
            console.log('length ===0', stringCode)
            return stringCode
        } else{
            return await checkStringCodeAndGetNewOne(stringCode + '_' + orders.length)
        }
    }

    return await checkStringCodeAndGetNewOne(initStringCode)
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

export const updateOfferAndGet = async ({offerId, isApproved, dialogId})=>{
    console.log('updateOfferByIsApprovedAndGet start', offerId)
    const res = await API.graphql({
        query: updateOffer,
        variables: {input: {id: offerId, isApproved, dialogId}},
        auth: "AMAZON_COGNITO_USER_POOLS"
    })
    console.log('updateOfferByIsApprovedAndGet', res)
    return await res.data.updateOffer
}

export const createDialogAndGet = async ({orderId, offerId, clientId, candidateId, isAllowed, candidateUsername, 
    clientUsername, orderStingCode, orderTitle})=>{
    console.log('createDialogAndGet start')
    const res = await API.graphql({query: createDialog, 
        variables: {input: {
            orderId, offerId, clientId, candidateId, isAllowed, candidateUsername, clientUsername, orderStingCode, 
            orderTitle
        }},
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    console.log('createDialogAndGet', createDialogAndGet)
    return res.data.createDialog
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
    const region = await getRegionById(regionId)
    const res = await API.graphql(graphqlOperation(createCity, {input: {name, stringCode, regionId, regionName: region.name}}))
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

export const createMessageAndGet = async ({creatorId, dialogId, isNew, message, date})=>{
    const res = await API.graphql({
        query: createMessage,
        variables: {input: {creatorId, dialogId, isNew, message, date}},
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.createMessage
}

export const createOrderAndGet = async ({
    images=[], customerId, serviceId, categoryId, adressId, cityId, title, description, isServiced, stringCode
})=>{
    const res = await API.graphql({
        query: createOrder,
        variables: {input: {images, customerId, serviceId, categoryId, adressId, cityId, title, description, isServiced, stringCode}},
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    return res.data.createOrder
}

export const createOrderAndGetId = async ({
    images=[], customerId, serviceId, categoryId, adressId, cityId, title, description, isServiced, stringCode
})=>{
    const order = await createOrderAndGet({
        images, customerId, serviceId, categoryId, adressId, cityId, title, description, isServiced, stringCode
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

export const createAdressAndGetId = async ({regionName, cityName, postcode, street})=>{
    const region = await getRegionByName(regionName)
    console.log(region)
    const city = await getCityByName(cityName)
    console.log(city)
    const adress = await createAdressAndGet({regionId: region.id, cityId: city.id, postcode, street})
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

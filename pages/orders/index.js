import {Select} from 'antd'
import { useState, useEffect } from 'react'
import OrderRows from '../../components/order-rows'
import { getOrders, getOrdersBySomeIds, getCategories, getSubCategories, getRegions, getCitiesByRegionName, getSubcategoriesByCategoryId, getCitiesByRegionId } from '../../utils/graphql-utils'
import { useDispatch, useSelector } from 'react-redux'
import { finishLoading, ordersRecieved } from '../../redux/actions'
import useSWR from 'swr'

function getObjectIdByName(list, name){
    const item = list.find(item=>item.name===name)
    return item ? item.id : null
}

let filterProps = [
    {
        prop: 'init',
        function: async({prevFiltered, prop, value, allChoices})=>{
            let list
            switch(prop){
                case 'category': list = categories; break
                case 'city': list = cities; break
            }
            if(list){
                const id = getObjectIdByName(list, value)
                return await getOrdersBySomeIds({[`${prop}Id`]: id})
            } else{
                const orders = await getOrdersBySomeIds() 
                switch(prop){
                    case 'region': 
                        return filterByOne(orders, 'region', value)
                    case 'sub': 
                        return filterOrdersBySubCategoryNames(orders, allChoices.sub)
                }
            }

        },
        filtered: [],
        fullSelectionList: [],
        selectionList: [],
        selectionListCreator: ()=>{}
    },
    {
        prop: 'category',
        function: ({prevFiltered, value, allChoices})=>{
            console.log('filterprops category function', prevFiltered, value, allChoices)
            return filterListByPropName(prevFiltered, 'category', allChoices.category)
        },
        filtered: [],
        fullSelectionList: [],
        selectionList: [],
        selectionListCreator: ({filtered, prop, allChoices})=>{
            console.log('filterprops category selectionlistcreator', filtered, prop, allChoices)
            return filterProps[1].selectionList
        }
    },
    {
        prop: 'sub',
        function: ({prevFiltered, value, allChoices})=>{
            return filterOrdersBySubCategoryNames(prevFiltered, allChoices.sub)
        },
        filtered: [],
        selectionList: [],
        fullSelectionList: [],
        selectionListCreator: async ({filtered, prop, allChoices})=>{
            const categoryId = getObjectIdByName(filterProps[1].fullSelectionList, allChoices.category)
            const sub = await getSubcategoriesByCategoryId(categoryId)//possible static
            console.log('sub selection list creator', filterProps[1].fullSelectionList, categoryId, sub)
            return sub
        }
    },
    {
        prop: 'region',
        function: ({prevFiltered, value, allChoices})=>{
            console.log('region function', prevFiltered, value, allChoices)
            return filterListByRegionName(prevFiltered, allChoices.region)
        },        
        filtered: [],
        fullSelectionList: [],
        selectionList: [],
        selectionListCreator: ({filtered, prop, allChoices})=>filterProps[3].selectionList
    },
    {
        prop: 'city',
        function: ({prevFiltered, value, allChoices})=>{
            return filterListByPropName(prevFiltered, 'city', allChoices.city)
        },
        filtered: [],
        fullSelectionList: [],
        selectionList: [],
        selectionListCreator: async({filtered, prop, allChoices})=>{
            const regionId = getObjectIdByName(filterProps[3].fullSelectionList, allChoices.region)
            const cities = await getCitiesByRegionId(regionId)//possible static
            console.log('city selection list creator', filterProps[3].fullSelectionList, regionId, cities)
            return getUniqValues(cities, "name")
        }
    },
]

const fillFilterProps = async(filterProps, filtered)=>{
    for (let index = 0; index < filterProps.length; index++) {
        filterProps[index].filtered = filtered  
    }
    const categories = await getCategories()
    filterProps[1].selectionList = categories
    filterProps[1].fullSelectionList = categories
    const subs = await getSubcategoriesByCategoryId()
    filterProps[2].selectionList = subs
    filterProps[2].fullSelectionList = subs
    const regions = await getRegions()
    filterProps[3].selectionList = regions
    filterProps[3].fullSelectionList = regions
    const cities = await getCitiesByRegionId()
    filterProps[4].selectionList = cities
    filterProps[4].fullSelectionList = cities
    return filterProps
}

const MAX_ITEMS_QUANTITY = 100

const filterItems = async({prop, value, allChoices, filterProps, })=>{
    console.log('filterItems', prop, value, allChoices, filterProps)
    const propIdx = filterProps.findIndex(filterProp=>filterProp.prop===prop)
    console.log('filterItems propIdx', propIdx)
    for (let idx = propIdx; idx < filterProps.length; idx++){
        console.log('filterItems for idx', idx)
        const prevFiltered = idx!==0? filterProps[idx-1].filtered: filterProps[0].filtered
        console.log('filterItems prevfiltered', prevFiltered)
        let filtered = filterProps[idx].filtered
        console.log('filterItems filtered', filtered)
        if(prevFiltered.length >= MAX_ITEMS_QUANTITY){
            filtered = await filterProps[0].function({prevFiltered, prop, value, allChoices})
            console.log('FILTER_AWAIT')
        }else{
            filtered = filterProps[idx].function({prevFiltered, value, allChoices})
        }
        console.log('filtered', filtered)
        filterProps[idx].filtered = filtered
        console.log('filterItems filterProps[idx]', filterProps[idx])
        filterProps[idx].selectionList = await filterProps[idx].selectionListCreator({filtered, prop, allChoices})
    }
    console.log('FILTER_END')
    return filterProps
}

function getUniqValues(list, key){
    return list.reduce((res, item)=>{

        if(res.includes(item[key]))
            return res
        return [...res, item[key]]
    }, [])
}

const getSelectOptionList = (list) => {
    return list.map((item)=>{
        return <Select.Option key={item.id} value={item.name}>{item.name}</Select.Option>
})}

const filterOption = (input, option) =>{
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

function filterByOne(list, key, value){
    console.log('filterByOne', list, key, value)
    if(!value){
        return list
    }
    return list.filter(item=>item[key]===value)
}

function filterListByPropName(list, prop, value){
    if(value==='')
        return list
    console.log('filterListByPropName', list, prop, value)
    return list.filter(item=>item[prop].name===value)
}

function filterListByRegionName(list, value){
    console.log('filterListByRegionName', list, value)
    if(value === '')
        return list
    return list.filter(item=>{
        console.log('filterListByRegionName item value isEqual', item, value, item.city.region.name===value)
        return item.city.region.name===value
    })
}

function filterOrdersBySubCategoryNames(list, names){
    console.log('filterOrdersBySubCategoryNames', list, names)
    if(names.length===0)
        return list
    return list.filter(item=>{
        console.log('filterOrdersBySubCategoryNames item', item)
        const subCategories = item.subCategories.items
        const filteredSubCategories = subCategories.filter(subCategory =>{
            console.log('filterOrdersBySubCategoryNames names subCategory', names, subCategory)
            return names.includes(subCategory.subCategory.name)
        })
        if(filteredSubCategories.length > 0)
            return true
        return false
    })
}

const getFilteredOrders = (list, choices)=>{
    let filteredOrders = list
    for (const key in choices) {
        if (choices.hasOwnProperty(key)) {
            if(choices[key]!=='' && choices[key].length !== 0)
                filteredOrders = filterByChoice(filteredOrders, key, choices[key])
        }
    }
    return filteredOrders
}

const Orders = ({orders}) => {

    //console.log('orders', orders)
    // const {data: categories, error: categoriesError} = useSWR(`/categories`, async()=>{return await getCategories()})
    // const {data: subCategories, error: subCategoriesError} = useSWR(`/subcategories`, async()=>{ return await getSubcategoriesByCategoryId()})
    // const {data: regions, error: regionError} = useSWR(`/regions`, async()=>{return await getRegions()})
    // const {data: cities, error: citiesError} = useSWR(`/cities`, async()=>{return await getCitiesByRegionName()})

    const [filtered, setFiltered] = useState(orders)

    const [choices, setChoices] = useState({
        category: '',
        sub: [],
        region: '',
        city: ''
    })

    const [categories, setCategories] = useState([])
    const [subs, setSubs] = useState([])
    const [regions, setRegions] = useState([])
    const [cities, setCities] = useState([])


    const dispatch = useDispatch()

    async function init(){
        console.log('init', filterProps, filtered)
        const updFilterProps = await fillFilterProps(filterProps, filtered)
        console.log('init updFilterProps', updFilterProps)
        setCategories(updFilterProps[1].selectionList)
        setSubs(updFilterProps[2].selectionList)
        setRegions(updFilterProps[3].selectionList)
        setCities(updFilterProps[4].selectionList)
    }

    useEffect(()=>{
        init()
    }, [])

    useEffect(()=>{
        console.log('use effect choices', choices)
        // const filteredOrders = getFilteredOrders(orders, choices)
        // setFiltered(filteredOrders)
    }, [choices])

    useEffect(()=>{
        dispatch(finishLoading())
    }, [dispatch])

    const [subValues, setSubValues] = useState([])

    // const categories = getUniqValues(orders, 'category')
    // const subs = choices.category !== ''? getUniqValues(filterByOne(orders, 'category', choices.category), 'sub'): []
    // const cities = getUniqValues(orders, 'city')

    return (

        <div className='orders'>
            <div className='head'>
                <div className='title'><p>Title</p></div>

                <Select showSearch={true} placeholder="Category" filterOption={filterOption} 
                    onChange={async (value)=>{
                        console.log('category on change value', value)
                        const updChoices = {...choices, category: value, sub: []}
                        setChoices(updChoices)
                        setSubValues([])
                        const updFilterProps = await filterItems({prop: 'category', value, allChoices: updChoices, filterProps})
                        console.log('updFilterProps', updFilterProps)
                        setCategories(updFilterProps[1].selectionList)
                        setSubs(updFilterProps[2].selectionList)
                        setFiltered(updFilterProps[updFilterProps.length-1].filtered)
                    }}
                >
                    {getSelectOptionList(categories)}
                </Select>

                <Select mode="multiple" placeholder="Sub" filterOption={filterOption} onChange={async(values)=>{
                        const updChoices = {...choices, sub: values}
                        setChoices(choices=>({...choices, sub: values}))
                        setSubValues(values)
                        const updFilterProps = await filterItems({prop: 'sub', value: values, allChoices: updChoices, filterProps})
                        console.log('updFilterProps', updFilterProps)
                        setFiltered(updFilterProps[updFilterProps.length-1].filtered)
                    }} 
                    disabled={choices.category===''}
                    value = {subValues}
                >
                    {getSelectOptionList(subs)}
                </Select>  

                <Select showSearch={true} placeholder="Region" filterOption={filterOption} onChange={async (value)=>{
                    const updChoices = {...choices, region: value}
                    setChoices(updChoices)
                    const updFilterProps = await filterItems({prop: 'region', value, allChoices: updChoices, filterProps})
                    console.log('updFilterProps', updFilterProps)
                    setFiltered(updFilterProps[updFilterProps.length-1].filtered)
                }}>
                    {getSelectOptionList(regions)}
                </Select> 

                <Select showSearch={true} placeholder="City" filterOption={filterOption} onChange={async(value)=>{
                    const updChoices = {...choices, city: value}
                    setChoices(updChoices)
                    const updFilterProps = await filterItems({prop: 'city', value, allChoices: updChoices, filterProps})
                    console.log('updFilterProps', updFilterProps)
                    //setSubs(updFilterProps[4].selectionList)
                    setFiltered(updFilterProps[updFilterProps.length-1].filtered)
                }}>
                    {getSelectOptionList(cities)}
                </Select> 

            </div>

            <OrderRows orders={filtered}/>

            <style jsx>{`
                .orders{
                    display: flex;
                    flex-direction: column;
                }
                .head{
                    display: flex;
                    flex-direction: row;
                }
                .title{
                    padding: 0 1rem;
                    text-align: end;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                p{
                    margin: 0
                }
            `}</style>

            <style jsx global>{`
                .ant-select, .title{
                    width: 10rem;
                }
            `}</style>
        </div>

    )
}

export async function getStaticProps(context) {

    const orders = await getOrders()
 
    return {
      props: {orders}
    }
}

export default Orders

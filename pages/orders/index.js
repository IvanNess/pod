import {Select} from 'antd'
import { useState, useEffect } from 'react'
import OrderRows from '../../components/order-rows'
import { getOrders } from '../../utils/graphql-utils'


const getUniqValues = (list, key) =>{
    return list.reduce((res, item)=>{
        if(res.includes(item[key]))
            return res
        return [...res, item[key]]
    }, [])
}

const getSelectOptionList = (list) => list.map((item, idx)=><Select.Option key={idx}>{item}</Select.Option>)

const filterOption = (input, option) =>{
    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const filterByOne = (list, key, value) =>{
    return list.filter(item=>item[key]===value)
}

const filterByMany = (list, key, values) =>{
    return list.filter(item=>values.includes(item[key]))
}

const filterByChoice = (list, key, value) =>{
    switch(key){
        case 'category':
        case 'city':
            return filterByOne(list, key, value)
        case 'sub':
            return filterByMany(list, key, value)
        default:
            return list
    }
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

    const [filtered, setFiltered] = useState(orders)

    const [choices, setChoices] = useState({
        category: '',
        sub: [],
        city: ''
    })

    useEffect(()=>{
        const filteredOrders = getFilteredOrders(orders, choices)
        setFiltered(filteredOrders)
    }, [choices])


    const categories = getUniqValues(orders, 'category')
    const subs = choices.category !== ''? getUniqValues(filterByOne(orders, 'category', choices.category), 'sub'): []
    const [subValues, setSubValues] = useState([])

    const cities = getUniqValues(orders, 'city')

    return (

        <div className='orders'>
            <div className='head'>
                <div className='title'><p>Title</p></div>

                {/* <Select showSearch={true} placeholder="Category" filterOption={filterOption} onChange={(value)=>{
                        setChoices(choices=>({...choices, category: categories[value], sub: []}))
                        setSubValues([])
                    }}
                >
                    {getSelectOptionList(categories)}
                </Select>

                <Select mode="multiple" placeholder="Sub" filterOption={filterOption} onChange={(values)=>{
                        setChoices(choices=>({...choices, sub: values.map(idx=>subs[idx])}))
                        setSubValues(values)
                    }} 
                    disabled={choices.category===''}
                    value = {subValues}
                >
                    {getSelectOptionList(subs)}
                </Select>  

                <Select showSearch={true} placeholder="City" filterOption={filterOption}onChange={(value)=>{
                    setChoices(choices=>({...choices, city: cities[value]}))
                }}>
                    {getSelectOptionList(cities)}
                </Select>  */}

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

    // return {
    //     props: {
    //         orders: []
    //     }
    // }
}

export default Orders

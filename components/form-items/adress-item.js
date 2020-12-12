import CityItem from './city-item';
import RegionItem from './region-item';
import { useState } from 'react';
import InputItem from './input-item';
import PostcodeItem from './postcode-item';

const AdressItem = ({formRef, validateTrigger}) => {

    const [regionName, setRegionName] = useState(null)

    const regionChanged = async (regionName)=>{
        console.log('region changed')
        setRegionName(regionName)
        formRef.current.setFieldsValue({ miasto: null })
    }
    
    const cityChanged = (regionName)=>{
        console.log('city changed')
        formRef.current.setFieldsValue({ wojewodstwo: regionName })
    }

    return (
        <>
            <RegionItem onChange={regionChanged}/>

            <CityItem regionName={regionName} onChangeCb={cityChanged}/>

            <InputItem name="street" label="Street, House, Flat number" message= 'Please input street, house and flat number.'/>

            <PostcodeItem validateTrigger={validateTrigger}/>

        </>
    )
}

export default AdressItem

import CityItem from './city-item';
import RegionItem from './region-item';
import { useState } from 'react';
import InputItem from './input-item';
import PostcodeItem from './postcode-item';

const AdressItem = ({formRef, validateTrigger}) => {

    const [regionId, setRegionId] = useState(null)

    const regionChanged = async (regionId)=>{
        console.log('region changed')
        setRegionId(regionId)
        formRef.current.setFieldsValue({ miastoId: null })
    }
    
    const cityChanged = (regionId)=>{
        console.log('city changed')
        formRef.current.setFieldsValue({ wojewodstwoId: regionId })
    }

    return (
        <>
            <RegionItem onChange={regionChanged}/>

            <CityItem regionId={regionId} onChangeCb={cityChanged}/>

            <InputItem name="street" label="Street, House, Flat number" message= 'Please input street, house and flat number.'/>

            <PostcodeItem validateTrigger={validateTrigger}/>

        </>
    )
}

export default AdressItem

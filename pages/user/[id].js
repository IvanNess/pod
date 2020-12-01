import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import UserInfoRow from '../../components/user-info-row'
import { useSelector } from 'react-redux'


const UserInfo = () => {

    const router = useRouter()

    const {data: user, loading, error} = useSelector(state=>state.user)

    if(loading || user===null)
        return( <div className="center"><p>loading...</p></div>)

    if(user===false){
        router.push(`/login`)
    }
    
    return ( 
        <div>
            <UserInfoRow name="info"/>
            <UserInfoRow name={user.username}/>
            <UserInfoRow name={user.email}/>
            <UserInfoRow name={user.mobile}/>
            {user.isOrganization && <UserInfoRow name={user.NIP}/>}
            {user.isOrganization && <UserInfoRow name={user.companyName}/>}
            {!user.isOrganization && <UserInfoRow name={`${user.firstName} ${user.lastName}`}/>}
            <UserInfoRow name={user.adress.region.name}/>
            <UserInfoRow name={user.adress.city.name}/>
            <UserInfoRow name={user.adress.street}/>
            <UserInfoRow name={user.adress.postcode}/>
            <UserInfoRow name="Edit Button"/>
            <UserInfoRow name="rating opinion order"/>
        </div>
    )
}

export default UserInfo

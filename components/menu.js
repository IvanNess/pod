import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, logout, startLoading } from '../redux/actions'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Menu = () => {

    const dispatch = useDispatch()

    const router = useRouter()

    useEffect(()=>{
        dispatch(fetchUser())
    }, [dispatch])

    const {data: user, loading, error} = useSelector(state=>state.user)

    console.log('menu user', user, loading, error)

    const onLogout = async()=>{
        dispatch(logout())
    }

    const click=(e)=>{
        if(router.asPath===e.target.getAttribute('href'))
            return
        dispatch(startLoading())
    }

    return (
        <div className="menu">
            <nav>
                <div>Logo</div>
                {!user && !loading && <Link href="/login"><a onClick={click}>Log in</a></Link>}
                {!user && !loading && <div>Sign up</div>}
                {user &&  <div onClick={onLogout}><a>Log out</a></div>}
                <div>Language</div>
                {user && <div>Profile</div>}
                {user && <div>Messages</div>}
                {user && user.isClient &&  <Link href="/create-order"><a onClick={click}>Add order</a></Link>}
                <Link href="/orders"><a onClick={click}>Orders</a></Link>
                {user && user.isClient && <div>My orders</div>}
                {user && <div>My credits</div>}
                {user && user.isService && <div>My offers</div>}
            </nav>
           {loading && <div>(Menu) Loading...</div>} 
        </div>
        
    )
}

export default Menu

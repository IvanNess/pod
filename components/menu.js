import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/actions'
import { useEffect } from 'react'

const Menu = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUser())
    }, [dispatch])

    const {data: user, loading, error} = useSelector(state=>state.user)
    console.log('menu user', user, loading, error)


    const logout = async()=>{
        console.log('logout start')
        setUser({user, loading: true, err: null})
        try {
            await Auth.signOut()
            setUser({user: null, loading: false, err: null})
            console.log('logout success')
        } catch (error) {
            setUser({user: false, loading: false, err})
            console.log('logout failure')
        }
    }

    return (
        <nav>
            <div>Logo</div>
            {!user && !loading && <Link href="/login"><a>Log in</a></Link>}
            {!user && !loading && <div>Sign up</div>}
            {user && !loading && <div onClick={logout}>Log out</div>}
            <div>Language</div>
            {user && !loading && <div>Profile</div>}
            {user && !loading && <div>Messages</div>}
            {user && user.isClient && !loading &&  <Link href="/create-order"><a>Add order</a></Link>}
            <Link href="/orders"><a>Orders</a></Link>
            {user && user.isClient && !loading && <div>My orders</div>}
            {user && !loading && <div>My credits</div>}
            {user && user.isService && !loading && <div>My offers</div>}
        </nav>
    )
}

export default Menu

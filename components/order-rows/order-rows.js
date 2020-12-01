import styles from './order-rows.module.css'
import Link from 'next/link'

const OrderRows = ({orders}) => {

    return (
        <div className={styles.orderRows}>
            {orders.map(order=>{
                return(
                    <div className={styles.orderRow} key={order.id}>
                        <div className={styles.title}><Link href={`/orders/${order.id}`}><a>{order.title}</a></Link></div>
                        <div className={styles.category}>{order.category.name}</div>
                        {/* <div className={styles.sub}>{order.sub}</div> */}
                        <div className={styles.city}>{order.city.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default OrderRows

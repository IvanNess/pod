import {orders} from './index'

export default (req, res) => {
    res.send(orders.filter(order=>order.id===req.query.id)[0])
}
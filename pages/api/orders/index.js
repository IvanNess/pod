let orders = [
    {
        id: '1',
        title: 'windows',
        category: 'worker',
        sub: '1',
        city: 'Gdansk',
        interest: 3
    },
    {
        id: '2',
        title: 'windows2',
        category: 'worker',
        sub: '2',
        city: 'Gdynia',
        interest: 4
    },
    {
        id: '3',
        title: 'programista',
        category: 'it',
        sub: 'js',
        city: 'Gdansk',
        interest: 3
    },
    {
        id: '4',
        title: 'frontend',
        category: 'it',
        sub: 'js',
        city: 'Gdansk',
        interest: 3
    },    
]

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export {orders}

export default (req, res) => {
    res.send(orders)
}
const express = require('express')
const app = express()
const router = express.Router()
const expressCors = require('express-cors')

router.get('/api/form', (req, res) => {
    res.status(200).json({
        code: 1,
        msg: 'success',
        entry: '你拿到数据啦~'
    })
})

app
    .use(expressCors({
        allowedOrigins: ['http://vd.bch.leju.com']
    }))
    .use(router)

app.listen(() => {
    console.log('server listen ......')
})
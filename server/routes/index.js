const Router = require('express')
const router = new Router()
const serviceInfoRouter = require('./serviceInfoRouter')
const userRouter = require('./userRouter')
const serviceRouter = require('./serviceRouter')


router.use('/user', userRouter)
router.use('/service', serviceRouter)
router.use('/serviceinfo', serviceInfoRouter)

module.exports = router

const Router = require('express')
const router = new Router()
const serviceInfoController = require('../controllers/serviceInfoController')

router.post('/', serviceInfoController.create)
router.get('/', serviceInfoController.getAll)
router.get('/:id', serviceInfoController.getOne)
router.put('/:id', serviceInfoController.updateOne)


module.exports = router

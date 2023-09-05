const {Service} = require('../models/models')
const ApiError = require('../error/ApiError');

class serviceController {
    async create(req, res) {
        const {name} = req.body
        const service = await Service.create({name})
        return res.json(service)
    }

    async getAll(req, res) {
        const service = await Service.findAll()
        return res.json(service)
    }

}

module.exports = new serviceController()

const uuid = require('uuid')
const path = require('path');
const {ServiceInfo, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError');


class serviceInfoController {
    async create(req, res, next) {
        try {
            let {
                name, 
                quiz, 
                description, 
                radioquestionone, 
                radioquestiontwo, 
                radioquestiononethree, 
                radioquestionfour, 
                imgonequestion,  
                imgtwoquestion, 
                imgthreequestion, 
                imgfourquestion
            } = req.body

            const {imgone} = req.files
            const {imgtwo} = req.files
            const {imgthree} = req.files
            const {imgfour} = req.files

            let fileNameone = uuid.v4() + ".jpg"
            let fileNametwo = uuid.v4() + ".jpg"
            let fileNamethree = uuid.v4() + ".jpg"
            let fileNamefour = uuid.v4() + ".jpg"

            imgone.mv(path.resolve(__dirname, '..', 'static', fileNameone))
            imgtwo.mv(path.resolve(__dirname, '..', 'static', fileNametwo))
            imgthree.mv(path.resolve(__dirname, '..', 'static', fileNamethree))
            imgfour.mv(path.resolve(__dirname, '..', 'static', fileNamefour))
            
            const device = await ServiceInfo.create({
                name, 
                quiz, 
                description, 
                radioquestionone, 
                radioquestiontwo, 
                radioquestiononethree, 
                radioquestionfour, 
                imgone: fileNameone, 
                imgtwo: fileNametwo, 
                imgthree: fileNamethree, 
                imgfour: fileNamefour, 
                imgonequestion,  
                imgtwoquestion, 
                imgthreequestion, 
                imgfourquestion
            });

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 6
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await ServiceInfo.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await ServiceInfo.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await ServiceInfo.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await ServiceInfo.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    
    /* async getAll(req, res) {
        const devices = await ServiceInfo.findAll()
        return res.json(devices)
    }*/
    
    async getOne(req, res) {
        const {id} = req.params
        const device = await ServiceInfo.findOne(
            {
                where: {id},
                
            },
        )
        return res.json(device)
    }

  /*  async updateOne(req, res) {
        let {
            name, 
            quiz, 
            description, 
            radioquestionone, 
            radioquestiontwo, 
            radioquestiononethree, 
            radioquestionfour, 
            imgonequestion,  
            imgtwoquestion, 
            imgthreequestion, 
            imgfourquestion
        } = req.body
        const { id } = req.params;
        console.log(id)
        const device = await ServiceInfo.update({
            where: {id},
            date: {
                name, 
                quiz, 
                description, 
                radioquestionone, 
                radioquestiontwo, 
                radioquestiononethree, 
                radioquestionfour, 
                imgone: fileNameone, 
                imgtwo: fileNametwo, 
                imgthree: fileNamethree, 
                imgfour: fileNamefour, 
                imgonequestion,  
                imgtwoquestion, 
                imgthreequestion, 
                imgfourquestion
            }
        });
        
        return res.json(device)
    }*/

    async updateOne(req, res, next) {
        try {
            let {
                name, 
                quiz, 
                description, 
                radioquestionone, 
                radioquestiontwo, 
                radioquestiononethree, 
                radioquestionfour,
                imgone, 
                imgtwo, 
                imgthree, 
                imgfour,  
                imgonequestion,  
                imgtwoquestion, 
                imgthreequestion, 
                imgfourquestion
            } = req.body

            const { id } = req.params;
            
            var selector = { 
                where: {
                    id
                }
            }

            const device = await ServiceInfo.update({
                name, 
                quiz, 
                description, 
                radioquestionone, 
                radioquestiontwo, 
                radioquestiononethree, 
                radioquestionfour, 
                imgone, 
                imgtwo, 
                imgthree, 
                imgfour, 
                imgonequestion,  
                imgtwoquestion, 
                imgthreequestion, 
                imgfourquestion
            }, selector);

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.updateOne({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    
}

module.exports = new serviceInfoController()

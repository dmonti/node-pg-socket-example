var AppService = require('../services/app.service')    

exports.getInfo = async function (req, res, next) {
    var application = AppService.application
    return res.status(200).json({ name: application.name, version: application.version, status: 'UP' })
}
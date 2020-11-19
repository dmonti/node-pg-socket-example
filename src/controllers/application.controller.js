const package = require("../../package")

exports.getInfo = async function (req, res, next) {
    return res.status(200).json({ name: package.name, version: package.version, status: 'UP' })
}
const db = require("../config/database")

exports.findById = async (req, res) => {
  const id = parseInt(req.params.id)
  const response = await db.query("select * from user_account where id = $1", [
    id,
  ])
  res.status(200).send(response.rows)
}

const Joi = require('joi')

const create = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [Joi.string(), Joi.number()]
}).with('username').without('password', 'access_token')

module.exports = {
  create
}

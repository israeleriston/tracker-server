const create = (req, reply) => {
  console.log('create user !')
}

const update = (req, reply) => {
  console.log('update user !')
}

const middlewares = Array.from(create, update)

const make = () => {
  const make = middlewares.reduce((acc, cur, last) => {
    return acc[middlewares]
  }, {})
  console.log('make', make)
  return make
}

module.exports = make

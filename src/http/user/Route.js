const get = {
  version: '1.0.1',
  name: 'same-url',
  path: '/url',
  method: 'get',
  handler: (req, reply) => {
    console.log('GET /url ')
  }
}

module.exports = get

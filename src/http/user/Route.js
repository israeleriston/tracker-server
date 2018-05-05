const get = {
  version: '1.0.1',
  name: 'same-url',
  path: '/url',
  method: 'GET',
  handler: (req, reply) => {
    console.log('GET /url ')
  }
}

export default get

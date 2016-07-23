module.exports = [
  {
    method: 'POST',
    path: '/images',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data'
      }
    },
    handler: require('./post.image.controller')
  },
  {
    method: 'GET',
    path: '/images/{userID}',
    handler: require('./get.image.controller')
  }
];

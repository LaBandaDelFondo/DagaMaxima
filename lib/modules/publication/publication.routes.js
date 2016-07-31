module.exports = [
  {
    method: 'POST',
    path: '/publication',
    handler: require('./post.publication.controller'),
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data'
      }
    }
  }/*,
  {
    method: 'GET',
    path: '/publication/{userID}',
    handler: require('./get.user.publication.controller')
  },
  {
    method: 'GET',
    path: '/publication',
    handler: require('./get.all.publication.controller')
  }*/

];

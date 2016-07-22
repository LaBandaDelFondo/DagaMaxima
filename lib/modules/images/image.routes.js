module.exports = [
  {
    method: 'POST',
    path: '/images/{userID}',
    config:{
      payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data'
        }      
    },
    handler: require('./post.image.controller')
  }

];

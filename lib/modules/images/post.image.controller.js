var Image = require('../../schemas/imageSchema');
var User = require('../../schemas/userSchema');
var fs = require('fs');

const IMAGES_PATH = './public/images/';
const ERR_MSG = 'Woops, something went wrong!';
const ERR_BANNER = '\n***********************************************\n'

module.exports = function (request, reply) {

  var userID = request.payload.userID;

  User.findOne({
    userID: userID
  }, function (err, user) {
    if (err) {
      throw err;
    }
    uploadImage(user, request, reply);
  });

}

var createFileInputStream = function (path) {
  var file = fs.createWriteStream(path);
  file.on('error', function (err) {
    console.error(err);
  });

  return file;
}

var uploadImage = function (user, request, reply) {
  if (user) {
    var data = request.payload;
    //TODO try/catch exceptions. Remove nested if-else statements
    if (data.image && data.image.hapi != null) {
      if (data.image.hapi.filename.endsWith('.jpg')) {    
        var image = new Image();
        var name = image._id + '.jpg';
        var path = IMAGES_PATH + name;
        image.path = path;
        image.name= name;
        var file = createFileInputStream(path);
        data.image.pipe(file);
        data.image.on('end', function (err) {
          try {
            user.images.push(image);
            user.save();
            image.save();
            reply('Successfully uploaded image');
          } catch (err) {
            reply(ERR_MSG);
            console.log(err);
          }
        })
      } else {
        reply(ERR_MSG);
        console.log(user._id + ' tried to upload a nonvalid format file.' + data.image.hapi.filename);
      }
    } else {
      reply(ERR_MSG);
      console.log(user._id + ' corrupted upload or not a file' + ERR_BANNER + request.payload.image + ERR_BANNER);
    }
  } else {
    reply('User does not exist!');
  }
}



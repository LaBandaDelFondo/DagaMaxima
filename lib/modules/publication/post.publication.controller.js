var Publication = require('../../schemas/publicationSchema');
var Image = require('../../schemas/imageSchema');
var User = require('../../schemas/userSchema');
var Boom = require('boom');
var fs = require('fs');

const IMAGES_PATH = './public/images/';

module.exports = function (request, reply) {
  var userID = request.payload.userID;

  User.findOne({
    userID: userID
  }, function (err, user) {
    if (err) {
      return reply(Boom.badRequest(err.message));
    }
    if(!user){
      return reply(Boom.notFound('User '+ userID + ' not found.'));
    }
    uploadPublication(user, request, function (err, success) {
      if (err) {
        console.log(err);
        return reply(Boom.notAcceptable(err.message));
      }
      reply('Correctly created').code(201);
    });
  });
}

var uploadPublication = function (user, request, callback) {
  uploadImage(request.payload, function (err, image) {
    if (err) {
      callback(err);
      return;
    }
    var publication = new Publication(request.payload);
    publication.author = user;
    publication.images.push(image);
    publication.save(function (err) {
                    if(err){
                      console.log('Error while saving publication on post' + err);
                    }
                });
    user.images.push(image);
    user.publications.push(publication);
    user.save(function (err) {
                    if(err){
                      console.log('Error while saving user on publication post' + err);
                    }
                });
    setTimeout(function () {
      callback(null, true);
    }, 500);
  });
}

var uploadImage = function (data, callback) {
  getImageInstance(data, function (err, image) {
    if (err) {
      callback(err);
      return;
    }
    image.name = image._id + '.jpg';
    image.path = IMAGES_PATH + image.name;

    var file = createFileInputStream(image.path);
    data.image.pipe(file);
    data.image.on('end', function (err) {
      image.save(function (err) {
                    if(err){
                      console.log('Error while saving image on publication post' + err);
                    }
                });
      setTimeout(function () {
        callback(null, image);
      }, 500);
    });
  });
}

var getImageInstance = function (data, callback) {
  if (!data.image) {
    callback(new Error('No image.'));
    return;
  }
  if (!data.image.hapi) {
    callback(new Error('Invalid format. That\'s not an image!'));
    return;
  }
  if (!data.image.hapi.filename.endsWith('.jpg')) {
    callback(new Error('Tried to upload image with nonvalid extension.'));
    return;
  }
  setTimeout(function () {
    callback(null, new Image());
  }, 500);
}

var createFileInputStream = function (path) {
  var file = fs.createWriteStream(path);
  file.on('error', function (err) {
    console.error(err);
  });

  return file;
}
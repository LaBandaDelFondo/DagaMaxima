var User = require('../../schemas/userSchema');
module.exports= function(request, reply){
    
    var user = new User(request.payload);

    User.findOne({facebookToken: user.facebookToken}, function(err, doc){
        if(err){
            throw err;
        }else if(doc){
            reply('Usuario Ya existe ' + doc.username);
        }else{
            user.save();
	        reply('Usuario creado ' + user.username);
        }
    });

	
}
//upload files to imgur given directory.
var imgur = require('imgur-upload'),
path = require('path');

function upload(image, callback) {

	//imgur.setClientID(myClientID);
	imgur.upload(path.resolve(image), function(err,res) {
		if(err) {
			callback(err);
		}
		else {
			console.log(res.data.link);
			callback(null, res.data.link);
		}
	});

});


module.exports = upload(image);

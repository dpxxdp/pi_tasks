imgur = require('imgur.js');
fs = require('fs');
path = require('path');
pi_server = require('pi_server.js');

var previous_uploads = [];

fs.watch(path.resolve('../cv/surv/logs', { persistent: true }, function (event, fileName) {
	if(event === 'change' && !(fileName in previous_uploads)){
		imgur.upload(path.resolve('../cv/surv/logs','filename'), function(err, data) {
			if(err) {
				console.log('Error uploading image: ' + fileName);
			}
			else {
				pi_server.post('/surv', data);
				previous_uploads.push(filename);
			}
		}
		console.log(fileName + "\n");
	}

});

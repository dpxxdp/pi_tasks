var http = require('http');

var pi_server_address = '';

function post(path, data, callback) {
	options = {
		'hostname':pi_server_address,
		'port':80,
		'method':'POST',
		'path':path,
	}
	
	var res_data = '';	

	var req = http.request(options, function(res) {
		console.log('STATUS' + res.statusCode);
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			res_data += chunk;	
		});	
	});

	req.on('error', function(err) {
		//console.log('ERROR: ' + err);
		callback(err);
	});

	req.write(link);
	
	req.end(function(){
		callback(null, res_data);
	});
}


module.exports = post(path, data);

var io = require('socket.io-client')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
      	var data = JSON.parse(xhr.responseText)
        callback(null, data);
      } else {
        callback(status, xhr.responseText);
      }
    };
    xhr.send();
};

function LocalizationKit(appuuid){
	this.appuuid = appuuid
	this.liveSocket = false
	this.languageData = null
	this.selectedLanguage = null
	this.prefix = "/v2"
	this.server = "https://www.localizationkit.com"
	this.loadLanguage = function(code, callback){
		var url = this.server+this.prefix+"/api/app/"+this.appuuid+"/language/"+code
		var self = this
		this.selectedLanguage = code
		getJSON(url,function(err, languageData) {
		  if (err !== null) {
		    console.log('Something went wrong: ' + err);
		  } else {
		  	self.languageData = languageData.data
		  	if(callback){ callback() }
		  }
		});
	}

	this.getValue = function(key){
		if(this.languageData && this.languageData[key]){
			return this.languageData[key]
		}
		return ""
	}

	this.startSocket = function(){
		var socket = io(this.server);
		socket.on('connect', function(){
			this.liveSocket = true
			console.log("Connected")
		});
		socket.on('event', function(data){
			console.log("event")
		});
		socket.on('disconnect', function(){
			console.log("disconnect")
		});
		socket.connect()
		this.socket = socket
	}
}

module.exports = LocalizationKit
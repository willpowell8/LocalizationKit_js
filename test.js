var LocalizationKit =  require('./index')

var l = new LocalizationKit("0c923cb1-541e-4692-a099-6ccf8b8c8285")
l.loadLanguage("en", function(){
	console.log("General Key:", l.getValue("com.general"))
})
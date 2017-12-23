# Localization Kit - Javascript

This is the initial version of KIT for Javascript. This currently supports localization delivery for your javascript or nodejs app.

### Features
- Easy to integrate javascript library
- Web hosted strings
- Web portal for realtime updates

#### Todo
- Live update
- Modify in page ui
- String auto detection


## Use by Installation

``` javascript
npm install --save localizationkit
```
Get a developer key from [localizationkit.com](https://www.localizationkit.com/app) where you can create a new app and generate a key.

Start the localization engine:
``` javascript
var LocalizationKit =  require('localizationkit')
Localization = new LocalizationKit("[[API_KEY]]")
```

## Use as script tag
If you want to include the localization as a script tag you dont need to call load a language as it detects the browser language.
``` html
<script src="//www.localizationkit.com/v2/app/[[API_KEY]]/localizationkit.js"></script>
```

## How to use

### Load language 
Not needed when you load as script unless you want to change language
``` javascript
Localization.loadLanguage("en", function(){
	console.log("English Language loaded")
})
```

### Get String
``` javascript
var localizedString = Localization.getValue("com.general")
```

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


## Installation

``` javascript
npm install --save localizationkit
```
Get a developer key from [localizationkit.com](https://www.localizationkit.com/app) where you can create a new app and generate a key.

Start the localization engine:
``` javascript
var LocalizationKit =  require('./index')
Localization = new LocalizationKit("[[API_KEY]]")
```

### Use as script tag

``` html
<script></script>
```

## How to use

### Load language


``` javascript
Localization.loadLanguage("en", function(){
	console.log("English Language loaded)
})
```

### Get String

``` javascript
var localizedString = Localization.getValue("com.general")
```

require("babel-register")
require("babel-polyfill")

global.document = require('jsdom').jsdom('<body><div></div></body>')
global.window = document.defaultView
global.navigator = window.navigator

 
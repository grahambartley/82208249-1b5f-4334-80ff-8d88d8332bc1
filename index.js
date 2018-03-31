// dependencies
let moment = require('moment');
let helper = require('./helper.js');

// get current date and time from momentJS
let currentDateAndTime = moment().toISOString();

// output
console.log(helper.getMessage(), currentDateAndTime);

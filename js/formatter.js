var simpleFormatter = require('non-escaping-simple-formatter');
var _ = require('underscore');
module.exports = simpleFormatter(
    'Expression', // The type of thing this formatter handles
    ['sampleName'], // The fields it formats
    function (val) {
        //val['report:uri']="http://google.com";
        //val['service:base']="http://google.com";
        return "TEST<br/>TEST";
    }
);

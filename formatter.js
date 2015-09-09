var simpleFormatter = require('im-tables/build/utils/simple-formatter');

module.exports = simpleFormatter(
    'Expression', // The type of thing this formatter handles
    ['fpkm'], // The fields it formats
    function (loc) {
        console.log("TEST");
        return "TEST";
    }
);

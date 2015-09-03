var imtables = require('intermine-tables');

var element = document.querySelector('#my-id');
var service = {root: 'http://www.flymine.org/query/service'};
var query = {
    select: ['*'],
    from: 'Gene',
    where: [['Gene', 'IN', 'MY-LIST']]
};

// Configure options here, using nested notation
imtables.configure({TableCell: {PreviewTrigger: 'click'}});
// Or using path names:
imtables.configure('TableResults.CacheFactor', 20);

// Then load the table (or indeed vice-versa, the table
// will respond to changes in the options)
imtables.loadTable(
    element, // Could also be a string or a jquery object
    {start: 0, size: 25}, // Can be null - all properties are optional.
    {service: service, query: query} // Can also be an imjs.Query object
).then(
    function handleTable (table) { /* ... Do something with the table. */ },
    function reportError (error) { console.error('Could not load table', error); }
);

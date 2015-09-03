var imtables = require('im-tables');



function runQuery() {
    var element = $('#my-id');
    var formval = $('#transcript_id').val();
    console.log(formval);
    var service = {root: 'http://www.bovinegenome.org/bovinemine/'};
    var query={
        "model":{
            "name":"genomic"
        },"select":[
            "Expression.fpkm",
            "Expression.normalizedCounts",
            "Expression.rawCounts",
            "Expression.sampleName",
            "Expression.sampleMetadata.tissue"
        ],
        "orderBy":[{"Expression.fpkm":"DESC"}],
        "where":[{"path":"Expression.isoform","op":"LOOKUP","code":"A","value":formval}]
    };
    // Configure options here, using nested notation
    imtables.configure({TableCell: {PreviewTrigger: 'click'}});
    // Or using path names:
    imtables.configure('TableResults.CacheFactor', 20);

    console.log(element);
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
}



$("form").submit(runQuery);


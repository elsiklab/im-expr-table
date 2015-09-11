var utils = require('./js/util');
var formatter = require('./js/formatter');

// check query params
var param=utils.getParameterByName('transcript_id');
if(param) {
    $('#transcript_id').val(param);
    runQuery(param);
}

function runQuery(transcript_id) {
    var element = $('#my-id');
    var service = {root: 'http://www.bovinegenome.org/bovinemine'};
    var query={
        "model":{
            "name":"genomic"
        },"select":[
            "Expression.sampleName",
            "Expression.fpkm",
            "Expression.normalizedCounts",
            "Expression.sampleMetadata.tissue"
        ],
        "orderBy":[{"Expression.fpkm":"DESC"}],
        "where":[{"path":"Expression.isoform","op":"LOOKUP","code":"A","value":transcript_id}]
    };
    // Configure options here, using nested notation
    imtables.configure({
        TableCell: {PreviewTrigger: 'click'},
        TableHeader: {FullPathPopoverEnabled: false}
        });
    // Or using path names:
    imtables.configure('TableResults.CacheFactor', 20);    
    imtables.formatting.registerFormatter(
        formatter,
        'genomic',
        'Expression',
        ['sampleName']
    );
    
    // Then load the table (or indeed vice-versa, the table
    // will respond to changes in the options)
    imtables.loadTable(
        element, // Could also be a string or a jquery object
        {start: 0, size: 25}, // Can be null - all properties are optional.
        {service: service, query: query} // Can also be an imjs.Query object
    ).then(
        function handleTable (table) {
            console.log('Table loaded', table);
            $("#message").html("Powered by <a href='http://bovinegenome.org/bovinemine/'>BovineMine</a>");
            },
        function reportError (error) { console.error('Could not load table', error); }
    );
}

$("form").submit(function() {
    var transcript_id = $('#transcript_id').val();
    runQuery(transcript_id);    
    return false;
});


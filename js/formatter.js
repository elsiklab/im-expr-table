var simpleFormatter = require('./non-escaping-simple-formatter');
var _ = require('underscore');
module.exports = simpleFormatter(
    'Expression', // The type of thing this formatter handles
    ['sampleName'], // The fields it formats
    function (val) {
        var s=val.sampleName;
        var tracks=s+","+s+"_XYPlot,"+s+"_Density"+","+s+"_cufflinks_chr_2015_09_02_transcripts"+","+s+"_tophat_chr_2015_09_02_junctions";
        return "<a href=http://bovinegenome.org:8080/Btau_4.6.1/jbrowse/?loc="+$("transcript_id").val()+"&tracks="+tracks+">JBrowse</a>";
    }
);

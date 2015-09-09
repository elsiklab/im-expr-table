var simpleFormatter = require('./non-escaping-simple-formatter');
var _ = require('underscore');
module.exports = simpleFormatter(
    'Expression', // The type of thing this formatter handles
    ['sampleName'], // The fields it formats
    function (val) {
        var s=val.sampleName;
        var tracks1=s+","+s+"_XYPlot,"+s+"_Density"+","+s+"_cufflinks_chr_2015_09_02_transcripts"+","+s+"_tophat_chr_2015_09_02_junctions";
        var tracks2=s+","+s+"_XYPlot,"+s+"_Density"+","+s+"_Cufflinks"+","+s+"_0_2013_12_11__junctions";
        var link1="<a target=\"_blank\" href=http://bovinegenome.org:8080/Btau_4.6.1/jbrowse/?loc="+$("#transcript_id").val()+"&tracks="+tracks1+">Btau_4.6.1</a>";
        var link2="<a target=\"_blank\" href=http://bovinegenome.org:8080/UMD3.1/jbrowse/?loc="+$("#transcript_id").val()+"&tracks="+tracks2+">UMD3.1</a>";
        return s+ " ["+link1+"] [" + link2 + "]";
    }
);

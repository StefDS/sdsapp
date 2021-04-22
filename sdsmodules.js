exports.getcounter = function (thisHostname) {
    var fs = require('fs');
    const data = fs.readFileSync('./data/app.json', 'utf8');
    // console.log("Hostname= ", thisHostname);
    //
    var JSONdata = JSON.parse(data);
    /// reading File
    var thisCounter = JSONdata.counter;
    // console.log("JSONcounter=", JSONdata.counter );
    // console.log("JSONhostname=", JSONdata.hostname );
    if (isNaN(thisCounter)) {
        console.log("** Problem reading data **");
        return 0;
    };
    thisCounter += 1;
    ///
    ///
    JSONdata.counter = thisCounter;
    JSONdata.hostname = thisHostname;
    // console.log(JSON.stringify(JSONdata, null, 4))
    //
    const thisWrite = '{"counter": ' + thisCounter + ', "hostname": "' + thisHostname + '"}';
    // const thisWrite = JSON.stringify({"counter": thisCounter, "hostname": thisHostname, "value": "test"}, null, 2);
    // var thisWrite = JSON.stringify(JSONdata, null, 4);
    console.log(thisWrite);
    //    fswrite.writeFilesync('./app.log', thiswrite); 
    fs.writeFile("./data/app.json", thisWrite, function (err) {
        if (err) {
            console.log(err);
            console.log("** Problem writing data **");
            return 0;
        }
    });
    return thisCounter;
};
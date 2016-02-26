/**
 * Created by ttnd on 26/2/16.
 */

var OpenData = require('../index');
var govApi = new OpenData("<your api key>");
var options = {
    limit: 90
};
govApi.go('COMPANY_MASTER_DATA_ANDHRA_PRADESH_2015', function (err, data) {
    if(err){
        console.log('Error --> ', err);
        return;
    }
    console.log('Data --> ', typeof data, data);
});
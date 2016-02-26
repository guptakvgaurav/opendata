/**
 * Created by ttnd on 26/2/16.
 */
var Config = require('./config');
var request = require('request');
var _  = require('lodash');

module.exports = function (apiKey) {
    if( (!apiKey) || (typeof apiKey != 'string')){ return Config.Errors.customError.INVALID_ARGUMENT; }
    var openDataApiKey = apiKey;
    var rejectNull = function (value, key){ return value ? true: false; };
    this.go = function (ApiName, options, callback) {
        if(arguments.length < 2) {
            return callback(Config.Errors.customError.INVALID_ARGUMENT);
        }else if(arguments.length == 2) {
            callback = options;
            options = {};
        }
        var apiConfig = Config.apiConfig[ApiName];
        if(!apiConfig){ return callback(Config.Errors.customError.INVALID_API); }
        apiConfig.params.qs = _.merge(apiConfig.params.qs, options);
        apiConfig.params.qs = _.pickBy(apiConfig.params.qs, rejectNull);
        apiConfig.params.qs['api-key'] = openDataApiKey;
        console.log(JSON.stringify(apiConfig.params, null, 4));
        request(apiConfig.params, function (err, response, body) {
            if((!err) && (response.statusCode == 200)){
                try{
                    if(typeof body == 'string'){
                        body = JSON.parse(body);
                    }
                    return callback(null, body);
                }catch(e){
                    return callback(Config.Errors.apiError.INVALID_RESPONSE);
                }
            }else{
                return callback(err || body, null);
            }
        });
    }
};
/**
 * Created by ttnd on 26/2/16.
 */
var _ = require('lodash');
var errorconfig = require('./error');
var apiConfig = require('./config');
module.exports = _.merge(apiConfig, errorconfig);
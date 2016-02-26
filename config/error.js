/**
 * Created by ttnd on 26/2/16.
 */

var Errors = {
    apiError: {
        INVALID_RESPONSE : {
            message : 'Response not parse-able',
            code: 'AE_001'
        }
    },
    customError: {
        INVALID_ARGUMENT : {
            message : 'Input argument is not valid',
            code: 'CE_001'
        },
        INVALID_API: {
            message : 'Invalid api',
            code: 'CE_002'
        }
    }
};

module.exports.Errors = Errors;

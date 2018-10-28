"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require('request-promise-any');
const ParamsVM_1 = require("./Models/ParamsVM");
class ApiCaller {
    DoGet(url) {
        return request({
            "method": "GET",
            "uri": url,
            "json": true
        });
    }
    GetParamsStringQuery(reqParams) {
        if (reqParams == null)
            return null;
        var listGetParams = new ParamsVM_1.ParamsVM.ListGetParam();
        Object.keys(reqParams)
            .forEach(function eachKey(key) {
            var getParam = { Key: key, Value: reqParams[key] };
            listGetParams.List.push(getParam);
        });
        return listGetParams.ToString();
    }
}
exports.default = ApiCaller;
//# sourceMappingURL=ApiCaller.js.map
var request = require('request-promise-any');
import { ParamsVM } from './Models/ParamsVM';

export default class ApiCaller {
    public DoGet<T>(url: string) : T {
        return request({
            "method": "GET",
            "uri": url,
            "json": true
        });
    }

    public GetParamsStringQuery(reqParams: any): string {
        if (reqParams == null)
            return null;

        var listGetParams = new ParamsVM.ListGetParam();

        Object.keys(reqParams)
            .forEach(function eachKey(key) {
                var getParam: ParamsVM.GetParam = { Key: key, Value: reqParams[key] };
                listGetParams.List.push(getParam);
            });        

        return listGetParams.ToString();
    }
}


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiCaller_1 = require("../../helpers/ApiCaller");
const _apiCaller = new ApiCaller_1.default();
class SwarFarmAPIService {
    constructor() {
        this.BaseUrl = "https://swarfarm.com/api/v2/monsters";
    }
    GetAllMonsters(params) {
        var queryString = '?' + _apiCaller.GetParamsStringQuery(params);
        return _apiCaller.DoGet(`${this.BaseUrl}/${queryString}`);
    }
    GetMonster(idMonster) {
        return _apiCaller.DoGet(`${this.BaseUrl}/${idMonster}`);
    }
    GetMonsterByElement(element, params) {
        var queryString = '&' + _apiCaller.GetParamsStringQuery(params);
        return _apiCaller.DoGet(`${this.BaseUrl}?element=${element}${queryString}`);
    }
}
exports.default = SwarFarmAPIService;
//# sourceMappingURL=SwarFarmAPIService.js.map
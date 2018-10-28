"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParamsVM;
(function (ParamsVM) {
    class GetParam {
    }
    ParamsVM.GetParam = GetParam;
    class ListGetParam {
        constructor() {
            this.List = [];
        }
        ToString() {
            var arrayString = this.List.map(o => o.Key + '=' + o.Value);
            return arrayString.join('&');
        }
    }
    ParamsVM.ListGetParam = ListGetParam;
})(ParamsVM = exports.ParamsVM || (exports.ParamsVM = {}));
//# sourceMappingURL=ParamsVM.js.map
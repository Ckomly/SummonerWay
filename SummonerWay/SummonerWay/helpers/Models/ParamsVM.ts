import { arrayExpression } from "babel-types";

export namespace ParamsVM {
    export class GetParam {
        Key: string;
        Value: string;
    }

    export class ListGetParam {
        List: Array<GetParam>;

        constructor() {
            this.List = [];
        }

        ToString(): string {
            var arrayString = this.List.map(o => o.Key + '=' + o.Value);

            return arrayString.join('&');
        }
    }
}

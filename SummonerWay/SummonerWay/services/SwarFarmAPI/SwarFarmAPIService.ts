import ApiCaller from '../../helpers/ApiCaller';
import { MonsterModels } from './Models/Monster';
const _apiCaller = new ApiCaller();

export default class SwarFarmAPIService {
    BaseUrl: string = "https://swarfarm.com/api/v2/monsters";    

    public GetAllMonsters(params:any) : Promise<MonsterModels.ListOfMonsters> {
        var queryString = '?' + _apiCaller.GetParamsStringQuery(params);

        return _apiCaller.DoGet(`${this.BaseUrl}/${queryString}`);
    }

    public GetMonster(idMonster: number): Promise<MonsterModels.Monster> {
        return _apiCaller.DoGet(`${this.BaseUrl}/${idMonster}`);
    }

    public GetMonsterByElement(element: string, params: any): Promise<MonsterModels.ListOfMonsters> {
        var queryString = '&' + _apiCaller.GetParamsStringQuery(params);

        return _apiCaller.DoGet(`${this.BaseUrl}?element=${element}${queryString}`);
    }
}
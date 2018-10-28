/*
 * GET SW monsters listing.
 */
import express = require('express');
import SwarFarmAPIService from '../../services/SwarFarmAPI/SwarFarmAPIService';

const router = express.Router();
const _swService = new SwarFarmAPIService();

router.get('/', (req: express.Request, res: express.Response) => {
    _swService.GetAllMonsters(req.query)
        .then((listOfMonsters) => {
            res.send(listOfMonsters);
        })
        .catch((err) => {
            console.log(err);
        });    
});

router.get('/element/:element', (req: express.Request, res: express.Response) => {
    _swService.GetMonsterByElement(req.params.element, req.query)
        .then((listOfMonsters) => {
            res.send(listOfMonsters);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/:id', (req: express.Request, res: express.Response) => {
    _swService.GetMonster(req.params.id)
        .then((monster) => {
            res.send(monster);
        })
        .catch((err) => {
            console.log(err);
        });  
});

export default router;

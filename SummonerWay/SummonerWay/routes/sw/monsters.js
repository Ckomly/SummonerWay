"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET SW monsters listing.
 */
const express = require("express");
const SwarFarmAPIService_1 = require("../../services/SwarFarmAPI/SwarFarmAPIService");
const router = express.Router();
const _swService = new SwarFarmAPIService_1.default();
router.get('/', (req, res) => {
    _swService.GetAllMonsters(req.query)
        .then((listOfMonsters) => {
        res.send(listOfMonsters);
    })
        .catch((err) => {
        console.log(err);
    });
});
router.get('/element/:element', (req, res) => {
    _swService.GetMonsterByElement(req.params.element, req.query)
        .then((listOfMonsters) => {
        res.send(listOfMonsters);
    })
        .catch((err) => {
        console.log(err);
    });
});
router.get('/:id', (req, res) => {
    _swService.GetMonster(req.params.id)
        .then((monster) => {
        res.send(monster);
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.default = router;
//# sourceMappingURL=monsters.js.map
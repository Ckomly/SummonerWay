"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const express = require("express");
const dbHandler_1 = require("../database/dbHandler");
const router = express.Router();
const _dbContext = new dbHandler_1.default();
router.get('/', (req, res) => {
    _dbContext.ExecQuery('SELECT * FROM user')
        .then((users) => {
        console.log('after promise resolve');
        console.log(users);
        res.send(users);
    })
        .catch((err) => {
        console.log('error : ', err);
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    var user = 'Clémentine';
    res.render('index', { title: 'TOTO', user: user });
});
exports.default = router;
//# sourceMappingURL=index.js.map
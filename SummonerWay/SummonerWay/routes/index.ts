/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    var user = 'Clémentine';
    res.render('index', { title: 'TOTO', user: user });
});

export default router;
/*
 * GET users listing.
 */
import express = require('express');
import DbContext from '../database/dbHandler';
const router = express.Router();
const _dbContext = new DbContext();

router.get('/', (req: express.Request, res: express.Response) => {
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

export default router;
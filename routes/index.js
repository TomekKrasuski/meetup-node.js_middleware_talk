const express = require('express');
const router = express.Router();

const routerMiddleware = (req, res, next) => {
  console.log('router middleware');
  next();
};

router.use('/', routerMiddleware);

router.get('/', (req, res) => {
  console.log('router get');
  res.sendStatus(200);
});

module.exports = router;

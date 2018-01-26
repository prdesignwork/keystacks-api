var express = require('express');
var router = express.Router();
var queries = require('./queries')


router.get('/stack/:userId', function(req,res,next) {
  queries.getStacks(req.params.userId)
  .then((allStacks) => {
    res.status(200).json(allStacks)
  })
  .catch(err =>{
    res.status(500).json(err)
  })
})

router.get('/keys/:stackId', function(req,res,next) {
  queries.getKeys(req.params.stackId)
  .then((allKeys) => {
    res.status(200).json(allKeys)
  })
  .catch(err =>{
    res.status(500).json(err)
  })
})

module.exports = router

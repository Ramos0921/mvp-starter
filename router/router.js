var express = require('express');
var router = express.Router();
var db = require('../database-mongo/index.js')

router.get('/scraps',(req,res)=>{
  db.selectAll((err,data)=>{
    if(err){
      res.send(err)
    }else{
      res.json(data);
    }
  })

})

router.post('/scraps',(req,res)=>{
  db.save(req.body,(err,data)=>{
    if(err){
      res.send(err);
    }else{
      res.json(data);
    }
  })
})

router.delete('/scraps/:id',(req,res)=>{
  var newArr =req.params.id.split('');
  newArr.shift()
  var searchId = newArr.join('');
  db.deleteOne(searchId,(err,data)=>{
    if(err){
      res.send(err)
    }else{
      res.json(data);
    }
  })

})
router.put('/scraps',(req,res)=>{
  db.updateOne(req.body,(err,data)=>{
    if(err){
      res.send(err)
    }else{
      console.log(data)
      res.json(data);
    }
  })
})

module.exports = router;
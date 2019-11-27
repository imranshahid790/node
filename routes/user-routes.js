var express = require('express')
var userService = require('../service/user-service')
const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.post('/', function (req, res) 
{
    console.log('Inside Controller Save Method')
    userService.save(req, res).then((err,data)=>
     {
        if(err) console.log(err)
        res.send(data)
    
        })
});
router.post('/signin', function (req, res) 
{
    console.log('Inside Controller login Method')
    userService.login(req, res).then((err,data)=>
     {
        if(err) console.log(err)
        
        res.send(data);

        })
});





module.exports = router
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.jsonp({name: "zhangcheng", age: 16});

    if (req.query.callback) {
        res.send(req.query.callback + "(\"Hello World\");");
        
    } else {
        res.send("error");
    }
});

module.exports = router;

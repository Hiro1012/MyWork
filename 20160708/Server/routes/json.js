var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.jsonp({name: "zhangcheng", age: 16});

    if (req.query.callback) {
        var obj = {name: "zhangcheng", age: 16};
        var jsonStr = JSON.stringify(obj);

        res.send(req.query.callback + "(" + jsonStr + ");");
    } else {
        res.send("error");
    }
});

module.exports = router;

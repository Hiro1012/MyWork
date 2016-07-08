var express = require('express');
var router = express.Router();

var users = [
    {name: "zhangbingzhi", password: "123"},
    {name: "zhangna", password: "456"},
    {name: "zhangcheng", password: "789"},
    {name: "niushi", password: "890"}
];

/* GET users listing. */
router.post('/', function (req, res, next) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.name == req.body.name) {
            if (user.password == req.body.pass) {
                res.send("登陆成功");
            } else {
                res.send("密码错误");
            }
            return;
        }
    }
    res.send('账户不存在');
});

module.exports = router;

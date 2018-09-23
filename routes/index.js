var express = require('express');
var router = express.Router();
var path = require("path");
var media=path.join(__dirname,"../public/media");//__dirname表示当前文件夹,两个_

/* GET home page. */
router.get('/', function(req, res, next) {
  var fs=require("fs");//文件系统
  fs.readdir(media,function(err,names){
    if(err)
    {
      console.log(err);
    }
    else
    {
        res.render('index', { title: 'Passionate Music',music:names });//names赋给ejs里的music变量
    }
  });

});

module.exports = router;

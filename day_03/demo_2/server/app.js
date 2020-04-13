
//加载Express模块
const express = require('express');

//加载CORS模块
const cors = require('cors');

//加载MySQL模块并且进行配置
const mysql = require('mysql');

//创建MySQL连接池
const pool = mysql.createPool({
    //MySQL数据库服务器的地址
    host: '127.0.0.1',
    //MySQL数据库服务器端口号
    port: 3306,
    //数据库用户的用户名
    user: 'root',
    //数据库用户的密码
    password: '',
    //数据库名称
    database: 'zhihu',
    //数据库编码方式
    charset: 'utf8',
    //最大连接数
    connectionLimit:15
});

//创建Express应用
const server = express();

//使用CORS模块
server.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080','http://196.168.1.3:8080']
}));

//articles的GET路由
server.get('/articles', (req, res) => {

    //获取URL地址中名称为type的参数
    var type = req.query.type;
    console.log(type);
    //查找 zhihu_articles(文章表)的特定记录
    //SQL中不确定的信息使用占位符(?)表示
    var sql = 'SELECT zhihu_articles.id,subject,description,image  FROM zhihu_articles,zhihu_category WHERE category_id = zhihu_category.id AND category_info=?';

    //执行SQL查找操作
    pool.query(sql, [type],(err, results) => {
        //如果发生错误,则直接抛出错误
        if (err) throw err;
        res.send({ message: '查询成功', code: 1, results: results });

    });
});

//监听端口
server.listen(4000);

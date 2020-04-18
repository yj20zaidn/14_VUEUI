//加载Express模块
const express = require('express');

//加载CORS模块
const cors = require('cors');

//加载MySQL模块并且进行配置
const mysql = require('mysql');

//加载body-parser模块
const bodyParser = require('body-parser');

//加载MD5模块
const md5 = require('md5');

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
    connectionLimit: 15
});

//创建Express应用
const server = express();

//使用CORS模块
server.use(cors({
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://196.168.1.3:8080']
}));

//使用body-parser模块

server.use(bodyParser.urlencoded({
    extended:false
}));

//categories的GET路由
server.get('/categories', (req, res) => {
    var sql = 'select id,category_name,category_info from zhihu_category';
    pool.query(sql, (err, results) => {
        if (err) throw err;

        res.send({
            message: '查询成功',
            code: 1,
            results: results
        });
    });
});

//register的POST方式路由

server.post('/register', (req, res) => {

    //1.获取用户输入的用户名及密码
    var username = req.body.username;
    var password = md5(req.body.password);

    //2.以输入的用户名为条件进行查找，如果用户名不存在，则插入记录;否则提示错误信息
    var sql = 'SELECT COUNT(id) AS count FROM zhihu_users WHERE username=?';
    pool.query(sql, [username], (err, results) => {
        if (err) throw err;
        //获取指定用户名的数量，值只为0(代表用户不存在)或1(代表用户已存在)
        var count = results[0].count; 
        if (count == 1) {
            //错误信息
            res.send({ message: '用户注册失败', code: 0 });
        } else {
            //3.将获取到的用户名和密码等信息写入数据表
            var sql = 'INSERT zhihu_users(username,password) VALUES(?,?)';
            //通过MySQL连接池执行SQL语句
            pool.query(sql, [username, password], (err, results) => {
                if (err) throw err;
                res.send({message:'用户注册成功',code:1});
            });
        }
    });    
});

//login的POST方式路由

server.post('/login', (req, res) => {
    //获取用户名
    var username = req.body.username; 
    //获取密码并且加密
    var password = md5(req.body.password);
    //以当前的用户名和密码为条件在数据表查询是否存在该用户
    //如果存在则登录成功，否则登录失败
    var sql = 'SELECT id,username FROM zhihu_users WHERE username=? AND password=?';
    pool.query(sql, [username, password], (err, results) => {

        if (err) throw err;
        //如果用户名或密码存在错误的话,results将返回空数组
        //如果用户名和密码都正确的话，results将返回只有一个成员的数组
        if (results.length == 0) {
            res.send({ message: '用户名或密码错误', code: 0 });
        } else {
            //下午还要改
            res.send({ message: '用户登录成功', code: 1 });
        }
    });
});

//articles的GET路由
server.get('/articles', (req, res) => {

    //获取URL地址中名称为type的参数
    var type = req.query.type;
    //获取URL地址中名称为page参数
    var page = parseInt(req.query.page); 
    //用户控制每页显示的记录数
    var pagesize = 5;

    //根据当前的页码来计算SQL语句中offset参数值
    var offset = (page - 1) * pagesize;
    var pagecount = 0;
    //执行获取特定分类下的文章总数的SQL
    var sql = 'SELECT COUNT(zhihu_articles.id)  AS count  FROM zhihu_articles,zhihu_category WHERE category_id = zhihu_category.id AND category_info=?';

    pool.query(sql, [type], (err, results) => {
        if (err) throw err;
        //计算总页数
       pagecount = Math.ceil(results[0].count / pagesize);
    });
    //查找 zhihu_articles(文章表)的特定记录
    //SQL中不确定的信息使用占位符(?)表示
    sql = `SELECT zhihu_articles.id,subject,description,image  FROM zhihu_articles,zhihu_category WHERE category_id = zhihu_category.id AND category_info=? LIMIT ${offset},${pagesize}`;
    //执行SQL查找操作
    pool.query(sql, [type], (err, results) => {
        //如果发生错误,则直接抛出错误
        if (err) throw err;
        res.send({
            message: '查询成功',
            code: 1,
            results: results,
            pagecount:pagecount
        });

    });
});

server.get('/vuex', (req, res) => {
    var sql = 'SELECT id,subject AS productName,category_id AS salePrice FROM zhihu_articles LIMIT 10';
    pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send({ message: 'OK', results: results });
    });
});

//监听端口
server.listen(4000);
USE zhihu;

-- 在实践过程中，任意一张数据表必须存在主键且自增的字段，用于保证记录的唯一性

CREATE TABLE zhihu_users(
    id INT UNSIGNED NOT NULL KEY AUTO_INCREMENT COMMENT '用户ID,主键且自增',
    username VARCHAR(30) NOT NULL UNIQUE COMMENT '用户名,唯一',
    password VARCHAR(32) NOT NULL  COMMENT '用户密码,MD5'
) COMMENT '用户表';
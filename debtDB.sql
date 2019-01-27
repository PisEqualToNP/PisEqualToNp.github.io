CREATE DATABASE IF NOT EXISTS debtDB;
USE debtDB;

-- DROP TABLE IF EXISTS post_likes;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
    userid INTEGER(100),
    name CHAR(30),
    debt DECIMAL(10,2),
    duedate DATETIME(6),
    rating ENUM('1','2','3','4','5'),
    PRIMARY KEY (userid)
);



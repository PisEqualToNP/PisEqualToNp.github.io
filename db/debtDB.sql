CREATE DATABASE IF NOT EXISTS debtDB;
USE debtDB;

-- DROP TABLE IF EXISTS post_likes;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
    userid INTEGER(100),
    name CHAR(30),
    debt DECIMAL(10,2),
    duedate DATETIME,
    rating ENUM('1','2','3','4','5'),
    PRIMARY KEY (userid)
);

CREATE TABLE account (
  email     VARCHAR(255)    NOT NULL,
username    VARCHAR(20) NOT NULL, 
  create_date   DATETIME    NOT NULL,
  pwd      VARCHAR(255)   NOT NULL,
  last_name     VARCHAR(255),
  first_name    VARCHAR(255),
    phone         VARCHAR(25),
    PRIMARY KEY (username)
);
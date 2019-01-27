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
  id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email     VARCHAR(255)    NOT NULL,
  create_date   DATETIME    NOT NULL,
  password      VARCHAR(255)   NOT NULL,
  last_name     VARCHAR(255),
  first_name    VARCHAR(255),
  street        VARCHAR(255),
  phone         VARCHAR(25),
);
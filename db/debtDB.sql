CREATE DATABASE IF NOT EXISTS debtDB;
USE debtDB;

-- DROP TABLE IF EXISTS post_likes;
DROP TABLE IF EXISTS user_table;
DROP TABLE IF EXISTS account; 

CREATE TABLE user_table (
    userid INTEGER(100),
    name CHAR(30),
    debt DECIMAL(10,2),
    duedate DATETIME,
    rating ENUM('1','2','3','4','5'),
    description VARCHAR(200), 
    PRIMARY KEY (userid)
);

CREATE TABLE account (
  email     VARCHAR(50)    NOT NULL,
username    VARCHAR(10) NOT NULL, 
  date_created   DATETIME,
  pwd      VARCHAR(255),
  last_name     VARCHAR(255),
  first_name    VARCHAR(255),
    phone         VARCHAR(10),
    PRIMARY KEY (username)
);

CREATE TABLE user_profile (
    username VARCHAR(10) NOT NULL, 
    FOREIGN KEY (username) REFERENCES user_table(username)
        ON DELETE CASCADE
); 

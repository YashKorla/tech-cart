create database tech_cart;
use tech_cart;

create table users(username varchar(20) primary key, email varchar(100), password varchar(20));
select * from users;
truncate table users;

create table queries(username varchar(20), email varchar(100), query varchar(255));
select * from queries;
truncate table queries;

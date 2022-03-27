use empolyee;

create table departments( 
 idDep int not null auto_increment  primary key,  
 department varchar(50), 
 leader varchar(50), 
 phoneNum varchar(20)); 

create table posts( 
 idPost int not null auto_increment  primary key, 
 post varchar(50)); 
 
create table specialty(
 idSpec int not null auto_increment  primary key, 
 specialty varchar(50)); 

create table personalinf( 
 personalNum int primary key, 
 placeBirth varchar(25), 
 passport varchar(30), 
 address varchar(50), 
 regAddress varchar(50), 
 maritalStat varchar(20), 
 children int, 
 dateBirth varchar(50) );  
 
 create table officialinf( 
 idEmployee int primary key, 
 personalNum int, 
 surname varchar(50), 
 name varchar(50), 
 patronymic varchar(50), 
 idDep int , 
 idPost int ,
 idSpec int ,
 education varchar(50), 
 experience varchar(50), 
 phoneNum varchar(20), 
 wage int,  
 status  varchar(20),
 foreign key (personalNum) references personalinf(personalNum),
 foreign key (idDep) references departments(idDep),
 foreign key (idPost) references posts(idPost),
 foreign key (idSpec) references specialty(idSpec)); 
 

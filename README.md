# Spring-Boot-React-CRUD
利用 Spring Boot + React + MySQL 實作一個簡單的前後端分離項目  
可以新增、修改、刪除書本資料


## 預覽
<img src="https://github.com/cwchang13/Note/blob/main/index.png" alt="index" width="70%">
<img src="https://github.com/cwchang13/Note/blob/main/book-list.png" alt="index" width="70%">

## 安裝說明
將檔案Clone到電腦後，分為兩個資料夾：
1. springboot-backend：後端部分
2. react-frontend：前端部分

### 後端部分
- MySQL 執行下列指令即可
```SQL
create database learning;

create table BOOK
(
    id bigint primary key not null auto_increment,
    name nvarchar(20) comment '書名',
    author nvarchar(30) comment '作者',
    pub_date date comment '出版日期'
) comment '書籍表'
ENGINE = INNODB DEFAULT CHARSET = utf8;

insert into book
values (1, '莫斯科紳士', '亞莫爾．拖歐斯', '2019-10-04'),
       (2, '我是貓', '夏目漱石', '2019-10-04'),
       (3, '鯨吞億萬', '湯姆．萊特', '2019-10-1'),
       (4, '貝納德的墮落', '泰斯．格里森', '2017-08-25'),
       (5, '大腦喜歡這樣學', '芭芭拉．歐克利', '2019-05-11'),
       (6, '史達林-從革命者到獨裁者', '奧列格．賀列夫紐克', '2018-07-01'),
       (7, '王爾德短篇小說集', '王爾德', '2012-06-05'),
       (8, '資料視覺化', '亞莫爾．拖歐斯', '2020-11-03'),
       (9, '槍砲、病菌與鋼鐵', '賈德．戴蒙', '2015-07-01'),
       (10, 'JavaScript程式設計精解', '山田祥寬', '2018-01-01');
```

- 用 IntelliJ 打開 **springboot-backend** 執行即可

### 前端部分
- VSCode 打開 **react-frontend**
先執行
```
npm install react-scripts
```
- 再輸入後，瀏覽器輸入`http://localhost:3000`即可
```
npm start
```
## (:hammer_and_wrench:施工中) 程式內容說明
詳細說明放在這裡
1. 後端部分
2. 前端部分

## 參考資料
- https://bushansirgur.in/reactjs-spring-boot-crud-full-stack-application-create-react-application/
- https://www.javaguides.net/2020/07/spring-boot-react-js-crud-example-tutorial.html


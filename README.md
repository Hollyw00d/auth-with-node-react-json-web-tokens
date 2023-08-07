# The Ultimate Authentication Course with NodeJS and React (Udemy) by Antonio Papa
## Intro
- This is the start of a Node.js login app that reads and writes data to a MySQL DB and it currently uses:
   - The [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) npm package for authentication
   - It doesn't use React but that will be added in the future

## Installation
- To install npm packages do:
  `npm i`
- After that need to create an __.env__ file with the following code where `DB_TABLE1` will refer to a `user` table and `DB_TABLE2` will refer to a `reset` table (this is a reset password log table) and obviously change the `YOUR_INFO_HERE` text to your values:
  ```
  DB_HOST=127.0.0.1
  DB_USER=YOUR_INFO_HERE
  DB_PASSWORD=YOUR_INFO_HERE
  DB_NAME=YOUR_INFO_HERE
  DB_TABLE1=YOUR_INFO_HERE
  DB_TABLE2=YOUR_INFO_HERE
  ACCESS_SECRET=YOUR_INFO_HERE
  REFRESH_SECRET=YOUR_INFO_HERE
    ```
- From Oracle download, install, and run:
  - [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
  - [MySQL Workbench](https://www.mysql.com/products/workbench/)
- From this repo copy the __sql/node_auth.sql__ file and paste it into your default __Downloads__ folder (on Mac, Windows, or Linux)
- In your terminal run the following command (where `root` will be your MySQL user name) and then enter your MySQL user password when `Enter password:` displays:
  `mysql -u root -p`
- Now you will be on the MySQL command line and need to enter the commands below to important your database (example assumes that your `node_auth` database doesn't exist and `~/Downloads/node_auth.sql` from the last line only works on a Mac and you will need to alter this on a Windows or Linux computer):
  ```
  SHOW DATABASES;
  CREATE DATABASE node_auth;
  USE node_auth;
  SET autocommit=0 ; SOURCE ~/Downloads/node_auth.sql ; COMMIT ;
  ```  

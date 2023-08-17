# Basic Authorization App using Node.js, React, and JSON Web Tokens

## Intro

- This is the start of a Node.js login app that reads and writes data to a MySQL DB and it currently uses:
  - The [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) npm package for authentication
  - It also uses React

## Node.js Setup

- In your terminal go into the **node_auth** folder
- To install npm packages do:
  `npm i`
- After that need to create an **.env** file with the following code where `DB_TABLE1` will refer to a `user` table and `DB_TABLE2` will refer to a `reset` table (this is a reset password log table) and obviously change the `YOUR_INFO_HERE` text to your values (**and all values below must be unique!**):
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
- From this repo copy the **sql/node_auth.sql** file and paste it into your default **Downloads** folder (on Mac, Windows, or Linux)
- In your terminal run the following command (where `root` will be your MySQL user name) and then enter your MySQL user password when `Enter password:` displays:
  `mysql -u root -p`
- Now you will be on the MySQL command line and need to enter the commands below to important your database (example assumes that your `node_auth` database doesn't exist and `~/Downloads/node_auth.sql` from the last line only works on a Mac and you will need to alter this on a Windows or Linux computer):
  ```
  SHOW DATABASES;
  CREATE DATABASE node_auth;
  USE node_auth;
  SET autocommit=0 ; SOURCE ~/Downloads/node_auth.sql ; COMMIT ;
  ```

## How to Use Locally

Assuming that your MySQL database is running locally and you `node_auth` database has been restored (see above):

- Install [Postman](https://www.postman.com/downloads/)
- Install and run [MailHog](https://github.com/mailhog/MailHog) ([see Windows setup instructions - 5 min YouTube video](https://www.youtube.com/watch?v=Vv-T-XK5WjI))
- Open another terminal window at the root of this project and run:
  `npm start`
- Open Postman and below are steps to test:

### Add a new user

- Add `http://localhost:8000/api/register` in the **URL** field and choose **POST** in the drop-down to the left
- Under the box below, click on the **Body** tab, click on the **raw** radio button, and choose **JSON** in the drop-down (to the right of the **raw** radio button)
- Add the text below in text field under the **raw** radio button:

```
{
  "first_name": "xyz",
  "last_name": "xyz",
  "email": "xyz@xyz.com",
  "password": "xyz",
  "password_confirm": "a"
}
```

- Click the **Send** button (to the right of the **URL** field) and in the **Body** tab you should see:
  - **Status: 400 Bad Request** text on the right
  - JSON output like below:
  ```
  {
    "message": "Password's do not match"
  }
  ```
- Update the JSON text under the **raw** radio button like below:

```
{
  "first_name": "xyz",
  "last_name": "xyz",
  "email": "xyz@xyz.com",
  "password": "xyz",
  "password_confirm": "xyz"
}
```

- Now click the **Send** button and you in the **Body** tab you should see:
  - **Status: 400 Bad Request** text on the right
  - JSON output like below:
  ```
  {
    "first_name": "xyz",
    "last_name": "xyz",
    "email": "xyz@xyz.com",
    "password": "xyz",
    "password_confirm": "xyz"
  }
  ```
  - Also in MySQL if you run the follow SQL queries one-by-one below you should see the user with the __xyz@xyz.com__ email added to the database:
    ```
    USE node_auth;
    SELECT * FROM user;
    ```

### Log in as a user

- Add `http://localhost:8000/api/login` in the **URL** field and choose **POST** in the drop-down to the left
- Under the box below, click on the **Body** tab, click on the **raw** radio button, and choose **JSON** in the drop-down (to the right of the **raw** radio button)
- Add the text below in text field under the **raw** radio button:

```
{
  "email": "xyz@xyz.com",
  "password": "xyz"
}
```

- Now click the **Send** button and you in the **Body** tab you should see:

```
{
  "message": "Success"
}
```

- If you did the steps above and password or email was wrong under the **Body** tab you would see:

```
{
  "message": "Invalid credentials"
}
```

### Show logged in user in `GET` route

- After running the steps for the `http://localhost:8000/api/login` route above, open another tab in Postman to run a **GET** request on `http://localhost:8000/api/user` where you will see details for the user (excluding the password) you just logged in as
- **IMPORTANT NOTE:** After you log using `http://localhost:8000/api/login` you MUST send a **GET** request in 30 seconds or less to see the user like below which will appear under the **Body** tab:

```
{
  "id": 64,
  "first_name": "xyz",
  "last_name": "xyz",
  "email": "xyz@xyz.com"
}
```

- OR, you will see the message below (including after 30 seconds):

```
{
  "message": "Unauthenticated"
}
```

- See more routes at **src/routes.ts** as more details will be coming to this README soon!

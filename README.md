# The Ultimate Authentication Course with NodeJS and React (Udemy) by Antonio Papa
## Intro
- This is the start of a Node.js login app that reads and writes data to a MySQL DB and it currently uses:
   - The [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) npm package for authentication
   - It doesn't use React but that will be added in the future

## Installation
- To install npm packages do:
  `npm i`
- After that need to create an __.env__ file with the following code where `DB_TABLE1` will refer to a `user` table and `DB_TABLE2` will refer to a `reset` table (this is a reset password log table):
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
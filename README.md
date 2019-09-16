# nodejs-rest-express-api
Public app


A: Clean up datastorage by running 'sudo rm -rf /data/db/*'
B: Start mongodb by running 'mongod'
C: Start server by running 'npm start'
D: To import Book data into your mongoDB database, run 'mongo bookAPI < booksJson.js'

You can use these line at the top of .js file to avoid errors highlinting from VS code
/* eslint-disable// no-param-reassign */

E: For unit testing, run: 'npm install -D mocha should sinon'
F: For integration tests, run: 'npm install -D supertest'
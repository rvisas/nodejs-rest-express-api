# RESTful express.js node.js app

This is a full REST service API buit using the following technologies:

Express.js
Node.js
Mongoose
MongoDB
Middleware

# To RUN

Follow the next steps to have it run in your local machine:

A: Run 'npm install --save'
B: Create or clean up the datastorage:
  'sudo mkdir /data/db'
  'sudo rm -rf /data/db/*'
C: Start mongodb by running 'mongod'
D: Start server by running 'npm start'
E: Import mock data into your mongoDB database by running 'mongo bookAPI < booksJson.js'

# Notes

You can use these line at the top of .js file to avoid errors highlinting from VS code
/* eslint-disable// no-param-reassign */

A. To test, run 'npm test'

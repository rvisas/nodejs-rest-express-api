const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {
    const response = { hello: 'This is the response of the GET' };
    res.json(response);
  });

app.use('/api', bookRouter);

app.get('/', (request, response) => {
  response.send('Welcome to my Nodemon API');
});

app.listen(port, () => {
  console.log(`Running on the port: ${port}`);
});

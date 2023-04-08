const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/subscribe', (req, res) => {

  console.log('Received a request!');
  const { email } = req.body;

  // Call Sendinblue API to subscribe user to your mailing list
  axios.post('https://api.sendinblue.com/v3/contacts', {
    email,
    listIds: [3] // replace with your actual list ID
  }, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.SENDINBLUE_API // replace with your actual API key
    }
  })
  .then(response => {
    console.log(response.data);
    res.send({ success: true });
  })
  .catch(error => {
    console.error(error);
    res.status(500).send({ success: false, message: 'Failed to subscribe' });
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001!');
});






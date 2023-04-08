const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.SENDINBLUE_API;

exports.handler = async function(event, context) {
  if (!apiKey) {
    return { statusCode: 500, body: "API Key is empty"}
  }
  
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email } = JSON.parse(event.body);
  try {
    const response = await axios.post(
      'https://api.sendinblue.com/v3/contacts',
      {
        email,
        listIds: [3] // replace with your actual list ID
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey // use your actual API key from Netlify environment variables
        }
      }
    );
    
    if (response.status === 201) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Subscription successful' })
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ success: false, message: 'Subscription failed' })
      };
    }

  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Subscription failed :(' })
    };
  }
};

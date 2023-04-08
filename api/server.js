const axios = require('axios');

exports.handler = async function(event, context) {
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
          'api-key': "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" // use your actual API key from Netlify environment variables
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
        body: JSON.stringify({ success: false, message: 'Subscription failed weirdly' })
      };
    }

  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Subscription failed' })
    };
  }
};

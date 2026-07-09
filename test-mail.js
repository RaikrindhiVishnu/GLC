const API_BASE_URL = 'https://eq3tqsvcw7.execute-api.ap-south-1.amazonaws.com';

async function test() {
  try {
    console.log('Sending test email...');
    const response = await fetch(`${API_BASE_URL}/mail/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify({
        to_mails: ['test@example.com'],
        Subject: 'GLC Mail Service Test',
        Body: '<p>This is a test from the newly integrated GLC Mail service script.</p>'
      }),
    });

    const data = await response.json();
    console.log('Status Code:', response.status);
    console.log('Response:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();

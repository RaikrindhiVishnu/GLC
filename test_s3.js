const https = require('https');
const fs = require('fs');
const FormData = require('form-data'); // Requires form-data package

async function testUpload() {
  const formData = new FormData();
  formData.append('file', fs.createReadStream('c:/Users/DELL/OneDrive/Desktop/GLC/package.json'));
  formData.append('folderPath', 'test_folder/123/images');

  const options = {
    method: 'POST',
    host: 'blkzmtts30.execute-api.ap-south-1.amazonaws.com',
    path: '/s3/uploadFile',
    headers: formData.getHeaders()
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('Response:', data);
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });

  formData.pipe(req);
}
testUpload();

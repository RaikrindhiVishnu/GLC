const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

async function testUpload() {
  const formData = new FormData();
  formData.append('file', fs.createReadStream('c:/Users/DELL/OneDrive/Desktop/GLC/package.json'));
  formData.append('folderPath', 'test_folder/123/images');

  try {
    const response = await fetch('http://localhost:3000/api/s3/uploadFile', { // wait, I don't know API_BASE_URL
      method: 'POST',
      body: formData
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}
testUpload();

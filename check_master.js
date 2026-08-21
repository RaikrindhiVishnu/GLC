const https = require('https');

https.get('https://blkzmtts30.execute-api.ap-south-1.amazonaws.com/master/get_all_master_data', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const json = JSON.parse(data);
    console.log(JSON.stringify(json, null, 2));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

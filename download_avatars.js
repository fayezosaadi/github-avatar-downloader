  const request = require('request');
  const fs = require('fs');
  const config = require ('./config');
  console.log('Welcome to the GitHub Avatar Downloader!');


  function getRepoContributors(repoOwner, repoName, cb) {


    let requestURL = `https://${config.GITHUB_USER}:${config.GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
      console.log(requestURL);

      requestOptions = {
        headers:{"User-Agent":"FAYEZ"},
        url: requestURL
      }

      request.get(requestOptions, cb)

        .on('response', (response) => {
    // console.log(response.headers);
        });
      }


function callback (err, result) {
if (!err)
  var avatarUrl=JSON.parse(result.body);
  avatarUrl.forEach((e) => { downloadImageByURL(e.avatar_url, './avatars/' + e.login + '.jpg')})
}

let repOwner = process.argv[2];
let repName =  process.argv[3];

getRepoContributors(repOwner, repName, callback);




function downloadImageByURL(url, filePath) {

  request.get(url)
  .on('error', function (err) {
    throw err;
  })
  .on('response', function (response) {
    console.log("file Downloades");
  })
  .pipe(fs.createWriteStream(filePath));
 }

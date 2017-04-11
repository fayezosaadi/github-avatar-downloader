  const request = require('request');
  const fs = require('fs');
  const config = require ('./config');
  let repOwner = process.argv[2];
  let repName =  process.argv[3];

  console.log('Welcome to the GitHub Avatar Downloader!');

  function getRepoContributors(repoOwner, repoName, cb) {
    if (!repoOwner){
      console.log("please write down a valid value Repos Owner");
      return;
    }
    let requestURL = `https://${config.GITHUB_USER}:${config.GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
      // console.log(requestURL);
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

  function downloadImageByURL(url, filePath) {
    request.get(url)
    .on('error', function (err) {
      throw err;
    })
    .on('response', function (response) {
    console.log("Downloading pictires");

    })
    .pipe(fs.createWriteStream(filePath));
  }



  getRepoContributors(repOwner, repName, callback);







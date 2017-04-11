  const request = require('request');
  const fs = require('fs');
  const config = require ('./config');
  let repOwner = process.argv[2];
  let repName =  process.argv[3];

  console.log('Welcome to the GitHub Avatar Downloader!');

  function getRepoContributors(repoOwner, repoName, cb) {
    //Error Massage informing the user to write down a proper names
    let x = process.argv[4];
    if (!repoOwner || !repoName || x){
      console.log('please write down a valid Entries in the Format of: Repo Owner <Space> Repo Name in order to download the Avatars');
      return;
    }
    // requestURL is the GIthub API including the repOwner and repName
    let requestURL = `https://${config.GITHUB_USER}:${config.GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
    // Object including the header `User-Agent` and the API to be send through http request GET method
    requestOptions = {
    headers:{"User-Agent":"FAYEZLHL"},
    url: requestURL
    }
    request.get(requestOptions, cb)
    .on('response', (response) => {});
  }

  //Call back function fitchs the Avatar Url
  function callback (err, result) {
    try {
      var avatarUrl=JSON.parse(result.body);
      avatarUrl.forEach((e) => { downloadImageByURL(e.avatar_url, './avatars/' + e.login + '.jpg')})
    }
    catch (err) {
      console.log('Repo Owner or Repo Name you entered does not exit');
    }
  }
  // downloadImageByURL function uses `.pipe` to download pictures into the fs
  function downloadImageByURL(url, filePath) {
    request.get(url)
      .on('error', function (err) {
        throw err;
      })
      .on('response', function (response) {
      console.log('Downloading image...');
      })
      .pipe(fs.createWriteStream(filePath));
    }



  getRepoContributors(repOwner, repName, callback);






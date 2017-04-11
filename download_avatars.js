  const request = require('request');
  const GITHUB_USER = "fayezosaadi";
  const GITHUB_TOKEN = "6a407681036e7c8da1759b16ca9008504634c425";
  console.log('Welcome to the GitHub Avatar Downloader!');


  function getRepoContributors(repoOwner, repoName, cb) {


    let requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
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
  avatarUrl.forEach((e) => { console.log("Result:", e.avatar_url)})
}

let repOwner = process.argv[2];
let repName =  process.argv[3];

getRepoContributors(repOwner, repName, callback);

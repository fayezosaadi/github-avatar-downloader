 const request = require("request");

console.log("Welcome to the Github Avatars Downloader");

  const GITHUB_USER = "fayezosaadi";
  const GITHUB_TOKEN = "6a407681036e7c8da1759b16ca9008504634c425";

function getRepoContributors(repoOwner, repoName, cb) {
    var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
    var requestOption = {
        headers : {
            "user-agent" : "Nawar",
        },
        url : requestURL
    }
    request.get(requestOption, cb)
        .on('error', (err) => {
            throw err;
        })
        .on('response', (response) => {

        });

}

function callback(err, result) {
    console.log(result.body);
}

let repOwner = process.env[1];
let repName = process.env[2];


console.log(repName);
getRepoContributors('jquery', 'jquery', callback);
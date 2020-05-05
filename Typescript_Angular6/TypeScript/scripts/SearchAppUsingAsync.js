//Cach 1
// @ts-ignore
var fetch = require("node-fetch");
var getJson = fetch("https://api.github.com/search/repositories?q=angular");
//Ham fetch se tra ve mot promise
getJson.then(function (response) {
    var json = response.json();
    return json;
})
    .then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.log('Error: ' + err);
});

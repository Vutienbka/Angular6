//Cach 1
// @ts-ignore
const fetch = require("node-fetch");
const getJson = fetch("https://api.github.com/search/repositories?q=angular");
//Ham fetch se tra ve mot promise

getJson.then(response =>{
    let json = response.json()
    return json;
})
.then(json =>{
    console.log(json);
})
.catch(err =>{
    console.log('Error: ' + err);
})

console.log("test 123");

var str = document.getElementById('sonnet').innerText;
var orphanIndex = str.indexOf("orphans");
console.log(orphanIndex);

var orphanLastIndex = sonnet.lastIndexOf(".");
console.log(orphanLastIndex);

document.getElementById("sonnet").innerHTML = document.getElementById("sonnet").innerHTML.replace("winter", "yuletide");
document.getElementById("sonnet").innerHTML = document.getElementById("sonnet").innerHTML.replace(/the/ig,"a large");



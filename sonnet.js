console.log("test 123");

var str = document.getElementById('sonnet').innerText;
var orphanIndex = str.indexOf("orphan");
console.log(orphanIndex);
var orphanLength= str.lenght;
var orphanreplace = str.replace("winter", "yuletide");
var orphanReeplace = orphanreplace.split("the").join("a large");
document.getElementById('sonnet').innerText= orphanIndex + orphanLength + orphanReeplace;


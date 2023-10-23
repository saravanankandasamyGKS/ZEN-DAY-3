const URL = "https://restcountries.com/v3.1/all";
const req = new XMLHttpRequest();

req.open("GET", URL);
req.send();

req.addEventListener("load", function () {
    const Obj = JSON.parse(this.response);
    for (let val of Obj) {
        console.log("country:"+val.name.common+",region:"+val.region+",subregion:"+val.subregion+",populations:"+val.population);
    }
});

let obj1 = { name: "SARAVANAN.K", age: 27 };
let obj2 = { age: 27, name: "SARAVANAN.K" };
let keys1 = Object.keys(obj1);
let keys2 = Object.keys(obj2);

let flag = true;
if (keys1.length === keys2.length) {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            flag = false;
            break;
        }
    }
} else {
    flag = false;
}

if (flag) {
    console.log("Objects are the same");
} else {
    console.log("Objects are not the same");
}
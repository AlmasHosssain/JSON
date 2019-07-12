var fs = require('fs');
var faker = require('faker');

var obj = [];

for(var i =0; i<=10;i++){
    var man = {};
    man.name = faker.name.findName();
    man.email = faker.internet.email();
    man.address = {
        city : faker.address.city(),
        country : faker.address.country(),
        lat: faker.address.latitude(),
        long : faker.address.longitude()
    }

    obj.push(man);
}
////Send the JavaScript object to the server as a JSON file..
fs.writeFile('demo.json',JSON.stringify(obj),function(data,err){
    console.log("File Created Successfully....");
})

////Convert the JSON file to JavaScript object...

var data = fs.readFileSync('demo.json').toString();

var singleMan = JSON.parse(data);

singleMan.forEach(element => {
    console.log(element.name ,element.email);
});



////////



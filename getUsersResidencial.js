const fs = require("fs");
let userData = fs.readFileSync("AllUsers.json");
let Users = JSON.parse(userData);

let ObjectUsers = Object.keys(Users.data);

ObjectUsers.forEach((element) => {
  let Residenciales = Users.data[element].metadata.client_type;
  if (Residenciales === "Residential") {
    // console.log(Residenciales, Users.data[element].clientid);
  }
});

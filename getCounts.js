const fs = require("fs");
let rawData = fs.readFileSync("response7meses.json");
let userData = fs.readFileSync("usuarios.json");
let Users = JSON.parse(userData);
let billing = JSON.parse(rawData);

let objectManage = Object.keys(billing.data);

let newArray = [];

for (let index = 0; index < objectManage.length; index++) {
  newArray.push({
    clientid: billing.data[objectManage[index]].clientid,
    amount_unpaid: billing.data[objectManage[index]].amount_unpaid,
  });
}

const timesRepeatedClientID = {};
newArray.forEach(
  (el, index) =>
    (timesRepeatedClientID[el.clientid] =
      timesRepeatedClientID[el.clientid] + 1 || 1)
);

// Clientes Residential
let ObjectUsers = Object.keys(Users.data);
let ClientesResidential = [];

// ClientidR3T= Clientid Repeated 3 Times
let ClientidR3T = [];
Object.keys(timesRepeatedClientID).forEach((element, index) => {
  if (Object.values(timesRepeatedClientID)[index] >= 3) {
    ObjectUsers.forEach((element2) => {
      let Residenciales = Users.data[element2].metadata.client_type;
      if (
        Residenciales === "Residential" &&
        element === Users.data[element2].clientid
      ) {
        ClientidR3T.push(element);
      }
    });
  }
});

// ClientidR3T.filter((element) => element === ClientesResidential);

let total = [];
ClientidR3T.forEach((element) => {
  let Clients = newArray.filter((el) => el.clientid === element);
  total.push(
    Clients.reduce((a, b) => parseFloat(a) + parseFloat(b.amount_unpaid), 0)
  );
  console.log(
    element,
    Clients.reduce((a, b) => parseFloat(a) + parseFloat(b.amount_unpaid), 0)
  );
});

// console.log(total.length);

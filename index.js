const fs = require("fs");
let rawData = fs.readFileSync("response7meses.json");
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
let ClientidR3T = [];
Object.keys(timesRepeatedClientID).forEach((element, index) => {
  if (Object.values(timesRepeatedClientID)[index] >= 3) {
    ClientidR3T.push(element);
  }
});
let total = [];
ClientidR3T.forEach((element) => {
  let Clients = newArray.filter((el) => el.clientid === element);
  total.push(Clients);
  console.log(
    element,
    Clients.reduce((a, b) => parseFloat(a) + parseFloat(b.amount_unpaid), 0)
  );
});

console.log(total.length);

// const res = newArray.reduce((acc, curr, index) => {
//   if (curr.clientid in acc) {
//     return {
//       ...acc,
//       [curr.clientid]: {
//         amount_unpaid:
//           parseFloat(acc[curr.clientid].amount_unpaid) +
//           parseFloat(curr.amount_unpaid),
//       },
//     };
//   } else {
//     return {
//       ...acc,
//       [curr.clientid]: {
//         amount_unpaid: curr.amount_unpaid,
//       },
//     };
//   }
// }, {});
// console.log("Resultado: ", res);

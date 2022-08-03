const fs = require("fs");
let rawdata = fs.readFileSync("response7meses.json");
let billing = JSON.parse(rawdata);

// console.log(Object.values(billing.data));
// console.log(billing.data[Object.keys(billing.data)[100]].clientid);
let objectManage = Object.keys(billing.data);

let newArray = [];

for (let index = 0; index < objectManage.length; index++) {
  newArray.push({
    clientid: billing.data[objectManage[index]].clientid,
    amount_unpaid: billing.data[objectManage[index]].amount_unpaid,
  });
}

let counts = {};
newArray.forEach(function (x) {
  counts[x.clientid] = (counts[x.clientid] || 0) + 1;
});

const resultado = {};
newArray.forEach(
  (el, index) => (resultado[el.clientid] = resultado[el.clientid] + 1 || 1)
);

Object.keys(resultado).forEach((element, index) => {
  if (Object.values(resultado)[index] >= 3) {
    console.log(element);
    // i should add this to a new array so then i can compare it with the other array and see if they are more than 3 billing so i can sum them
  } else {
    // console.log("no hay");
  }
});

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

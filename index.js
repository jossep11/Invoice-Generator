const fs = require("fs");
let rawdata = fs.readFileSync("response7meses.json");
let billing = JSON.parse(rawdata);

// console.log(Object.values(billing.data));
// console.log(billing.data[Object.keys(billing.data)[100]].clientid);
let objectManage = Object.keys(billing.data);
// let data = billing.data;
// console.log(data[objectManage[0]]);
// const res = data.reduce((acc, curr, index) => {
//   console.log(curr);
// });
let newArray = [];

for (let index = 0; index < objectManage.length; index++) {
  //   console.log(
  //     billing.data[objectManage[index]].clientid,
  //     billing.data[objectManage[index]].amount_unpaid
  //   );
  newArray.push({
    clientid: billing.data[objectManage[index]].clientid,
    amount_unpaid: billing.data[objectManage[index]].amount_unpaid,
  });
}
let counts = {};
newArray.forEach(function (x) {
  // clientid: (x.clientid || 0) + 1,
  // amount_unpaid: x.amount_unpaid,
  counts[x.clientid] = (counts[x.clientid] || 0) + 1;
});

console.log(counts);

// Object.values(counts).forEach((x, index) => {
//   if (x >= 3) {
//     // console.log(index);
//     console.log(newArray[index]);
//     console.log(x, ":", index);
//   }
// });

// console.log(counts);
// console.log(newArray);

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

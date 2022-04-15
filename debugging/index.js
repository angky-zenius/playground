const orders = [100, 200, 300, 400, 500];

let totalOrder = 0;
for (let x = 0; x < orders.length; x++) {
  totalOrder += orders[x];
}
console.log(totalOrder);

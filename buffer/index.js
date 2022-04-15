const emptyBuff = Buffer.alloc(1024);
const filledBuff = Buffer.alloc(1024, 1);
const encodedBuff = Buffer.alloc(1024, 'a', 'ascii');
const asciiBuf = Buffer.from(encodedBuff);
const stringBuf = Buffer.from('Angky Cahaya Putra');

function tryBuff() {
  let hiBuff = Buffer.from('Hi!');
  console.log(hiBuff.toString());
  console.log(hiBuff.toString('hex'));
  console.log(hiBuff.toJSON());

  console.log('----------|----------');
  hiBuff[1] = 101;
  console.log(hiBuff.toString());
  hiBuff.write('Hey');
  console.log(hiBuff.toString());

  console.log('----------|----------');
  let petBuff = Buffer.alloc(3);
  petBuff.write('Cats');
  console.log(petBuff.toString());
  petBuff.write('Ra');
  console.log(petBuff.toString());

  console.log('----------|----------');
  let vehicle = Buffer.from('Car');
  let part = Buffer.from('Seat, Lamp, Steer');
  vehicle.copy(part, 12, 1, vehicle.length);
  console.log(part.toString());

  console.log('----------|----------');
  let newBuff = Buffer.alloc(10, 'a');
  console.log(newBuff.toString());
  console.log(newBuff.toJSON());
}

tryBuff();

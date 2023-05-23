const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const animals = () => [...hewanBuas, ...hewanJinak];

const makanan = ["ikan", "wortel", "biji bijian"];

const tampil = (hewan, eat) => {
  const hasil = {};

  for (let a = 0; a < hewan.length; a++) {
    hasil[hewan[a]] = eat[a];
  }

  return hasil;
};

console.log(tampil(hewanJinak, makanan));

setTimeout(() => {
  console.log(animals());
}, 5000);

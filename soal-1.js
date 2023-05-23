let data = {
  nama: "Tri Wulandari",
  nim: "02042111031",
  email: "triwulandari3456@gmail.com",
};

let { nama, nim, email } = data;

console.log(nama);
console.log(nim);
console.log(email);

let nama1 = ["aliya", "amel"];
let nama2 = ["melan", "maypa"];
let nama3 = ["naily", "putri"];

let gabungNama = [...nama1, ...nama2, ...nama3];

console.log(gabungNama);

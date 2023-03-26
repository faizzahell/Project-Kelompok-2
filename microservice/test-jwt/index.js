const jwt = require('jsonwebtoken');

const JWT_SECRET = 'bwamicro!23';

// // create basic token dengan proses syncronous
// const token = jwt.sign({ data: { kelas: 'bwamicro' } }, JWT_SECRET);
// console.log(token);

// asyncrounous - create token
jwt.sign({ data: { kelas: 'bwamicro' } }, JWT_SECRET, { expiresIn: '1m' }, (err, token) => {
  console.log(token)
});

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWljcm8ifSwiaWF0IjoxNjc4OTAzNjI4LCJleHAiOjE2Nzg5MDM2ODh9.vQduKFJt6PrbjkzrjvBRsmMOboRgb6JIopp78zRRZ2w'

// // cara verifikasi jwt pertama
// jwt.verify(token1, JWT_SECRET, (err, decode) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log(decode);
// });

// cara verifikasi jwt kedua
try {
  const decode = jwt.verify(token1, JWT_SECRET);
  console.log(decode); 
} catch (error) {
  console.log(error.message);
}
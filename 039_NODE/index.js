const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello 039!');
// });

app.listen(port, () => {
  console.log(`039 app listening on port ${port}`);
});
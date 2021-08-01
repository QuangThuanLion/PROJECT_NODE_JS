const express = require('express') //tải và nạp thư viện vừa tải về vào đây sau đó lưu vào biến express
const app = express()
const port = 3000

//định nghĩa route
app.get('/', (req, res) => {
    const a = 1;
    const b = 2;
    const c = a + b;
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
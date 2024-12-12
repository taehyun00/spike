const express = require('express')
const path = require('path') 
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  return res.redirect("/index.html") 
})

app.get('/spike', (req, res) => {
    return res.redirect("/spike.html")
})

app.post('/pang', (req, res) => {
    return res.redirect("/pang.html")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

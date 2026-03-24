
import express from 'express'
import debug from 'debug';

const log = debug ("11-express:index");

const port = process.env.PORT || 4000

export const app = express()
log("Express app created")


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post("/", (req,res) => {
    res.send('Hello Post')
})

app.get('/api', (req, res) => {
    res.send('API rest!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import express from 'express'
import render from '../server/render'
const app = express()

app.use(express.static('./public'))
app.get("/", render)
app.listen(8080, () => {
    console.log('8080')
})
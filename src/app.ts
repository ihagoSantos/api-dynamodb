import express from 'express'

const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Te sedulous hyena ate the antelope!')
})

app.listen(port, '', () => {
    console.log('the server is runing at port', port)
})

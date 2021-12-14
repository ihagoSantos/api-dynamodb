import express from 'express'
import 'dotenv/config'

import { HeroesController } from './adapters/in/http/controller/heroesController';
const heroesController = new HeroesController();

const app = express()
app.use(express.json())

const port = parseInt(process.env.SERVER_PORT) || 3000;

app.get('/heroes/healthycheck', heroesController.healthycheck)
app.get('/heroes/findAll', heroesController.findAll)



app.listen(port, null, () => {
    console.log('the server is runing at port', port)
})

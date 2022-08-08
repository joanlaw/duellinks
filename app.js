import express from 'express'
import morgan from 'morgan'
import cors from 'cors'


import indexRoutes from './routes/index.routes.js'
import cartasRoutes from './routes/cards.routes.js'

const app = express()


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(indexRoutes)
app.use(cartasRoutes)



export default app
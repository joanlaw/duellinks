import express from 'express'
import morgan from 'morgan'
import cors from 'cors'


import indexRoutes from './routes/index.routes.js'
import cartasRoutes from './routes/cards.routes.js'
import fileUpload from 'express-fileupload'

const app = express()
//const cors = require('cors')


app.use(cors())
app.use(morgan('dev'))
app.use(fileUpload({
    tempFileDir: '/uploads'
}))
app.use(express.json())
app.use(indexRoutes)
app.use(cartasRoutes)



export default app
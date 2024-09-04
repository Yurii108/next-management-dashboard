import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
/*ROUTE IMPORT*/
import dashboardRoutes from './routes/dashboardRoutes'
import productsRoutes from './routes/productsRoutes'
import usersRoutes from './routes/usersRoutes'

dotenv.config();
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

/* ROUTES */
app.use('/dashboard', dashboardRoutes) // http://localhost:8000/dashboard
app.use('/products', productsRoutes) // http://localhost:8000/products
app.use('/users', usersRoutes) // http://localhost:8000/users

/* SERVER */
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
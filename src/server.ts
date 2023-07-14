import "dotenv/config"
import express from "express"
import dbConnect from "./config/mongo"
import e from "express"
import pointsRouter from "./routes/points.router"
import trucksRouter from "./routes/trucks.router"
import usersRouter from "./routes/users.router"

const app = express() 
const port = process.env.PORT

app.use(express.json())
app.use('/auth', usersRouter)
app.use('/points', pointsRouter)
app.use('/trucks', trucksRouter)
dbConnect().then(() => console.log('Connection to mongoDB succesful')).catch(error => console.log('Error with mongoDB connection: ', e))
app.listen(port, () => console.log(`Server is running in port: ${port}`))
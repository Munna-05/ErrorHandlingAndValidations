import express from 'express';
import cors from 'cors'
import user_router from './Routes/UserRoute.js'
import { handleError } from './Middlewares/ErrorHandle.js';
const app = express()
app.use(express.json())
app.use(cors())

try {
    app.listen(5001, () => {
 
        console.log(`server started ${5001}`)
       
    })
} catch (error) {
    console.log(error)
}
 
app.use('/',user_router)
app.use(handleError)
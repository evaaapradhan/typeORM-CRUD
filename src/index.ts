import express, {Express} from "express"
import {DataRouter} from "./router/datarouter"
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'; 
const app: Express = express();
dotenv.config();
const port = process.env.PORT;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", DataRouter);


app.listen(port,()=>{
    console.log(`listening on ${port}`)
})

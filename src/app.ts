// imports
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

// import { sequelizeConnection as sequelize } from "./db/config";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT;


// view engine

// statics & path


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routers
app.get("/", async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: "Hello Typescript"
    });
});


// error handler


// listen
// try {
//     sequelize.authenticate()
//         .then(()=>{app.listen(PORT, ()=>{
//             console.log(`Server running on PORT ${PORT}`);
//         });
//     });
// } catch (error) {
//     console.log(`Unable to connect to the database: ${error}`);
// }

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
});
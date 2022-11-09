import express from 'express'
import cors from 'cors'
import {router} from '../routes/usuarios.js';


export class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json())

        //Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes()
    }

    middlewares() {

        //Directorio publico
        this.app.use(express.static('public'))

    }

    routes() {      

        this.app.use(this.usuariosPath, router)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
        })
    }
    }


import express from "express"
import Enrutador from "./Rutas/Enrutador.js"
import { SitioNoEncontrado } from "./MiddleWares/SitioNoEncontrado.js";
import Conexion from "./Conexion/Conexion.js"; 
import { PUERTO } from "./Configuraciones/Configuraciones.js"; // configurar puerto en esta carpeta

//import roleSeed from "./seed/roleSeed.js"; 
//import cookieParser from "cookie-parser"; 


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cookieParser())

app.use("/api", Enrutador);

app.use(SitioNoEncontrado);

await conexion.sync({ force:true});
await roleSeed(); // preguntar al profesor





app.listen(8080, () => {
    console.log("Servidor Flama");
  });
 // console.log(server ok ${PUERTO});




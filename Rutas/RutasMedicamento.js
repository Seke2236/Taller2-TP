import { Router } from "express";
import { log } from "../MiddleWares/Log.js";
import ControladorMedicamento from "../Controladores/ControladorMedicamento.js";

const ControladorMedicamento = new ControladorMedicamento();
const RutasMedicamento = Router();

RutasMedicamento.get("/", ControladorMedicamento.mostrarMedicamentos);
RutasMedicamento.get("/:id",);
RutasMedicamento.post("/", ControladorMedicamento.crearMedicamento);
RutasMedicamento.put("/:id",);
RutasMedicamento.use(log);
RutasMedicamento.delete("/:id", );

export default RutasMedicamento;
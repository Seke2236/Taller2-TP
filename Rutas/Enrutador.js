import { Router } from "express";
import RutasMedicamento from "./RutasMedicamento.js";
import RutasPaciente from "./RutasPaciente.js";

const Enrutador = Router();

Enrutador.use("/Medico", RutasMedicamento);
Enrutador.use("/Paciente", RutasPaciente);

export default Enrutador;
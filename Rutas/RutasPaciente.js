import { Router } from "express";
import ControladorPaciente from "../Controladores/ControladorPaciente.js";
import { VerificadorSesion } from "../MiddleWares/VerificadorSesion.js"; 
const RutasPaciente = Router();

const ControladorPaciente = new ControladorPaciente();

RutasPaciente.post("/", ControladorPaciente.crearPaciente);
RutasPaciente.post("/login", ControladorPaciente.login);

RutasPaciente.get("/me", VerificadorSesion, ControladorPaciente.me);
RutasPaciente.use(VerificadorSesion)
RutasPaciente.get("/", ControladorPaciente.mostrarPaciente);
RutasPaciente.get("/:id", ControladorPaciente.mostrarPacientePorId);
RutasPaciente.put("/:id", ControladorPaciente.actualizarPaciente);
RutasPaciente.delete("/:id", ControladorPaciente.borrarPaciente);

export default RutasPaciente;
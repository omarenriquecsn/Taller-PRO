"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTurn = exports.createTurn = exports.filterTurns = exports.getAllTurns = void 0;
const appointmentRepository_1 = __importDefault(require("../repositories/appointmentRepository"));
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const usersService_1 = require("./usersService");
let id = 8;
const getAllTurns = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointmentRepository_1.default.find({
        relations: {
            user: true,
        },
    });
    return appointments;
});
exports.getAllTurns = getAllTurns;
const filterTurns = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield appointmentRepository_1.default.findBy({ userId });
    if (appointment) {
        return appointment;
    }
    else
        throw Error("El turno no Existe");
});
exports.filterTurns = filterTurns;
const createTurn = (_a) => __awaiter(void 0, [_a], void 0, function* ({ date, time, description, userId, }) {
    const status = "active";
    const newAppointment = yield appointmentRepository_1.default.create({
        date,
        time,
        status,
        description,
        userId,
    });
    const user = yield userRepository_1.default.findOneBy({
        id: userId,
    });
    if (user) {
        newAppointment.user = user;
        yield usersService_1.resend.emails.send({
            from: "Taller Omar Contreras <onboarding@resend.dev>",
            to: [user.email],
            subject: "Informacion de su Turno",
            html: `<p>Su turno para asistir a nuestro taller fue creado con exito con los siguietes detalles</p>
      <p>fecha: ${newAppointment.date}</p>
      <p>hora: ${newAppointment.time}</p>
      <p>descripcion del servicio solicitado: ${newAppointment.description}</p>
      <img src="https://resend-attachments.s3.amazonaws.com/lJDOT7S2mgU7rm1"/> 
      `
        });
        yield appointmentRepository_1.default.save(newAppointment);
    }
    else
        throw Error("El usuario no Existe");
});
exports.createTurn = createTurn;
const updateTurn = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield appointmentRepository_1.default.findOneBy({
        id,
    });
    if (appointment) {
        appointment.status = "cancelled";
        yield appointmentRepository_1.default.save(appointment);
    }
    else
        throw Error("El turno no Existe");
});
exports.updateTurn = updateTurn;

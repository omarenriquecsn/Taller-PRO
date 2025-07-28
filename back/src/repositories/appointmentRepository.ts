import { AppDataSource } from "../config/data-source";
import { Appointments } from "../entities/appointmentEntity";

const apptRepository = AppDataSource.getRepository(Appointments);

export default apptRepository;

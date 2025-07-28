import { appointmentDto } from "../dtos/TurnsDto";
import { Appointments } from "../entities/appointmentEntity";
import { User } from "../entities/userEntity";
import apptRepository from "../repositories/appointmentRepository";
import userRepository from "../repositories/userRepository";
import { resend } from "./usersService";
let id = 8;

export const getAllTurns = async (): Promise<Appointments[]> => {
  const appointments = await apptRepository.find({
    relations: {
      user: true,
    },
  });

  return appointments;
};

export const filterTurns = async (userId: number): Promise<Appointments[]> => {
  const appointment = await apptRepository.findBy({userId});
  if (appointment) {
    return appointment;
  } else throw Error("El turno no Existe");
};

export const createTurn = async ({
  date,
  time,
  description,
  userId,
}: appointmentDto): Promise<void> => {
  const status = "active";
  const newAppointment: Appointments = await apptRepository.create({
    date,
    time,
    status,
    description,
    userId,
  });
  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });
  if (user) {
    newAppointment.user = user;
    await resend.emails.send({
      from: "Taller Omar Contreras <onboarding@resend.dev>",
      to: [user.email],
      subject: "Informacion de su Turno",
      html: `<p>Su turno para asistir a nuestro taller fue creado con exito con los siguietes detalles</p>
      <p>fecha: ${newAppointment.date}</p>
      <p>hora: ${newAppointment.time}</p>
      <p>descripcion del servicio solicitado: ${newAppointment.description}</p>
      <img src="https://resend-attachments.s3.amazonaws.com/lJDOT7S2mgU7rm1"/> 
      `
    })
    await apptRepository.save(newAppointment);
  } else throw Error("El usuario no Existe");
};

export const updateTurn = async (id: number): Promise<void> => {
  const appointment: Appointments | null = await apptRepository.findOneBy({
    id,
  });
  if (appointment) {
    appointment.status = "cancelled";
    await apptRepository.save(appointment);
  } else throw Error("El turno no Existe");
};

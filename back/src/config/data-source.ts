import { DataSource } from "typeorm";
import { User } from "../entities/userEntity";
import { Credentials } from "../entities/credentialEntity";
import { Appointments } from "../entities/appointmentEntity";
import { BASE, HOST, PASSWORD, PORTBASE, USER } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: PORTBASE,
  username: USER,
  password: PASSWORD,
  database: BASE,
  // dropSchema: true,
  entities: [User, Credentials, Appointments],
  synchronize: true,
  logging: false,
});

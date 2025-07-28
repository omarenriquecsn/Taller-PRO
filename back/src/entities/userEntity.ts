import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credentials } from "./credentialEntity";
import { Appointments } from "./appointmentEntity";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  birthdate: Date;

  @Column()
  nDni: number;

  @Column({nullable: true})
  imgProfile: string;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credential: Credentials;

  @OneToMany(() => Appointments, (appointments) => appointments.user)
  appointments: Appointments[];

  
}

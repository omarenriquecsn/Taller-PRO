import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./userEntity";

@Entity({
  name: "appointments",
})
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column()
  userId: number;

  @Column()
  description: string;

  @Column()
  status: "active" | "cancelled";

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}

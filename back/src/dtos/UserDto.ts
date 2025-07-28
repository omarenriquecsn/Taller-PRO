import { User } from "../entities/userEntity";

export interface userDto {
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  username: string;
  password: string;
}

export interface changeEmailDto {
  newEmail: string;
  userId: number;
}

export interface loginDto {
  login: boolean;
  user: User;
}

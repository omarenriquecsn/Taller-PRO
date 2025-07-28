import { Resend } from "resend";
import { credentialDto } from "../dtos/CredentialsDto";
import { userDto, changeEmailDto, loginDto } from "../dtos/UserDto";
import { Credentials } from "../entities/credentialEntity";
import { User } from "../entities/userEntity";
import userRepository from "../repositories/userRepository";
import { creteCredential, verifyLogin } from "./credentialService";
import path from "path";

export const resend = new Resend("re_8nMjrYYa_L6gQidFh7ZtYiAZfFP92aP6k");


export const getAllUsuers = async (): Promise<User[]> => {
  const users: User[] = await userRepository.find({
    relations: ["credential", "appointments"],
    select: {
      credential: {
        username: true,
      },
    },
  });
  return users;
};

export const filterUser = async (id: number): Promise<User | undefined> => {
  try {
    const user: User | null = await userRepository.findOne({
      where: { id },
      relations: {
        appointments: true,
      },
    });
    if (user) {
      return user;
    }
  } catch (error) {
    throw Error("El usuario no existe");
  }
};

export const createUser = async ({
  name,
  email,
  birthdate,
  nDni,
  username,
  password,
}: userDto) => {
  const newCredential: credentialDto = { username, password };
  const credential: Credentials = await creteCredential(newCredential);
  const newUser: User = userRepository.create({
    name,
    email,
    birthdate,
    nDni,
    credential,
  });
  await userRepository.save(newUser);
  console.log(newUser.email)
  const elEmail = await resend.emails.send({
    from: `Taller Omar Contreras <omarenriquecs@ciudadsonica.com>`,
    to: [newUser.email],
    subject: "Bienvenidos al Taller Omar Contreras",
    html: `<p>Hola su usuario en el taller Omar Contreras a sido creado satisfactoriamente con las siguietes credenciales </p> 
    <p><strong>username:</strong> ${username} </p> 
    <p><strong>password:</strong> ${password}</p>
    <img src="https://resend-attachments.s3.amazonaws.com/lJDOT7S2mgU7rm1"/>`,
  });

  return newUser;
};

export const updateUser = async ({ newEmail, userId }: changeEmailDto) => {
  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });
  if (user) {
    user.email = newEmail;
    await userRepository.save(user);
  } else throw Error("El usuario no existe");
};

export const loginStatus = async ({
  username,
  password,
}: credentialDto): Promise<User | undefined> => {
  try {
    const idUser = await verifyLogin({ username, password });
    if (idUser) {
      const user: User | null = await userRepository.findOneBy({
        id: Number(idUser),
      });
      if (user) return user;
    }
  } catch (erro) {
    throw Error("Error al autenticar al usuario");
  }
};

export const imgUploadService = async (
  file: string,
  id: number
): Promise<void> => {
  const user: User | undefined = await filterUser(id);
  console.log(user)
  if (user) {
    user.imgProfile = file;
    await userRepository.save(user);
  } else {
    throw Error("El Usuario no existe");
  }
};

export const imgProfileService = (direction: string): string => {
  const imagen = path.join(__dirname, `../../${direction}`)
 
  return imagen
}

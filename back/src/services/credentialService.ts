import { error } from "console";
import { credentialDto, updateDto } from "../dtos/CredentialsDto";
import { Credentials } from "../entities/credentialEntity";
import { ICredential } from "../interfaces/ICredential";
import credentialRepository from "../repositories/credentialRepository";
let id = 4;
let credentialList: ICredential[] = [
  {
    id: 1,
    username: "juanperez85",
    password: "SecurePassword123",
  },
  {
    id: 2,
    username: "mariagarcia90",
    password: "AnotherPassword456",
  },
  {
    id: 3,
    username: "carlosr78",
    password: "YetAnotherPassword789",
  },
  {
    id: 4,
    username: "luciaf2000",
    password: "Password2021!",
  },
];
// crear DTO

export const creteCredential = async ({
  username,
  password,
}: credentialDto) => {
  const credential: Credentials = credentialRepository.create({
    username,
    password,
  });
  await credentialRepository.save(credential);
  return credential;
};
// crear DTO

export const updatePasswordCredential = async ({
  userId,
  password,
}: updateDto) => {
  const credential: Credentials | null = await credentialRepository.findOneBy({
    id: userId
  })  
  if(!credential) throw Error("No existe la Credencial")

    credential.password = password;
    await credentialRepository.save(credential)
}
// crear DTO

export const verifyLogin = async ({
  username,
  password,
}: credentialDto): Promise<number> => {
  const credential = await credentialRepository.findOne({
    where: {
      username,
      password,
    },
  });
  if (credential) {
    return credential.id;
  } else throw Error("Error al autenticar el usuario");
};

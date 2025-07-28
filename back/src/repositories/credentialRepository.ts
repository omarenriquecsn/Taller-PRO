import { AppDataSource } from "../config/data-source";
import { Credentials } from "../entities/credentialEntity";

const credentialRepository = AppDataSource.getRepository(Credentials);

export default credentialRepository;

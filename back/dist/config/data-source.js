"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userEntity_1 = require("../entities/userEntity");
const credentialEntity_1 = require("../entities/credentialEntity");
const appointmentEntity_1 = require("../entities/appointmentEntity");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.HOST,
    port: envs_1.PORTBASE,
    username: envs_1.USER,
    password: envs_1.PASSWORD,
    database: envs_1.BASE,
    // dropSchema: true,
    entities: [userEntity_1.User, credentialEntity_1.Credentials, appointmentEntity_1.Appointments],
    synchronize: true,
    logging: false,
});

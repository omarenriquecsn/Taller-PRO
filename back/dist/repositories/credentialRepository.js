"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const credentialEntity_1 = require("../entities/credentialEntity");
const credentialRepository = data_source_1.AppDataSource.getRepository(credentialEntity_1.Credentials);
exports.default = credentialRepository;

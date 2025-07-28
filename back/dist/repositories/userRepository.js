"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const userEntity_1 = require("../entities/userEntity");
const userRepository = data_source_1.AppDataSource.getRepository(userEntity_1.User);
exports.default = userRepository;

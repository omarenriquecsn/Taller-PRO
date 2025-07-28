"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const appointmentEntity_1 = require("../entities/appointmentEntity");
const apptRepository = data_source_1.AppDataSource.getRepository(appointmentEntity_1.Appointments);
exports.default = apptRepository;

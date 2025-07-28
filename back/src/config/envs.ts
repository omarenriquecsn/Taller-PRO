import "dotenv/config";

export const PORT = process.env.PORT || 3000;
export const USER = process.env.DB_USER;
export const BASE = process.env.DB_NAME;
export const PASSWORD = process.env.DB_PASSWORD;
export const PORTBASE = Number(process.env.DB_PORT || 8080);
export const HOST = process.env.DB_HOST;



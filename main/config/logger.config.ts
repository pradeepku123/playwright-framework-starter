const winston = require("winston");

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

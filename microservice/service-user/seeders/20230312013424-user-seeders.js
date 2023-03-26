'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "Faizahel Joasa Ariesta",
        profession: "Admin Microservice and DevOps",
        role: "admin",
        email: "faizahel@gmail.com",
        password: await bcrypt.hash('qwerty123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Bakhtiar Rifa'i",
        profession: "FullStack Developer",
        role: "admin",
        email: "bakhtiar@gmail.com",
        password: await bcrypt.hash('qwerty123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Evan Fadhilla Wiraditya",
        profession: "FullStack Developer",
        role: "admin",
        email: "evan@gmail.com",
        password: await bcrypt.hash('qwerty123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Firman Apriandi Meliansa",
        profession: "FullStack Developer",
        role: "admin",
        email: "firman@gmail.com",
        password: await bcrypt.hash('qwerty123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Heru Firdan Al-Ghovari",
        profession: "FullStack Developer",
        role: "admin",
        email: "heru@gmail.com",
        password: await bcrypt.hash('qwerty123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Ramadhan Iman",
        profession: "FullStack Developer",
        role: "admin",
        email: "ramadhan@gmail.com",
        password: await bcrypt.hash('qwerty123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

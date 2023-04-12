'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Insert Data
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios',
      [
        {
          nome: 'Diego Troiani',
          foto: '',
          cpf: '41445535823',
          email: 'diego.troiani@crialed.com.br',
          departamento: 'Analista de Suporte',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Cláudio Guedes',
          foto: '',
          cpf: '34721022840',
          email: 'claudio.guedes@crialed.com.br',
          departamento: 'Gestor',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Caio Espíndola',
          foto: '',
          cpf: '59096098820',
          email: 'caio.espindola@crialed.com.br',
          departamento: 'Tecnico',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Mauro Barbosa',
          foto: '',
          cpf: '14520654890',
          email: 'mauro.barbosa@crialed.com.br',
          departamento: 'Tecnico',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Miriam Marques',
          foto: '',
          cpf: '78100785856',
          email: 'miriam.marques@crialed.com.br',
          departamento: 'Analista de Suporte',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Paula Justo',
          foto: '',
          cpf: '00100272894',
          email: 'paula.justo@crialed.com.br',
          departamento: 'Diretoria',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Liana Souza',
          foto: '',
          cpf: '77773449864',
          email: 'liana.souza@crialed.com.br',
          departamento: 'Comercial',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Fernanda Leite',
          foto: '',
          cpf: '35081151866',
          email: 'fernanda.leite@crialed.com.br',
          departamento: 'Logistica',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Jéssica Serrano',
          foto: '',
          cpf: '10465210805',
          email: 'jessica.serrano@crialed.com.br',
          departamento: 'Gestor',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Caroline Takeda',
          foto: '',
          cpf: '71387583832',
          email: 'caroline.takeda@crialed.com.br',
          departamento: 'Analista de Suporte',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        }

      ], {});
  },

  // Delete All Data
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

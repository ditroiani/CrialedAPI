'use strict';

// ENUM
var departamento = [
  'Diretoria',
  'Gestor',
  'Coordenador',
  'Logistica',
  'Comercial',
  'Analista de Suporte',
  'Tecnico'
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Create table
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      foto: {
        type: Sequelize.DataTypes.BLOB('medium')
      },
      cpf: {
        type: Sequelize.DataTypes.STRING(11),
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      departamento: {
        type: Sequelize.DataTypes.ENUM(departamento)
      },
      password: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  // Drop table
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios')
  }
};
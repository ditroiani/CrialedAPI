'use strict';

const categoria = [
  'Entretenimento',
  'Financeiro',
  'Posto de Combustível',
  'Conveniência',
  'Servços Automotivos',
  'Vestuario',
  'Alimenticio',
  'Restaurante',
  'Bar',
  'Supermercado',
  'Clinica',
  'Drogaria',
  'Imobiliária',
  'Construção',
  'Religioso'
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('instalacoes', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true
      },
      razao_social: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      cnpj: {
        type: Sequelize.DataTypes.STRING(15)
      },
      categoria: {
        type: Sequelize.DataTypes.ENUM(categoria)
      },
      logo: {
        type: Sequelize.DataTypes.BLOB
      },
      observacoes: {
        type: Sequelize.DataTypes.STRING(255),
        defaultValue: 'Sem observações.'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('instalacoes');
  }
};

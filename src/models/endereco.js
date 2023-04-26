import { Sequelize, Model, DataTypes } from "sequelize";

const siglaEstado = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MS",
  "MT",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_instalacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Instalacao",
          key: "id",
        },
      },
      logradouro: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      numero: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      bairro: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      cep: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      cidade: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      estado: {
        type: DataTypes.ENUM(siglaEstado),
        allowNull: false,
      },
    });
  }
}

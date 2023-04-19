import { Sequelize, DataTypes, Model } from "sequelize";

const categoria = [
  "Entretenimento",
  "Financeiro",
  "Posto de Combustível",
  "Conveniência",
  "Servços Automotivos",
  "Vestuario",
  "Alimenticio",
  "Restaurante",
  "Bar",
  "Supermercado",
  "Clinica",
  "Drogaria",
  "Imobiliária",
  "Construção",
  "Religioso",
];

class Instalacao extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        razao_social: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        cnpj: {
          type: DataTypes.STRING(15),
          unique: true,
        },
        categoria: {
          type: DataTypes.ENUM(categoria),
        },
        logo: {
          type: DataTypes.BLOB,
        },
        observacoes: {
          type: DataTypes.STRING(255),
        },
      },
      {
        sequelize,
      }
    );
  }
}

export default Instalacao;

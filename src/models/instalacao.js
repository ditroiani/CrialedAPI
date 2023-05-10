import { Sequelize, DataTypes, Model } from "sequelize";

class Instalacao extends Model {
  // Categoria
  static categoria = [
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

  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        razao_social: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        cnpj: {
          type: DataTypes.STRING(15),
          unique: true,
          allowNull: false,
        },
        categoria: {
          type: DataTypes.ENUM(Instalacao.categoria),
          allowNull: false,
        },
        logo: {
          type: DataTypes.BLOB("medium"),
          allowNull: false,
        },
        observacoes: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }
}

export default Instalacao;

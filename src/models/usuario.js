import { Sequelize, Model, DataTypes } from "sequelize";

const departamento = [
  "Diretoria",
  "Gestor",
  "Coordenador",
  "Logistica",
  "Comercial",
  "Analista de Suporte",
  "Tecnico",
];

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(100),
        },
        foto: {
          type: DataTypes.BLOB("medium"),
        },
        cpf: {
          type: DataTypes.STRING(11),
        },
        email: {
          type: DataTypes.STRING(50),
        },
        departamento: {
          type: DataTypes.ENUM(departamento),
        },
        password: {
          type: DataTypes.STRING(30),
        },
      },
      { sequelize }
    );
    return this;
  }
}

export default Usuario;

import { Sequelize, Model, DataTypes } from "sequelize";

class Usuario extends Model {
  // Departamentos
  static cdepartamentos = [
    "Diretoria",
    "Gestor",
    "Coordenador",
    "Logistica",
    "Comercial",
    "Analista de Suporte",
    "Tecnico",
  ];

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
          allowNull: false,
        },
        foto: {
          type: DataTypes.BLOB("medium"),
          allowNull: false,
        },
        cpf: {
          type: DataTypes.STRING(11),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        departamento: {
          type: DataTypes.ENUM(Usuario.departamentos),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      { sequelize }
    );
    return this;
  }
}

export default Usuario;

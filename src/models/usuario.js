import { Sequelize, Model, DataTypes } from "sequelize";
import utils from "../utils/utils.js";

class Usuario extends Model {
  // Departamentos
  static departamentos = [
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
          get() {
            return this.getDataValue("cpf").replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            );
          },
          set(val) {
            this.setDataValue("cpf", val.replace(/\D/g, ""));
          },
          validate: {
            isCPFValido() {
              if (!utils.validarCPF(this.cpf)) {
                throw new Error("CPF inválido");
              }
            },
          },
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            isEmail: {
              args: true,
              msg: "O e-mail deve ter um formato válido!"
            },
          },
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

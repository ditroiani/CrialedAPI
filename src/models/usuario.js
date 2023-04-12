import { Sequelize, Model, DataTypes } from 'sequelize'

const departamento = [
    'Diretoria',
    'Gestor',
    'Coordenador',
    'Logistica',
    'Comercial',
    'Analista de Suporte',
    'Tecnico'
]

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING
            },
            foto: {
                type: DataTypes.BLOB
            },
            cpf: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            departamento: {
                type: DataTypes.ENUM(departamento)
            },
            password: {
                type: DataTypes.STRING
            }
        }, { sequelize })
        return this
    }
}

export default Usuario
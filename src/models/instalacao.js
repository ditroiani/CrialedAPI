import { Sequelize, DataTypes, Model } from 'sequelize'

const categoria = {
    Entretenimento: 'Entretenimento',
    Financeiro: 'Financeiro',
    Posto_de_combustivel: 'Posto de Combustível',
    Conveniencia: 'Conveniência',
    Servicos_Automotivos: 'Servços Automotivos',
    Vestuario: 'Vestuario',
    Alimenticio: 'Alimenticio',
    Restaurante: 'Restaurante',
    Bar: 'Bar',
    Supermercado: 'Supermercado',
    Clinica: 'Clinica',
    Drogaria: 'Drogaria',
    Imobiliaria: 'Imobiliária',
    Construcao: 'Construção',
    Religioso: 'Religioso'
}

class Instalacao extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: false,
                primaryKey: true
            },
            razao_social: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            cnpj: {
                type: DataTypes.STRING(15),
                unique: true
            },
            categoria: {
                type: DataTypes.ENUM(categoria)
            },
            logo: {
                type: DataTypes.BLOB
            },
            observacoes: {
                type: DataTypes.STRING(255)
            }
        }
            , {
                sequelize
            })
    }
}

export default Instalacao
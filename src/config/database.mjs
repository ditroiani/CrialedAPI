import 'dotenv/config'
export default
  {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      'createdAt': 'created_at',
      'updatedAt': 'updated_at',
    },
    timezone: "-03:00" // Precisa ser configurado com algo pré definido
  }
import * as sequelize from 'sequelize';
import config from '../config/config';
import { UserFactory } from './User';


export const dbConfig = new sequelize.Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        dialect: 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: './tftanalyser.sqlite'
    },
)

export const User = UserFactory(dbConfig)

export default dbConfig
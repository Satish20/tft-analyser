import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

export interface UserAttributes {
    email: string;
    password: string;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes { }

export class User extends Model<UserModel, UserAttributes> {}
export type UserStatic = typeof Model & (new (values?: object, options?: BuildOptions) => UserModel);

export function UserFactory(sequelize: Sequelize): UserStatic {
    return sequelize.define("users", {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }) as UserStatic;
}


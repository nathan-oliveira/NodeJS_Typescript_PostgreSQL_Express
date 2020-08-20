'use strict'

import conn from '@src/bin/key';

export class UserLevelDAO {
    static getAll(callback: any): void {
        const sql = 'select * from drugstore.nivel_usuario';
        conn.query(sql, callback);
    }
}
'use strict'

import conn from '../../bin/key';

export class TestDAO {
    static getAll(callback: any): void {
        const sql = 'select * from drugstore.nivel_usuario';
        conn.query(sql, callback);
    }
}
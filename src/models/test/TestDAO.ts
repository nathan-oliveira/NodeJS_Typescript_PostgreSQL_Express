'use strict'

import conn from '../../bin/key';

export class TestDAO {
    static getAll(callback: any) {
        let sql = 'select * from drugstore.nivel_usuario';
        return conn.query(sql, callback);
    }
}
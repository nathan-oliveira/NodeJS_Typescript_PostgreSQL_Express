'use strict'

import pg from 'pg'

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432
})

module.exports = {
    query: (text, params) => pool.query(text, params),
};

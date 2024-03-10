//connection 

const { Client } = require('pg');

const client = new Client('postgres://euqrexgh:IoDMPnhGMGAbCzwws6qnpIsoE9sYP7sC@bubble.db.elephantsql.com/euqrexgh');


/*
{
    user: 'postgres',
    host: 'bubble.db.elephantsql.com',
    database: 'euqrexgh',
    password: 'IoDMPnhGMGAbCzwws6qnpIsoE9sYP7sC',
    port: 5432,
}
*/

async function check(){
    await client.connect()
    
}

check();
module.exports = client;
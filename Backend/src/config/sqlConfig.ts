// import * as dotenv from 'dotenv';
// dotenv.config();
import mssql from 'mssql'

export const dbConfig = {
    user: 'sa',
    password: '@SQLserver1258631t',
    database: 'notes',
    server: 'localhost',
    pool: {
        max: 10,
        min: 1,
        idleTimeoutMillis: 60000
    },
    options:{
        encrypt: false,
        trustCertificate: true
    }

}


export async function testConnection() {
    const pool = await mssql.connect(dbConfig)
  
    if(pool.connected) {
      console.log('Database connected successfully!')
    }else{
      console.log('not connected');
      
    }
  }
  
testConnection()
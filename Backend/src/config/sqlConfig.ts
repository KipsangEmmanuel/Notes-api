import * as dotenv from 'dotenv';
dotenv.config();
import mssql from 'mssql'

export const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
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
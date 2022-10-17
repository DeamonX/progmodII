import mysql from 'mysql';
import config from './config';

const params = {
    user: config.mysql.user,
    password: config.mysql.password,
    host: config.mysql.host,
    database: config.mysql.database
};

const Connect = async () => new Promise<mysql.Connection>((resolve,reject) => {
    const conn = mysql.createConnection(params);

    conn.connect((error)=>{
        if(error){
            reject(error)
            return;
        }
        resolve(conn);
    });
});

const Querry = async (conn:mysql.Connection, query: string) => new Promise((resolve, reject)=> {
    conn.query(query,conn, (error,result) =>{
        if(error){
            reject(error)
            return
        }
        resolve(result)
    });
});
export { Connect, Querry}
const mysql = require('mysql')

module.exports=()=> {
    let connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user:"root",
        password:"root",
        database:"zuoye"
    })

    connection.connect((error)=>{
        if(error){
            console.log("连接失败");
        }else{
            console.log("连接成功");
        }
    })



    return new Promise((reslove,reject)=>{
        connection.query('select * from user',(error,data)=>{
            if(error){
                reject(error)
            }else{
                reslove(data)
            }
            //必须关闭连接
            connection.end()
        })
    })
}
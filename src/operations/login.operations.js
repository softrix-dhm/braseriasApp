import { connectMssql } from '../database/mssql.js'

export const login = async (user, password) => {
    const pool = await connectMssql()
  
    try {
        const result = await pool.request()
            .input('Usuario', user)
            .input('Contraseña', password)            
            .execute('USP_SEL_Logeo')
            return result.recordset   
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}
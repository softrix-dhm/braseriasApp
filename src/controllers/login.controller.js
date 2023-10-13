import { login } from '../operations/login.operations.js';

export const Login = async (req,res) => {
    try {
        const { user,password } = req.body
        const r = await login(user,password)        

        if( r[0].Res === 0){
            return res.status(400).json({
                status: false,
                message: 'Error en Autenticacion',
                data: ''
            });
        }
        else{
            return res.status(200).json({
                status: true,
                message: 'Autenticacion Correcta',
                data: r[0]
            });
        }

        
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
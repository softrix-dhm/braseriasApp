import { listClientes } from '../operations/cliente.operations.js';

export const Cliente = async (req,res) => {
    try {        
        const lstClientes = await listClientes()                

        return res.status(200).json(lstClientes);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};
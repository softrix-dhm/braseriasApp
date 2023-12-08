import { PedidosIns, PedidosSel, TipoComprobanteSel, FormaPagoSel, LocalSel } from '../operations/pedidos.operations.js'

export const PedidosInsCtrl = async (req, res) => {    
    try {                
        const { 
            total,
            subTotal,
            igv,
            clienteId,
            localId,
            periodoId,
            usuario,
            vendedor,
            tipo,
            valIP,
            tipoComId,
            formPagId,
            lstProducts } = req.body
        
        const Response = await PedidosIns(
            total,
            subTotal,
            igv,
            clienteId,
            localId,
            periodoId,
            usuario,
            vendedor,
            tipo,
            valIP,
            tipoComId,
            formPagId,
            lstProducts)               

        return res.status(200).json(Response);
    } catch {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};
export const PedidosSelCtrl = async (req, res) => {    
    try {                
        const { VendedorId } = req.body                
        const Response = await PedidosSel(VendedorId)               

        return res.status(200).json(Response);
    } catch {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const TipoComprobanteCtrl = async (req, res) => {    
    try {                                   
        const Response = await TipoComprobanteSel()               

        return res.status(200).json(Response);
    } catch {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};
export const FormaPagoCtrl = async (req, res) => {    
    try {                                   
        const Response = await FormaPagoSel()               

        return res.status(200).json(Response);
    } catch {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};
export const LocalCtrl = async (req, res) => {    
    try {                                   
        const Response = await LocalSel()               

        return res.status(200).json(Response);
    } catch {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};
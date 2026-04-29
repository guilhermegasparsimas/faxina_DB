import { db } from '../../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {

    try {
        const {cpf, senha} = req.body;

        if (!cpf || !senha) {  
            return res.status(400).json({ message: "Cpf e senha são obrigatórios." });  
        }

        const [rows] = await db.query(  
            "SELECT nome, cpf, email, password_hash, tipo_usuario FROM usuario WHERE cpf = ? LIMIT 1",  
            [cpf]  
        );  
    
        if (rows.length === 0) {  
            return res.status(401).json({ message: "Credenciais inválidas." });  
        }  
    
        const user = rows[0];  // usuário encontrado, agora verificar a senha
    
        const ok = await bcrypt.compare(senha, user.password_hash);  // compara a senha fornecida com o hash armazenado no banco de dados
        if (!ok) {  
            return res.status(401).json({ message: "Credenciais inválidas." });  
        }  
    
        // JWT: "crachá" do usuário  
        const token = jwt.sign(  
            { 
                sub: user.id, 
                tipo_usuario: user.tipo_usuario 
            }, // payload (não coloque senha aqui)  
            process.env.JWT_SECRET,
            { 
                expiresIn: "1h" 
            }
        );  
    
        return res.json({  
            message: "Login realizado com sucesso.",  
            token,  
        });
        
        

    } catch (error) {
        res.status(500).json({message: 'Erro ao realizar login.', error: error.message});
    }
}

export  {
    login
};
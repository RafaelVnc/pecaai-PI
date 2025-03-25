import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
    let token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Acesso negado!" });
    }

    // Remover o prefixo "Bearer " do token
    token = token.replace("Bearer ", "");

    try {
        // Verificar e decodificar o token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Adicionar o payload decodificado no req.user
        next(); // Seguir para a próxima middleware ou rota
    } catch (error) {
        console.error("Erro ao validar token:", error);
        return res.status(403).json({ message: "Token inválido!" });
    }
};

export default authMiddleware;

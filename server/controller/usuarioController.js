import bcrypt from 'bcrypt';
import forge from "node-forge";
import Usuario from "../model/usuarioModel.js";
import { publicKey, privateKey } from '../config/keys.js';

const encryptPassword = (password) => {
    const rsaPublicKey = forge.pki.publicKeyFromPem(publicKey);
    const encrypted = rsaPublicKey.encrypt(password, "RSA-OAEP");
    return forge.util.encode64(encrypted);
};

const decryptPassword = (encryptedPassword) => {
    const rsaPrivateKey = forge.pki.privateKeyFromPem(privateKey);
    const decrypted = rsaPrivateKey.decrypt(
      forge.util.decode64(encryptedPassword),
      "RSA-OAEP"
    );
    return decrypted;
};

export const cadastrarUsuarioEstabelecimento = async (req, res) => {
    try {
        const { email, CPF, senha, telefone, endereco, nomeEstabelecimento } = req.body;
        const tipo = "Estabelecimento"
        
        const emailEncontrado = await Usuario.findOne({ email });
        const CPFEncontrado = await Usuario.findOne({ CPF });

        if (emailEncontrado) {
            return res.status(409).json({ errorMessage: "Email já cadastrado" });
        }
        if (CPFEncontrado) {
            return res.status(409).json({ errorMessage: "CPF já cadastrado" });
        }
        
        const encryptedPassword = encryptPassword(senha);

        const newUser = new Usuario({
          email,
          CPF,
          senha: encryptedPassword, 
          telefone,
          endereco,
          nomeEstabelecimento,
          tipo: tipo
        });
    
        await newUser.save();
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const cadastrarUsuarioCliente = async (req, res) => {
    try {
        const { email, CPF, senha, telefone, endereco } = req.body;
        const tipo = "Cliente"
        
        const emailEncontrado = await Usuario.findOne({ email });
        const CPFEncontrado = await Usuario.findOne({ CPF });

        if (emailEncontrado) {
            return res.status(409).json({ errorMessage: "Email já cadastrado" });
        }
        if (CPFEncontrado) {
            return res.status(409).json({ errorMessage: "CPF já cadastrado" });
        }


        const encryptedPassword = encryptPassword(senha);

        const newUser = new Usuario({
          email,
          CPF,
          senha: encryptedPassword, 
          telefone,
          endereco,
          tipo: tipo
        });
    
        await newUser.save();
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const logarUsuario = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const usuarioEncontrado = await Usuario.findOne({ email });
        if (!usuarioEncontrado) return res.status(404).json({ errorMessage: "Usuário não encontrado" });

        const decryptedPassword = decryptPassword(usuarioEncontrado.senha);

        if (senha !== decryptedPassword) {
            return res.status(401).json({ error: "Senha incorreta" });
        }

        res.status(200).json({ message: "Login efetuado!"});
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const atualizarUsuario = async (req, res) => {
    const { senha, novoEmail, novoCPF, novoTelefone, novoEndereco, novoNomeEstabelecimento, novaSenha } = req.body;

    try {
        const _id = req.params.id;

        const usuario = await Usuario.findOne({ _id })

        const decryptedPassword = decryptPassword(usuario.senha);
        if (senha !== decryptedPassword) {
            return res.status(401).json({ errorMessage: "Senha atual incorreta!" });
        }

        if (novoEmail && novoEmail !== usuario.email) {
            const emailExistente = await Usuario.findOne({ email: novoEmail });
            if (emailExistente) return res.status(409).json({ errorMessage: "Email já cadastrado" });
        }

        if (novoCPF) {
            const CPFExistente = await Usuario.findOne({ CPF: novoCPF });
            if (CPFExistente) return res.status(409).json({ errorMessage: "CPF já cadastrado" });
        }

        if (novaSenha) {
            const encryptedPassword = encryptPassword(novaSenha);
            usuario.senha = encryptedPassword;
        }

        if (novoEmail) usuario.email = novoEmail;
        if (novoCPF) usuario.CPF = novoCPF;
        if (novoTelefone) usuario.telefone = novoTelefone;
        if (novoEndereco) usuario.endereco = novoEndereco;
        
        if (usuario.tipo == "Estabelecimento" && novoNomeEstabelecimento) usuario.nomeEstabelecimento = novoNomeEstabelecimento;

        await usuario.save();

        res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};


import bcrypt from 'bcrypt';
import forge from "node-forge";
import Usuario from "../model/usuarioModel.js";
import { publicKey, privateKey } from '../config/keys.js';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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

const validaCPF = (cpf) => {
    // Remove caracteres não numéricos, caso haja
    cpf = cpf.replace(/[^\d]+/g, '');

    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Validação dos dígitos verificadores
    let soma = 0;
    let resto;

    // Valida o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    // Valida o segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

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
        if (!validaCPF(CPF)){
            return res.status(400).json({
                errorMessage: "CPF inválido!"
            });
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
        if (!validaCPF(CPF)){
            return res.status(400).json({
                errorMessage: "CPF inválido!"
            });
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

        if (!email || !senha) {
            return res.status(400).json({ errorMessage: "Email e senha são obrigatórios" });
        }

        const usuarioEncontrado = await Usuario.findOne({ email });
        if (!usuarioEncontrado) return res.status(404).json({ errorMessage: "Credenciais incorretas." });

        if (senha !== decryptPassword(usuarioEncontrado.senha)) {
            return res.status(401).json({ error: "Credenciais incorretas." });
        }
        
        const JWT_SECRET = process.env.JWT_SECRET
 
        const token = jwt.sign({idUsuario: usuarioEncontrado._id}, JWT_SECRET, { expiresIn: '24h'});

        res.status(200).json({ message: "Login efetuado!", token });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const atualizarUsuario = async (req, res) => {
    const { senha, novoEmail, novoTelefone, novoEndereco, novoNomeEstabelecimento, novaSenha } = req.body;

    try {
        const _id = req.params.id;

        const usuario = await Usuario.findOne({ _id })

        if (senha !== decryptPassword(usuarioEncontrado.senha)) {
            return res.status(401).json({ error: "Credenciais incorretas." });
        }

        if (novoEmail && novoEmail !== usuario.email) {
            const emailExistente = await Usuario.findOne({ email: novoEmail });
            if (emailExistente) return res.status(409).json({ errorMessage: "Email já cadastrado" });
        }

        if (novaSenha) {
            const encryptedPassword = encryptPassword(novaSenha);
            usuario.senha = encryptedPassword;
        }

        if (novoEmail) usuario.email = novoEmail;
        if (novoTelefone) usuario.telefone = novoTelefone;
        if (novoEndereco) usuario.endereco = novoEndereco;
        
        if (usuario.tipo == "Estabelecimento" && novoNomeEstabelecimento) usuario.nomeEstabelecimento = novoNomeEstabelecimento;

        await usuario.save();

        res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};


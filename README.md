<a href="https://www.figma.com/design/rHnClKDSuX3tgjkMPyievj/Prot%C3%B3tipos-funcionalidades---PI?node-id=0-1&t=VXQW2h70S5ibVwDG-0">
  <img alt="Layout Gerenciador Figma" src="https://img.shields.io/badge/Acessar%20Prototipos%20Gerenciador%20-Figma-%2304D361">
</a>
<a href=https://www.figma.com/design/dNOEUGGdTWjcNF1aYDXEbG/Prototipo-PI---site?node-id=0-1&t=fTFieJN6rOKHwzEO-0>
  <img alt="Layout Página inicial Figma" src="https://img.shields.io/badge/Acessar%20Prototipos%20Landing%20Page%20-Figma-%2304D361">
</a>
<a href=https://trello.com/b/8EgfAWCg/backlog-pi3>
  <img alt="Link Quadro Trello" src="https://img.shields.io/badge/Acessar%20Backlog%20-Trello-%3204">
</a>
<a href=https://youtu.be/8yFosP7a5uY?si=FXR68K8JVo7Xmzcd>
  <img alt="Link Video Showcase" src="https://img.shields.io/badge/Acessar%20Video%20Showcase%20-Youtube-FF0000">
</a>

# Configure .env
```
# Crie um arquivo ".env" dentro da pasta server

# Preencha as seguintes variáveis:
PORT (Porta do servidor backend a ser usada)
MONGO_URL (URL do banco de dados mongo)
PUBLIC_KEY_PATH = ./config/public.pem (Padrão)
PRIVATE_KEY_PATH = ./config/private.pem (Padrão)
JWT_SECRET (qualquer sequência de caracteres, desde que seja secreta, aleatória e suficientemente longa para garantir a segurança da assinatura dos tokens JWT.)

```

# Baixando dependências (Somente na 1°vez rodando)
```
cd client
npm i

cd ..

cd server
npm i
```

# Rodando
```
Terminal Client
cd client 
npm run dev

Terminal Server
cd server 
npm start
```
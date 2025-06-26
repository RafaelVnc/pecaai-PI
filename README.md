

# Peça Aí!
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

# Introdução
## Contextualização
Com o aumento da demanda por agilidade, precisão e integração nos serviços de alimentação, estabelecimentos têm buscado soluções tecnológicas que permitam a automatização do fluxo de pedidos. A utilização de papel e comunicação verbal entre salão e cozinha está cada vez mais obsoleta, gerando erros, atrasos e retrabalhos. A digitalização desse processo melhora a comunicação interna, reduz erros operacionais e aumenta a produtividade.
## Escopo da aplicação
A aplicação tem como escopo central a digitalização e otimização do processo de criação e gerenciamento de pedidos em um único estabelecimento do setor alimentício, como um restaurante, bar ou lanchonete. Ela permite ao garçom criar pedidos com base nos itens
cadastrados no cardápio, além de oferecer funcionalidades para a gestão do cardápio e o acompanhamento do status dos pedidos pela cozinha (Recebido, Em produção, Concluído).
## Objetivo da aplicação
O objetivo principal é fornecer uma ferramenta simples, direta e eficiente para o gerenciamento de pedidos em restaurantes, focando na agilidade do atendimento, clareza da comunicação entre garçom e cozinha e facilidade de controle dos itens do cardápio.
# Proposta de solução
## Viabilidade
- Tecnológica: A aplicação pode ser desenvolvida com tecnologias web modernas (ex: HTML, CSS, JavaScript, ExpressJS, React, etc.), acessível por navegador em tablets ou computadores utilizados por garçons e cozinheiros.
- Financeira: Reduz custos com retrabalho, desperdício e papel, além de ser escalável para uso interno sem depender de marketplaces.
- Operacional: Não requer uma mudança drástica nos processos; substitui de forma natural o papel pelo digital.
## Alinhamento com o Problema de Mercado
O setor de alimentação enfrenta problemas como pedidos mal anotados, comunicação confusa entre salão e cozinha, e lentidão no atendimento. Esta aplicação alinha-se diretamente a essas dores, propondo uma interface prática para eliminar esses gargalos.
## Inovação
Ao contrário de grandes sistemas voltados a redes de restaurantes ou apps de delivery, esta aplicação é personalizada para um único estabelecimento com foco total no fluxo interno, oferecendo uma solução leve, de fácil uso e adaptada à realidade do pequeno
empresário. 
# Funcionalidade propostas
## Autenticação e Gestão de Estabelecimentos:
- Cadastro de novos estabelecimentos na plataforma.
- Login seguro para acesso às funcionalidades de gestão.
- Atualização das informações do estabelecimento.
## Gerenciamento Completo do Cardápio:
- Adição de novos itens ao cardápio, com campos para nome, descrição, preço e upload de foto.
- Edição das informações de itens existentes.
- Exclusão de itens do cardápio.
- Visualização da lista de itens cadastrados.
## Criação e Acompanhamento de Pedidos:
- Interface para registrar novos pedidos, selecionando itens do cardápio.
- Visualização da lista de pedidos realizados com ordenação
- Atualização do status de cada pedido.
## Interface de Usuário (Front-end):
- Navegação organizada através de um menu lateral (Sidebar).
- Páginas dedicadas para cada funcionalidade principal: Home, Cardápio, Pedidos, Dashboard, Relatórios (embora a implementação detalhada destas últimas precise de análise mais aprofundada).
- Rotas protegidas que exigem autenticação para acesso às áreas de gestão.
- Componentes reutilizáveis para formulários, listas e modais, garantindo consistência visual.
## Backend (Servidor):
- API RESTful para comunicação entre o front-end e o servidor.
- Lógica de negócios para processar cadastros, logins, operações no cardápio e
gerenciamento de pedidos.
- Persistência de dados (detalhes sobre o banco de dados serão abordados na seção
de tecnologias).
- Autenticação e autorização para proteger as rotas da API.

# Como Rodar?
## Configure .env
```
# Crie um arquivo ".env" dentro da pasta server

# Preencha as seguintes variáveis:
PORT (Porta do servidor backend a ser usada)
MONGO_URL (URL do banco de dados mongo)
PUBLIC_KEY_PATH = ./config/public.pem (Padrão)
PRIVATE_KEY_PATH = ./config/private.pem (Padrão)
JWT_SECRET (qualquer sequência de caracteres, desde que seja secreta, aleatória e suficientemente longa para garantir a segurança da assinatura dos tokens JWT.)

```

## Baixando dependências (Somente na 1°vez rodando)
```
cd client
npm i

cd ..

cd server
npm i
```

## Rodando
```
Terminal Client
cd client 
npm run dev

Terminal Server
cd server 
npm start
```

# Equipe de desenvolvimento
## Edilson Alves da Silva
## Rafael Oliveira Venancio 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-oliveira-venancio-6904122a6/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RafaelVnc)
## Victor Hugo Alves
## Wesley Ricardo Oliveira da Silva

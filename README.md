# Projeto Araripebnb

Este é um projeto Vue 3 configurado para rodar com a versão Node v16.20.2. A estrutura da arquitetura foi baseada na documentação disponível [aqui](https://fadamakis.com/a-front-end-application-folder-structure-that-makes-sense-ecc0b690968b).

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- [Node.js v16.20.2](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) ou [yarn](https://yarnpkg.com/getting-started/install)

## Instalação

Siga os passos abaixo para configurar o projeto:

1. Clone o repositório:
   ```sh
   git clone https://github.com/PedroAraripe/ui-htl.git
   cd ui-htl
   ```

2. Instale as dependências do projeto:
   ```sh
   npm install
   ```

   ou

   ```sh
   yarn install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, use o comando:

```sh
npm run dev
```

ou

```sh
yarn dev
```

O servidor será iniciado e você poderá acessar a aplicação no navegador através da URL que aparecerá no terminal.

## Estrutura do Projeto

A estrutura do projeto segue as melhores práticas de arquitetura de front-end. Para mais detalhes sobre a arquitetura utilizada, consulte a [documentação da arquitetura](https://fadamakis.com/a-front-end-application-folder-structure-that-makes-sense-ecc0b690968b).

## Scripts Disponíveis

- `npm run dev` ou `yarn dev`: Inicia o servidor de desenvolvimento.
- `npm run build` ou `yarn build`: Gera a build para produção.
- `npm run serve` ou `yarn serve`: Inicia um servidor local para servir a build de produção.
- `npm run nomeNovaFeature`: Cria as pastas para uma nova feature automaticamente em `@/features/nomeNovaFeature`.

## Criando uma Nova Feature

Para criar uma nova feature, basta rodar o comando:

```sh
npm run nomeNovaFeature
```

Este comando criará automaticamente as pastas necessárias para a nova feature em `@/features/nomeNovaFeature`.

Espero que isso ajude! Se precisar de mais alguma coisa, estou à disposição.

## Instalação

Principais features:

1. Busca de hóteis por filtro:
   ```sh
   Listagem de hóteis e possibilidade de filtrar por número de hóspedes, localidade etc
   ```

2. Hotéis favoritos:
   ```sh
   É possível que o usuário adicione um hotel a lista de favoritos clicando no ícone de coração no card de hotel e assim compare os seus hotéis desejados
   ```

3. Ordenação de lista de hotéis:
   ```sh
   Tanto para a listagem inicial quanto para a listagem de favoritos é possível ordenar por preço ou avaliações
   ```

4. Responsividade:
   ```sh
   Todo o projeto está com responsividade e boa usabilidade 
   ```

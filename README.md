# Teste técnico - +loot games - TO DO LIST.

## 🛠️ -Ferramentas e Utilitários:

##### Javascript, Bootstrap5, Typescript, React.JS, Node.JS, Express.JS e PostgreSQL.

## ⭐ Configurando a API (back-end)

Você precisará ter todos os programas listados abaixo instalados em sua máquina.

- Node.JS **V.16+**
- PostgreSQL
- Bash (GitBash, PowerShell, BASH)

​	

​	Pós clonar o projeto, você deverá configurar seu POSTGRES SQL, visto que cada máquina possui um usuário e senha para logar no banco de dados instalado. Você precisará do username, password e um banco de dados criado dentro do POSTGRES. (As informações  solicitadas serão usadas no arquivo .ENV, localizado na raiz do projeto Backend)



1. Depois de configurar seu postgres, abra o arquivo .ENV localizado em backend/.env utilizando seu editor de código (VS Code, Pycharm ou outro), e configure as variáveis de ambiente conforme solicitadas as chaves.

   Onde:

   `DB_HOST="localhost"` //Host utilizado para acessar o servidor (Pode deixar como padrão)

   `DB_PORT=5432` //Porta onde o servidor do banco de dados irá rodar (Por padrão é a 5432)

   `DB_USER="postgres"` //Nome de usuário configurado no Postgre SQL

   `DB_PASS="postgres"` //Senha configurad no Postgre SQL

   `DB_NAME="lootgames"` // Nome do banco de dados criado no POSTGRE ( NOTE QUE VOCÊ DEVE CRIAR UM BANCO, A MIGRATION NÃO CONSEGUE CRIAR AUTOMATICAMENTE.)

   `PORT=3030` //Porta  de onde o servidor irá rodar, (Pode alterar caso seja necessário)
   
2. Feito a configuração do banco de dados e do arquivo ENV, com o terminal aberto na pasta raiz do BACKEND, digite `npm install` para instalar as dependências necessárias. (**NÃO UTILIZE `yarn --i` POIS ALGUMAS DEPENDÊNCIAS FORAM INSTALADAS UTILIZANDO O NPM!**) 
   
3. Você também precisará gerar o arquivo de migrations utilizando o comando `yarn migration:generate` e logo depois `yarn migration:run` para rodar as migrations e criar as tabelas no banco de dados. (Você pode acessar todos os scripts dentro do arquivo `package.json`)

4. Pronto, você já pode rodar o servidor utilizando o comando `yarn dev`.


Você pode fazer requisições manuais para o servidor utilizando Insomnia ou Postman, abaixo está uma breve descrição dos endpoints.

- **GET** - `localhost:3030/all-tasks`

- **POST** - `localhost:3030/new-task` 

  passando no body em json o seguinte objeto:

  {
  	"name": "Organizar",
  	"description": "Criar uma tarefa de exemplo."
  }

- **PUT** - `localhost:3030/update-task/{ID}`

  {
  	"name": "Atualizar",
  	"description": "Atualizando essa tarefa"
  }

- **DELETE**  - `localhost:3030/delete-task/{id}`

  

# Configurando o Frontend


1. Na pasta raiz do projeto front-end, abra o terminal e digite `yarn install` para instalar as dependências necessárias e logo depois `yarn dev` para rodar o projeto. :)



###### Made @[jefinskts](https://www.instagram.com/jefinskts/)

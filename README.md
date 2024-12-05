<<<<<<< HEAD

## 📋 Projeto Final
Neste projeto final, você irá consolidar os conhecimentos adquiridos durante o curso. A proposta é criar uma aplicação funcional, com design acessível e responsivo, que apresente os dados fornecidos pela API de forma clara e interativa.

Você foi contratado para criar um sistema front-end que consuma dados de uma API e exiba informações de maneira intuitiva e organizada. A aplicação será uma plataforma de consulta que integra dados de filmes, livros, times de futebol, produtos de e-commerce, animes e jogos, **você pode escolher o tema**. O sistema será usado por clientes que desejam explorar essas categorias para descobrir detalhes relevantes.

## 🎯 Temas
- Filmes: Lista de filmes com informações sobre título, diretor, data de lançamento, e avaliação.
- Livros: Biblioteca com título, autor, data de publicação e avaliação.
- Times de Futebol: Informações sobre times, país de origem, estádio e jogadores principais.
- Produtos de E-commerce: Loja virtual com nome, preço, descrição e imagem de produtos.
- Animes: Lista de animes com título, número de episódios, status e avaliação.
- Jogos: Catálogo de jogos com título, plataforma, gênero e data de lançamento.

 ## 📄 Documentação da API

Para mais informações sobre a API, você pode acessar o repositório oficial da documentação no GitHub:

👉 [Campinho Digital - API Documentation](https://github.com/campinho-digital/api-doc)


## ✅ Critérios de Aceitação

Este projeto avalia suas habilidades em React, aplicando conceitos fundamentais e boas práticas de desenvolvimento. Certifique-se de atender a todos os critérios abaixo para garantir uma aplicação funcional e bem estruturada.

## 1. Consumo de Dados de uma API
### 1.1 Requisição
- Realizar uma requisição à API usando o método **GET**.
- Utilizar a biblioteca **axios** ou a função nativa `fetch` para buscar os dados.

### 1.2 Tratamento de Erros
- Tratar possíveis erros, como:
  - Falhas na conexão.
  - Endpoint inexistente.
- Exibir mensagens amigáveis ao usuário, como:
  > _"Não foi possível carregar os dados. Tente novamente mais tarde."_

---

## 2. Listagem de Dados
### 2.1 Exibição dos Dados
- Exibir os dados retornados pela API de maneira clara e organizada, utilizando componentes React.

### 2.2 Layout com Informações Básicas
- Incluir informações relevantes relacionadas ao tema escolhido:
  - **Filmes:** Título, diretor, avaliação.
  - **Livros:** Título, autor, data de publicação.
  - **Produtos:** Nome, preço, imagem.
  - **Animes:** Título, número de episódios.
  - **Jogos:** Título, plataforma, gênero.

### 2.3 Renderização Dinâmica
- Os dados devem ser renderizados dinamicamente, sem elementos "fixos" no código.

---

## 3. Componentes
### 3.1 Estruturação
- Utilize **componentes funcionais** para organizar o projeto em partes reutilizáveis e de fácil manutenção.

### 3.2 Exemplos de Componentes
- **Card:** Para exibir itens individuais.
- **App:** Componente principal para carregar e gerenciar os dados.

### 3.3 Uso de Props
- Trabalhe com **props** para passar dados entre os componentes.

### 3.4 Responsabilidade Única
- Garanta que cada componente tenha uma única responsabilidade, facilitando a legibilidade e manutenção.

---

## 4. Uso de Hooks
### 4.1 Hooks Básicos
- **`useState`:** Para gerenciar o estado da aplicação, como:
  - Dados recebidos da API.
  - Mensagens de erro.
  - Estado de carregamento.
- **`useEffect`:** Para realizar a requisição à API quando o componente for montado.

---

## 5. Estilização com CSS
### 5.1 Requisitos Gerais
- Aplique CSS para garantir uma interface:
  - **Esteticamente agradável.**
  - **Visualmente organizada.**
  - **Responsiva**, para que funcione bem em diferentes dispositivos (ex.: desktop e mobile).

### 5.2 Estilização de Componentes
- **Cartões (Card):** Exiba as informações de maneira visualmente clara.
- **Layout Principal (App):** Organize os itens em um formato de grade ou lista.

---

## 6. Apresentação do Trabalho
### 6.1 Explicação do Projeto
- Explique o funcionamento do projeto e as decisões tomadas durante o desenvolvimento.

### 6.2 Destaques
- Organização dos componentes:
  - Descreva os componentes principais e suas responsabilidades.
- Uso de hooks:
  - Mostre como os **hooks** foram utilizados para gerenciar estado e realizar efeitos colaterais.
- Consumo da API:
  - Demonstre como foi realizado o consumo da API e o tratamento de erros.
- Solução para lidar com erros:
  - Explique as estratégias implementadas para exibir mensagens amigáveis ao usuário.
- Layout e estilização:
  - Destaque como os estilos foram aplicados para tornar a interface clara e responsiva.

### 6.3 Demonstração
- Mostre a aplicação rodando no navegador.
- Exiba as funcionalidades principais:
  - Exibição de dados.
  - Tratamento de erros.
  - Responsividade e organização do layout.
  - 
## 🎨 Layout e Estilização

O layout da aplicação é **de livre critério**, permitindo que você explore sua criatividade e aplique os conceitos de design aprendidos no curso. Sinta-se à vontade para buscar referências visuais em sites, aplicativos ou outras fontes de inspiração.

### 💡 Dicas para Desenvolver o Layout
- Reassista aos **encontros sobre design** para relembrar:
  - Conceitos de **hierarquia visual**.
  - Uso adequado de **espaçamento** e **tipografia**.
  - Princípios de **design responsivo**.
- Escolha cores e fontes que mantenham uma **boa legibilidade** e que estejam alinhadas ao tema escolhido.
- Estruture os dados de forma organizada, usando:
  - **Cartões (cards)** para itens individuais.
  - **Grid ou lista** para exibir conjuntos de dados.

Lembre-se de garantir que o design seja acessível, responsivo e agradável para o usuário. 🚀


### ✅ Checklist Básico para o Projeto

- [ ] **O consumo da API funciona corretamente.**
  - A aplicação realiza requisições `GET` e consome os dados da API sem falhas.

- [ ] **Os dados são exibidos dinamicamente.**
  - Os dados retornados pela API são renderizados dinamicamente na interface, sem elementos fixos no código.

- [ ] **Mensagens amigáveis são exibidas em caso de erro.**
  - Em situações de falha (ex.: API fora do ar ou erro de conexão), mensagens claras e amigáveis são exibidas ao usuário.

- [ ] **Componentes são reutilizáveis e organizados.**
  - Os componentes React seguem o princípio de responsabilidade única e são reutilizáveis em diferentes partes do projeto.

- [ ] **Hooks foram utilizados adequadamente.**
  - O estado da aplicação é gerenciado com `useState`.
  - Requisições à API e outros efeitos colaterais utilizam `useEffect`.

- [ ] **Estilização está clara, visualmente agradável e responsiva.**
  - A interface é organizada e esteticamente agradável.
  - O layout é responsivo, adaptando-se bem a dispositivos móveis, tablets e desktops.



## 🔧 Passo a Passo para Desenvolvimento: 

#### ⚠️ Atenção 
Este projeto não precisa ser forkado, pois o repositório fornecido contém apenas as instruções para o desenvolvimento.

Você deve criar o projeto do zero, seguindo as orientações apresentadas neste guia. Isso inclui configurar o ambiente, consumir a API, criar componentes e estilizar a interface.

Certifique-se de criar um novo repositório no GitHub para versionar e organizar o código que você desenvolverá. 🚀

### Crie o Projeto com Vite O Vite é uma ferramenta rápida para criar aplicações modernas em frameworks como React. Para iniciar:

~~~javascript
npm create vite@latest projeto-final --template react
cd projeto-final
npm install
~~~

#### Instale Dependências Necessárias Adicione o axios para consumo de APIs:

~~~javascript
npm install axios

~~~

### Estrutura do Projeto Organize os arquivos para manter o código claro e reutilizável:

~~~javascript
src/
├── components/
│   ├── Card.jsx
├── api/
│   ├── api.js
├── App.jsx
├── main.jsx
└── styles/
    ├── global.css
    └── card.css
~~~


### Crie um arquivo para centralizar as chamadas da API:
~~~javascript
import axios from 'axios';

const BASE_URL = 'https://ecom-back-strapi.onrender.com/api';

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar dados de ${endpoint}:`, error);
        throw error;
    }
};

~~~

### Um componente reutilizável para exibir itens em formato de cartão:

~~~javascript
const Card = ({ data }) => (
    <div className="card">
        <h3>{data.title || data.name}</h3>
        {data.image && <img src={data.image} alt={data.title || data.name} />}
        <p>{data.description || 'Sem descrição disponível.'}</p>
    </div>
);

export default Card;

~~~



## 🚀 Hacker Edition: Aprimorando o Projeto da Loja Virtual
Se você está pronto para ir além e aprender mais sobre desenvolvimento web, aqui estão algumas sugestões e recursos para aprimorar o seu projeto de loja virtual. Essas adições não apenas melhorarão a experiência do usuário, mas também darão a você uma compreensão mais profunda do desenvolvimento JavaScript e do front-end.

1. Testes Unitários com Jest

- Adicione testes para suas funções usando Jest.

- Verifique se as funções de busca e manipulação de produtos funcionam corretamente.
- Use npm install --save-dev jest para instalar.
  
2. Tratamento de Erros Específicos

- Crie funções para exibir mensagens de erro específicas na interface.
- Utilize try-catch para lidar com erros durante chamadas à API.
- Exiba mensagens claras para o usuário, como "Erro ao carregar os produtos".
  
3. Loading Spinner

4. Adicione Navegação
- Substitua o texto "Carregando..." por um spinner animado.

5. Use React Router para permitir troca entre temas:
`/movies` 
`/books`
`/futebol`

6. Implemente uma barra de busca para filtrar os itens pelo título.
 
7. Persistência de Dados
- Utilize localStorage ou sessionStorage para manter os dados do carrinho entre as sessões do usuário.
  
8. Documentação
- Crie uma documentação clara para seu projeto, explicando como configurá-lo, executá-lo e como funcionam suas principais funcionalidades.
- 
## 🔗 Links Úteis para React

Use esses recursos para aprimorar seus conhecimentos e resolver dúvidas durante o desenvolvimento!

### 🌐 Documentação Oficial
- [React - Documentação Oficial](https://reactjs.org/docs/getting-started.html)  
  Guia completo para começar a desenvolver aplicações React, com explicações detalhadas sobre os principais conceitos e APIs.

### 📚 Tutoriais e Guias
- [React for Beginners - FreeCodeCamp](https://www.freecodecamp.org/news/react-beginner-handbook/)  
  Um guia para iniciantes cobrindo os fundamentos do React.
  
- [ReactJS Cheatsheet](https://devhints.io/react)  
  Um resumo rápido dos principais conceitos e APIs do React.

### 🎥 Vídeos e Cursos
- [React Basics - YouTube](https://www.youtube.com/watch?v=ttfRRdONvxM)  
  Busque vídeos gratuitos que abordam desde os conceitos básicos.

- [React com Vite](https://www.youtube.com/watch?v=1ZDbOkW5ITs)  
  Uma playlist popular e bem explicada sobre React no YouTube.

### 🛠️ Ferramentas e Recursos
- [Create React App](https://create-react-app.dev/)  
  Ferramenta oficial para configurar rapidamente um projeto React.

- [Vite](https://vitejs.dev/)  
  Uma alternativa moderna e super rápida para criar aplicações React.

- [React Icons](https://react-icons.github.io/react-icons/)  
  Biblioteca de ícones para integrar facilmente com React.

- [Styled Components](https://styled-components.com/)  
  Biblioteca para estilização no React usando JavaScript.

### 🧪 Testes e Depuração
- [React Developer Tools](https://react.dev/tools)  
  Ferramenta oficial para depuração de componentes React no navegador.

- [Jest - Testing Framework](https://jestjs.io/)  
  Framework de testes para React e JavaScript.

### 🏗️ Comunidade
- [Stack Overflow - ReactJS](https://stackoverflow.com/questions/tagged/reactjs)  
  Encontre respostas para dúvidas frequentes e problemas comuns no React.

- [Reddit - ReactJS Community](https://www.reddit.com/r/reactjs/)  
  Um espaço para discutir e aprender sobre React com outros desenvolvedores.

### 🚀 Extras
- [React Design Patterns](https://baguilar6174.medium.com/react-design-patterns-6ab55c5ebafb) 

- [8 best practices + Folder Structure](https://medium.com/@kthamodaran/react-8-best-practices-folder-structure-5dbda48a69e)

- [React Best Practices to Improve Your Code](https://medium.com/@onix_react/react-best-practices-to-improve-your-code-a4c68962d5dd)
  

## **Boa sorte e bom código!** 🚀📘

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 52693a1 (enviando codigos do projeto)

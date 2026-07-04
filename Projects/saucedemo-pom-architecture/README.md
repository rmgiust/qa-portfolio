# 🇧🇷 Projeto: Automação de E-commerce com Arquitetura Page Objects (Web + JS)
# 🇺🇸 Project: E-Commerce Automation with Page Objects Architecture (Web + JS)

---

## 🇧🇷 Visão Geral do Projeto
Este projeto implementa uma suíte de testes de ponta a ponta (E2E) altamente resiliente para a aplicação de e-commerce **Sauce Demo**. O objetivo principal foi mover a automação de scripts procedurais comuns (código desorganizado e solto) para um padrão de engenharia de software maduro, focado em manutenibilidade, escalabilidade e execução estável em esteiras de Integração Contínua (CI/CD).

## 🇺🇸 Project Overview
This project implements a highly resilient End-to-End (E2E) test suite for the **Sauce Demo** e-commerce application. The primary objective was to transition automation from common procedural scripting (loose and unorganized code) toward a mature software engineering pattern, focusing on maintainability, scalability, and stable execution within Continuous Integration (CI/CD) pipelines.

---

## 🛠️ 🇧🇷 Diferenciais Técnicos & Boas Práticas Aplicadas
- **Page Objects Pattern (POM):** Separação estrita entre os seletores/ações da interface (ex: `LoginPage.js`, `CartPage.js`) e a lógica de negócios contida nos scripts de teste (`.cy.js`).
- **Gerenciamento Dinâmico de Massa de Dados (Fixtures):** Eliminação de credenciais fixas (*hardcoded*). O mecanismo assíncrono nativo `cy.fixture()` foi utilizado para ler arquivos JSON e injetar dados dinamicamente usando funções de callback (`.then()`).
- **Desacoplamento entre ID Técnico e Texto de Validação:** IDs técnicos de elementos foram estritamente separados do texto legível final através de constantes locais (`productId` vs. `productText`), mitigando riscos de tradução da interface e tratando o assincronismo do framework de forma sênior.
- **Testes Anti-Flaky (Sem esperas fixas):** Pausas arbitrárias (`cy.wait(ms)`) foram banidas. A sincronização depende inteiramente do mecanismo de retentativa implícita do Cypress (*retry-ability*) combinado com asserções declarativas (`.should()`).
- **Controle de Estado via Hooks:** Utilização de ganchos `beforeEach` para resetar o estado da aplicação e gerenciar pré-requisitos antes de cada cenário, garantindo isolamento total e aderência ao princípio DRY (*Don't Repeat Yourself*).

## 🇺🇸 Technical Highlights & Applied Best Practices
- **Page Objects Pattern (POM):** Strict separation between UI selectors/actions (e.g., `LoginPage.js`, `CartPage.js`) and the business logic contained within the test specs (`.cy.js`).
- **Dynamic Data Management (Fixtures):** Hardcoded credentials were eliminated. The native asynchronous `cy.fixture()` mechanism was utilized to read JSON files and inject data dynamically using callback functions (`.then()`).
- **Decoupling Technical ID from Validation Text:** Element technical IDs were strictly separated from the final readable text using local constants (`productId` vs. `productText`), mitigating UI translation risks and handling framework asynchrony like a senior engineer.
- **Anti-Flaky Tests (No Hard Waits):** Arbitrary pauses (`cy.wait(ms)`) were banned. Synchronization relies entirely on Cypress's implicit retry mechanism (*retry-ability*) combined with declarative assertions (`.should()`).
- **State Control via Hooks:** Use of `beforeEach` hooks to reset the application state and manage pre-requisites before each scenario, ensuring total test isolation and adherence to the DRY (*Don't Repeat Yourself*) principle.

---

## 📂 🇧🇷 Estrutura do Projeto / 🇺🇸 Project Structure
```text
saucedemo-pom-architecture/
├── cypress/
│   ├── e2e/
│   │   └── customer-journey.cy.js  # Fluxo completo de ponta a ponta (E2E)
│   │   └── login.cy.js  # Fluxo de login com e sem sucesso
│   ├── fixtures/
│   │   └── credentials.json         # Massa de dados isolada (JSON)
│   ├── page-objects/
│   │   ├── CartPage.js                # Ações da página do carrinho
│   │   ├── CheckoutInformationPage.js # Formulário de dados do cliente
│   │   ├── CheckoutOverViewPage.js    # Finalizar a compra
│   │   ├── InventoryPage.js           # Métodos dinâmicos da vitrine 
│   │   └── LoginPage.js               # Encapsulamento da tela de login
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js                # Configurações de Viewport e Base URL
├── package.json                     # Manifesto de dependências e scripts Node
└── README.md

## 🚀 🇧🇷 Como Executar o Projeto / 🇺🇸 How to Run the Project
1. 🇧🇷 Pré-requisitos / 🇺🇸 Prerequisites
* Node.js (v18+)

2. 🇧🇷 Instalação / 🇺🇸 Installation
# Instalar as dependências do projeto
```bash id="x9gbfp"
npm install
```
3. 🇧🇷 Execução dos Testes / 🇺🇸 Running Tests
# Abrir a interface gráfica do Cypress (Modo Desenvolvimento)
npm run cy:open

# Executar os testes via terminal (Modo Headless / CI)
npm run cy:run
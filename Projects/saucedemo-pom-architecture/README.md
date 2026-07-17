# 🇧🇷 [UI] Automação SauceDemo (POM) | 🇺🇸 [UI] SauceDemo E2E Automation

![Cypress UI CI](https://github.com/rmgiust/qa-portfolio/actions/workflows/ci.yml/badge.svg)

---

### 📌 Quick Specs | Especificações Rápidas

| 🛠️ Tool / Tooling | 📂 Folder Context | 🎯 Test Type | 🌐 Target SUT |
| :--- | :--- | :--- | :--- |
| **Cypress + JavaScript** | `/Projects/saucedemo-pom-architecture` | End-to-End (E2E) | [SauceDemo Web](https://www.saucedemo.com/) |

</br>

## 🎯 Project Objective | Objetivo do Projeto

* **🇧🇷 PT:** Validar de ponta a ponta a jornada crítica de compra do usuário e fluxos de autenticação em uma plataforma de e-commerce fictícia, estabelecendo padrões estritos de arquitetura de software para mitigar testes frágeis e garantir execuções resilientes em pipelines de CI/CD.
* **🇺🇸 EN:** Validate end-to-end user purchase journeys and authentication layers on a model e-commerce application, establishing strict software engineering standards to mitigate flaky tests and ensure resilient runs within continuous integration pipelines.

</br>

## 🧠 Engineering Edge | Diferenciais Técnicos & Boas Práticas

- **Page Objects Pattern (POM):** Desacoplamento cirúrgico entre as ações/mapeamento de elementos de tela (`LoginPage.js`, `InventoryPage.js`, `CartPage.js`, `CheckoutInformationPage.js`, `CheckoutOverViewPage.js`) e a camada lógica de asserções dos testes, prevenindo manutenção duplicada de seletores.
- **Data-Driven Testing (Fixtures):** Centralização e isolamento da massa de dados em arquivo estruturado (`credentials.json`), eliminando completamente strings estáticas chumbadas (*hardcoded*)

</br>

## 📂 Project Structure | Estrutura de Diretórios

```text
saucedemo-pom-architecture/
├── cypress/
│   ├── e2e/
│   │   ├── customer-journey.cy.js    # Fluxo principal de ponta a ponta
│   │   └── login.cy.js               # Validações de login positivo e negativo
│   ├── fixtures/
│   │   └── credentials.json          # Massa de dados estruturada em JSON
│   ├── page-objects/
│   │   ├── CartPage.js               # Encapsulamento da tela do carrinho
│   │   ├── CheckoutInformationPage.js# Formulário de checkout do cliente
│   │   ├── CheckoutOverViewPage.js   # Revisão e fechamento do pedido
│   │   ├── InventoryPage.js          # Métodos dinâmicos da vitrine de produtos
│   │   └── LoginPage.js              # Interações e mapeamento da tela de login
│   └── support/
│       ├── commands.js               # Comandos customizados reutilizáveis
│       └── e2e.js                    # Inicialização e hooks globais
├── cypress.config.js                 # Definição de Viewport e Base URL
└── package.json                      # Manifesto de dependências e Node scripts
```
## ⚙️ How to Run | Como Executar Localmente
1. Instalar as dependências do projeto (Node.js v18+)
    > npm install
    
2. Executar a suíte de testes em modo Headless (Terminal/CI-CD)
    > npx cypress run

3. Abrir o Test Runner (Interface Gráfica para Debug)
    > npx cypress open



##
#### 💻 Roni Giust | _QA Automation Engineer_ 


# 🎯 QA Engineer Portfolio | Engenharia de Qualidade de Ponta a Ponta

> Bem-vindo ao meu portfólio de Engenharia de Qualidade e Automação de Testes. Este repositório foi arquitetado como um **Monorepo** para centralizar diferentes soluções de testes, utilizando esteiras de CI/CD automatizadas e independentes via GitHub Actions.

---

## 🛠️ Arquitetura do Repositório & DevOps Edge

Diferente de portfólios convencionais, este projeto utiliza uma arquitetura de **Monorepo Automatizado**. 
- **Esteiras Inteligentes:** Através de filtros de caminhos (`on.push.paths`), os Workflows do GitHub Actions só são disparados para o projeto que sofreu alterações, otimizando o tempo de execução e simulando cenários reais de grandes empresas.

---

## 🚀 Matriz de Projetos

| Projeto | Tecnologia Principal | Categoria | Status da Esteira (CI/CD) | Link Direto |
| :--- | :--- | :--- | :--- | :--- |
| **Automação E2E - SauceDemo** | Cypress + JavaScript | Web / UI (POM) | ![Cypress CI](https://github.com/SEU_USUARIO/qa-portfolio/actions/workflows/SUA_ESTEIRA_CYPRESS.yml/badge.svg) | [Acessar Projeto ↗](./e2e) |
| **Automação de API - ServeRest** | Postman + Newman | API / E2E Integration | ![API CI](https://github.com/SEU_USUARIO/qa-portfolio/actions/workflows/SUA_ESTEIRA_POSTMAN.yml/badge.svg) | [Acessar Projeto ↗](./api) |
| **Quality Gate Pipeline** | GitHub Actions + ChatOps | DevOps / CI-CD | ![Pipeline Status](https://github.com/SEU_USUARIO/qa-portfolio/actions/workflows/SUA_ESTEIRA_PRINCIPAL.yml/badge.svg) | Em construção |
| **Análise de Otimização de Processos** | Métricas de QA / Agile | Gestão / Estratégia | `N/A` | [Acessar Projeto ↗](./Projects/Process%20Optimization%20Analysis) |

---

## 📁 Estrutura de Pastas

```microtext
qa-portfolio/
├── .github/workflows/       # Centralização das esteiras de CI/CD (GitHub Actions)
├── e2e/                     # Automação de Interface (Cypress com Page Objects)
├── api/                     # Automação de Testes de API (Postman / Newman)
└── Projects/
    └── Process Optimization/ # Documentação e Análise Estratégica (Métricas de QA)
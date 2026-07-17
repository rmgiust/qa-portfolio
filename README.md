# 🎯 QA Engineer Portfolio | Engenharia de Qualidade de Ponta a Ponta

> Bem-vindo ao meu portfólio oficial de Engenharia de Qualidade e Automação de Testes. Este ecossistema foi arquitetado sob a estrutura de um **Monorepo** para centralizar soluções de testes que cobrem desde a estratégia de processos até à automação completa de interface (UI) e testes de integração de API.

---

## 🛠️ Arquitetura do Repositório & Governança DevOps

Para simular o ambiente de engenharia de software de grandes empresas, este projeto utiliza uma arquitetura unificada de **Monorepo**:
- **Gatilhos Inteligentes via CI/CD:** O pipeline do GitHub Actions foi configurado com filtros estritos de caminhos estruturais (`on.push.paths`). As esteiras automatizadas de integração contínua só são disparadas se houver alterações reais no código do respetivo projeto, otimizando o consumo de infraestrutura na cloud e simulando um ambiente real de produção.

---

## 🚀 Matriz de Projetos & Soluções

| Projeto | Tecnologia Principal | Categoria de Teste | Status de Execução (CI/CD) | Link de Acesso |
| :--- | :--- | :--- | :--- | :--- |
| **Automação UI - SauceDemo** | Cypress + JavaScript | End-to-End (E2E) | ![Cypress UI CI](https://github.com/rmgiust/qa-portfolio/actions/workflows/ci.yml/badge.svg) | [Acessar Componente ↗](./Projects/saucedemo-pom-architecture) |
| **Automação API - ServeRest** | Postman + Newman CLI | Integração & Contrato | ![Newman API CI](https://github.com/rmgiust/qa-portfolio/actions/workflows/ci.yml/badge.svg) | [Acessar Componente ↗](./Projects/serverest-ecommerce-api-e2e-automation) |
| **Otimização de Processos** | Métricas de QA / Agile | Engenharia Estratégica | 📄 `Documentação Técnica` | [Acessar Componente ↗](./Projects/Process%20Optimization%20Analysis) |

---

## 📂 Visão Geral da Árvore de Diretórios

```text
qa-portfolio/
├── .github/workflows/
│   └── ci.yml                            # Governança de CI/CD (Cypress & Postman/Newman)
└── Projects/
    ├── Process Optimization Analysis/    # Engenharia de processos, KPIs e relatórios analíticos
    ├── saucedemo-pom-architecture/       # Automação Web utilizando o padrão Page Objects (POM)
    └── serverest-ecommerce-api-e2e-automation/ # Validação de contratos HTTP e testes em lote com Newman
```
---
#### 💻 Roni Giust | _QA Automation Engineer_ 
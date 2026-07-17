# 🇧🇷 [API] Automação End-to-End & Validação de Contrato - ServeRest | 🇺🇸 [API] End-to-End Automation & Contract Validation

</br>

### 📌 Quick Specs | Especificações Rápidas

| 🛠️ Tool / Tooling | 📂 Folder Context | 🎯 Test Type | 🌐 Target SUT |
| :--- | :--- | :--- | :--- |
| **Postman + Collection Runner** | `/Projects/serverest-ecommerce-api-e2e-automation` | API Integration / Contract | ServeRest Local (`localhost:3000`) |

</br>

## 🎯 Project Objective | Objetivo do Projeto

* **🇧🇷 PT:** Validar a integridade das regras de negócio do back-end e a conformidade dos contratos de rotas HTTP de um ecossistema de e-commerce (Usuários, Login, Produtos e Carrinhos), utilizando massa de dados dinâmica e validando esquemas JSON.
* **🇺🇸 EN:** Validate back-end business rule integrity and HTTP contract compliance across an e-commerce ecosystem, using dynamic data generation and JSON schema validation.

</br>

## 🧠 Engineering Edge | Diferenciais Técnicos

- **Dynamic Data Generation:** Uso intensivo de bibliotecas nativas de JavaScript para gerar massa de dados aleatória em tempo de execução, garantindo testes menos dependentes de dados estáticos.
- **Contract Testing:** Validação de *schemas* JSON para assegurar que a API responde exatamente o que o contrato estipula.
- **Idempotência:** Scripts desenhados para limpar os dados criados (Teardown), mantendo o ambiente de testes sempre limpo para a próxima execução.

</br>

## ⚙️ How to Run | Como Executar

### 1. Iniciar a API Local
Certifique-se de ter o `serverest` instalado e rodando na sua máquina:

>npx serverest@latest

### 2. Executar via Postman
1. Importe os arquivos .json desta pasta para o seu Postman.

2. Selecione o ambiente ServeRest-Local no canto superior direito.

3. Utilize o Collection Runner para executar a suite completa.

</br>

## 🛡️ CI/CD Implementation Note | Nota sobre CI/CD

Status: Local Execution (Runner).
Atualmente, esta suíte de testes de API foi projetada para execução local via Postman/Newman. A integração desta suíte específica na esteira de CI/CD global (GitHub Actions) está em fase de refinamento de infraestrutura (migração para execução headless via Newman), visando garantir estabilidade e evitar gargalos no pipeline.

##
#### 💻 Roni Giust | _QA Automation Engineer_ 
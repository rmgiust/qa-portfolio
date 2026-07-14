# 🇧🇷 [API] Automação End-to-End & Validação de Contrato | 🇺🇸 [API] End-to-End Automation & Contract Validation

### 📌 Quick Specs | Especificações Rápidas

| 🛠️ Tool / Tooling | 📂 Folder Context | 🎯 Test Type | 🌐 Target SUT |
| :--- | :--- | :--- | :--- |
| **Postman** (v11+) | [`/Projects/serverest-ecommerce-api-e2e-automation`](./) | API / E2E Integration | ServeRest Local (`localhost:3000`) |

---

## 🎯 Project Objective | Objetivo do Projeto

* **🇧🇷 PT:** Validar a integridade das regras de negócio e a conformidade dos contratos de rotas de um ecossistema de e-commerce completo (Usuários, Login, Produtos e Carrinhos), garantindo uma execução em lote automatizada e resiliente.
* **🇺🇸 EN:** Validate business rule integrity and API contract compliance across a full e-commerce ecosystem (Users, Login, Products, and Carts), ensuring an automated, resilient, and decoupled batch test execution.

---

## 🧠 Technical Highlights | Diferenciais Técnicos & Boas Práticas

### 1. Dynamic State Management | Gerenciamento Dinâmico de Estado
* **🇧🇷 PT:** Eliminação de dados fixos (*hardcoded*). A suíte herda tokens de autenticação JWT, IDs de usuários e produtos em tempo de execução através do escopo dinâmico do `pm.environment`, criando um fluxo encadeado autônomo.
* **🇺🇸 EN:** Zero hardcoded data. The suite dynamically inherits JWT authentication tokens, user IDs, and product IDs at runtime via `pm.environment`, creating a fully autonomous, chained execution flow.

### 2. Payload Sanitization | Sanitização de Strings via Code
* **🇧🇷 PT:** Uso do método JavaScript `.split()` no Post-response para extrair a hash JWT limpa de dentro do cabeçalho Bearer retornado pelo servidor, automatizando a autorização dos próximos requests.
* **🇺🇸 EN:** Implementation of JavaScript's `.split()` method in the Post-response script to parse and extract the clean JWT token from the Bearer header response, automating authorization headers for subsequent requests.

### 3. Anti-Flaky Memory Safeguard | Tratamento de Exceções na Memória
* **🇧🇷 PT:** Uso de blocos condicionais (`if/else`) nas asserções para garantir que chaves globais de ambiente só sejam gravadas no Postman caso o servidor responda com sucesso (Status 201/200). Se a API falhar, o Environment permanece limpo, mitigando falsos-positivos.
* **🇺🇸 EN:** Use of conditional blocks (`if/else`) within assertions to ensure environment keys are updated only when the server returns a successful status code (201/200). If the request fails, the memory payload remains uncorrupted.

### 4. Idempotency & Data TearDown | Limpeza e Resiliência da Base
* **🇧🇷 PT:** Arquitetura de esteira E2E projetada para executar a limpeza física completa de dados no banco (CMD) através de chamadas consecutivas de `DELETE` ao fim do ciclo, combinada com o método `pm.environment.unset` para zerar a memória do cliente.
* **🇺🇸 EN:** E2E pipeline architecture designed to perform complete physical data teardown on the server via consecutive `DELETE` routes, combined with `pm.environment.unset` to wipe client memory and guarantee database idempotency.

---

## ⚙️ How to Run | Como Executar o Projeto

### 1. 🇧🇷 Pré-requisitos | 🇺🇸 Prerequisites
* Node.js (v18+)

### 2. 🇧🇷 Inicializar a API local | 🇺🇸 Spin up the local API Server
No seu terminal de comando, execute o motor do servidor em segundo plano:
```bash
npx serverest@latest
``` 
### 3. 🇧🇷 Importação e Execução no Postman | 🇺🇸 Postman Setup & Batch Execution

1. Abra a interface do (Desktop App ou Web Client).
2. Importe os arquivos JSON localizados na raiz desta pasta: 


    > ServeRest-ECommerce-API-E2E-Automation.postman_collection.json

    > ServeRest-Local.postman_environment.json

3. Ative o Environment recém-importado no canto superior direito.

#### Para rodar a esteira automatizada em cascata: clique com o botão direito na pasta 4. E2E Scenarios -> selecione Run folder -> Mantenha o modo Run Manually -> Ajuste um delay de sua preferência (ex: 200ms) para fins de auditoria visual -> Clique no botão laranja Run.
---

👤 Author | Assinatura
Roni Giust - QA Automation 

💼 LinkedIn: rmgiust
🐙 GitHub: rmgiust
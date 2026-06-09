# 🧮 Calculator Unit CI Pipeline

## 🇧🇷 Português
### Sobre o Projeto
[cite_start]Este projeto demonstra a implementação prática de uma suíte de testes unitários robusta para uma biblioteca core de calculadora, integrada a um pipeline automatizado de Integração Contínua (CI) via GitHub Actions[cite: 1540, 1542]. 

[cite_start]O objetivo principal é mitigar a introdução de regressões no código de produção e garantir que comportamentos críticos — como operações aritméticas padrão e tratamentos de exceção — sejam validados automaticamente a cada alteração de código[cite: 1540, 1541].

### Destaques Técnicos
* [cite_start]**Padrão AAA (Arrange, Act, Assert):** Testes unitários estruturados para garantir legibilidade técnica e manutenibilidade contínua[cite: 1742].
* [cite_start]**Tratamento de Exceções Críticas:** Validação do comportamento do sistema diante de cenários de falha induzida, como a tentativa de divisão por zero (`ArithmeticException`)[cite: 1741].
* [cite_start]**Garantia de Qualidade em Ambientes Virtuais:** A esteira de CI foi homologada utilizando o ambiente isolado do GitHub Actions com o JDK 17 (Temurin) e Maven [cite: 1785][cite_start], provando consistência entre o desenvolvimento local e a execução na nuvem[cite: 1792].

---

## 🇺🇸 English
### About the Project
[cite_start]This project demonstrates the practical implementation of a robust unit testing suite for a core calculator library, integrated with an automated Continuous Integration (CI) pipeline via GitHub Actions[cite: 1540, 1542].

[cite_start]The primary goal is to prevent regressions in production code and ensure that critical behaviors — such as standard arithmetic operations and exception handling — are automatically validated with every single code change[cite: 1540, 1541].

### Technical Highlights
* [cite_start]**AAA Pattern (Arrange, Act, Assert):** Unit tests structured to ensure technical readability and continuous maintainability[cite: 1742].
* [cite_start]**Critical Exception Handling:** Validation of system behavior under induced failure scenarios, such as preventing division by zero (`ArithmeticException`)[cite: 1741].
* [cite_start]**Isolated Cloud Quality Gate:** The CI pipeline is validated using a clean virtual environment powered by GitHub Actions with JDK 17 (Temurin) and Maven [cite: 1785][cite_start], ensuring absolute consistency between local execution and cloud builds[cite: 1792].

---

## 🛠️ Tech Stack & Architecture

* **Language:** Java 17
* [cite_start]**Testing Framework:** JUnit 5 (Jupiter Engine) [cite: 1740]
* [cite_start]**Build Tool & Dependency Manager:** Apache Maven [cite: 1735, 1740]
* [cite_start]**CI/CD Platform:** GitHub Actions [cite: 1542]

### Project Structure
```text
calculator-unit-ci/
[cite_start]├── pom.xml                  # Maven Project Object Model (Manifest) [cite: 1740]
└── src/
    ├── main/java/          # Production Source Code [cite: 1738]
    │   └── Calculator.java
    └── test/java/          # JUnit Test Suite [cite: 1738]
        └── CalculatorTest.java
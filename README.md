# Projeto de Automação de Testes com Cypress

Este repositório contém testes automatizados utilizando o Cypress para validação de uma API RESTful. Os testes estão organizados com base em boas práticas de automação, incluindo o uso de BDD com Cucumber, geração de relatórios com Mochawesome e integração contínua com o GitHub Actions.

---

## Tecnologias e ferramentas

- Cypress
- Cucumber (formato BDD)
- Mochawesome (relatórios)
- GitHub Actions (CI/CD)
- Node.js

---

## Estrutura do projeto

```
cypress/
├── e2e/
│   ├── features/               # Arquivos .feature com cenários BDD
│   └── step_definitions/       # Step definitions em JavaScript
├── reports/                    # Relatórios gerados após os testes
├── support/
├── fixtures/
```

---

## Como executar os testes

1. Clone o repositório e instale as dependências:

```bash
npm install
```

2. Para rodar os testes em modo headless:

```bash
npx cypress run
```

3. Para rodar com interface interativa:

```bash
npx cypress open
```

---

## Relatórios

Após a execução dos testes, um relatório em HTML é gerado automaticamente pelo Mochawesome.  
Você pode acessá-lo no seguinte caminho:

```
cypress/reports/mochawesome-report/mochawesome.html
```

---

## Integração contínua

O projeto está configurado para rodar automaticamente via GitHub Actions a cada push ou pull request na branch `master`.

---

## Sobre mim

Meu nome é **Willian Johnes Passos Leal**, sou formado em Educação Física e atualmente atuo na área de Qualidade de Software. Concluí recentemente o curso de QA da Qazando, com foco em testes manuais e automatizados. Este projeto é parte do meu processo de aprendizado contínuo na área de testes.

- GitHub: [github.com/WillianJohnes](https://github.com/WillianJohnes)  
- GitLab: [gitlab.com/@willianpassos2014](https://gitlab.com/@willianpassos2014)  
- E-mail: willianpassos2014@outlook.com

---

## Licença

Este projeto é aberto para fins de aprendizado e colaboração.

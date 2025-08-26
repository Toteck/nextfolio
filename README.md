# koru-projeto-08-gerador-curriculos
Gerador de Curriculos - Projeto 08 do Curso da Boticário + Koru

# React + TailwindCSS + TypeScript + Vite

Observações importantes
# 📌 Guia de Contribuição

Este projeto segue um **padrão de branches e commits** para manter a organização e facilitar o trabalho em equipe.  
Antes de contribuir, leia atentamente as instruções abaixo.  

---

## 🌿 Padrão de Branches

Sempre crie uma branch nova a partir da `main`.  
O formato deve ser:


### Tipos de Branch
- **Nova funcionalidade** → `feat/nome-da-funcionalidade`  
  Exemplo: `feat/adicionar-tarefas`

- **Correção de bug** → `fix/nome-do-bug`  
  Exemplo: `fix/contador-incorreto`

- **Refatoração (melhoria sem mudar regra de negócio)** → `refactor/nome-da-refatoracao`  
  Exemplo: `refactor/estrutura-componentes`

- **Estilo/ajuste visual (CSS, Tailwind, layout)** → `style/nome-do-ajuste`  
  Exemplo: `style/responsividade-lista`

- **Configuração (dependências, vite, eslint, etc.)** → `chore/nome-da-config`  
  Exemplo: `chore/configurar-tailwind`

- **Documentação** → `docs/nome-do-doc`  
  Exemplo: `docs/atualizar-readme`

---

## 📝 Padrão de Commits (Conventional Commits)

Os commits devem seguir o padrão:


### Tipos de Commits
- `feat:` → nova funcionalidade  
  Ex: `feat: adicionar input de nova tarefa`

- `fix:` → correção de bug  
  Ex: `fix: corrigir erro ao remover tarefa`

- `refactor:` → refatoração de código (sem mudar regra de negócio)  
  Ex: `refactor: melhorar performance da lista`

- `style:` → mudanças visuais/estilo (não altera lógica)  
  Ex: `style: ajustar espaçamento no header`

- `chore:` → alterações de configuração, build, dependências  
  Ex: `chore: instalar react-icons`

- `docs:` → alterações na documentação  
  Ex: `docs: adicionar instruções de instalação no readme`

---

## ✅ Boas práticas

- **Nunca commitar diretamente na `main`.**  
- Use nomes de branch **curtos, descritivos e em inglês**.  
- Faça commits **pequenos e frequentes** (não deixe tudo em um único commit).  
- Ao abrir um Pull Request, escreva um **título claro** e uma **descrição objetiva**.  

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

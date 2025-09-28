# Jedi Cards — App React Native (Expo)

> **Resumo:** Aplicativo mobile inspirado em Star Wars com cadastro/login simples de usuarios e navegação por *cards* com detalhes dos personagens da Saga. Projeto acadêmico com ênfase em boas práticas de organização, navegação com Stack, persistência local com `AsyncStorage` e camada de API (opcional) via `axios`.

---

## ✨ Funcionalidades
- **Cadastro e Login** com validações básicas e persistência em `AsyncStorage`.
- **Feedback ao usuário**: mensagens de sucesso/erro (Alert/Toast) e *loading spinner* (ex.: 3s) no login.
- **Navegação** com `@react-navigation/native` (Stack).
- **Listagem de Cards** e **tela de Detalhes** com *ImageBackground* e sobreposição translúcida para legibilidade.
- **Camada de API opcional** (`services/api.js`) com `axios` para consumir uma REST API (ex.: cards, personagens etc.). Quando a API não está disponível, o app pode usar dados locais (ex.: `assets/cards.json`).

---

## 🧱 Arquitetura e Organização
```
src/
├─ routes.js                 # Stack Navigator (rotas)
├─ pages/
│  ├─ login.js               # Tela de Login
│  ├─ cadastro.js            # Tela de Cadastro
│  ├─ cards.js               # Lista de cards
│  └─ cardDetails.js         # Detalhes do card
├─ services/
│  └─ api.js                 # Instância axios e funções de acesso à API
├─ assets/                   # Imagens, jsons locais, fontes
└─ styles/ (opcional)        # Estilos compartilhados
app.json / app.config.js      # Configurações do Expo
package.json                  # Scripts e dependências
```

## 🧪 Validações & Fluxos
### Cadastro
- Campos obrigatórios: `email`, `password` (mín. 6 chars) _(ajuste conforme sua regra)_.
- Ao salvar, grava o objeto `{ email, password }` em `AsyncStorage` com a chave `"user"` e exibe **“Cadastro realizado com sucesso”**.

### Login
- Lê `"user"` do `AsyncStorage`.  
- Compara `email` e `password`.  
- Se OK: mostra *spinner* (`ActivityIndicator`) por ~2s e navega para `"cards"`.  
- Se falhar: exibe **mensagem amigável** (ex.: “E-mail ou senha inválidos”).

---

## ⚙️ Requisitos
- **Node.js** 
- **npm** ou **yarn**
- **Expo CLI** (`npm i -g expo-cli`) ou `npx expo`
- **Android Studio / Emulador** ou **Expo Go** no celular

---

## 🚀 Como rodar o projeto
```bash
# 1. Clonar
git clone https://github.com/mofalqueto/jedi-app.git


# 2. Instalar dependências
npm install
# ou
yarn

# 3. Variáveis de ambiente (opcional, para API)
# crie um arquivo .env na raiz do projeto:
# API_URL=http://10.0.2.2:3000

# 4. Rodar
npx expo start
# depois, pressione 'a' para Android, 'i' para iOS (Mac), ou leia o QR no Expo Go
```

### Scripts úteis
```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web"
  }
}


## 📦 Build (APK/AAB)
- Com **EAS Build** (recomendado):  
  ```bash
  npm install -g eas-cli
  eas login
  eas build:configure
  eas build -p android --profile preview
  ```
- Ou `expo run:android` para gerar *debug build* local.


## 🧪 Tecnologias
- React Native (Expo), React Navigation (Stack)
- AsyncStorage
- Axios (API opcional)
- JavaScript/ES6, Hooks

---

## 👩‍💻 Autoria
- **Monica Aímola Falqueto** — Desenvolvimento de Software Multiplataforma — Fatec Franca — 4º semestre  

---

## 📄 Licença
Este projeto é de uso acadêmico. Adapte a licença conforme a necessidade.

---

## 📎 Observações finais
- Se sua API REST tiver endpoints diferentes, **ajuste a seção “Utilização das APIs”** com os caminhos corretos e exemplos de resposta reais.
- Se preferir apenas `AsyncStorage`, mantenha os componentes de UI e remova/ignore a camada HTTP.


Obs: README gerado com apoio de IA com base na análise do projeto.
# BirthdayBook

## Descrição

Este é um projeto web desenvolvido com React, TypeScript e Next.js que permite aos usuários fazer login com sua conta do Facebook e obter uma lista personalizada com os aniversários de seus amigos. Além disso, os usuários têm a capacidade de ordenar a lista pela proximidade dos próximos aniversários e selecionar amigos para serem sincronizados com sua agenda virtual, seja o Google Calendar ou o Apple Calendar.

## Recursos Principais

- **Login com o Facebook**: Os usuários podem autenticar-se com sua conta do Facebook para acessar a lista de aniversários de seus amigos.

- **Lista Personalizada de Aniversários**: Após o login, os usuários podem visualizar uma lista de aniversários dos amigos.

- **Ordenação por Proximidade**: A lista de aniversários pode ser ordenada pela proximidade dos próximos aniversários, tornando mais fácil identificar os próximos eventos.

- **Sincronização de Amigos com a Agenda Virtual**: Os usuários têm a capacidade de selecionar amigos da lista e sincronizá-los com sua agenda virtual. Isso facilita o acompanhamento dos próximos aniversários.

- **Compatibilidade com Google Calendar e Apple Calendar**: A sincronização de amigos é suportada tanto para o Google Calendar quanto para o Apple Calendar, permitindo que os usuários escolham a plataforma de sua preferência.

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalação

Siga as etapas abaixo para configurar e executar o projeto localmente:

1. Clone este repositório em seu ambiente local:

   ```bash
   git clone https://github.com/LeoJunioYuri/BirthdayBook.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd birthday-book
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente necessárias. Crie um arquivo `.env.local` na raiz do projeto e defina as seguintes variáveis:

   ```dotenv
   FACEBOOK_APP_ID=seu_app_id_do_facebook
   GOOGLE_CALENDAR_API_KEY=sua_chave_da_api_do_google_calendar
   APPLE_CALENDAR_API_KEY=sua_chave_da_api_do_apple_calendar
   ```

   Certifique-se de substituir `seu_app_id_do_facebook`, `sua_chave_da_api_do_google_calendar` e `sua_chave_da_api_do_apple_calendar` pelos valores apropriados.

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. O aplicativo estará disponível em `http://localhost:3000`. Acesse essa URL em seu navegador.

## Uso

Após iniciar o servidor de desenvolvimento, você pode fazer login com sua conta do Facebook e começar a explorar os recursos do aplicativo.

1. Clique no botão "Começar" e siga as instruções para autenticar sua conta.

2. Clique no botão "Login com o Facebook" e siga as instruções para autenticar sua conta.

3. Depois de fazer login, você será direcionado para uma página com a lista de aniversários dos amigos.

4. Utilize as opções de ordenação para classificar a lista conforme desejar.

5. Selecione seus amigos mais próximos e clique em sincronizar com agenda para adicionar o evento de aniversário.

6. Para sincronizar amigos com sua agenda virtual, clique nos botões correspondentes para o Google Calendar ou Apple Calendar.

## Contribuição

Se você deseja contribuir para o projeto, sinta-se à vontade para abrir issues e enviar pull requests. Estamos abertos a melhorias e novas funcionalidades.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---
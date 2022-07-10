# Explicação

Vai ter 4 telas:

- Home;
- Sign In;
- Sign Up;
- Verify Account.

## Home

A home vai ser uma tela em branco e vai existir só pra saber que o usuário completou o login. O usuário só pode acessar a home se ele tiver logado, se não tem que redirecionar ele pra tela de sign in.

## Sign In

A tela de sign in vai ter 2 campos:

- email;
- senha.

## Sign Up

A tela de sign up vai ter 2 campos:

- email;
- senha.

Em ambas as telas o usuário pode clicar em um botão pra senha ficar visível e quando o usuário criar a conta ele vai ser redirecionado pra tela de confirmar a conta e vai receber um email com um código de 6 dígitos pra confirmar a conta dele.

## Verify Account

A tela de verify account vai ter 1 campo:

- code.

Salvar num estado o userId retornado pela rota de sign up pra enviar na rota de verify account junto do código que o usuário colocar e quando ele verificar a conta redirecionar ele pra home, mas no login já pode redirecionar pra home direto.

## Sistema de Auth

O sistema de auth funciona assim: tem 2 tokens, o refreshToken e o accessToken. O accessToken expira, o refreshToken é permanente, O accessToken dura 10 minutos e é ele q vcs vao enviar em todas as requests. Vai ser retornado da rota de sign in tbm um expirationDate que é a data que esse token expira.
Se ele expirar, vcs precisam gerar um novo accessToken usando o refreshToken
Vcs vao mandar uma request pra rota lá q gera um novo accessToken, mandando o refreshToken e o userId no body
Eu aconselho vcs n fazerem isso automaticamente, tipo deixar um job la pra rodar a cada 10 min, pq pode dar mt merda
Aconselho vcs a terem tipo um middleware pra fazer as requests
Ae toda vez antes de fazer uma request ele verifica se o token ta expirado, e se tiver, antes de fazer a request ele gera um novo token, e ae faz a request

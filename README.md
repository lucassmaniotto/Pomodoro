# PomoApp 🍅

Aplicativo Web que implementa a técnica do Pomodoro, controlando seus ciclos e informando horas trabalhadas.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **PomoApp**
| :label: Tecnologias | react, typescript, html5, css3, vscode, eslint, prettier
| :rocket: URL         | [https://pomodoro-lucassmaniotto.vercel.app/](https://pomodoro-lucassmaniotto.vercel.app/)
| 🖥 Curso    | https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/

![Banner](https://github.com/lucassmaniotto/Pomodoro/assets/101435037/226b070c-d1a4-4bbb-9c9c-7d283ad465bd#vitrinedev)

## Detalhes do projeto

PomoApp foi desenvolvido na linguagem Typescript junto a tecnologia React para implementar uma técnica de gerenciamento de tempo conhecida como [Pomodoro](https://github.com/lucassmaniotto/Pomodoro#-pomodoro), amplamente utilizada como uma abordagem eficaz para aumentar a produtividade e evitar a procrastinação, no qual foi desenvolvido no curso da Udemy de [Luiz Otávio Miranda](https://www.udemy.com/user/luiz-otavio-miranda/), ["Curso de JavaScript e TypeScript do básico ao avançado"](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/#instructor-1).

### ⚙️ Configurando o projeto
Para que o projeto funcione corretamente, é necessário instalar as dependências do projeto. Para isso, basta executar o comando abaixo no terminal:
```bash
npm install
```

### ▶️ Executando o projeto
No diretório do projeto, você pode executar:
```bash
npm start
```
Com o comando acima, você irá rodar o projeto em modo de desenvolvimento que pode ser acessado em [http://localhost:3000](http://localhost:3000) no seu navegador.

### 📚 Bibliotecas
Para o desenvolvimento foi utilizado algumas bibliotecas do npm sendo elas:
* [react](https://www.npmjs.com/package/react)
* [typescript](https://www.npmjs.com/package/typescript)
* [eslint](https://www.npmjs.com/package/eslint)
* [prettier](https://www.npmjs.com/package/prettier)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [sweetalert2](https://www.npmjs.com/package/sweetalert2)
* [react-icons](https://www.npmjs.com/package/react-icons)

### 🍅 Pomodoro
O Pomodoro é uma técnica de gerenciamento de tempo desenvolvida por Francesco Cirillo no final dos anos 1980. O método foi nomeado "Pomodoro" (tomate em italiano) porque Cirillo usou um timer de cozinha em forma de tomate para controlar seu tempo enquanto estudava. O objetivo do método Pomodoro é aumentar a produtividade, dividindo o trabalho em períodos de tempo curtos e cronometrados, chamados de "pomodoros".

A técnica Pomodoro funciona da seguinte maneira:
1. Escolha uma tarefa que você deseja realizar.
2. Configure um cronômetro para 25 minutos, que é a duração de um "pomodoro".
3. Trabalhe intensamente na tarefa escolhida até o cronômetro tocar.
4. Faça uma pausa curta de cerca de 5 minutos após cada pomodoro.
5. Após completar quatro pomodoros, faça uma pausa mais longa de cerca de 15 a 30 minutos.

O ciclo de trabalho (pomodoro) de 25 minutos seguido por uma pausa curta e depois uma pausa longa é repetido ao longo do dia. A ideia é que os intervalos curtos de descanso ajudem a manter o foco e a concentração durante o período de trabalho. Além disso, o método Pomodoro promove a conscientização sobre como você usa seu tempo, ajudando a identificar quanto tempo leva para concluir diferentes tipos de tarefas.

A técnica Pomodoro é amplamente utilizada como uma abordagem eficaz para aumentar a produtividade, evitar a procrastinação e melhorar a gestão do tempo. Existem até aplicativos e ferramentas online disponíveis que podem ajudá-lo a implementar a técnica Pomodoro em sua rotina diária.

### 💡 Funcionalidades

#### Ciclos de Pomodoro
Acessando durante a primeira vez o site, o Pomodoro se encontra em Descanso e marcando 25 minutos no seu contador, informando o próximo ciclo.

<div align="center">
  <img alt="Estado inicial" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/53acf20c-0ef7-470a-8fde-f558ddda9445" >
</div>
<p>
  Para o controle de Pomodoros, os ciclos se baseiam em botões de ação. Ao acionar o botão "Trabalhar" um som de sino toca, o contrador de tempo de trabalho começa a contar e incrementar no quadro de informações em "Horas trabalhadas", além de mudar o tema da página para cores mais vivas, mostrando um botão novo que pode ser pausado ou iniciado o contador. Também, o título da página muda para o tempo restante de trabalho, para caso utilize o app em segundo plano, possa ser controlado o tempo de trabalhou ou descanso.
</p>
<div align="center">
  <img alt="Título da pág. - Trabalho" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/c600a911-543a-4eed-bdab-f0833a822295" >
</div>
<div align="center">
  <img alt="Pomodoro - Trabalho" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/830b2767-561e-42a6-a4f9-3ab713488a52" >
</div>
<p>
  Quando o contador de tempo encerra no status de "Trabalhando" um som de sino toca duas vezes informando que o descanso começou. O tema da página e o status mudam novamente, onde o usuário ganha 5 minutos de seu tempo para realizar seu descanso ou outras atividades que não estão relacionadas ao seu tempo de foco. No quadro de informações, "Horas trabalhadas" são pausadas, "Pomodoros concluídos" é incrementado e o próximo ciclo é atualizado para "Trabalho".
</p>
<div align="center">
  <img alt="Pomodoro - Descanso" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/df81d2ca-b0ae-43a6-b47b-70a2c0c546a3" />
</div>
<p align="center">
  Após o usuário terminar 4 Pomodoros, o seu tempo de descanso se torna 15 minutos como recompensa:
</p>
<div align="center">
  <img alt="4 Pomodoros" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/0a33080e-1e2e-498b-9bba-4fad1f7e6300" />
</div>

#### Configurações de Tempo
<p> 
  O PomoApp possui uma rota '/configurations' que permite que o usuário configure os tempos de Pomodoro conforme desejar que pode ser acessada no cabeçalho da página. 
</p>
<div align="center">
  <img alt="Rotas" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/f2925c78-ec76-45da-8975-c6c717d195ee" />
</div>
<p> 
  Antes de mudar de rota, um alerta do Sweet Alert surge, informando que caso as configurações forem acessadas, o timer de Pomodoro será reiniciado. Sendo assim, o usuário deve confirmar nos botões se quer continuar com a ação ou não. 
</p>
<div align="center">
  <img alt="Confirmação" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/23ccccdf-607e-4a96-b476-d44b310dc8ae" />
</div>
<p> 
  Acessando a rota de Configurações, o usuário pode alterar os tempos de Pomodoro nas caixas de texto, sendo necessário informá-los em segundos. Salvando as alterações, os dados são gravados no localStorage do navegador e consumidos pela rota da página inicial 
</p>
<div align="center">
  <img alt="Configurações" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/b5a13153-cec0-4003-8ed4-a860769ead21" />
  <img alt="localStorage" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/323ba20a-b57d-4877-84cf-3fb35fd35051" />
  <img alt="Dados Consumidos" src="https://github.com/lucassmaniotto/Pomodoro/assets/101435037/8e1c96ac-ffa5-4db0-bfbf-e7c9d3639208" />
</div>

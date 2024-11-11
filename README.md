# AluGames :video_game::arrows_counterclockwise:

Projeto simples realizado pelo curso de logica de programação na [Alura](https://cursos.alura.com.br/) onde contém uma função JavaScript que permite alterar o status de um jogo entre "Alugar" e "Devolver". 
A função identifica o jogo com base no `id`, atualiza a classe CSS para indicar o status de "alugado" ou "disponível", e altera o texto do botão conforme o status.

## Função Principal

### `alterarStatus(id)`

A função `alterarStatus` realiza as seguintes operações:

1. **Validação do Jogo:** Obtém o elemento do jogo com base no `id`.
2. **Alteração de Classe e Texto:** Verifica se o jogo já está marcado como "alugado".
Se sim, altera a classe e o texto para indicar que o jogo está "disponível" para aluguel. Caso contrário, muda a classe e o texto para indicar que o jogo foi "alugado".

### Exemplo de Uso

A função é acionada através de um botão em cada item de jogo. Ao clicar no botão, o status do jogo será atualizado dinamicamente.

### Código

```javascript
// Função para alterar o status do jogo
function alterarStatus(id) {
    // Valida o jogo com base no id
    let gameClicado = document.getElementById(`game-${id}`);

    // Obtém a imagem e o botão das classes html
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    // Verifica se a imagem possui a classe de alugado
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // se o jogo estiver marcado como alugado, remove as classes e alterando o texto e imagem
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        // se não, adiciona as classes de disponivel, alterando o texto e imagem
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
```

## Estrutura HTML Esperada

Para o correto funcionamento da função, a estrutura HTML deve seguir o seguinte padrão:

```html
<div id="game-1" class="dashboard__item">
    <img class="dashboard__item__img" src="game_image.jpg" alt="Jogo 1">
    <button class="dashboard__item__button" onclick="alterarStatus(1)">Alugar</button>
</div>
```

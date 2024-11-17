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

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

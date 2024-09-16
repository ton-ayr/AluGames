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

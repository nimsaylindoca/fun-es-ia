// script.js

document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        {
            id: 1,
            texto: 'Qual atividade você prefere em um dia de lazer?',
            alternativas: ['Assistir TV', 'Jogar esportes', 'Ler um livro', 'Sair para uma festa', 'Fazer algo criativo', 'Relaxar ao ar livre']
        },
        {
            id: 2,
            texto: 'Como você lida com desafios no trabalho?',
            alternativas: ['Encaro de frente', 'Procuro ajuda', 'Tento ignorar', 'Faço o mínimo necessário', 'Busco uma solução criativa', 'Desvio a responsabilidade']
        },
        {
            id: 3,
            texto: 'Qual é o seu tipo de comida favorita?',
            alternativas: ['Pizza', 'Hamburguer', 'Comida mexicana', 'Sushi', 'Saladas', 'Doces']
        },
        {
            id: 4,
            texto: 'Qual é o seu passatempo preferido?',
            alternativas: ['Assistir a filmes', 'Jogar videogame', 'Fazer esportes', 'Cozinhar', 'Ler', 'Explorar novos lugares']
        },
        {
            id: 5,
            texto: 'Qual é a sua abordagem para resolver problemas?',
            alternativas: ['Ser prático e direto', 'Pensar fora da caixa', 'Pedir conselho a outros', 'Analisar detalhadamente', 'Procurar atalhos', 'Evitar o problema']
        },
        {
            id: 6,
            texto: 'Como você prefere passar suas férias?',
            alternativas: ['Em um resort', 'Em uma viagem de aventura', 'Visitando amigos e familiares', 'Em uma viagem cultural', 'Relaxando em casa', 'Fazendo uma road trip']
        },
        {
            id: 7,
            texto: 'Qual é o seu estilo de vestir?',
            alternativas: ['Casual e confortável', 'Despojado e descolado', 'Elegante e formal', 'Esportivo', 'Criativo e original', 'Simples e prático']
        },
        {
            id: 8,
            texto: 'Como você lida com um novo projeto?',
            alternativas: ['Planejo detalhadamente', 'Amo desafios e me jogo de cabeça', 'Pego o projeto e vou fazendo conforme vou aprendendo', 'Faço o básico e depois procuro otimizar', 'Peço ajuda para garantir que tudo dê certo', 'Evito se o projeto não me interessa']
        },
        {
            id: 9,
            texto: 'Qual é a sua forma preferida de socializar?',
            alternativas: ['Organizar grandes festas', 'Encontrar-se com amigos próximos', 'Participar de eventos e redes sociais', 'Ter conversas profundas e significativas', 'Fazer atividades em grupo', 'Prefiro interações individuais']
        },
        {
            id: 10,
            texto: 'Qual é o seu filme favorito?',
            alternativas: ['Comédia', 'Ação', 'Drama', 'Ficção científica', 'Romance', 'Animação']
        }
    ];

    const caixaPerguntas = document.querySelector('.caixa-perguntas');
    const resultadoTexto = document.querySelector('.texto-resultado');
    const imagemPersonagem = document.getElementById('imagem-personagem');
    const calcularResultadoBtn = document.getElementById('calcular-resultado');

    let respostas = {};

    // Cria as perguntas e alternativas
    perguntas.forEach(pergunta => {
        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('pergunta');
        perguntaDiv.dataset.id = pergunta.id;

        const perguntaTexto = document.createElement('p');
        perguntaTexto.textContent = `${pergunta.id}. ${pergunta.texto}`;
        perguntaDiv.appendChild(perguntaTexto);

        pergunta.alternativas.forEach((alternativa, index) => {
            const botaoAlternativa = document.createElement('button');
            botaoAlternativa.classList.add('alternativa');
            botaoAlternativa.textContent = alternativa;
            botaoAlternativa.dataset.resposta = String.fromCharCode(65 + index); // A, B, C, ...
            botaoAlternativa.addEventListener('click', (event) => {
                const perguntaId = event.target.closest('.pergunta').dataset.id;
                const resposta = event.target.dataset.resposta;

                // Atualiza as respostas
                respostas[perguntaId] = resposta;

                // Marca a opção selecionada
                document.querySelectorAll(`.pergunta[data-id="${perguntaId}"] .alternativa`).forEach(btn => {
                    btn.classList.remove('selecionada');
                });
                event.target.classList.add('selecionada');
            });
            perguntaDiv.appendChild(botaoAlternativa);
        });

        caixaPerguntas.appendChild(perguntaDiv);
    });

    calcularResultadoBtn.addEventListener('click', () => {
        const totalPerguntas = perguntas.length;
        const respostasCorretas = Object.keys(respostas).length;
        const porcentagem = (respostasCorretas / totalPerguntas) * 100;

        let resultado;
        let imagem;

        if (porcentagem >= 80) {
            resultado = 'Você é como Lenny Feder: um líder natural e sempre pronto para diversão!';
            imagem = 'https://example.com/imagem_lenny.jpg'; //  <img>
        } else if (porcentagem >= 60) {
            resultado = 'Você tem um espírito divertido como Eric Lamonsoff!';
            imagem = 'https://example.com/imagem_eric.jpg'; // Substitua pela URL da imagem de Eric Lamonsoff
        } else if (porcentagem >= 40) {
            resultado = 'Você é tão carismático quanto Kurt McKenzie!';
            imagem = 'https://example.com/imagem_kurt.jpg'; // Substitua pela URL da imagem de Kurt McKenzie
        } else if (porcentagem >= 20) {
            resultado = 'Você tem o coração de Rob Hilliard!';
            imagem = 'https://example.com/imagem_rob.jpg'; // Substitua pela URL da imagem de Rob Hilliard
        } else {
            resultado = 'Você é tão esperto e inteligente quanto Marcus!';
            imagem = 'https://example.com/imagem_marcus.jpg'; // Substitua pela URL da imagem de Marcus
        }

        resultadoTexto.textContent = `Sua pontuação é ${porcentagem.toFixed(0)}%. ${resultado}`;
        imagemPersonagem.src = imagem;
        imagemPersonagem.style.display = 'block';
    });
});

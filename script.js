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
    let perguntaAtual = 0;

    const personagens = {
        Lenny: 0,
        Eric: 0,
        Kurt: 0,
        Rob: 0,
        Marcus: 0
    };

    const exibirPergunta = () => {
        const pergunta = perguntas[perguntaAtual];
        caixaPerguntas.innerHTML = ''; // Limpa perguntas anteriores

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
            botaoAlternativa.dataset.resposta = index; // Usando índice para pontuação
            botaoAlternativa.addEventListener('click', () => {
                // Atualiza a contagem de personagens baseados na resposta
                const respostaIndex = parseInt(botaoAlternativa.dataset.resposta);
                switch (respostaIndex) {
                    case 0: personagens.Lenny++; break; // Exemplo de mapeamento
                    case 1: personagens.Eric++; break;
                    case 2: personagens.Kurt++; break;
                    case 3: personagens.Rob++; break;
                    case 4: personagens.Marcus++; break;
                    case 5: personagens.Marcus++; break; // Mesmo personagem em mais de uma resposta
                }

                respostas[pergunta.id] = respostaIndex;

                // Avança para a próxima pergunta
                perguntaAtual++;
                if (perguntaAtual < perguntas.length) {
                    exibirPergunta();
                } else {
                    mostrarResultado(); // Chama a função que mostra o resultado
                }
            });
            perguntaDiv.appendChild(botaoAlternativa);
        });

        caixaPerguntas.appendChild(perguntaDiv);
    };

    const mostrarResultado = () => {
        // Encontra o personagem com mais pontos
        const resultadoPersonagem = Object.keys(personagens).reduce((a, b) => personagens[a] > personagens[b] ? a : b);

        let resultado = '';
        let imagem = '';

        switch (resultadoPersonagem) {
            case 'Lenny':
                resultado = 'Você é como Lenny Feder: um líder natural e sempre pronto para diversão!';
                imagem = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sinemalar.com%2Fkarakter-galeri%2F4379%2Flenny-feder%2F2&psig=AOvVaw0VHQvI0IZ99i3uEc4AttTD&ust=1727972773404000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOjZkK6O8IgDFQAAAAAdAAAAABAE';
                break;
            case 'Eric':
                resultado = 'Você tem um espírito divertido como Eric Lamonsoff!';
                imagem = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXsGoFD3GVKI&psig=AOvVaw07-QKAFKHdegg4jhUFnwuO&ust=1727973009975000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDVtp6P8IgDFQAAAAAdAAAAABAf';
                break;
            case 'Kurt':
                resultado = 'Você é tão carismático quanto Kurt McKenzie!';
                imagem = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdublagem.fandom.com%2Fwiki%2FGente_Grande&psig=AOvVaw18354rkfTfclKAdv_Tstiz&ust=1727973061601000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODx17aP8IgDFQAAAAAdAAAAABAx';
                break;
            case 'Rob':
                resultado = 'Você tem o coração de Rob Hilliard!';
                imagem = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhero.fandom.com%2Fwiki%2FRob_Hilliard&psig=AOvVaw3Pvpzm1L86VJsJQ8kU7o8Y&ust=1727973169549000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDmp-qP8IgDFQAAAAAdAAAAABAS';
                break;
            case 'Marcus':
                resultado = 'Você é tão esperto e inteligente quanto Marcus!';
                imagem = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgrownups.fandom.com%2Fwiki%2FMarcus_Higgins&psig=AOvVaw0RXa20DjDh3qNTsr6lmHqI&ust=1727973220659000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiI0oGQ8IgDFQAAAAAdAAAAABAT';
                break
        }

        resultadoTexto.textContent = resultado;
        imagemPersonagem.src = imagem;
        imagemPersonagem.style.display = 'block';
    };

    // Começa exibindo a primeira pergunta
    exibirPergunta();
});

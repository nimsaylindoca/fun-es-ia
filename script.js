const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem um plano de evacuação para sua casa?",
        alternativas: [
            "sim",
            "não",
            "estou trabalhando nisso"
        ]
    },
    {
        enunciado: "Qual é o seu nível de conhecimento sobre primeiros socorros?",
        alternativas: [
            "Avançado",
            "Intermediário",
            "Básico",
            "Nenhum"
        ]
    }
    {
        enunciado: "Você está em um supermercado e ouve zumbis se aproximando. O que você faz?",
        alternativas: [
            "Pegar o máximo de suprimentos possível e sair correndo sem se preocupar com o barulho",
            "Buscar uma saída segura e deixar uma pista falsa para os zumbis se distraírem.",
            "Tentar se esconder em um dos corredores até que os zumbis saiam.",
            "Fazer uma barricada improvisada e esperar os zumbis saírem antes de continuar."
        ]
    }
{
    enunciado: "Você encontra um grupo de sobreviventes que parece amigável, mas não tem certeza de suas intenções. O que você faz?",
    alternativas: [
        "Se aproximar imediatamente e oferecer ajuda, sem pensar duas vezes",
        "Alternativa 2",
    ]
}
]; 
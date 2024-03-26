import comojogar from '../gifs/comojogar.gif'
import regras from '../gifs/regras.gif'
import comovencer from '../gifs/comovencer.gif'
import pontuacao from '../gifs/pontuacao.gif'
import extra from '../gifs/extra.gif'

const instructions = [
    {
        title: "Como jogar?",
        gif: comojogar,
        text: "Você deve clicar em um palito que contenha as peças e em seguida escolher onde quer colocar a peça selecionada."
    },
    {
        title: "Regras",
        gif: regras,
        text: "É impossivel colocar uma peça acima de uma menor que a selecionada, se atente a esse detalhe."
    },
    {
        title: "Como vencer?",
        gif: comovencer,
        text: "Para vencer o jogo é necessario mover todas as peças de um palito para o outro."
    },
    {
        title: "Pontuação",
        gif: pontuacao,
        text: "Ao iniciar o jogo você vai reparar duas tabelas, uma com seu recorde e outra com sua pontuação, o intuito é mover o minimo de peças possiveis para finalizar o jogo."
    },
    {
        title: "Extra",
        gif: extra,
        text: "Ao concluir o jogo pela primeira vez você vai ter a opção de voltar a página inicial onde você pode tentar uma dificuldade diferente.",
        button: true
    },
]

export default instructions;
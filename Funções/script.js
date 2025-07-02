const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A IA vai dominar o mundo?",
        alternativas: [
            {
                texto: "Sim, nas mãos de pessoas erradas, acredito que sim.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Não, a IA nao foi treinada para isso",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "A IA já tem capacidade para controlar governos?",
        alternativas: [
            {
                texto: "Já existem sistemas de IA sendo usados em processos políticos e administrativos. Se mal usados, poderiam controlar decisões governamentais",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "A IA pode ajudar na gestão, mas não tem a flexibilidade e empatia necessárias para lidar com questões políticas complexas e humanas.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "A IA pode substituir totalmente o trabalho humano?",
        alternativas: [
            {
                texto: "Em áreas como manufatura, análise de dados e tarefas repetitivas, a IA já pode substituir muitas funções humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "O trabalho humano vai além de tarefas repetitivas; a criatividade e julgamento humanos ainda são insubstituíveis por IA.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "A IA pode criar um futuro mais justo para todos?",
        alternativas: [
            {
                texto: "Se programada corretamente, a IA pode promover soluções mais justas e imparciais em áreas como justiça e educação.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: " A IA pode refletir os preconceitos de seus programadores e, em vez de promover igualdade, pode perpetuar desigualdades.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: " IA pode ser uma ameaça para a humanidade no futuro?",
        alternativas: [
            {
                texto: "Se não for controlada, a IA pode desenvolver objetivos que conflitam com os interesses humanos, tornando-se uma ameaça. ",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "A IA não tem intenção própria; ela é uma ferramenta que reflete a moral e ética de quem a controla.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

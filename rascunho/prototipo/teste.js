const citacoes = [
    {
        "texto": "A arte de viver é a mais importante de todas as artes.",
        "obra": "A Arte de Viver",
        "autor": "Marco Aurélio",
        "ano": "180",
        "editora": "Editora Clássica",
        "local": "Roma",
        "pagina": "56"
    },
    {
        "texto": "O homem é senhor de seu silêncio e escravo de suas palavras.",
        "autor": "Sêneca",
        "ano": "65",
        "obra": "Meditações",
        "editora": "Editora Estoica",
        "local": "Atenas",
        "pagina": "32"
    },
    {
        "texto": "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
        "obra": "Discurso de Recebimento do Nobel da Paz",
        "autor": "Nelson Mandela",
        "ano": "1993",
        "editora": "Editora Nobel",
        "local": "Joanesburgo",
        "pagina": "14"
    },
    {
        "texto": "A simplicidade é a suprema sofisticação.",
        "obra": "Cadernos de Anatomia",
        "autor": "Leonardo da Vinci",
        "ano": "1519",
        "editora": "Editora Renascentista",
        "local": "Florença",
        "pagina": "7"
    },
    {
        "texto": "Nada é mais difícil, e portanto mais precioso, do que ser capaz de decidir.",
        "obra": "Em Busca do Tempo Perdido",
        "autor": "Marcel Proust",
        "ano": "1922",
        "editora": "Editora Modernista",
        "local": "Paris",
        "pagina": "89"
    },
    {
        "texto": "A sabedoria começa na reflexão.",
        "obra": "A República",
        "autor": "Platão",
        "ano": "347",
        "editora": "Editora Filosófica",
        "local": "Atenas",
        "pagina": "21"
    },
    {
        "texto": "A vida é realmente simples, mas insistimos em torná-la complicada.",
        "obra": "Tao Te Ching",
        "autor": "Lao Tsé",
        "ano": "-6",
        "editora": "Editora Taoista",
        "local": "Loyang",
        "pagina": "42"
    },
    {
        "texto": "O segredo da felicidade não está em fazer o que se gosta, mas sim em gostar do que se faz.",
        "obra": "A Arte de Ser Feliz",
        "autor": "Joseph Addison",
        "ano": "1719",
        "editora": "Editora Iluminista",
        "local": "Londres",
        "pagina": "28"
    },
    {
        "texto": "A verdadeira medida de um homem não se vê na forma como ele se comporta em momentos de conforto e conveniência, mas em como ele se mantém em tempos de controvérsia e desafio.",
        "obra": "Strength to Love",
        "autor": "Martin Luther King Jr.",
        "ano": "1968",
        "editora": "Editora Civil Rights",
        "local": "Birmingham",
        "pagina": "63"
    },
    {
        "texto": "A alegria está na luta, na tentativa, no sofrimento envolvido, e não na vitória propriamente dita.",
        "obra": "Mensagens e Reflexões",
        "autor": "Mahatma Gandhi",
        "ano": "1948",
        "editora": "Editora Pacifista",
        "local": "Ahmedabad",
        "pagina": "39"
    }
]

const mainContent = document.querySelector(".citacoes");

function autorbib(autor) {
    let nomes = autor.split(" ");
    return nomes[nomes.length - 1].toUpperCase();
};

window.onload = function() {
    for (citacao of citacoes) {
        citacaoDiv = document.createElement("div");
        corpoCitacao = document.createElement("div");
        dadosCitacao = document.createElement("div");
        acoesCitacao = document.createElement("div");
        acaoCopiar = document.createElement("button");
        acaoBibTeX = document.createElement("button");

        citacaoDiv.classList.add("citacao");
        corpoCitacao.classList.add("corpo-citacao");
        dadosCitacao.classList.add("dados-citacao");
        acoesCitacao.classList.add("acoes-citacao");

        corpoCitacao.innerHTML = citacao.texto;
        dadosCitacao.innerHTML = ` (${autorbib(citacao.autor)}, ${citacao.ano})`;
        acaoCopiar.innerHTML = "Texto";
        acaoBibTeX.innerHTML = "BibTeX";

        corpoCitacao.appendChild(dadosCitacao);
        citacaoDiv.appendChild(corpoCitacao);
        acoesCitacao.appendChild(acaoCopiar);
        acoesCitacao.appendChild(acaoBibTeX);
        citacaoDiv.appendChild(acoesCitacao);
        mainContent.appendChild(citacaoDiv);
    };
};

const conta = document.querySelector("#conta");
const contaOpcoes = document.querySelector("#conta-opcoes");

conta.addEventListener("click", (e) => {
    contaOpcoes.classList.toggle("invisivel");
});

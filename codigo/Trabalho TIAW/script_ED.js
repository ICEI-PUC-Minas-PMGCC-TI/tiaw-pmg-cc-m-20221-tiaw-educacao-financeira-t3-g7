const dados_Cards = {
    "temas": [
        {
            "id": "227",
            "imagem": "imagens/bitcoin.webp",
            "titulo": "CRIPTOMOEDAS",
            "descricao": "Nesta sessão abordaremos os tópicos mais importantes a respeito das diferentes criptomoedas existentes e dp mercado financeiro que as envolve.",
            "titulo2": "O que são as criptomoedas?",
        },

        {
            "id": "228",
            "imagem": "imagens/pilares.jpg",
            "titulo": "PILARES DA EDUCAÇÃO FINANCEIRA",
            "descricao": "Nesta sessão abordaremos os principais pilares da educação financeira, a ponto de esclarecer as melhores maneiras de fazr uso consciente do seu próprio dinheiro.",
            "titulo2": "Primeiro pilar: Entendimento de seu dinheiro e seus hábitos",
            "subtitulo1": "Este primeiro pilar é quase um exercício para se conhecer e conhecer quem vive com voçê e divide sonhos, objetivos e contas.",
            "p1": "O primeiro passo para saber como estão suas finanças é fazer um diagnóstico da sua situação financeira. O orçamento pessoal ou familiar deve ser organizado em forma de planilha financeira, reunindo a maior quantidade possível de informações. Todo tipo de renda, sendo salários, rendimentos de investimentos ou mesmo pagamentos por serviços esporádicos precisam entrar na planilha. Além da renda, todos os gastos também devem ser anotados na planilha. Assim você passa a conhecer seus hábitos e os hábitos dos seus familiares com relação ao dinheiro. É importante deixar claro que tal tipo de organização pode ser feita em qualquer tipo de planilha financeira, seja de papel ou eletrônica.",
            "titulo3": "Segundo pilar: Definição do que fazer com o dinheiro",
            "subtitulo2": "Depois de conhecer os hábitos com o dinheiro, o segundo pilar da educação financeira é definir objetivos. Afinal, aonde você quer chegar? O que gostaria de realizar? O que te faria muito feliz no futuro?",
            "p2": "Ganhando muito ou pouco, é necessário ter a noção de que há um limite mensal de dinheiro com que você pode contar. Definir objetivos a partir desse limite permite focar nas prioridades da sua vida. Esses objetivos podem ser de curto prazo, como uma viagem, ou até algo mais longo, como se aposentar",
            "titulo4": "Quarto pilar: Caminhos para o objetivo: crédito e investimento",
            "subtitulo3": "Depois de conhecer os hábitos com o dinheiro, o segundo pilar da educação financeira é definir objetivos. Afinal, aonde você quer chegar? O que gostaria de realizar? O que te faria muito feliz no futuro?",
            "p3": "Ganhando muito ou pouco, é necessário ter a noção de que há um limite mensal de dinheiro com que você pode contar. Definir objetivos a partir desse limite permite focar nas prioridades da sua vida. Esses objetivos podem ser de curto prazo, como uma viagem, ou até algo mais longo, como se aposentar",
        },

        {
            "id": "tema3",
            "imagem": "imagens/imposto.jpeg",
            "titulo": "IMPOSTOS",
            "descricao": "Aqui abordaremos tudo sobre os principais impostos e daremos dicas de como se planejar para se manter em dia com seus pagamentos.",
        },

        {
            "id": "tema4",
            "imagem": "imagens/investimento.jpeg",
            "titulo": "MODALIDADES DE CRÉDITO E DE INVESTIMENTOS",
            "descricao": "Aqui abordaremos tudo sobre os principais impostos e daremos dicas de como se planejar para se manter em dia com seus pagamentos.",
        },

        {
            "id": "tema1",
            "imagem": "imagens/bitcoin.webp",
            "titulo": "CRIPTOMOEDAS",
            "descricao": "Nesta sessão abordaremos os tópicos mais importantes a respeito das diferentes criptomoedas existentes e dp mercado financeiro que as envolve.",
        },

        {
            "id": "tema2",
            "imagem": "imagens/pilares.jpg",
            "titulo": "PILARES DA EDUCAÇÃO FINANCEIRA",
            "descricao": "Nesta sessão abordaremos os principais pilares da educação financeira, a ponto de esclarecer as melhores maneiras de fazr uso consciente do seu próprio dinheiro.",
        },

        {
            "id": "tema3",
            "imagem": "imagens/imposto.jpeg",
            "titulo": "IMPOSTOS",
            "descricao": "Aqui abordaremos tudo sobre os principais impostos e daremos dicas de como se planejar para se manter em dia com seus pagamentos.",
        },

        {
            "id": "tema4",
            "imagem": "imagens/investimento.jpeg",
            "titulo": "MODALIDADES DE CRÉDITO E DE INVESTIMENTOS",
            "descricao": "Aqui abordaremos tudo sobre os principais impostos e daremos dicas de como se planejar para se manter em dia com seus pagamentos.",
        },
    ]
}

const init = (data) => {
    
    localStorage.setItem('db_temas', JSON.stringify(dados_Cards))

    let dadosHTML = '';
    for (let i = 0; i < dados_Cards.temas.length; i++) {
        let tema = dados_Cards.temas[i];
        dadosHTML += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                <div class="card" style="width: 18rem;">
                    <img src="${tema.imagem}" class="card-img-top" alt="criptomoeda">
                    <div class="card-body">
                      <h5 class="card-title">${tema.titulo}</h5>
                      <p class="card-text">${tema.descricao}</p>
                      <a href="detalhes_tema.html?id=${tema.id}" class="btn btn-primary">Conferir</a>
                    </div>
                </div>
        </div>
        `
    }
    document.getElementById ('divListaTemas').innerHTML = dadosHTML
}

document.body.onload = init;
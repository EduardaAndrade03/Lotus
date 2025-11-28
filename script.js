const dobras = [
    'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra',     'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra', 'Sem Dobra',
    'Água', 'Água', 'Água', 'Água', 'Água', 'Água', 'Água', 'Água', 'Água', 'Água',  
    'Fogo', 'Fogo','Fogo','Fogo','Fogo','Fogo','Fogo','Fogo','Fogo','Fogo','Fogo','Fogo',
    'Terra', 'Terra','Terra','Terra','Terra','Terra','Terra','Terra','Terra','Terra','Terra','Terra',
    'Ar', 'Ar','Ar','Ar','Ar','Ar','Ar','Ar','Ar','Ar','Ar','Ar',
    'Todas'
];

const subdobrasAgua = [
    'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade','Sem Subhabilidade','Sem Subhabilidade',
    "Dobra de Sangue", 
    "Dobra de Planta", "Dobra de Planta", "Dobra de Planta", "Dobra de Planta", "Dobra de Planta", 
    "Dobra de Espíritos",
    "Cura com a Água","Cura com a Água","Cura com a Água","Cura com a Água","Cura com a Água","Cura com a Água","Cura com a Água","Cura com a Água"
];
const subdobrasAr = [
    'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade',
    "Projeção Espiritual", "Projeção Espiritual", 
    "Amplificação Sonora"
]
const subdobrasFogo = [
    'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade',
    "Dobra de Combustão", 
    "Dobra de Raio", "Dobra de Raio", "Dobra de Raio", "Dobra de Raio",
    'Redirecionamento de Raios', 'Redirecionamento de Raios'
]
const subdobrasTerra = [
    'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade', 'Sem Subhabilidade',
    "Dobra de Cristal", 
    "Dobra de Metal", "Dobra de Metal", "Dobra de Metal", "Dobra de Metal", 
    "Sentido Sísmico", "Sentido Sísmico", 
    "Dobra de Areia", "Dobra de Areia", "Dobra de Areia", "Dobra de Areia", "Dobra de Areia", "Dobra de Areia", "Dobra de Areia", 
    "Dobra de Lava", "Dobra de Lava"
]

const botao = document.getElementById("botao-dobras");
const mensagem = document.getElementById("mensagem");

botao.addEventListener('click', function(){
    const resultado = dobras[Math.floor(Math.random() * dobras.length)];

    if (resultado === "Todas") {
        mensagem.innerText = "PARABÉNS! Você ganhou TODAS as dobras! Você é o Avatar!";
        botao.disabled = true;
    }
    else if (resultado === "Sem Dobra") {
        mensagem.innerText = "Não foi dessa vez... você não nasceu dobrador.";
        botao.disabled = true;

    }
    else {
        mensagem.innerText = `Parabéns! Você é um dobrador de ${resultado}! Agora sorteie sua Subhabilidade`;
        botao.addEventListener('click', function(){
            if (resultado === "Água") {
                const resultado = subdobrasAgua[Math.floor(Math.random() * subdobrasAgua.length)];
                if (resultado=== 'Sem Subhabilidade') {
                    mensagem.innerText = "Infelizmente você não possui Subhabilidade";
                    botao.disabled = true;
                }
                else {
                    mensagem.innerText = `Parabéns, você possui a Subhabilidade ${resultado}!`;
                    botao.disabled = true;
                }
                }
            if (resultado === "Fogo") {
                const resultado = subdobrasFogo[Math.floor(Math.random() * subdobrasFogo.length)];
                if (resultado=== 'Sem Subhabilidade') {
                    mensagem.innerText = "Infelizmente você não possui Subhabilidade";
                    botao.disabled = true;
                }
                else {
                    mensagem.innerText = `Parabéns, você possui a Subhabilidade ${resultado}!`;
                    botao.disabled = true;
                }
                }
            if (resultado === "Ar") {
                const resultado = subdobrasAr[Math.floor(Math.random() * subdobrasAr.length)];
                if (resultado=== 'Sem Subhabilidade') {
                    mensagem.innerText = "Infelizmente você não possui Subhabilidade";
                    botao.disabled = true;
                }
                else {
                    mensagem.innerText = `Parabéns, você possui a Subhabilidade ${resultado}!`;
                    botao.disabled = true;
                }
                }
            if (resultado === "Terra") {
                const resultado = subdobrasTerra[Math.floor(Math.random() * subdobrasTerra.length)];
                if (resultado=== 'Sem Subhabilidade') {
                    mensagem.innerText = "Infelizmente você não possui Subhabilidade";
                    botao.disabled = true;
                }
                else {
                    mensagem.innerText = `Parabéns, você possui a Subhabilidade ${resultado}!`;
                    botao.disabled = true;
                }
                }
        })
    }

});

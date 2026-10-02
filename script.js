const API_KEY = "2952eb199d99e9f2612bb273852f2230";

const cidade = document.getElementById("cidade");
const buscar = document.getElementById("buscar");
const mensagem = document.getElementById("mensagem");

const nomeCidade = document.getElementById("nomeCidade");
const pais = document.getElementById("pais");
const icone = document.getElementById("icone");
const temperatura = document.getElementById("temperatura");
const descricao = document.getElementById("descricao");

const sensacao = document.getElementById("sensacao");
const minima = document.getElementById("minima");
const maxima = document.getElementById("maxima");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");
const pressao = document.getElementById("pressao");
const visibilidade = document.getElementById("visibilidade");
const nuvens = document.getElementById("nuvens");

const mapa = L.map("mapa").setView([-23.18, -45.88], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
attribution: "© OpenStreetMap"
}).addTo(mapa);

let marcador = null;

buscar.addEventListener("click", consultarTempo);

cidade.addEventListener("keydown", function(evento) {
if (evento.key === "Enter") {
consultarTempo();
}
});

async function consultarTempo() {


const nome = cidade.value.trim();

if (nome === "") {
    mensagem.textContent = "Digite o nome de uma cidade.";
    return;
}

mensagem.textContent = "Consultando...";

try {

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(nome)}&appid=${API_KEY}&units=metric&lang=pt_br`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Cidade não encontrada");
    }

    const dados = await resposta.json();

    mostrarDados(dados);
    mostrarMapa(dados);

    mensagem.textContent = "Consulta realizada com sucesso.";

} catch (erro) {

    mensagem.textContent =
        "Não foi possível encontrar essa cidade.";

    limparResultado();
}


}

function mostrarDados(dados) {

nomeCidade.textContent = dados.name;
pais.textContent = dados.sys.country;

temperatura.textContent =
    Math.round(dados.main.temp) + "°C";

descricao.textContent =
    dados.weather[0].description;

sensacao.textContent =
    Math.round(dados.main.feels_like) + "°C";

minima.textContent =
    Math.round(dados.main.temp_min) + "°C";

maxima.textContent =
    Math.round(dados.main.temp_max) + "°C";

umidade.textContent =
    dados.main.humidity + "%";

vento.textContent =
    dados.wind.speed + " m/s";

pressao.textContent =
    dados.main.pressure + " hPa";

visibilidade.textContent =
    (dados.visibility / 1000).toFixed(1) + " km";

nuvens.textContent =
    dados.clouds.all + "%";

icone.src =
    `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;

icone.alt =
    dados.weather[0].description;


}

function mostrarMapa(dados) {


const latitude = dados.coord.lat;
const longitude = dados.coord.lon;

mapa.setView([latitude, longitude], 12);

if (marcador) {
    mapa.removeLayer(marcador);
}

marcador = L.marker([latitude, longitude])
    .addTo(mapa)
    .bindPopup(
        `<strong>${dados.name}</strong><br>
        ${Math.round(dados.main.temp)}°C<br>
        ${dados.weather[0].description}`
    )
    .openPopup();

}

function limparResultado() {

nomeCidade.textContent = "-";
pais.textContent = "-";
temperatura.textContent = "-";
descricao.textContent = "-";
sensacao.textContent = "-";
minima.textContent = "-";
maxima.textContent = "-";
umidade.textContent = "-";
vento.textContent = "-";
pressao.textContent = "-";
visibilidade.textContent = "-";
nuvens.textContent = "-";

icone.src = "";

}

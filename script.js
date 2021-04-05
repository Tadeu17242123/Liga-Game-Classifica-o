var fotoJogador = [
  "https://lolg-cdn.porofessor.gg/img/champion-icons/11.6/64/40.png",
  "https://lolg-cdn.porofessor.gg/img/champion-icons/11.6/64/43.png",
  "https://lolg-cdn.porofessor.gg/img/champion-icons/11.6/64/555.png",
  "https://lolg-cdn.porofessor.gg/img/champion-icons/11.6/64/89.png"
];

var linkDoJogador = [
  "https://www.leagueofgraphs.com/summoner/champions/janna/eune/Duckyy+uwu",
  "https://www.leagueofgraphs.com/summoner/champions/karma/eune/Duckyy+uwu",
  "https://www.leagueofgraphs.com/summoner/champions/pyke/eune/Duckyy+uwu",
  "https://www.leagueofgraphs.com/summoner/champions/leona/eune/Duckyy+uwu"
];
var nomeJogador = [
  "Duckyy uwu - Janna ",
  "Duckyy uwu - Karma",
  "Duckyy uwu - Pyke",
  "Duckyy uwu - Leona"
];
var karma = {
  nome: "Karma ",

  vitorias: 5,
  empates: 5,
  derrotas: 3,
  pontos: 0
};

var pyke = {
  nome: "pyke ",

  vitorias: 7,
  empates: 1,
  derrotas: 4,
  pontos: 0
};

var janna = {
  nome: "Janna",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
};
var leona = {
  nome: "leona",
  vitorias: 9,
  empates: 4,
  derrotas: 5,
  pontos: 0
};
leona.pontos = calculaPontos(leona);
pyke.pontos = calculaPontos(pyke);
janna.pontos = calculaPontos(janna);
karma.pontos = calculaPontos(karma);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 200 + jogador.empates * 50;
  return pontos;
}

var jogadores = [janna, karma, pyke, leona];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}
for (var i = 0; i < fotoJogador.length; i++) {
  document.write(
    '<div class="catalog">' +
      '<a href="' +
      linkDoJogador[i] +
      '"' +
      'target="_blank">' +
      "<img src=" +
      fotoJogador[i] +
      ">" +
      "</a>" +
      '<span class="title">' +
      nomeJogador[i] +
      "</span>" +
      "</div>"
  );
}

$('.mostrarPerson').on('click', function() {
	var personagem = document.querySelector("#sel_per");
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/' + personagem.value + '/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura: " + data.height + "<br/>Ano Nasc.: " + data.birth_year + "<br/>Genero: " + data.gender + "<br/>";
}});
});

$('.mostrarPlanet').on('click', function() {
	var planetas = document.querySelector("#sel_pla");
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/planets/' + planetas.value + '/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contPlanet");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Rotacao: " + data.rotation_period + "<br/>Orbita: " + data.orbital_period + "<br/>Populacao: " + data.population + "<br/>";
}});
});

$('.mostrarNav').on('click', function() {
	var naves = document.querySelector("#sel_nav");
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/starships/' + naves.value + '/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
alert(erro.responseText);
},
success: function(data) {
var divPerson = document.querySelector("#contNav");
divPerson.innerHTML = "";
divPerson.innerHTML += "Nome: " + data.name + "<br/>Modelo: " + data.model + "<br/>Fabricante: " + data.manufacturer + "<br/>Comprimento: " + data.length + "<br/>Passageiros: " + data.passengers + "<br/>";
}});
});

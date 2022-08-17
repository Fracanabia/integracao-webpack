import $ from "jquery";
import Livro from "./modelo/livro";
const livro = new Livro("Dom Quixote", 108.8, 0.1);
$("body").append(`<h1>Nome: ${livro.nome}</h1>`);
$("body").append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`);

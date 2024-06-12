/* @everyone Objetivos
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar e da seta voltar, */
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0; //let pra modificar a variavel
const cartoes = document.querySelectorAll(".cartao"); //querySelectorAll => busca todos os cartões

// - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
  const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
	if (ehUltimoCartao) return; // Para validar como verdadeiro o return

  //  - passo 3 - buscar o cartão que esta selecionado e esconder
  esconderCartaoSelecionado();  

  //  - passo 4 - fazer aparecer o próximo cartão da lista 
  cartaoAtual++;
  mostrarCartao();  
});

// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão
// anterior da lista

//   - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
  	const ehPrimeiroCartao = cartaoAtual === 0;
	if (ehPrimeiroCartao) return;// Para validar como verdadeiro o return

//   - passo 3 - buscar o cartão que esta selecionado e esconder 
esconderCartaoSelecionado()

//   - passo 4 - fazer aparecer o cartão anterior da lista
	cartaoAtual--;
	mostrarCartao();
});

function mostrarCartao() {
cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado"); // Remover a classe selecionada
}
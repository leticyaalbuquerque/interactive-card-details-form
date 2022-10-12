const inputNome = document.getElementById("input-nome");
const inputNumeroCartao = document.getElementById("input-numero-cartao");
const inputMes = document.getElementById("input-mes");
const inputAno = document.getElementById("input-ano");
const inputCVV = document.getElementById("input-cvv");
const nome = document.getElementById("nome");
const numeroCartao = document.getElementById("numero-cartao");
const data = document.getElementById("data");
const cvv = document.getElementById("cvv");
const form = document.getElementById("form");
const mensagemSucesso = document.getElementById("mensagem-sucesso");
const btnConfirmar = document.getElementById("btn-confirmar");
const btnProsseguir = document.getElementById("btn-prosseguir");
const erroNome = document.getElementById("erro-nome");
const erroNumeroCartao = document.getElementById("erro-numero-cartao");
const erroData = document.getElementById("erro-data");
const erroCVV = document.getElementById("erro-cvv");

inputNome.oninput = () => {
  nome.innerText = inputNome.value;
};

function mcc(v) {
  v = v.replace(/\D/g, ""); // Permite apenas dígitos
  v = v.replace(/(\d{4})/g, "$1 "); // Coloca um ponto a cada 4 caracteres
  v = v.replace(/\.$/, ""); // Remove o ponto se estiver sobrando
  v = v.substring(0, 19); // Limita o tamanho

  return v;
}

inputNumeroCartao.oninput = () => {
  if (inputNumeroCartao.value.length > 16) {
    return (inputNumeroCartao.value = inputNumeroCartao.value.slice(0, 16));
  }
  let numeroFormatado = mcc(inputNumeroCartao.value);
  numeroCartao.innerText = numeroFormatado;
};

let mes = "";
let ano = "";
const anoAtual = new Date().getFullYear();

inputMes.oninput = () => {
  if (inputMes.value.length > 2) {
    return (inputMes.value = inputMes.value.slice(0, 2));
  }
  mes = inputMes.value;
  data.innerText = `${mes}/${ano}`;
};
inputAno.oninput = () => {
  if (inputAno.value.length > 4) {
    return (inputAno.value = inputAno.value.slice(0, 4));
  }
  ano = inputAno.value;
  data.innerText = `${mes}/${ano}`;
};

inputCVV.oninput = () => {
  if (inputCVV.value.length > 3) {
    return (inputCVV.value = inputCVV.value.slice(0, 3));
  }
  cvv.innerText = inputCVV.value;
};

btnConfirmar.addEventListener("click", (e) => {
  erroNome.classList.add("hidden");
  erroNumeroCartao.classList.add("hidden");
  erroData.classList.add("hidden");
  erroCVV.classList.add("hidden");

  if (!inputNome.value) {
    return erroNome.classList.remove("hidden");
  }
  if (!inputNumeroCartao.value || inputNumeroCartao.value.length < 16) {
    return erroNumeroCartao.classList.remove("hidden");
  }
  if (!inputMes.value || inputMes.value > 12) {
    return erroData.classList.remove("hidden");
  }
  if (
    !inputAno.value ||
    Number(inputAno.value) < anoAtual ||
    inputAno.value.length < 4
  ) {
    return erroData.classList.remove("hidden");
  }
  if (!inputCVV || inputCVV.value.length < 3) {
    return erroCVV.classList.remove("hidden");
  }

  form.classList.toggle("hidden");
  mensagemSucesso.classList.toggle("hidden")
  mensagemSucesso.classList.toggle("flex")
});

btnProsseguir.addEventListener("click", () => {
  window.location.reload()
})

//Função para limpar os inputs
function limparFormularioCep() {
  document.getElementById('endereco').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('complemento').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('estado').value = ("");
}

//Função que atualiza campo com os valores.
function completarCampo(json) {
  if (!('erro' in json)) {
    document.getElementById('endereco').value = (json.logradouro);
    document.getElementById('bairro').value = (json.bairro);
    document.getElementById('complemento').value = (json.complemento);
    document.getElementById('cidade').value = (json.localidade);
    document.getElementById('estado').value = (json.uf);
  } else {
    limparFormularioCep();
    alert('CEP não encontrado.');
  }
}

//Função para buscar o CEP
function buscarCEP(entrarCep) {
  let cep = entrarCep.replace('-', '');
  if (cep != "") {
    let validarcep = /^[0-9]{8}$/;

    if (validarcep.test(cep)) {

      document.getElementById('endereco').value = "carregando...";
      document.getElementById('bairro').value = "carregando...";
      document.getElementById('complemento').value = "carregando...";
      document.getElementById('cidade').value = "carregando...";
      document.getElementById('estado').value = "carregando...";

      let script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=completarCampo';

      document.body.appendChild(script);

    } else {
      limparFormularioCep();
      alert("CEP inválido.");
    }
  } else {
    limparFormularioCep();
  }
};